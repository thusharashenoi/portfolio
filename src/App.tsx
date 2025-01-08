import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Code, Briefcase, User, Heart, BookOpen, Award, Music, Camera, Globe, Film, Trophy} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const navigation = [
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: BookOpen },
    { id: 'hobbies', label: 'Hobbies', icon: Heart },
    { id: 'achievements', label: 'Achievements', icon: Award },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-bold text-xl">
              <span className="text-blue-400">Shenoi </span>Thushara
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <item.icon className="inline-block w-4 h-4 mr-2" />
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                    activeSection === item.id
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <item.icon className="inline-block w-4 h-4 mr-2" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <div className="relative z-10">
            <img
  src="/static/images/profile.jpg"
  alt="Profile"
  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full mx-auto mb-8 border-4 border-blue-500 shadow-xl object-cover"
  style={{ objectPosition: 'center' }} // Ensures the image is centered
/>

            <h1 className="text-4xl sm:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-blue-400">Thushara R Shenoi</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              AI/ML Engineer | Tech Enthusiast | Traveller
            </p>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/thusharashenoi" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/thusharashenoi/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:thushara.shenoi@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl">
          {activeSection === 'about' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6">Heyy!!!</h2>
              <p className="text-gray-300 leading-relaxed">
                I’m Thushara, a final-year student at Sikkim Manipal Institute of Technology, pursuing B.Tech in Artificial Intelligence and Data Science with a deep passion for Economics.
                I’m a creator at heart, whether it’s through crafting innovative AI solutions, capturing the world through my photography, or designing visuals that tell compelling stories. I also enjoy video editing and bringing creative ideas to life through design.
                As a violinist and flautist, music adds rhythm and harmony to my life, teaching me the value of precision and creativity. Coupled with my love for travel, every experience I gather inspires my personal and professional growth.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Let’s build something extraordinary together!
              </p>
            </div>
          )}
{activeSection === 'experience' && (
  <div>
    <h2 className="text-3xl font-bold mb-6 text-white">Experience</h2>

    {/* Dell Technologies Internship Box */}
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 p-6 rounded-lg shadow-lg mb-8">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/2048px-Dell_Logo.svg.png" 
          alt="Dell Technologies Logo"
          className="w-12 h-12"
        />
        <h3 className="text-2xl font-semibold text-white">Dell Technologies</h3>
      </div>

      {/* Role and Duration */}
      <div className="text-gray-400 mb-4">
        <p><strong className="text-white">Role:</strong> Consumer Satisfaction Team Intern</p>
        <p><strong className="text-white">Duration:</strong> May 2024 – July 2024</p>
        <p><strong className="text-white">Location:</strong> Bangalore</p>
      </div>

      {/* Description */}
      <div className="text-gray-300 mb-4">
        <p>
          During my internship at Dell Technologies, I was part of the <strong>Consumer Satisfaction Team</strong>, where I
          contributed to developing a solution to enhance customer experience and loyalty.
        </p>
        <p className="mt-2">
          My primary task was to design an <strong>app-based solution</strong> capable of analyzing unseen patterns in customer
          feedback data and automatically generating actionable insights using <strong>time series forecasting</strong>.
        </p>
      </div>

      {/* Key Achievements */}
      <div className="bg-gray-700 p-4 rounded-lg shadow-inner mb-4">
        <h4 className="text-xl font-semibold text-white">Key Achievements:</h4>
        <ul className="list-disc pl-6 mt-2 text-gray-200">
          <li>Identified trends and anomalies in customer feedback data.</li>
          <li>Provided real-time alerts to proactively address issues.</li>
          <li>Enabled the research team to take swift action on potential concerns, improving customer loyalty.</li>
        </ul>
      </div>

      {/* Further Impact and Skills */}
      <div className="text-gray-300">
        <p>
          The solution helped to detect potential concerns before they escalated, fostering stronger customer loyalty.
        </p>
        <p className="mt-2">
          This experience honed my skills in <strong>data-driven problem-solving</strong> and demonstrated how technology can
          drive meaningful impacts in customer satisfaction and retention.
        </p>
      </div>

      {/* Skills */}
      <div className="mt-4 flex items-center space-x-4">
        <span className="text-gray-500">Skills Used:</span>
        <span className="text-gray-200 font-semibold">Data Analysis | Time Series Forecasting | Customer Insights | App Development</span>
      </div>

      {/* Certificate Button */}
      <div className="mt-6">
        <a href="https://github.com/your-github-link-here" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
         target="_blank"
          rel="noopener noreferrer">
      <Trophy className="w-6 h-6" />
      <span>View Certificate of Completion</span>
    </a>
      </div>
    </div>

    {/* Vakil Search Internship Box */}
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 p-6 rounded-lg shadow-lg mb-8">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Vakilsearch-logo.svg/2560px-Vakilsearch-logo.svg.png"
          alt="Vakil Search Logo"
          className="w-12 h-12"
        />
        <h3 className="text-2xl font-semibold text-white">Vakil Search</h3>
      </div>

      {/* Role and Duration */}
      <div className="text-gray-400 mb-4">
        <p><strong className="text-white">Role:</strong> Data Science Intern</p>
        <p><strong className="text-white">Duration:</strong> June 2023 – July 2023</p>
        <p><strong className="text-white">Location:</strong> Remote</p>
      </div>

      {/* Description */}
      <div className="text-gray-300 mb-4">
        <p>
          During my first internship at <strong>Vakil Search</strong>, I gained valuable exposure to corporate functions
          and the dynamics of professional environments. My role involved exploring research papers, discussing solutions,
          and embracing a continuous learning approach.
        </p>
        <p className="mt-2">
          Though challenging at times, this experience honed my ability to adapt quickly and thrive in a fast-paced setting,
          laying a strong foundation for my professional journey.
        </p>
      </div>

      {/* Key Achievements */}
      <div className="bg-gray-700 p-4 rounded-lg shadow-inner mb-4">
        <h4 className="text-xl font-semibold text-white">Key Achievements:</h4>
        <ul className="list-disc pl-6 mt-2 text-gray-200">
          <li>Explored and analyzed multiple research papers.</li>
          <li>Collaborated with team members to brainstorm solutions.</li>
          <li>Adapted quickly to a fast-paced, remote working environment.</li>
        </ul>
      </div>

      {/* Skills */}
      <div className="text-gray-300">
        <p>
          This experience taught me the value of continuous learning and helped develop my ability to adapt in dynamic
          work environments.
        </p>
      </div>

      {/* Skills Used */}
      <div className="mt-4 flex items-center space-x-4">
        <span className="text-gray-500">Skills Used:</span>
        <span className="text-gray-200 font-semibold">Research | Collaboration | Adaptability | Problem-Solving</span>
      </div>

      {/* Certificate Button */}
      <div className="mt-6">
        <a href="https://github.com/your-github-link-here" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
         target="_blank"
          rel="noopener noreferrer">
      <Trophy className="w-6 h-6" />
      <span>View Certificate of Completion</span>
    </a>
      </div>
      </div>
    </div>
)}

          {activeSection === 'skills' && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Skills</h2>
              {/* Skills details */}
            </div>
          )}

          {activeSection === 'projects' && (
  <div>
    <h2 className="text-3xl font-bold mb-6">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Internship-related Projects */}
      <div className="bg-gray-700/50 p-6 rounded-lg relative pb-12">
        <h3 className="text-xl font-semibold mb-2">Web Application for Detecting Dark Patterns</h3>
        <p className="text-gray-300 mb-4">
          Developed a tool to identify manipulative design elements ("dark patterns") on e-commerce websites. Pre-processed text data using NLP techniques and fine-tuned a BERT model for accurate classification. Built a Random Forest classifier as a baseline for performance comparison.
        </p>
        <div className="flex space-x-2 mb-4">
          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">NLP</span>
          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">BERT</span>
          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">Random Forest</span>
        </div>
        <a href="https://github.com/your-github-link-here" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
         target="_blank"
          rel="noopener noreferrer">
      <Github className="w-6 h-6" />
      <span>View on Github</span>
    </a>
      </div>

      <div className="bg-gray-700/50 p-6 rounded-lg relative pb-12">
        <div className="absolute top-4 left-4 h-2.5 w-2.5 rounded-full bg-yellow-400 group">
          <span className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Internship
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">Customer Feedback Behavior Analysis Tool</h3>
        <p className="text-gray-300 mb-4">
          Created a prototype tool to analyze customer feedback data using time series analysis and forecasting to detect abrupt changes in review behavior. This tool enabled the team to analyze products and services, detect potential issues, and identify opportunities for improvement.
        </p>
        <div className="flex space-x-2 mb-4">
          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">Time Series Analysis</span>
          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">Forecasting</span>
          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">Data Visualization</span>
        </div>
       <a href="https://github.com/your-github-link-here" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
         target="_blank"
          rel="noopener noreferrer">
      <Github className="w-6 h-6" />
      <span>View on Github</span>
    </a>
      </div>

      {/* Non-Internship Projects */}
      <div className="bg-gray-700/50 p-6 rounded-lg relative pb-12">
        <h3 className="text-xl font-semibold mb-2">Indian Sign Language to Text Conversion App</h3>
        <p className="text-gray-300 mb-4">
          Developed an app that interprets Indian Sign Language (ISL) in real-time using custom datasets and models such as Mediapipe and YOLO. The app converts recognized signs to probable sentences through NLP, making communication easier for the hearing impaired.
        </p>
        <div className="flex space-x-2 mb-4">
          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">NLP</span>
          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">Mediapipe</span>
          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">YOLO</span>
        </div>
        <a href="https://github.com/your-github-link-here" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
         target="_blank"
          rel="noopener noreferrer">
      <Github className="w-6 h-6" />
      <span>View on Github</span>
    </a>
      </div>

      <div className="bg-gray-700/50 p-6 rounded-lg relative pb-12">
        <h3 className="text-xl font-semibold mb-2">Interactive Smart Toy (Offline Q&A)</h3>
                <div className="absolute top-4 left-4 h-2.5 w-2.5 rounded-full bg-yellow-400 group">
          <span className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Internship
          </span>
        </div>
        <p className="text-gray-300 mb-4">
          Developed a smart toy capable of offline question-answering in English and Hindi, optimized for low-resource devices like Raspberry Pi. Used TTS (Piper), voice cloning, LLaMA models, and LLM quantization for a responsive, lightweight experience.
        </p>
        <div className="flex space-x-2 mb-4">
          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">TTS</span>
          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">Raspberry Pi</span>
          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">LLaMA</span>
        </div>
        <a href="https://github.com/your-github-link-here" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
         target="_blank"
          rel="noopener noreferrer">
      <Github className="w-6 h-6" />
      <span>View on Github</span>
    </a>
      </div>
    </div>
  </div>
)}
{activeSection === 'hobbies' && (
  <div>
    <h2 className="text-3xl font-bold mb-6">Hobbies</h2>
    <div className="flex justify-between">
  {/* Left Column */}
  <div className="space-y-4">
    <a className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
      <Music className="w-6 h-6" />
      <span>Violin and Flute</span>
    </a>
    <a className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
      <Trophy className="w-6 h-6" />
      <span>Sports</span>
    </a>
     <a className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
      <BookOpen className="w-6 h-6" />
      <span>Reading</span>
    </a>
  </div>

  {/* Right Column */}
  <div className="space-y-4">
    <a className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
      <Camera className="w-6 h-6" />
      <span>Photography</span>
    </a>
    <a className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
      <Globe className="w-6 h-6" />
      <span>Travel</span>
    </a>
    <a className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
      <Film className="w-6 h-6" />
      <span>Video Editing</span>
    </a>
  </div>
</div>

    </div>
)}


        </div>
      </main>
    </div>
  );
}

export default App;
