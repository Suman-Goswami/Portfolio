import React from 'react';
import "./Skills.css";

const Skills = () => {
    const skills = [
        { name: 'HTML 5', image: '/images/HTML.png' },
        { name: 'CSS 3', image: '/images/CSS.png' },
        { name: 'JavaScript', image: '/images/JS.jpg' },
        { name: 'React', image: '/images/React.png' },
        { name: 'C', image: '/images/C.png' },
        { name: 'C++', image: '/images/C++.png' },
        { name: 'Bootstrap', image: '/images/Bootstrap.jpeg' },
        { name: 'UX/UI', image: '/images/UX-UI.png' },
    ];

    return (
        <div id="skills" className="py-20">
            <div className="container text-center">
                <h2 className="text-4xl font-bold mb-12">Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                            <img src={skill.image} alt={skill.name} className="w-16 h-16 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
