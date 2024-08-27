import React, { useState } from 'react';

const Experience = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const experience = [
        {
            title: 'MyRupaya Contentedge Private Limited',
            description: "Worked as a Web Developer Intern at MyRupaya.in, where I developed and optimized web applications, focusing on enhancing user experience and site performance. I gained hands-on experience with React and UX/UI.",
            img: '/images/MyRupaya2.png',
            link: '#',
        },
        {
            title: 'Programmates Pvt. Ltd.',
            description: 'Worked on web development projects using HTML, CSS, JavaScript, and Bootstrap, creating responsive and visually appealing web interfaces. Focused on optimizing user experience of client websites.',
            img: '/images/Programmates.png',
            link: 'https://drive.google.com/file/d/11Or9ta_jGkTU-72utF4F3NJVTWOh_e-5/view',
        },
        {
            title: 'SingleTap',
            description: "Served as a Web Developer Intern at SingleTap, where I contributed to the development of interactive and responsive web applications. Enhanced my skills in front-end development and learned to work efficiently in a fast-paced environment.",
            img: '/images/Singletap.png',
            link: 'https://drive.google.com/file/d/1OIML4L0GZLKVxwsdPeohT8w4wP8795gX/view',
        },
        {
            title: 'Theta Electronics',
            description: 'Worked on web development projects using HTML, CSS, and JavaScript, and made a frontend project named IJETAS.',
            img: '/images/Theta.png',
            link: 'https://drive.google.com/file/d/1t_3F88Vry1ajANxi5FXa7L9DHRVmVGvl/view?usp=drivesdk',
        },
    ];

    return (
        <div id="experience" className="flex flex-col lg:flex-row text-white py-20">
            {/* Left Side */}
            <div className="lg:w-1/3 flex flex-col items-center lg:items-start p-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">Professional Experience</h2>
                <div className="w-full">
                    {experience.map((exp, index) => (
                        <div
                            key={index}
                            className={`cursor-pointer p-4 mb-4 rounded-lg transition-transform duration-300 hover:scale-105 ${selectedIndex === index ? 'bg-white text-black' : 'bg-gray-800'}`}
                            onClick={() => setSelectedIndex(index)}
                        >
                            <h5 className="text-lg font-bold">{exp.title}</h5>
                        </div>
                    ))}
                </div>
            </div>
            {/* Right Side */}
            <div
                className={`lg:w-2/3 p-6 flex flex-col items-center lg:items-start lg:pl-12 border-l-4 ${selectedIndex === 0 ? 'border-black' : 'border-blue-700'}`}
            >
                <div className="w-full">
                    <img
                        src={experience[selectedIndex].img}
                        className="w-96 h-72 object-cover rounded-lg mb-4"
                        alt={experience[selectedIndex].title}
                    />
                    <h3 className="text-2xl font-bold mb-2">{experience[selectedIndex].title}</h3>
                    <p className="text-sm mb-4">{experience[selectedIndex].description}</p>
                    <a
                        href={experience[selectedIndex].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-blue-900 transition"
                    >
                        View Certificate
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Experience;
