import React, { useState } from 'react';
import { Menu, MapPin, X, Github, Linkedin, Mail, Code, Briefcase, User, Heart, BookOpen, Award, Music, Camera, Globe, Film, Trophy, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDellModalOpen, setIsDellModalOpen] = useState(false);
  const [isVakilModalOpen, setIsVakilModalOpen] = useState(false);
  
  const handleOpenDellModal = () => setIsDellModalOpen(true);
  const handleCloseDellModal = () => setIsDellModalOpen(false);
  
  const handleOpenVakilModal = () => setIsVakilModalOpen(true);
  const handleCloseVakilModal = () => setIsVakilModalOpen(false);
  

  const navigation = [
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: BookOpen },
    { id: 'hobbies', label: 'Hobbies', icon: Heart },
    { id: 'achievements', label: 'Achievements', icon: Award },
  ];

  return (
    <div className="min-h-screen bg-white text-Black relative">
      {/* Wave Animation */}
      <div className="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-bold text-xl">
              <span className="text-purple-400">Shenoi </span><span className="text-white">Thushara</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setActiveSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-300 hover:bg-purple-900'
                    }`}
                  >
                    <item.icon className="inline-block w-4 h-4 mr-2" />
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-purple-900"
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
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                    activeSection === item.id
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:bg-purple-900'
                  }`}
                >
                  <item.icon className="inline-block w-4 h-4 mr-2" />
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen pt-16 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center relative z-10">
            <img
              src="static/images/profile.jpg"
              alt="Profile"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full mx-auto mb-8 border-4 border-purple-500 shadow-xl object-cover"
              style={{ objectPosition: 'center' }}
            />
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-purple-400">Thushara R Shenoi</span>
            </h1>
            <p className="text-xl sm:text-2xl text-black-300 mb-8">
              AI/ML Engineer | Tech Enthusiast | Traveller
            </p>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/thusharashenoi" className="text-black-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/thusharashenoi/" className="text-black-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:thushara.shenoi@gmail.com" className="text-black-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>

{/* Content Sections */}
<div className="bg-white p-15 rounded-xl shadow-xl">
  {/* About Section */}
  <section id="about" className="py-20 bg-white-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Wrapper div for white rectangle and shadow */}
      <div className="bg-white rounded-lg shadow-2xl p-6">
        <div className="flex items-center space-x-8">
          {/* Left Side (Image) */}
          <div className="w-1/2">
              <img src="/static/images/Thushara.jpg" alt="Thushara" className="rounded-full shadow-lg w-60 h-680 object-cover mx-auto" />
            </div>
          {/* Right Side (Text) */}
          <div className="w-1/2">
            <div className="bg-purple-400 text-white rounded-xl p-8 shadow-xl">
              <h2 className="text-3xl font-semibold mb-4">About Me</h2>
              <p>
                I'm Thushara, a final-year student at Sikkim Manipal Institute of Technology, pursuing B.Tech in Artificial Intelligence and Data Science with a deep passion for Economics.
                I'm a creator at heart, whether it's through crafting innovative AI solutions, capturing the world through my photography, or designing visuals that tell compelling stories. I also enjoy video editing and bringing creative ideas to life through design.
                As a violinist and flautist, music adds rhythm and harmony to my life, teaching me the value of precision and creativity. Coupled with my love for travel, every experience I gather inspires my personal and professional growth.
              </p>
              <p className="text-white leading-relaxed mt-4">
                Let's build something extraordinary together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

          {/* Experience Section */}
<section id="experience" className="py-20 bg-white-100">
      <div className="bg-white rounded-lg shadow-2xl p-6">
      <h2 className="text-3xl font-semibold mb-8 text-center">Experience</h2>
    <div className="flex items-center space-x-4">
  <Briefcase className="w-8 h-8 text-purple-600" />
  <span className="text-lg font-bold">Dell Technologies</span>
</div>

    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold">SDE Intern</h3>
      <p className="text-gray-600 mb-2">Dell Technologies | May 2024 - July 2024</p>
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center space-x-2">
          <User className="w-5 h-5 text-purple-600" />
          <p className="text-black">
            <strong>Role:</strong> Behavioural Science Analyst Intern
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="w-5 h-5 text-purple-600" />
          <p className="text-black">
            <strong>Location:</strong> Bangalore
          </p>
        </div>
      </div>
      <p className="mb-4">
        <strong className="text-black">Overview:</strong>
      </p>
      <p className="mb-4">
        During my internship at Dell Technologies, I was part of the <strong>Consumer Satisfaction Team</strong>, where I contributed to developing a solution to enhance customer experience and loyalty. My primary task was to design an <strong>app-based solution</strong> capable of analyzing unseen patterns in customer feedback data and automatically generating actionable insights using <strong>time series forecasting</strong>.
      </p>
      <div className="mb-4">
        <p>
          <strong className="text-black">Skills Used:</strong>
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="bg-purple-200 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full">Data Analysis</span>
          <span className="bg-purple-200 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full">Time Series Forecasting</span>
          <span className="bg-purple-200 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full">Customer Insights</span>
          <span className="bg-purple-200 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full">App Development</span>
        </div>
      </div>
      <div className="mb-4">
        <p>
          <strong className="text-black">Key Achievements:</strong>
        </p>
        <ul className="list-disc pl-6 mt-2 text-gray-800">
          <li>Identified trends and anomalies in customer feedback data.</li>
          <li>Provided real-time alerts to proactively address issues.</li>
          <li>Enabled the research team to take swift action on potential concerns, improving customer loyalty.</li>
        </ul>
      </div>
      <p className="mb-4">
        The solution helped to detect potential concerns before they escalated, fostering stronger customer loyalty. This experience honed my skills in <strong>data-driven problem-solving</strong> and demonstrated how technology can drive meaningful impacts in customer satisfaction and retention.
      </p>
      <a
  onClick={handleOpenDellModal}
  className="text-purple-600 hover:text-purple-800 transition-colors flex items-center space-x-2 cursor-pointer"
>
  <Trophy className="w-6 h-6" />
  <span>View Certificate of Completion</span>
</a>
{isDellModalOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    onClick={handleCloseDellModal} // Close the modal if background is clicked
  >
    <div
      className="bg-white p-6 rounded-lg shadow-xl w-full max-w-4xl"
      onClick={(e) => e.stopPropagation()} // Prevent click event from bubbling up
    >
      <button
        onClick={handleCloseDellModal}
        className="absolute top-2 right-2 text-2xl text-gray-500"
      >
        &times; {/* Close button */}
      </button>
      <div className="text-center">
        <div className="max-h-[600px] overflow-y-auto">
          <img
            src='/static/images/Dell_LOC.png' // Path to Dell certificate
            alt="Certificate"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  </div>
)}
        </div>

    <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
  <Briefcase className="w-8 h-8 text-purple-600" />
  <span className="text-lg font-bold">VakilSearch</span>
</div>
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold">Data Science Intern</h3>
      <p className="text-gray-600 mb-2">VakilSearch | June 2023 - July 2023</p>
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center space-x-2">
          <User className="w-5 h-5 text-purple-600" />
          <p className="text-black">
            <strong>Role:</strong> Data Science Intern
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="w-5 h-5 text-purple-600" />
          <p className="text-black">
            <strong>Location:</strong> Remote
          </p>
        </div>
      </div>
      <p className="mb-4">
        <strong className="text-black">Overview:</strong>
      </p>
      <p className="mb-4">
            During my first internship at <strong>Vakil Search</strong>, I gained valuable exposure to corporate functions
            and the dynamics of professional environments. My role involved exploring research papers, discussing solutions,
            and embracing a continuous learning approach.
            Though challenging at times, this experience honed my ability to adapt quickly and thrive in a fast-paced setting,
            laying a strong foundation for my professional journey.
      </p>
      <div className="mb-4">
        <p>
          <strong className="text-black">Skills Used:</strong>
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="bg-purple-200 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full">Data Analysis</span>
          <span className="bg-purple-200 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full">Time Series Forecasting</span>
          <span className="bg-purple-200 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full">Customer Insights</span>
          <span className="bg-purple-200 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full">App Development</span>
        </div>
      </div>
      <div className="mb-4">
        <p>
          <strong className="text-black">Key Achievements:</strong>
        </p>
        <ul className="list-disc pl-6 mt-2 text-black-200">
            <li>Explored and analyzed multiple research papers.</li>
            <li>Collaborated with team members to brainstorm solutions.</li>
            <li>Adapted quickly to a fast-paced, remote working environment.</li>
          </ul>
      </div>
      <p className="mb-4">
            This experience taught me the value of continuous learning and helped develop my ability to adapt in dynamic
            work environments.
          </p>
          <a
  onClick={handleOpenVakilModal}
  className="text-purple-600 hover:text-purple-800 transition-colors flex items-center space-x-2 cursor-pointer"
>
  <Trophy className="w-6 h-6" />
  <span>View Certificate of Completion</span>
</a>
{isVakilModalOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    onClick={handleCloseVakilModal} // Close the modal if background is clicked
  >
    <div
      className="bg-white p-6 rounded-lg shadow-xl w-full max-w-4xl"
      onClick={(e) => e.stopPropagation()} // Prevent click event from bubbling up
    >
      <button
        onClick={handleCloseVakilModal}
        className="absolute top-2 right-2 text-2xl text-gray-500"
      >
        &times; {/* Close button */}
      </button>
      <div className="text-center">
        <div className="max-h-[600px] overflow-y-auto">
          <img
            src='/static/images/Zolvit_LOC.png' // Path to VakilSearch certificate
            alt="Certificate"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  </div>
)}
    </div>
  </div>
</section>

          {/* Skills Section */}
          <section id="skills" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-semibold mb-8 text-center">Skills</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <Code className="w-12 h-12 mx-auto text-purple-600" />
                  <p className="mt-2">AI/ML</p>
                </div>
                {/* Add other skills similarly */}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
              <div className="space-y-8">
                {/* Add project details similarly */}
              </div>
            </div>
          </section>

          {/* Hobbies Section */}
          <section id="hobbies" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-semibold mb-8 text-center">Hobbies</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <Music className="w-12 h-12 mx-auto text-purple-600" />
                  <p className="mt-2">Violin & Flute</p>
                </div>
                {/* Add other hobbies similarly */}
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section id="achievements" className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-semibold mb-8 text-center">Achievements</h2>
              <div className="space-y-8">
                {/* Add achievements similarly */}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
