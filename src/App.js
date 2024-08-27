import React from 'react';
import Navbar from '../src/Components/Navbar/Navbar';
import Hero from '../src/Components/Hero/Hero'
import About from '../src/Components/About/About';
import Projects from '../src/Components/Projects/Projects';
import Skills from '../src/Components/Skills/Skills';
import Contact from '../src/Components/Contact/Contact';
import Experience from '../src/Components/Experience/Experience';
import Achievements from '../src/Components/Achievements/Achievements';

function App() {
    return (
          <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-red-400 text-white">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Experience/>
            <Achievements />
            <Contact />
            </div>
    );
}

export default App;
