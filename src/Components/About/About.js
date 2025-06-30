import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-4 sm:px-8 lg:px-16">
                <motion.div
                    ref={ref}
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Section Title with Decorative Element */}
                    <div className="flex items-center justify-center mb-16">
                        <div className="flex items-center">
                            <motion.div 
                                className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-16 sm:w-24"
                                initial={{ width: 0 }}
                                animate={{ width: inView ? '6rem' : 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            />
                            <motion.h2 
                                className="text-4xl sm:text-5xl font-bold text-center mx-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                <span className="text-white">About</span>{" "}
                                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
                            </motion.h2>
                            <motion.div 
                                className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-16 sm:w-24"
                                initial={{ width: 0 }}
                                animate={{ width: inView ? '6rem' : 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            />
                        </div>
                    </div>

                    {/* Content with Elegant Typography */}
                    <div className="relative">
                        {/* Decorative floating elements */}
                    
                        <motion.div 
                            className="absolute -bottom-10 -right-10 w-12 h-12 rounded-full bg-blue-500 blur-xl opacity-20"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: inView ? 0.2 : 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        />
                        
                        {/* Content Blocks with refined numbering */}
                        <div className="space-y-10 relative pl-14">
                            {/* Vertical line */}
                            <div className="absolute left-[34px] top-0 h-full w-0.5 bg-gradient-to-b from-cyan-500/20 to-blue-600/20"></div>
                            
                          {/* Paragraph 1 */}
<motion.div
    className="relative"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
    transition={{ delay: 0.5, duration: 0.6 }}
>
    <div className="absolute -left-14 top-1.5 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30">
        <span className="text-white font-bold text-sm"></span>
    </div>
    <p className="text-xl text-gray-300 leading-relaxed">
        <span className="text-cyan-400 font-medium">Hi, I'm Suman Goswami</span>, a full-stack web developer with a passion for building intuitive and impactful digital experiences. My journey began with a deep curiosity for technology and has grown into a mission to craft meaningful web solutions.
    </p>
</motion.div>

{/* Paragraph 2 */}
<motion.div
    className="relative"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
    transition={{ delay: 0.7, duration: 0.6 }}
>
    <div className="absolute -left-14 top-1.5 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30">
        <span className="text-white font-bold text-sm"></span>
    </div>
    <p className="text-xl text-gray-300 leading-relaxed">
        I specialize in front-end technologies such as <span className="text-cyan-400">HTML, CSS, JavaScript</span>, and frameworks like <span className="text-cyan-400">React</span>, creating responsive and user-friendly interfaces. On the backend, I work with <span className="text-cyan-400">Node.js</span>, <span className="text-cyan-400">Express.js</span>, and <span className="text-cyan-400">MongoDB</span> to develop robust and scalable server-side applications.
    </p>
</motion.div>

{/* Paragraph 3 */}
<motion.div
    className="relative"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
    transition={{ delay: 0.9, duration: 0.6 }}
>
    <div className="absolute -left-14 top-1.5 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30">
        <span className="text-white font-bold text-sm"></span>
    </div>
    <p className="text-xl text-gray-300 leading-relaxed">
        Outside of development, I enjoy learning about emerging technologies, traveling, and experimenting with new recipes. I'm always excited to explore innovative ideas and collaborate on impactful projects that push boundaries.
    </p>
</motion.div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;