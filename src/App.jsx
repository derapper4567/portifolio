import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, Moon, Sun, ChevronDown, ExternalLink, Award, Briefcase, GraduationCap, Code, TrendingUp } from 'lucide-react';

export default function Resume() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'publications', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/asha-cv.pdf';
    link.download = 'Asha_Kisonga_CV.pdf';
    link.click();
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${darkMode ? 'bg-gray-900/90 border-gray-700' : 'bg-white/80 border-gray-200'} border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl ${darkMode ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white' : 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white'}`}>
                AK
              </div>
              <span className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>Asha Melius Kisonga</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Publications', 'Education', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors ${activeSection === item.toLowerCase() ? (darkMode ? 'text-cyan-400' : 'text-blue-600') : (darkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-600')}`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={downloadCV}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${darkMode ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500'} text-white`}
              >
                <Download size={18} />
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeIn">
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${darkMode ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>
                <TrendingUp className="inline mr-2" size={16} />
                Available for Opportunities
              </div>
              <h1 className={`text-5xl md:text-6xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Hi, I'm <span className={darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600'}>Asha Kisonga</span>
              </h1>
              <p className={`text-2xl md:text-3xl font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Data Scientist
              </p>
              <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                Specializing in predictive modeling, statistical analysis, and data visualization. Passionate about extracting actionable insights from complex datasets to drive data-informed decisions.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="mailto:ashakisonga2022@gmail.com" className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-50 text-gray-900'} shadow-lg hover:shadow-xl`}>
                  <Mail size={20} />
                  <span>Email Me</span>
                </a>
                <a href="tel:0755358005" className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-50 text-gray-900'} shadow-lg hover:shadow-xl`}>
                  <Phone size={20} />
                  <span>Call Me</span>
                </a>
              </div>

              <div className="flex space-x-4 pt-4">
                <a href="https://github.com/derapper4567" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-lg transition-all ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' : 'bg-white hover:bg-gray-50 text-gray-700'} shadow-md hover:shadow-lg`}>
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/asha-kisonga-31aa592a4" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-lg transition-all ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' : 'bg-white hover:bg-gray-50 text-gray-700'} shadow-md hover:shadow-lg`}>
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className={`relative z-10 p-8 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-white'} shadow-2xl`}>
                <div className="space-y-4">
                  <div className={`flex items-center space-x-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <MapPin className={darkMode ? 'text-cyan-400' : 'text-blue-600'} />
                    <span>Dar es Salaam, Tanzania</span>
                  </div>
                  <div className={`flex items-center space-x-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <Phone className={darkMode ? 'text-cyan-400' : 'text-blue-600'} />
                    <span>0755 358 005</span>
                  </div>
                  <div className={`flex items-center space-x-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <Mail className={darkMode ? 'text-cyan-400' : 'text-blue-600'} />
                    <span>ashakisonga2022@gmail.com</span>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h3 className={`font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Quick Stats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800/50' : 'bg-blue-50'}`}>
                      <div className={`text-2xl font-bold ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>5+</div>
                      <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Major Projects</div>
                    </div>
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800/50' : 'bg-blue-50'}`}>
                      <div className={`text-2xl font-bold ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>3</div>
                      <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Awards</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`absolute inset-0 rounded-2xl blur-3xl opacity-30 ${darkMode ? 'bg-gradient-to-br from-cyan-500 to-blue-600' : 'bg-gradient-to-br from-blue-400 to-indigo-500'}`}></div>
            </div>
          </div>

          <div className="flex justify-center mt-12 animate-bounce">
            <button onClick={() => scrollToSection('about')} className={darkMode ? 'text-cyan-400' : 'text-blue-600'}>
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            About Me
          </h2>
          <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I am a resolute and adaptable graduate in Data Science, specializing in predictive modeling, statistical analysis and data visualization. Eager to apply a proven ability to extract actionable insights from complex datasets and drive data-informed decisions. I have developed the ability to work across technical and non-technical teams, understand real-world problems, and deliver effective, user-centered solutions. Passionate about continuous learning and community involvement, I thrive in environments where innovation, leadership, and purpose-driven work intersect.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <Briefcase className="inline mr-3 mb-2" />
            Experience
          </h2>
          
          <div className="space-y-8">
            {[
              {
                title: "Data Engineer",
                company: "EA Foods Limited",
                type: "Full Time",
                description: [
                  "Developing and deploying a data pipeline for the company from multiple source such as data from ERP system, FMS(Farmer Management System) and DMS, ensuring seamless data flow and efficient processing. This initiative improved data accuracy and accessibility, enabling better decision-making and operational efficiency.",
                  "Built a predictive model to forecast product demand, optimizing inventory management and reducing stockouts. The model analyzed historical sales data and market trends to provide insights that informed purchasing and production strategies, leading to improved customer satisfaction and reduced costs."
                ]
              },
              {
                title: "Software Developer",
                company: "Aakvatech Limited",
                type: "Part Time",
                description: [
                  "Developed a predictive analytics model to identify employees likely to leave the company, helping HR take proactive retention measures. I also enhanced ERPNext with domain-specific modules for managing Inland Container Depots (ICD), ensuring compliance with local regulations and improving logistics workflow efficiency.",
                  "Worked with ERP consultant team and customers during ERP rollouts gathering requirements, providing system demos, and offering user support which helped increase system adoption and reduced support tickets by ensuring users were confident and well-trained."
                ]
              },
              {
                title: "Data Scientist",
                company: "Vodacom Tanzania PLC",
                type: "Practical Training",
                description: [
                  "During my practical training in the M-Pesa Department's Lending Team, I supported operational and analytical activities across mobile lending services. I proactively learned how M-Pesa's lending products such as UJUZE operate—from credit scoring models to disbursement workflows—developing a solid understanding of mobile financial services, customer credit behavior, and compliance in a regulated fintech environment.",
                  "Developed a Sentiment Analysis project under the Customer Base Unit to categorize customer feedback from social media by department. This initiative addressed a gap where online complaints were uncategorized, enabling better visibility of departmental performance. The Big Data Analytics team later adopted the approach to support targeted service improvements."
                ]
              },
              
              {
                title: "Data Collector & Research Assistant",
                company: "Power Learning Project, PLP-Kenya",
                type: "Part Time",
                description: [
                  "Contributed to a PLP study focused on tracing and analyzing their alumni base from Tanzania. They wanted to know how many joins on their program and which reasons make most of them failing to complete course. I designed and used both traditional and digital methods including basic web scraping to gather accurate alumni data from websites, generating insights that supported strategic decisions for alumni engagement and outreach.",
                  "Assisted in drafting research findings and summaries that were crucial for shaping the PLP alumni engagement strategy. The goal was to help the program better understand its alumni base and develop targeted communication, outreach, and support programs."
                ]
              },
              
            ].map((job, index) => (
              <div key={index} className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'} shadow-lg hover:shadow-xl transition-all`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{job.title}</h3>
                    <p className={`text-lg ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>{job.company}</p>
                    <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-blue-100 text-blue-700'}`}>
                      {job.type}
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  {job.description.map((desc, i) => (
                    <p key={i} className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>• {desc}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <Code className="inline mr-3 mb-2" />
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "PackTrack - Intelligent Delivery Management",
                link: "https://youtube.com",
                description: "Developed and deployed PackTrack, a delivery management system recognized on World Post Day 2025 for innovation in postal logistics. The system tracks deliveries in real time - showing distance, time, speed, and city locations to help managers identify top-performing couriers and optimize routes. Integrated a prediction model for delivery completion times, anomaly detection using Isolation Forest and DBSCAN, and automated SMS alerts for international parcels.",
                badge: "🏆 1st Place Winner",
                tech: ["Machine Learning", "Real-time Tracking", "Anomaly Detection"]
              },
              {
                title: "Crime Hotspot Prediction & Detection",
                link: "https://github.com",
                description: "Led a team under the Girls in ICT program hosted by TCRA to develop a dual-purpose solution for Crime Hotspot Prediction and SMS Spam Detection using machine learning and geospatial analytics. The project was recognized as the top-performing solution and presented before the Minister of Information, Communication, and Technology.",
                badge: "🏆 Top Performer",
                tech: ["ML", "Geospatial Analytics", "NLP"]
              },
              {
                title: "Customer Lifetime Value",
                link: "https://github.com",
                description: "Developed a predictive model to identify and prioritize high-value customers using historical purchasing behavior. The model forecasted future spending and purchase likelihood within 90 days, uncovering patterns such as recently active customers at risk of churn and missing sales opportunities. Delivered actionable insights that informed retention and personalized marketing strategies.",
                tech: ["Predictive Analytics", "Web App", "Business Intelligence"]
              },
              {
                title: "Cervical Cancer Prediction",
                link: "https://github.com",
                description: "Developed a comprehensive healthcare platform at a regional hackathon in Nairobi, Kenya, focused on early detection and support for women at risk of cervical cancer. The project ranked among the top three solutions. Built a machine learning model for early cancer detection and a demand forecasting system for medical supplies.",
                badge: "🏆 Top 3",
                tech: ["Healthcare ML", "Forecasting", "Patient Care"]
              }
            ].map((project, index) => (
              <div key={index} className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'} shadow-lg hover:shadow-xl transition-all group`}>
                {project.badge && (
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${darkMode ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-700'}`}>
                    {project.badge}
                  </div>
                )}
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                <p className={`mb-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-blue-100 text-blue-700'}`}>
                      {t}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center space-x-2 ${darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-700'} transition-colors`}>
                  <span>View Project</span>
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Programming & Tools",
                skills: ["Python", "R", "SQL", "Shell Script", "ERP Next", "Frappe Framework"]
              },
              {
                category: "Data Analysis & Visualization",
                skills: ["Power BI", "Excel", "Data Pipelines (ETL)", "Business Intelligence"]
              },
              {
                category: "Machine Learning & AI",
                skills: ["Machine Learning", "NLP", "Deep Learning", "Predictive Modeling"]
              },
              {
                category: "Big Data & Cloud",
                skills: ["AWS (S3, SageMaker)", "Hadoop", "Spark", "Apache Airflow", "Kafka"]
              },
              {
                category: "Statistics & Mathematics",
                skills: ["Descriptive & Inferential Statistics", "Time Series Analysis", "Hypothesis Testing", "A/B Testing"]
              },
              {
                category: "Leadership & Soft Skills",
                skills: ["Project Management", "Team Leadership", "Mentorship", "Cross-Functional Collaboration"]
              }
            ].map((skillGroup, index) => (
              <div key={index} className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.skills.map((skill, i) => (
                    <div key={i} className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700/50 text-gray-300' : 'bg-gray-50 text-gray-700'}`}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            📚 Publications
          </h2>
          
          <div className="space-y-8">
            {/* eBook Publication */}
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'} shadow-lg hover:shadow-xl transition-all`}>
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                📘 eBook
              </div>
              <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Think Beyond the Numbers
              </h3>
              <p className={`mb-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Ever feel lost in the world of data? Not sure which skills to learn first or how to land your dream data job? My new eBook, 'Think Beyond the Numbers', gives you a clear roadmap for becoming a Data Scientist, Analyst, or Data Engineer.
              </p>
              <div className="space-y-2 mb-4">
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Whether you’re working in a private company, government agency, investment firm, or agritech business, Think Beyond the Numbers is designed for anyone who relies on data to make smarter decisions. This eBook will help you transform raw numbers into actionable insights, uncover hidden opportunities, and drive real impact for your organization.</p>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Don’t just work with data — see beyond it</p>
              </div>
              <a 
                href="https://derapper4567.github.io/ebook/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg transition-all ${darkMode ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500'} text-white shadow-lg hover:shadow-xl`}
              >
                <span>Download your copy today</span>
                <ExternalLink size={16} />
              </a>
            </div>

            {/* Research Paper */}
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'} shadow-lg hover:shadow-xl transition-all`}>
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'}`}>
                🔬 Research Paper
              </div>
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ml-2 ${darkMode ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-700'}`}>
                🏆 Data Science Africa (DSA) 2025 Hackathon Winner
              </div>
              <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                MAMMOAI: AI-Driven Framework for Early Breast Cancer Detection
              </h3>
              <p className={`mb-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Breast cancer remains the most common cancer among African women, contributing to high mortality largely due to late-stage diagnosis. More than 70% of cases in many African countries are detected at advanced stages, when treatment options are limited and survival rates are significantly reduced.
              </p>
              <p className={`mb-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                This study introduces MAMMOAI, an AI-driven framework designed to enhance early breast cancer detection with potential applicability to African contexts. Our multi-task deep learning model integrates convolutional neural networks (CNN) with Transformer layers to perform simultaneous risk assessment, cancer detection, staging, risk factor analysis, and differential diagnosis using mammograms.
              </p>
              <div className={`p-4 rounded-lg mb-4 ${darkMode ? 'bg-gray-700/50 border-l-4 border-cyan-500' : 'bg-blue-50 border-l-4 border-blue-600'}`}>
                <p className={`font-semibold mb-2 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>Project Highlights:</p>
                <ul className={`space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>• Healthcareproduct/system representing Tanzania, and East Africa at DSA 2025</li>
                  <li>• Addresses the critical barrier of limited African mammography datasets</li>
                  <li>• Multi-task AI model for comprehensive breast cancer diagnosis</li>
                  <li>• Potential to strengthen screening systems across Africa</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Deep Learning', 'CNN', 'Transformers', 'Medical AI', 'Healthcare'].map((tech, i) => (
                  <span key={i} className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-blue-100 text-blue-700'}`}>
                    {tech}
                  </span>
                ))}
              </div>
              <p className={`text-sm italic mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Published at America Journal of Artificial Intelligence
              </p>
              <a 
                href="https://www.sciencepg.com/article/10.11648/j.ajai.20261001.11" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg transition-all ${darkMode ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500'} text-white shadow-lg hover:shadow-xl`}
              >
                <span>Read this Article</span>
                <ExternalLink size={16} />
              </a>
            </div>
            
          </div>
        </div>
      </section>

      {/* Education & Awards */}
      <section id="education" className={`py-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <GraduationCap className="inline mr-3 mb-2" />
            Education & Awards
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Education</h3>
              <div className="space-y-6">
                <div>
                  <h4 className={`text-xl font-semibold ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>BSc. Data Science</h4>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>East Africa Statistical Training Center</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>2022 - 2025</p>
                </div>
                <div>
                  <h4 className={`text-xl font-semibold ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>Advanced Level</h4>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Ifunda Technical Secondary School</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>2020 - 2022</p>
                </div>
              </div>
            </div>

            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                <Award className="inline mr-2 mb-1" />
                Honors & Awards
              </h3>
              <div className="space-y-4">
                {[
                  { title: "Excellence in Machine Learning & Analytics", issuer: "TCRA", date: "September 2025" },
                  { title: "Excellence in Big Data Analytics & GIS", issuer: "TCRA", date: "April 2025" },
                  { title: "Excellence in Mentoring", issuer: "TeensAI", date: "March 2024" },
                  { title: "Best Overall Academic Performer", issuer: "Kitowo Secondary School", date: "Nov 2019" }
                ].map((award, index) => (
                  <div key={index} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700/50 border-l-4 border-cyan-500' : 'bg-blue-50 border-l-4 border-blue-600'}`}>
                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{award.title}</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{award.issuer} • {award.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Let's Work Together
          </h2>
          <p className={`text-xl mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            I'm always open to discussing new projects, opportunities, or partnerships.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:ashakisonga2022@gmail.com" className={`flex items-center space-x-3 px-8 py-4 rounded-xl transition-all ${darkMode ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500'} text-white shadow-lg hover:shadow-xl`}>
              <Mail size={24} />
              <span className="text-lg font-semibold">Send Email</span>
            </a>
            <a href="tel:0755358005" className={`flex items-center space-x-3 px-8 py-4 rounded-xl transition-all ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-white hover:bg-gray-50 text-gray-900'} shadow-lg hover:shadow-xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <Phone size={24} />
              <span className="text-lg font-semibold">Call Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${darkMode ? 'bg-gray-900 border-gray-800 text-gray-400' : 'bg-white border-gray-200 text-gray-600'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <p>© 2025 Asha Kisonga. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://github.com/derapper4567" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/asha-kisonga-31aa592a4" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:ashakisonga2022@gmail.com" className="hover:text-blue-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed bottom-8 right-8 p-4 rounded-full shadow-lg transition-all ${darkMode ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500'} text-white z-50`}
        >
          <ChevronDown size={24} className="transform rotate-180" />
        </button>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
}