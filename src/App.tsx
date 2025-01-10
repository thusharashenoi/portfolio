import React, { useState } from 'react';
import { Menu, MapPin, X, Pencil, Paperclip, Github, Medal, School2, Shield, ChevronLeft, ChevronRight, Videotape, Linkedin, AwardIcon, Mail, Code, Briefcase, User, Users, Clipboard, Heart, BookOpen, Award, Music, Camera, Globe, Trophy, School } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDellModalOpen, setIsDellModalOpen] = useState(false);
  const [isVakilModalOpen, setIsVakilModalOpen] = useState(false);

  const [showResume, setShowResume] = React.useState(false);

  const handleOpenDellModal = () => setIsDellModalOpen(true);
  const handleCloseDellModal = () => setIsDellModalOpen(false);
  
  const handleOpenVakilModal = () => setIsVakilModalOpen(true);
  const handleCloseVakilModal = () => setIsVakilModalOpen(false);  

  const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToPrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    return (
      <div className="relative w-full h-40">
        <div className="carousel-item w-full h-full">
          <img 
            src={images[currentIndex]} 
            alt={`photo-${currentIndex}`} 
            className="w-full h-full object-cover" 
          />
        </div>
        <button 
          className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-black p-2 rounded-full"
          onClick={goToPrevious}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black p-2 rounded-full"
          onClick={goToNext}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    );
  };

  
  const navigation = [
    { id: 'about', label: 'About', icon: User },
    {id: 'education', label: 'Education', icon:School2},
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
  <section id="hero" className="min-h-screen pt-16 flex items-center bg-cover bg-center relative" style={{ backgroundImage: 'url("/static/images/background.jpg")' }}>
    {/* Overlay to enhance text visibility */}
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center relative z-10">
      {/* Profile Image with Animation */}
      <img
        src="static/images/profile.jpg"
        alt="Profile"
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full mx-auto mb-8 border-4 border-purple-500 shadow-xl object-cover transform transition-transform duration-300 ease-in-out hover:scale-110 animate__animated animate__fadeIn animate__delay-1s"
        style={{ objectPosition: 'center' }}
      />
      <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-white">
        Hi, I'm <span className="text-purple-400">Thushara R Shenoi</span>
      </h1>
      <p className="text-xl sm:text-2xl text-gray-100 mb-8">
        AI/ML Engineer | Tech Enthusiast | Traveller
      </p>
      <div className="flex justify-center space-x-4">
        {/* Updated Icon Styles */}
        <a href="https://github.com/thusharashenoi" className="text-white hover:text-purple-400 transition-colors">
          <Github className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/thusharashenoi/" className="text-white hover:text-purple-400 transition-colors">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="mailto:thushara.shenoi@gmail.com" className="text-white hover:text-purple-400 transition-colors">
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </div>
  </section>

  <div className="bg-gray-200 p-15 rounded-xl shadow-xl border-[30px] border-black">
  {/* About Section */}
  <section id="about" className="py-20 bg-gray-200 flex items-center justify-center border-[30px] border-black">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Wrapper div for white rectangle and shadow */}
      <div className="bg-white rounded-lg shadow-2xl p-6 about-section mx-auto">
        <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src="/static/images/Thushara.jpg"
              alt="Thushara"
              className="rounded-full shadow-lg w-full max-w-xs lg:w-60 h-auto object-cover mx-auto"
            />
          </div>
          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <div className="bg-purple-400 text-white rounded-xl p-8 shadow-xl">
              <h2 className="text-3xl font-semibold mb-4 text-center lg:text-left">About Me</h2>
              <p>
                I'm Thushara, a final-year student at Sikkim Manipal Institute of Technology, pursuing B.Tech in Artificial Intelligence and Data Science with a deep passion for Economics.
                I'm a creator at heart, whether it's through crafting innovative AI solutions, capturing the world through my photography, or designing visuals that tell compelling stories. I also enjoy video editing and bringing creative ideas to life through design.
                As a violinist and flautist, music adds rhythm and harmony to my life, teaching me the value of precision and creativity. Coupled with my love for travel, every experience I gather inspires my personal and professional growth.
              </p>
              <p className="text-white leading-relaxed mt-4 text-center lg:text-left">
                Let's build something extraordinary together!
              </p>
              {/* View Resume Button */}
              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowResume(true)}
                  className="bg-white text-purple-500 px-6 py-2 rounded-lg shadow hover:bg-purple-500 hover:text-white transition"
                >
                  View Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Resume Modal */}
  {showResume && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 shadow-lg relative max-w-lg w-full">
        {/* Close Button */}
        <button
          onClick={() => setShowResume(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          &times;
        </button>
        {/* Resume Content */}
        <h2 className="text-xl font-semibold mb-4">My Resume</h2>
        <iframe
          src="static/images/Thushara_Shenoi_Resume.pdf"
          className="w-full h-96 border rounded-lg"
          title="Resume"
        ></iframe>
        {/* Download Button */}
        <div className="mt-4 flex justify-end">
          <a
            href="/static/resume.pdf"
            download
            className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-600 transition"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  )}

<section id="education" className="py-20 bg-gray-50 min-h-screen flex items-center justify-center border-[30px] border-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-800">Education</h2>
    <div className="flex space-x-16 justify-center">
      {/* 2019 */}
      <div className="w-80 bg-white border-4 border-purple-600 rounded-lg shadow-lg p-6 text-center">
        <h3 className="text-xl font-bold text-gray-700">2019</h3>
        <p className="text-sm text-gray-600 mt-2">
          Completed Grade 10<br />
          <span className="font-medium">Cambridge Public School</span><br />
          Bangalore, Karnataka<br />
          <span className="font-medium">Grade: 96%</span><br />
          <span className="text-xs">Address: Cambridge Layout, Halasuru, Bengaluru, Karnataka 560008</span>
        </p>
      </div>

      {/* 2021 */}
      <div className="w-80 bg-white border-4 border-purple-600 rounded-lg shadow-lg p-6 text-center">
        <h3 className="text-xl font-bold text-gray-700">2021</h3>
        <p className="text-sm text-gray-600 mt-2">
          Completed 12th Grade<br />
          <span className="font-medium">Bethany High School</span><br />
          Bangalore, Karnataka<br />
          <span className="font-medium">Grade: 97%</span><br />
          <span className="text-xs">Address: 6th Main, Koramangala, Bengaluru, Karnataka 560034</span>
        </p>
      </div>

      {/* 2025 */}
      <div className="w-80 bg-white border-4 border-purple-600 rounded-lg shadow-lg p-6 text-center">
        <h3 className="text-xl font-bold text-gray-700">2025</h3>
        <p className="text-sm text-gray-600 mt-2">
          Completed B.Tech in Artificial Intelligence and Data Science<br />
          <span className="font-medium">Sikkim Manipal Institute of Technology</span><br />
          Majitar, Sikkim<br />
          <span className="font-medium">Honours: AI in Health & Medicine</span><br />
          <span className="font-medium">CGPA: 9.54</span><br />
          <span className="text-xs">Address: Majitar, Rangpo, Sikkim 737136</span>
        </p>
      </div>
    </div>
  </div>
</section>

{/* Experience Section */}
<section id="experience" className="py-20 bg-gray-100 border-[30px] border-black">
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
<section id="skills" className="py-20 bg-gray-100 flex justify-center items-center min-h-screen border-[30px] border-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Skills</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12 justify-center">
      {/* Python */}
      <div className="text-center p-6 rounded-lg bg-white border-[2px] border-purple-500 shadow-sm transform transition duration-300 hover:scale-105">
        <div className="text-4xl text-yellow-500 mb-4">
          <i className="fab fa-python"></i>
        </div>
        <p className="font-medium text-lg text-gray-700">Python</p>
      </div>
      {/* Power BI */}
      <div className="text-center p-6 rounded-lg bg-white border-[2px] border-purple-500 shadow-sm transform transition duration-300 hover:scale-105">
        <div className="text-4xl text-blue-600 mb-4">
          <i className="fab fa-microsoft"></i>
        </div>
        <p className="font-medium text-lg text-gray-700">Power BI</p>
      </div>
      {/* Machine Learning */}
      <div className="text-center p-6 rounded-lg bg-white border-[2px] border-purple-500 shadow-sm transform transition duration-300 hover:scale-105">
        <div className="text-4xl text-green-500 mb-4">
          <i className="fas fa-robot"></i>
        </div>
        <p className="font-medium text-lg text-gray-700">Machine Learning</p>
      </div>
      {/* NLP */}
      <div className="text-center p-6 rounded-lg bg-white border-[2px] border-purple-500 shadow-sm transform transition duration-300 hover:scale-105">
        <div className="text-4xl text-orange-500 mb-4">
          <i className="fas fa-comment-dots"></i>
        </div>
        <p className="font-medium text-lg text-gray-700">NLP</p>
      </div>
      {/* Data Science */}
      <div className="text-center p-6 rounded-lg bg-white border-[2px] border-purple-500 shadow-sm transform transition duration-300 hover:scale-105">
        <div className="text-4xl text-teal-500 mb-4">
          <i className="fas fa-database"></i>
        </div>
        <p className="font-medium text-lg text-gray-700">Data Science</p>
      </div>
      {/* LLMs */}
      <div className="text-center p-6 rounded-lg bg-white border-[2px] border-purple-500 shadow-sm transform transition duration-300 hover:scale-105">
        <div className="text-4xl text-purple-500 mb-4">
          <i className="fas fa-cogs"></i>
        </div>
        <p className="font-medium text-lg text-gray-700">LLMs</p>
      </div>
      {/* APIs */}
      <div className="text-center p-6 rounded-lg bg-white border-[2px] border-purple-500 shadow-sm transform transition duration-300 hover:scale-105">
        <div className="text-4xl text-blue-500 mb-4">
          <i className="fas fa-plug"></i>
        </div>
        <p className="font-medium text-lg text-gray-700">API Integration</p>
      </div>
      {/* Data Analytics */}
      <div className="text-center p-6 rounded-lg bg-white border-[2px] border-purple-500 shadow-sm transform transition duration-300 hover:scale-105">
        <div className="text-4xl text-indigo-600 mb-4">
          <i className="fas fa-chart-line"></i>
        </div>
        <p className="font-medium text-lg text-gray-700">Data Analytics</p>
      </div>
      {/* TensorFlow */}
      <div className="text-center p-6 rounded-lg bg-white border-[2px] border-purple-500 shadow-sm transform transition duration-300 hover:scale-105">
        <div className="text-4xl text-orange-600 mb-4">
          <i className="fab fa-tensorflow"></i>
        </div>
        <p className="font-medium text-lg text-gray-700">TensorFlow</p>
      </div>
      {/* PyTorch */}
      <div className="text-center p-6 rounded-lg bg-white border-[2px] border-purple-500 shadow-sm transform transition duration-300 hover:scale-105">
        <div className="text-4xl text-red-500 mb-4">
          <i className="fab fa-pytorch"></i>
        </div>
        <p className="font-medium text-lg text-gray-700">PyTorch</p>
      </div>
      {/* Visualization Tools */}
      <div className="text-center p-6 rounded-lg bg-white border-[2px] border-purple-500 shadow-sm transform transition duration-300 hover:scale-105">
        <div className="text-4xl text-pink-500 mb-4">
          <i className="fas fa-chart-pie"></i>
        </div>
        <p className="font-medium text-lg text-gray-700">Visualization Tools</p>
      </div>
      {/* SQL */}
      <div className="text-center p-6 rounded-lg bg-white border-[2px] border-purple-500 shadow-sm transform transition duration-300 hover:scale-105">
        <div className="text-4xl text-blue-700 mb-4">
          <i className="fas fa-database"></i>
        </div>
        <p className="font-medium text-lg text-gray-700">SQL</p>
      </div>
    </div>
  </div>
</section>



          <section id="projects" className="py-20 bg-gray-100 border-[30px] border-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* White Box Wrapper */}
    <div className="bg-white rounded-lg shadow-lg p-8">
      {/* Section Title */}
      <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Project 1 */}
  <div className="min-w-[280px] bg-white p-4 rounded-lg shadow-lg">
    <img 
      src="/static/images/Dark Pattern.jpeg" 
      alt="Dark Patterns Detector" 
      className="rounded-lg w-full h-40 object-cover mb-4" 
    />
    <h3 className="text-xl font-bold text-black mb-2">Dark Patterns Detector</h3>
    <p className="text-gray-700 text-sm mb-4">
      A web app to detect "dark patterns" on e-commerce websites using NLP and BERT for classification.
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">NLP</span>
      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">BERT</span>
      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">Random Forest</span>
    </div>
    <a 
      href="https://github.com/your-github-link-here" 
      className="text-purple-600 hover:text-purple-800 transition-colors flex items-center space-x-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github className="w-5 h-5" />
      <span className="text-sm font-medium">View on Github</span>
    </a>
  </div>

  {/* Project 2 */}
  <div className="min-w-[280px] bg-white p-4 rounded-lg shadow-lg relative group">
  <div className="relative group">
  {/* Internship Dot */}
  <div 
    className="absolute top-2 right-2 w-3 h-3 rounded-full bg-red-500 group-hover:scale-110 transition-transform cursor-pointer"
  ></div>

  {/* Tooltip */}
  <div 
    className="absolute top-6 right-2 bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity"
  >
    Internship
  </div>
</div>

    {/* Project Image */}
    <img 
      src="/static/images/Feedback.jpeg" 
      alt="Customer Feedback Analysis Tool" 
      className="rounded-lg w-full h-40 object-cover mb-4 " 
    />
    
    {/* Project Title */}
    <h3 className="text-xl font-bold text-black mb-2">Customer Feedback Analysis Tool</h3>
    
    {/* Project Description */}
    <p className="text-gray-700 text-sm mb-4">
      Prototype for analyzing customer feedback using time series analysis and forecasting to detect trends.
    </p>
    
    {/* Tags */}
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">Time Series</span>
      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">Forecasting</span>
      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">Data Viz</span>
    </div>
    
    {/* GitHub Link */}
    <a 
      href="https://github.com/your-github-link-here" 
      className="text-purple-600 hover:text-purple-800 transition-colors flex items-center space-x-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github className="w-5 h-5" />
      <span className="text-sm font-medium">View on Github</span>
    </a>
  </div>

  {/* Project 3 */}
  <div className="min-w-[280px] bg-white p-4 rounded-lg shadow-lg">
    <img 
      src="/static/images/ISL.jpeg" 
      alt="ISL to Text Converter" 
      className="rounded-lg w-full h-40 object-cover mb-4" 
    />
    <h3 className="text-xl font-bold text-black mb-2">ISL to Text Converter</h3>
    <p className="text-gray-700 text-sm mb-4">
      Real-time Indian Sign Language to text conversion app using Mediapipe and YOLO.
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">NLP</span>
      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">Mediapipe</span>
      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">YOLO</span>
    </div>
    <a 
      href="https://github.com/your-github-link-here" 
      className="text-purple-600 hover:text-purple-800 transition-colors flex items-center space-x-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github className="w-5 h-5" />
      <span className="text-sm font-medium">View on Github</span>
    </a>
  </div>

  {/* Project 4 */}
  <div className="min-w-[280px] bg-white p-4 rounded-lg shadow-lg relative group">
  <div className="relative group">
  {/* Internship Dot */}
  <div 
    className="absolute top-2 right-2 w-3 h-3 rounded-full bg-red-500 group-hover:scale-110 transition-transform cursor-pointer"
  ></div>

  {/* Tooltip */}
  <div 
    className="absolute top-6 right-2 bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity"
  >
    Internship
  </div>
</div>

    <img 
      src="/static/images/SMITBOT.jpg" 
      alt="Interactive Smart Toy" 
      className="rounded-lg w-full h-40 object-cover mb-4" 
    />
    <h3 className="text-xl font-bold text-black mb-2">Interactive Smart Toy</h3>
    <p className="text-gray-700 text-sm mb-4">
      Built a smart toy with offline Q&A capability using Raspberry Pi, TTS, and LLaMA models.
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">TTS</span>
      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">Raspberry Pi</span>
      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">LLaMA</span>
    </div>
    <a 
      href="https://github.com/your-github-link-here" 
      className="text-purple-600 hover:text-purple-800 transition-colors flex items-center space-x-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github className="w-5 h-5" />
      <span className="text-sm font-medium">View on Github</span>
    </a>
  </div>
</div>
</div>
</div>
</section>

{/* Hobbies Section */}
<section id="hobbies" className="py-20 flex justify-center items-center border-[30px] border-black bg-gray"> {/* Added light purple background */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-semibold mb-8 text-center">Hobbies</h2>
    <div className="bg-white shadow-lg rounded-lg p-8"> {/* Wrapper for shadow and padding */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-105">
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <Paperclip className="w-6 h-6 text-white-500" />
            </div>
            <div className="bg-purple-500 p-6 -mt-10 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-center text-white">
                <Camera className="w-6 h-6 text-white mr-2" /> Photography
              </h3>
              <img
                src="/static/images/photo.jpeg"
                alt="Photography"
                className="w-full h-64 object-cover rounded-lg transition duration-500 transform hover:scale-110"
              />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-105">
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <Paperclip className="w-6 h-6 text-white-500" />
            </div>
            <div className="bg-purple-500 p-6 -mt-10 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-center text-white">
                <Globe className="w-6 h-6 text-white mr-2" /> Travelling
              </h3>
              <img
                src="/static/images/travel.jpeg"
                alt="Travel"
                className="w-full h-64 object-cover rounded-lg transition duration-500 transform hover:scale-110"
              />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-105">
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <Paperclip className="w-6 h-6 text-white-500" />
            </div>
            <div className="bg-purple-500 p-6 -mt-10 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-center text-white">
                <Pencil className="w-6 h-6 text-white mr-2" /> Sketching
              </h3>
              <img
                src="/static/images/photo13.png"
                alt="Sketch"
                className="w-full h-64 object-cover rounded-lg transition duration-500 transform hover:scale-110"
              />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-105">
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <Paperclip className="w-6 h-6 text-white-500" />
            </div>
            <div className="bg-purple-500 p-6 -mt-10 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-center text-white">
                <Music className="w-6 h-6 text-white mr-2" /> Playing Instruments
              </h3>
              <img
                src="/static/images/violin.jpeg"
                alt="Violin"
                className="w-full h-64 object-cover rounded-lg transition duration-500 transform hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </div> {/* End of wrapper div */}
  </div>
</section>




          {/* Achievements Section */}
<section id="achievements" className="py-20 bg-gray-100 border-[30px] border-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-semibold mb-8 text-center">Achievements</h2>

    {/* Achievements Section */}
    <div className="space-y-8 mb-12">
      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
        <div className="text-blue-500 text-4xl mr-4">
          <Medal className="w-12 h-12 mx-auto text-purple-600" />
        </div>
        <div>
          <h3 className="text-xl font-medium">Silver Medalist in Academics (2023)</h3>
          <p className="text-gray-600">
            [Department of Artificial Intelligence and Data Science '25]
          </p>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
        <div className="text-green-500 text-4xl mr-4">
          <Trophy className="w-12 h-12 mx-auto text-purple-600" />
        </div>
        <div>
          <h3 className="text-xl font-medium">Award for Academic Excellence (2023)</h3>
          <p className="text-gray-600">Recognized for exceptional academic performance.</p>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
        <div className="text-red-500 text-4xl mr-4">
          <Shield className="w-12 h-12 mx-auto text-purple-600" />
        </div>
        <div>
          <h3 className="text-xl font-medium">B Certificate, NCC</h3>
          <p className="text-gray-600">Certified under the National Cadet Corps program.</p>
        </div>
      </div>
    </div>

    {/* Leadership Section */}
    <div>
      <h3 className="text-2xl font-semibold mb-6 text-center">Leadership</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
          <div className="text-yellow-500 text-4xl mr-4">
            <AwardIcon className="w-12 h-12 mx-auto text-yellow-500" />
          </div>
          <div>
            <h3 className="text-xl font-medium">Sports Secretary (Student Council '24)</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Led sports initiatives and organized events.</li>
              <li>Organized Athlima'25, the largest Inter-College Sports Fest.</li>
            </ul>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
          <div className="text-purple-500 text-4xl mr-4">
            <Users className="w-12 h-12 mx-auto text-purple-500" />
          </div>
          <div>
          <h3 className="text-xl font-medium">General Secretary (Club: Innovision '24)</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Managed club activities and coordinated events..</li>
              <li>Organized TechAdrishta'2025.</li>
            </ul>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex items-center">
          <div className="text-teal-500 text-4xl mr-4">
            <Clipboard className="w-12 h-12 mx-auto text-teal-500" />
          </div>
          <div>
            <h3 className="text-xl font-medium">Class Representative (2021-2025)</h3>
            <p className="text-gray-600">Acted as a liaison between students and faculty.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<footer className="bg-gray-800 text-white text-center py-4">
  <p>Year: {new Date().getFullYear()} | All rights belong to Thushara Shenoi</p>
</footer>
        </div>
      </main>
    </div>
    
  );

}

export default App;
