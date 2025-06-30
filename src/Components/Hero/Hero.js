import React from 'react';
import './Hero.css';

const Hero = () => {
  const skills = [
    {
      title: 'Technical Expertise',
      description: 'JavaScript, React, Node.js',
      icon: '💻',
    },
    {
      title: 'Problem Solving',
      description: 'Complex algorithm design & optimization',
      icon: '🔍',
    },
    {
      title: 'Collaboration',
      description: 'Team leadership & cross-functional work',
      icon: '🤝',
    },
  ];

  return (
    <div id="hero" className="min-h-screen bg-gray-950 text-white overflow-hidden relative flex items-center px-6 md:px-12 py-16 mt-7">
      {/* Background elements */}
      <div className="absolute top-10 left-10 w-40 h-40 border-4 border-purple-600/30 rotate-45"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 border-4 border-cyan-500/30 rotate-12"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 border-4 border-blue-500/30 rotate-45"></div>

      {/* Main container */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl z-10">
        {/* Image on left */}
        <div className="w-full lg:w-2/5 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg rotate-3 shadow-2xl"></div>
            <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden border-4 border-white rotate-6 transform -translate-x-2 -translate-y-2 shadow-2xl">
              <img
                src="/images/suman.jpg"
                alt="Suman Goswami"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content on right */}
        <div className="w-full lg:w-3/5 z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            <span className="block">I'm Suman Goswami</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Software Engineer
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
            Building innovative digital solutions with expertise in web technologies.
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            I specialize in creating efficient, scalable applications that solve real-world problems and deliver exceptional user experiences.
          </p>

          <div className="flex flex-wrap mb-10 ">
            <a
              href="https://flowcv.com/resume/dt509nifvh"
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden "
            >
              <span className="relative z-10 ">View My Resume</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>

            <a
              href="#contact"
              className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-bold rounded-lg shadow-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Skills Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{skill.title}</h3>
                <p className="text-gray-300 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;