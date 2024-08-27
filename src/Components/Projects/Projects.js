import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'MyRupaya',
            description: "Myrupaya is India's first unbiased financial product review and comparison platform. They undertake deep research in the terms and conditions of financial products.",
            img: '/images/MyRupaya.png',
            link: 'https://www.myrupaya.in/',
        },
        {
            title: 'NimboNexus Technologies',
            description: 'Our services include Salesforce deployment and customization, app development, data integration, and automation. We ensure your Salesforce implementation is perfectly suited to your business requirements.',
            img: '/images/NimboNexus.png',
            link: 'https://nimbonexus.com/',
        },
        {
            title: 'Beats',
            description: "Introducing Beats, your go-to destination for a premium music listening experience similar to Spotify. Located in Jaipur, Rajasthan, India.",
            img: '/images/music.jpeg',
            link: 'https://beats-snowy.vercel.app/',
        },
        {
            title: 'E-Commerce Site',
            description: 'Explore my portfolio piece: a fully functional e-commerce website showcasing my front-end and back-end development skills.',
            img: '/images/Ecommerce.jpeg',
            link: '/',
        },
    ];

    return (
        <div id="projects" className="py-16 md:py-20">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10 md:mb-12">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 flex flex-col"
                        >
                            <img
                                src={project.img}
                                className="w-full h-40 md:h-48 lg:h-56 object-cover"
                                alt={project.title}
                            />
                            <div className="p-4 flex flex-col flex-grow">
                                <h5 className="text-lg md:text-xl font-bold text-white mb-2">{project.title}</h5>
                                <p className="text-sm md:text-base text-gray-400 flex-grow mb-4">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-4 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-blue-900 transition mt-auto"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
