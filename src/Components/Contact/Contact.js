import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_98g9dvq',    // EmailJS service ID
            'template_vqi2pvp',    // EmailJS template ID
            formData,
            'nWsfyeCd4sLPYGK8U'    // EmailJS user ID
        ).then(() => {
            setShowModal(true);
        }).catch((error) => {
            console.error('Failed to send email:', error);
        });
    };

    const closeModal = () => {
        setShowModal(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div id="contact" className="py-20">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-4xl font-bold mb-6 mt-14">Contact Me</h2>
                <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap mb-6">
                        <div className="w-full">
                            <input className="appearance-none block w-full bg-gray-100 text-gray-800 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-6">
                        <div className="w-full">
                            <input className="appearance-none block w-full bg-gray-100 text-gray-800 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="email" placeholder="Your Email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-6">
                        <div className="w-full">
                            <input className="appearance-none block w-full bg-gray-100 text-gray-800 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-6">
                        <div className="w-full">
                            <textarea className="appearance-none block w-full bg-gray-100 text-gray-800 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" rows="4" placeholder="Your Message" name="message" value={formData.message} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="font-bold bg-blue-700 text-white py-3 px-6 rounded-md hover:bg-blue-900">
                            Send Message
                        </button>
                    </div>
                </form>

                {/* Contact Section */}
                <div className="flex flex-col items-center justify-center mt-20">
                    <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold leading-tight mt-2">
                        Get In Touch
                    </h2>
                    <div className="flex space-x-6 mt-10">
                        <a href="https://github.com/Suman-Goswami" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-110 duration-300">
                            <FaGithub size={36} className="text-white hover:text-gray-400" />
                        </a>
                        <a href="https://www.linkedin.com/in/suman-goswami-101a5a306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-110 duration-300">
                            <FaLinkedin size={36} className="text-blue-600 hover:text-blue-400" />
                        </a>
                        <a href="https://x.com/Suman166132112?t=g3FXgnOhb_WkxMONorM0Pg&s=09" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-110 duration-300">
                            <FaTwitter size={36} className="text-blue-400 hover:text-blue-300" />
                        </a>
                        <a href="https://www.instagram.com/sumangoswami58?igsh=MW1xb3lmMHhydjAxOQ==" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-110 duration-300">
                            <FaInstagram size={36} className="text-pink-500 hover:text-pink-300" />
                        </a>
                    </div>
                </div>

                {/* success message */}
                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-lg p-8 shadow-lg text-center">
                            <h3 className="text-2xl text-black font-bold mb-4">Thank You!</h3>
                            <p className="text-black">Your message has been sent successfully.</p>
                            <button className="mt-6 font-bold bg-yellow-300 text-black py-2 px-4 rounded hover:bg-yellow-400" onClick={closeModal} >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contact;
