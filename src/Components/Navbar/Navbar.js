import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'projects', 'skills', 'experience', 'achievements', 'contact'];
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (let i = 0; i < sections.length; i++) {
                const section = document.getElementById(sections[i]);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;
                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call on mount to set initial active section
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="fixed w-full top-0 z-50 shadow-md bg-gradient-to-r from-blue-500 via-purple-500 to-red-400 text-white">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="/" className="text-2xl font-bold flex items-center">
                    <img src="./images/logo1.png" alt="D-Cart" className="w-auto h-10 mr-2 rounded-lg" />
                </a>
                <div className="md:hidden" onClick={handleMenuToggle}>
                    {menuOpen ? (
                        <FaTimes className="text-3xl hover:cursor-pointer text-black" />
                    ) : (
                        <FaBars className="text-3xl hover:cursor-pointer text-black" />
                    )}
                </div>
                <div className="hidden md:flex md:items-center md:space-x-10">
                    <a href="#about" className={`relative px-4 py-2 text-lg font-bold ${activeSection === 'about' ? 'text-blue-700' : ''}`}>
                        About
                        <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-500 transform scale-x-0 transition-transform duration-300 ease-in-out origin-left hover:scale-x-100"></span>
                    </a>
                    <a href="#projects" className={`relative px-4 py-2 text-lg font-bold ${activeSection === 'projects' ? 'text-blue-700' : ''}`}>
                        Projects
                        <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-500 transform scale-x-0 transition-transform duration-300 ease-in-out origin-left hover:scale-x-100"></span>
                    </a>
                    <a href="#skills" className={`relative px-4 py-2 text-lg font-bold ${activeSection === 'skills' ? 'text-blue-700' : ''}`}>
                        Skills
                        <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-500 transform scale-x-0 transition-transform duration-300 ease-in-out origin-left hover:scale-x-100"></span>
                    </a>
                    <a href="#experience" className={`relative px-4 py-2 text-lg font-bold ${activeSection === 'experience' ? 'text-blue-700' : ''}`}>
                        Experience
                        <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-500 transform scale-x-0 transition-transform duration-300 ease-in-out origin-left hover:scale-x-100"></span>
                    </a>
                    <a href="#achievements" className={`relative px-4 py-2 text-lg font-bold ${activeSection === 'achievements' ? 'text-blue-700' : ''}`}>
                        Achievements
                        <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-500 transform scale-x-0 transition-transform duration-300 ease-in-out origin-left hover:scale-x-100"></span>
                    </a>
                    <a href="#contact" className={`relative px-4 py-2 text-lg font-bold ${activeSection === 'contact' ? 'text-blue-700' : ''}`}>
                        Contact
                        <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-500 transform scale-x-0 transition-transform duration-300 ease-in-out origin-left hover:scale-x-100"></span>
                    </a>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-white">
                    <a href="#about" onClick={closeMenu} className="block px-4 py-2 text-lg font-bold hover:bg-gray-700">
                        About
                    </a>
                    <a href="#projects" onClick={closeMenu} className="block px-4 py-2 text-lg font-bold hover:bg-gray-700">
                        Projects
                    </a>
                    <a href="#skills" onClick={closeMenu} className="block px-4 py-2 text-lg font-bold hover:bg-gray-700">
                        Skills
                    </a>
                    <a href="#experience" onClick={closeMenu} className="block px-4 py-2 text-lg font-bold hover:bg-gray-700">
                        Experience
                    </a>
                    <a href="#achievements" onClick={closeMenu} className="block px-4 py-2 text-lg font-bold hover:bg-gray-700">
                        Achievements
                    </a>
                    <a href="#contact" onClick={closeMenu} className="block px-4 py-2 text-lg font-bold hover:bg-gray-700">
                        Contact
                    </a>    
                </div>
            )}
        </div>
    );
};

export default Navbar;
