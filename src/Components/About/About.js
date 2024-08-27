import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Animation triggers only once
        threshold: 0.6, // Trigger animation when 20% of the section is in view
    });

    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4 sm:px-8 lg:px-16 flex flex-col items-center text-white">
                
                {/* About Me Section */}
                <motion.div
                    ref={ref}
                    className="w-full lg:w-10/12 text-center lg:text-left mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
<h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-8">
    About Me
</h2>
<p className="text-xl sm:text-xl md:text-2xl font-light mb-6">
    Hi, I'm Suman Goswami, a web developer passionate about creating seamless and interactive web experiences. My journey in web development has been driven by a fascination with technology and a desire to build engaging digital solutions.
</p>
<p className="text-xl sm:text-xl md:text-2xl font-light mb-6">
    I specialize in front-end technologies like HTML, CSS, and JavaScript, along with frameworks like React. My focus is on crafting responsive and user-friendly websites that make a positive impact.
</p>
<p className="text-xl sm:text-xl md:text-2xl font-light">
    When I’m not coding, I enjoy exploring new tech trends, traveling, and experimenting with different recipes. I’m always eager to take on new challenges and collaborate on exciting projects.
</p>



                </motion.div>
            </div>
        </section>
    );
};

export default About;
