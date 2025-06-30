import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.send(
            'service_98g9dvq',    // EmailJS service ID
            'template_vqi2pvp',    // EmailJS template ID
            formData,
            'cdgmMas6H2Sb8UaL-'    // EmailJS user ID
        ).then(() => {
            setShowModal(true);
            setIsSubmitting(false);
        }).catch((error) => {
            console.error('Failed to send email:', error);
            setIsSubmitting(false);
        });
    };

    const closeModal = () => {
        setShowModal(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-indigo-900 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-10 left-10 w-40 h-40 border-4 border-purple-600/20 rotate-45"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 border-4 border-cyan-500/20 rotate-12"></div>
            <div className="absolute top-1/3 right-1/4 w-24 h-24 border-4 border-blue-500/20 rotate-45"></div>
            
            <div className="container mx-auto px-4 max-w-7xl">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center justify-center mb-4">
                        <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                        <span className="mx-3 text-cyan-400 font-medium tracking-widest">CONTACT</span>
                        <div className="h-1 w-12 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                            Get In Touch
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Have a project in mind or want to collaborate? Feel free to reach out!
                    </p>
                </motion.div>
                
 
                
                {/* Contact Form with left-aligned labels */}
                <motion.div 
                    className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mx-auto max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">Send me a message</h3>
                    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-gray-300 mb-2 text-left">Your Name</label>
                            <input 
                                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                type="text" 
                                placeholder="John Doe" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                    <div className="mb-6">
    <label htmlFor="email" className="block text-gray-300 mb-2 text-left">
        Your Email
    </label>
    <input 
        className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:bg-gray-900 focus:text-white transition-colors"
        type="email" 
        placeholder="john@example.com" 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        required 
    />
</div>

                        <div className="mb-6">
                            <label htmlFor="subject" className="block text-gray-300 mb-2 text-left">Subject</label>
                            <input 
                                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                                type="text" 
                                placeholder="Project Inquiry" 
                                name="subject" 
                                value={formData.subject} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className="mb-8">
                            <label htmlFor="message" className="block text-gray-300 mb-2 text-left">Your Message</label>
                            <textarea 
                                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-cyan-500 transition-colors min-h-[150px]"
                                placeholder="Hello Suman, I'd like to discuss a project..." 
                                name="message" 
                                value={formData.message} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className="text-center">
                            <button 
                                className={`font-bold bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 px-10 rounded-lg hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                </motion.div>
                
                {/* "Let's work together" box */}
                <motion.div 
                    className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 max-w-4xl mx-auto mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-4 text-cyan-400">
                            <FaEnvelope size={32} />
                        </div>
                        <h4 className="text-xl font-bold text-white">Let's work together!</h4>
                        <p className="text-gray-300 mt-2">
                            I'm open to new opportunities and collaborations
                        </p>
                    </div>
                </motion.div>
            </div>
            
            {/* Success Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <motion.div 
                        className="bg-gradient-to-br from-gray-900 to-indigo-900 rounded-2xl p-8 border border-cyan-500/30 max-w-md w-full mx-4"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                    >
                        <div className="text-center">
                            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                            <p className="text-gray-300 mb-8">
                                Thank you for reaching out. I'll get back to you as soon as possible.
                            </p>
                            
                            <button 
                                className="font-bold bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 px-8 rounded-lg hover:from-cyan-500 hover:to-purple-500 transition-all duration-300"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}

                           {/* Contact Information in a single row */}
                <motion.div 
                    className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-12 mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">Contact Information</h3>
                    
{/* Flex container for contact items */}
<div className="flex flex-row justify-center items-center gap-40 mb-10 flex-wrap">
    {/* Email */}
    <div className="flex flex-col items-center">
        <div className="bg-cyan-600/10 p-3 rounded-lg mb-3">
            <FaEnvelope className="text-cyan-400 text-2xl" />
        </div>
        <h4 className="text-gray-300 font-medium mb-1">Email</h4>
        <a href="mailto:sumangoswami58@gmail.com" className="text-gray-400 hover:underline text-center">
            sumangoswami58@gmail.com
        </a>
    </div>
    
    {/* Location */}
    <div className="flex flex-col items-center">
        <div className="bg-purple-600/10 p-3 rounded-lg mb-3">
            <FaMapMarkerAlt className="text-purple-400 text-2xl" />
        </div>
        <h4 className="text-gray-300 font-medium mb-1">Location</h4>
        <p className="text-gray-400 text-center">Jaipur, India</p>
    </div>
    
    {/* Phone */}
    <div className="flex flex-col items-center">
        <div className="bg-blue-600/10 p-3 rounded-lg mb-3">
            <FaPhone className="text-blue-400 text-2xl" />
        </div>
        <h4 className="text-gray-300 font-medium mb-1">Phone</h4>
        <p className="text-gray-400 text-center">+91 9950303485</p>
    </div>
</div>

                    
                    {/* Social Icons - Centered */}
                    <div className="text-center">
                        <h4 className="text-xl font-bold text-white mb-6">Follow Me</h4>
                        <div className="flex justify-center space-x-6">
                            <a href="https://github.com/Suman-Goswami" target="_blank" rel="noopener noreferrer" className="bg-gray-900 p-3 rounded-full hover:bg-cyan-600 transition-all duration-300">
                                <FaGithub size={24} className="text-white" />
                            </a>
                            <a href="https://www.linkedin.com/in/suman-goswami-101a5a306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/" target="_blank" rel="noopener noreferrer" className="bg-gray-900 p-3 rounded-full hover:bg-blue-600 transition-all duration-300">
                                <FaLinkedin size={24} className="text-white" />
                            </a>
                            <a href="https://x.com/Suman166132112?t=g3FXgnOhb_WkxMONorM0Pg&s=09" target="_blank" rel="noopener noreferrer" className="bg-gray-900 p-3 rounded-full hover:bg-cyan-400 transition-all duration-300">
                                <FaTwitter size={24} className="text-white" />
                            </a>
                            <a href="https://www.instagram.com/sumangoswami58?igsh=MW1xb3lmMHhydjAxOQ==" target="_blank" rel="noopener noreferrer" className="bg-gray-900 p-3 rounded-full hover:bg-pink-500 transition-all duration-300">
                                <FaInstagram size={24} className="text-white" />
                            </a>
                        </div>
                    </div>
                </motion.div>
        </div>
    );
};

export default Contact;