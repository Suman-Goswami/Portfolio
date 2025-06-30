import React, { useState } from 'react';

const Experience = () => {
    const [flippedIndex, setFlippedIndex] = useState(null);
    
    // Sample images encoded as data URIs to ensure they work
    const images = {
        myrupaya: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'%3E%3Cpath fill='%2365e2ff' d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13.5v9l6-4.5-6-4.5z'/%3E%3C/svg%3E",
        programmates: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'%3E%3Cpath fill='%23c084fc' d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-8 8z'/%3E%3C/svg%3E",
        singletap: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'%3E%3Cpath fill='%23fb7185' d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-2-3.5l8-4.5-8-4.5v9z'/%3E%3C/svg%3E",
        theta: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'%3E%3Cpath fill='%23fb923c' d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v8h-2V7zm3 0h2v8h-2V7z'/%3E%3C/svg%3E"
    };

    const experience = [
        {
<<<<<<< HEAD
            title: 'Junior Developer',
            company: 'MyRupaya Contentedge',
            description: "Developed and optimized web applications, focusing on enhancing user experience and site performance. Gained hands-on experience with React and UX/UI design principles.",
            period: 'July 2024 - Present',
            img: images.myrupaya,
=======
            title: 'MyRupaya Contentedge Private Limited',
            description: "Worked as a Web Developer Intern at MyRupaya.in, where I developed and optimized web applications, focusing on enhancing user experience and site performance. I gained hands-on experience with React and UX/UI.",
            img: '/images/Myrupaya2.png',
>>>>>>> 891578f93ec7912d836ed3ec7bf5f6db71bc1ae6
            link: '#',
            color: 'from-cyan-600 to-blue-600'
        },
        {
            title: 'Frontend Developer',
            company: 'Programmates Pvt. Ltd.',
            description: 'Created responsive web interfaces using HTML, CSS, JavaScript, and Bootstrap. Optimized user experience for client websites and implemented modern UI components.',
            period: 'May 2024 - July 2024',
            img: images.programmates,
            link: 'https://drive.google.com/file/d/11Or9ta_jGkTU-72utF4F3NJVTWOh_e-5/view',
            color: 'from-purple-600 to-indigo-600'
        },
        {
            title: 'Web Developer Intern',
            company: 'SingleTap',
            description: "Contributed to the development of interactive and responsive web applications. Enhanced skills in front-end development while working efficiently in a fast-paced startup environment.",
            period: 'Feb 2024 - May 2024',
            img: images.singletap,
            link: 'https://drive.google.com/file/d/1OIML4L0GZLKVxwsdPeohT8w4wP8795gX/view',
            color: 'from-pink-600 to-rose-600'
        },
        {
            title: 'Frontend Developer',
            company: 'Theta Electronics',
            description: 'Built web projects using HTML, CSS, and JavaScript. Developed a frontend project named IJETAS focused on electronics component management.',
            period: 'Aug 2023 - Sep 2023',
            img: images.theta,
            link: 'https://drive.google.com/file/d/1t_3F88Vry1ajANxi5FXa7L9DHRVmVGvl/view?usp=drivesdk',
            color: 'from-amber-600 to-orange-600'
        },
    ];

    return (
        <div id="experience" className="relative py-20 px-4 sm:px-6 lg:px-12 bg-gray-950 text-white overflow-hidden min-h-screen">
            {/* Background elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-cyan-500/20 rotate-45"></div>
            <div className="absolute top-1/2 left-1/4 w-20 h-20 border-2 border-purple-500/20 rotate-12"></div>
            <div className="absolute bottom-1/4 left-1/3 w-24 h-24 border-2 border-amber-500/20 rotate-45"></div>
            
            {/* Title */}
            <div className="text-center mb-16 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                        Professional
                    </span> Experience
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
                <p className="mt-6 max-w-2xl mx-auto text-gray-300">
                    My journey through diverse roles in the tech industry, where I've applied my skills
                    to create impactful web solutions and grow as a developer.
                </p>
            </div>
            
            {/* Experience Cards - Flipping Layout */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                {experience.map((exp, index) => (
                    <div 
                        key={index}
                        className="flip-card h-80"
                        onMouseEnter={() => setFlippedIndex(index)}
                        onMouseLeave={() => setFlippedIndex(null)}
                    >
                        <div 
                            className={`flip-card-inner rounded-2xl ${flippedIndex === index ? 'flipped' : ''}`}
                        >
                            {/* Front of Card */}
                            <div 
                                className={`flip-card-front rounded-2xl border border-gray-700 backdrop-blur-sm p-6 flex flex-col justify-between ${exp.color.replace('to', 'bg-gradient-to-r')}`}
                            >
                                <div>
                                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-3 w-16 h-16 flex items-center justify-center mb-4 border border-gray-600">
                                        <img 
                                            src={exp.img} 
                                            alt={exp.company}
                                            className="w-10 h-10 object-contain"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                                    <p className="text-cyan-200 font-medium mt-1">{exp.company}</p>
                                </div>
                                <div>
                                    <p className="text-cyan-100 font-medium">{exp.period}</p>
                                    <div className="mt-4 flex items-center text-sm text-cyan-100">
                                        <span>Hover to view details</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Back of Card */}
                            <div 
                                className={`flip-card-back rounded-2xl backdrop-blur-sm border border-gray-700 p-6 flex flex-col justify-between bg-gradient-to-br from-gray-900 to-gray-800`}
                            >
                                <div>
                                    <div className="flex items-center mb-3">
                                        <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-2 w-12 h-12 flex items-center justify-center mr-3 border border-gray-600">
                                            <img 
                                                src={exp.img} 
                                                alt={exp.company}
                                                className="w-8 h-8 object-contain"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">{exp.title}</h3>
                                            <p className="text-cyan-300 font-medium">{exp.company}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 text-sm mb-4">{exp.description}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-cyan-400 text-sm">{exp.period}</p>
                                    <a
                                        href={exp.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 group"
                                    >
                                        View Certificate
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Footer note */}
            <div className="text-center mt-16 text-gray-400 text-sm relative z-10">
                <p>Hover over cards to see details • Click certificates to verify</p>
            </div>
            
            {/* CSS Styles for flip effect */}
            <style jsx>{`
                .flip-card {
                    perspective: 1000px;
                    height: 320px;
                }
                
                .flip-card-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    transition: transform 0.6s;
                    transform-style: preserve-3d;
                }
                
                .flip-card:hover .flip-card-inner {
                    transform: rotateY(180deg);
                }
                
                .flip-card-front, .flip-card-back {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    backface-visibility: hidden;
                    padding: 24px;
                    box-sizing: border-box;
                }
                
                .flip-card-back {
                    transform: rotateY(180deg);
                }
                
                @media (max-width: 768px) {
                    .flip-card {
                        height: 280px;
                    }
                    .flip-card:hover .flip-card-inner {
                        transform: none;
                    }
                    .flip-card-inner.flipped {
                        transform: rotateY(180deg);
                    }
                }
            `}</style>
        </div>
    );
};

export default Experience;