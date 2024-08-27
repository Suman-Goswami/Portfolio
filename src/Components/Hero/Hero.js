import React from 'react';
import './Hero.css'; // Import the CSS file where keyframes are defined

const Hero = () => {
  return (
    <div id="hero" className="flex flex-col md:flex-row items-center justify-between py-20 px-10 text-white">
      <div className="w-full md:w-2/4 flex justify-center md:justify-start mb-4 md:mb-0">
        <img 
          src="/images/suman.jpg" 
          alt="Suman Goswami" 
          className="w-3/4 mt-5 ml-8 sm:w-1/2 md:w-2/4 lg:w-2/3 h-auto rounded-full shadow-2xl transform transition duration-1500 ease-out bounceIn"
        />
      </div>

      <div className="w-full md:w-2/3 text-center md:text-left slowFadeInZoom">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          Hi, I'm <span className="text-blue-700">Suman Goswami</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-light mb-12">
         As a passionate Software Engineer, I specialize in crafting efficient, scalable solutions that drive innovation. With a strong foundation in computer science and hands-on experience in Web Development, I am dedicated to turning complex problems into seamless digital experiences.
        </p>
        <div>
          <a 
            href="https://flowcv.com/resume/dt509nifvh" 
            download 
            className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-700 text-white rounded-full text-sm sm:text-lg md:text-xl font-bold shadow-lg hover:bg-blue-900 transition transform pulseButton scaleUpOnHover"
          >
            View My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
