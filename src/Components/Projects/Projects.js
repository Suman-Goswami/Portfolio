import React, { useState } from 'react';

const Projects = () => {
    const [activeCard, setActiveCard] = useState(null);
    
    const projects = [
        {
            title: 'MyRupaya',
            description: "India's first unbiased financial product review platform. Developed and optimized web applications with React, focusing on UX and site performance.",
            img: '/images/MyRupaya.png',
            link: 'https://www.myrupaya.in/',
            tags: ['React', 'Node.js', 'MongoDB'],
            accent: 'bg-gradient-to-r from-blue-600 to-cyan-500'
        },
        {
            title: 'NimboNexus',
            description: 'Salesforce deployment and customization services. Created responsive interfaces and ensured implementations suited business requirements.',
            img: '/images/NimboNexus.png',
            link: 'https://nimbonexus.com/',
            tags: ['React', 'Node.js', 'MongoDB'],
            accent: 'bg-gradient-to-r from-purple-600 to-indigo-500'
        },
        {
            title: 'Beats',
            description: "A premium music streaming experience similar to Spotify. Built the frontend with React and implemented audio playback features.",
            img: '/images/music.jpeg',
            link: 'https://beats-snowy.vercel.app/',
            tags: ['React', 'Audio API', 'Firebase'],
            accent: 'bg-gradient-to-r from-pink-600 to-rose-500'
        },
        {
            title: 'E-Commerce',
            description: 'A fully functional e-commerce website showcasing frontend and backend skills with cart functionality and payment integration.',
            img: '/images/Ecommerce.jpeg',
            link: '/',
            tags: ['React', 'Node.js', 'Stripe'],
            accent: 'bg-gradient-to-r from-amber-600 to-orange-500'
        },
    ];

    return (
        <div id="projects" className="relative py-24 px-4 sm:px-6 lg:px-12 bg-gray-950 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-cyan-500/20 rotate-45"></div>
            
            {/* Title */}
            <div className="text-center mb-16 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                        Featured
                    </span> Projects
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto mt-4">
                    Explore my latest projects showcasing modern web development techniques and innovative solutions
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
            </div>
            
            {/* Projects Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                {projects.map((project, index) => (
                    <div 
                        key={index}
                        className="relative group"
                        onMouseEnter={() => setActiveCard(index)}
                        onMouseLeave={() => setActiveCard(null)}
                    >
                        {/* Project Card */}
                        <div className={`h-full rounded-2xl overflow-hidden border border-gray-800 transition-all duration-300 group-hover:border-cyan-500/30 ${activeCard === index ? 'ring-1 ring-cyan-500/50' : ''}`}>
                            <div className="p-6 bg-gray-900/50 backdrop-blur-sm">
                                {/* Card Header */}
                                <div className="flex items-start gap-4 mb-5">
                                    <div className="flex-shrink-0">
                                        <div className="bg-gray-800 border border-gray-700 rounded-xl w-14 h-14 flex items-center justify-center overflow-hidden">
                                            {/* Use actual image instead of initial */}
                                            <img 
                                                src={project.img} 
                                                alt={project.title} 
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className={`${project.accent} w-24 h-1.5 rounded-full mb-2`}></div>
                                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                    </div>
                                </div>
                                
                                {/* Card Content */}
                                <div className="mb-6">
                                    <p className="text-gray-400 text-sm mb-4 transition-all duration-300 group-hover:text-gray-300">
                                        {project.description}
                                    </p>
                                    
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span 
                                                key={tagIndex} 
                                                className="px-3 py-1 bg-gray-800/50 text-cyan-300 text-xs rounded-full border border-cyan-500/30 transition-all duration-300 group-hover:bg-cyan-500/10 group-hover:border-cyan-400/50"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Card Footer */}
                                <div className="flex justify-between items-center border-t border-gray-800 pt-5">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                                    >
                                        View Project
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                    <div className="flex items-center">
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-2 border-gray-900"></div>
                                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-gray-900"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Card Background - Now with actual image */}
                            <div className="absolute inset-0 -z-10 opacity-10 group-hover:opacity-20 transition-opacity">
                                <img 
                                    src={project.img} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-900/30"></div>
                            </div>
                        </div>
                        
                        {/* Floating accent */}
                        <div className={`absolute -top-2 -right-2 w-16 h-16 rounded-full ${project.accent} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}></div>
                    </div>
                ))}
            </div>
            
            {/* Floating Info */}
            <div className="max-w-3xl mx-auto mt-16 text-center px-4 py-6 rounded-xl backdrop-blur-sm bg-gray-800/30 border border-gray-700 relative z-10">
                <h3 className="text-lg font-bold text-cyan-300 mb-2">Want to see more?</h3>
                <p className="text-gray-300 text-sm">Check out my GitHub repository for additional projects and code samples</p>
                <a 
                    href="https://github.com/Suman-Goswami" 
                    className="mt-3 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm"
                >
                    Visit GitHub Profile
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Projects;