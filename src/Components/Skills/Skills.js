import React from 'react';
import './Skills.css';

const Skills = () => {
const skills = [
    { name: 'HTML 5', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS 3', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Bootstrap', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'C', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'Java', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'UX/UI', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Figma', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Wix', image: 'https://cdn.worldvectorlogo.com/logos/wix.svg' },
];

    return (
        <div id="skills" className="relative py-24 bg-gray-950 overflow-hidden">
            {/* Geometric background elements like in hero section */}
            <div className="absolute top-10 left-10 w-40 h-40 border-4 border-purple-600/20 rotate-45"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 border-4 border-cyan-500/20 rotate-12"></div>
            <div className="absolute top-1/3 right-1/4 w-24 h-24 border-4 border-blue-500/20 rotate-45"></div>
            
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center mb-4">
                        <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                        <span className="mx-3 text-cyan-400 font-medium tracking-widest">EXPERTISE</span>
                        <div className="h-1 w-12 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                            Technical Skills
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Expertise across the full development lifecycle, delivering innovative solutions
                    </p>
                </div>
                
                {/* Skills grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {skills.map((skill, index) => (
                        <div 
                            key={index} 
                            className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700 transition-all duration-300 hover:border-cyan-500/50 group hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                {/* Actual image instead of placeholder */}
                                <img 
                                    src={skill.image} 
                                    alt={skill.name} 
                                    className="w-12 h-12 object-contain"
                                />
                            </div>
                            <h3 className="text-center text-sm font-medium text-gray-200 group-hover:text-cyan-300 transition-colors duration-300">
                                {skill.name}
                            </h3>
                        </div>
                    ))}
                </div>
                
                {/* Skill categories */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 transition-all duration-300 hover:border-cyan-500/50 group hover:-translate-y-1">
                        <div className="flex items-center mb-5">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-600/20 to-cyan-600/10 flex items-center justify-center mr-4">
                                <span className="text-2xl text-cyan-400">💻</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">Frontend Development</h3>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Creating responsive, accessible, and performant user interfaces
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {['HTML', 'CSS', 'React', 'Bootstrap'].map((tech, i) => (
                                <span 
                                    key={i} 
                                    className="px-3 py-1 bg-gray-900/50 text-cyan-300 text-sm rounded-full border border-gray-700 group-hover:border-cyan-500/50 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 transition-all duration-300 hover:border-purple-500/50 group hover:-translate-y-1">
                        <div className="flex items-center mb-5">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600/20 to-purple-600/10 flex items-center justify-center mr-4">
                                <span className="text-2xl text-purple-400">⌨️</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">Programming</h3>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Solving complex problems with efficient algorithms
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {['C', 'C++', 'JavaScript', 'Java', 'Algorithms'].map((tech, i) => (
                                <span 
                                    key={i} 
                                    className="px-3 py-1 bg-gray-900/50 text-purple-300 text-sm rounded-full border border-gray-700 group-hover:border-purple-500/50 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 transition-all duration-300 hover:border-cyan-500/50 group hover:-translate-y-1">
                        <div className="flex items-center mb-5">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-600/20 to-purple-600/20 flex items-center justify-center mr-4">
                                <span className="text-2xl text-cyan-400">🎨</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">Design & Tools</h3>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Crafting intuitive user experiences with professional tools
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {['UX/UI', 'Figma', 'Git', 'Bootstrap', 'Responsive'].map((tech, i) => (
                                <span 
                                    key={i} 
                                    className="px-3 py-1 bg-gray-900/50 text-cyan-300 text-sm rounded-full border border-gray-700 group-hover:border-purple-500/50 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;