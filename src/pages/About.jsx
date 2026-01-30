import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Languages, Target, User, Zap } from 'lucide-react';

const About = () => {
    const skills = {
        languages: ["Javascript", "Python", "Java", "C++", "C", "C#", "Ruby", "Ocaml", "Prolog", "Assembly", "SQL", "HTML/CSS", "R", "Dart"],
        frameworks: ["React", "Node.js", "Express", "Django", "Spring Boot", ".NET", "Swagger", "Bash", "Firebase", "Postman"],
        tools: ['Git', 'MongoDB', 'PostgreSQL']
    };

    return (
        <div className = 'page-container'>
            <motion.div
                initial = {{opacity: 0, y: 20}}
                animate = {{opacity: 1, y: 0}}
                transition = {{duration: 0.6}}
            >
                <h1 className = 'page-title'>
                    About Me
                </h1>

                <p className = 'page-subtitle'>
                    Get to know who I am and what drives me
                </p>

                <div className = 'grid-2'>
                    <motion.div
                        initial = {{ opacity: 0, x: -50 }}
                        animate = {{ opacity: 1, x: 0 }}
                        transition = {{ delay: 0.2, duration: 0.6 }}
                    >
                        <div className = "card">
                            <User 
                                size = {40} 
                                style = {{ color: 'var(--accent-primary)', marginBottom: '1rem' }} 
                            />

                            <h2 className = "card-title">
                                Who I Am
                            </h2>
                            
                            <p className = "card-description">
                                I am a Computer Engineering student at INSA Rennes, specializing in the intersection of Cybersecurity, Cloud Computing, and Full-Stack/Software Development. With a background that spans from developing critical insurance APIs in C#/.NET to architecting real-time social platforms using the MERN stack, I thrive on turning complex problems into scalable digital solutions.
                            </p>
                            <p className = "card-description">
                                My journey has led me through diverse professional environments—from the fast-paced insurance sector at PVI Insurance in Hanoi to data-driven roles at OpenCEMS in France. I don't just write code; I focus on the integrity and performance of the data behind it, whether that involves optimizing MS SQL queries for 24/7 services or building complex data ingestion pipelines for academic analysis.
                            </p>
                        </div>

                        <div className = 'card'>
                            <Languages
                                size = {40}
                                style = {{ color: 'var(--accent-primary)', marginBottom: '1rem' }}
                            />

                            <h2 className = 'card-title'>
                                Languages
                            </h2>

                            <ul>
                                <li>
                                    <p className = 'card-description'>
                                        English (Advanced)
                                    </p>
                                </li>
                                <li>
                                    <p className = 'card-description'>
                                        French (Advanced)
                                    </p>
                                </li>
                                <li>
                                    <p className = 'card-description'>
                                        Chinese (Beginner)
                                    </p>
                                </li>    
                                <li>    
                                    <p className = 'card-description'>
                                        Vietnamese (Mother tongue)
                                    </p>
                                </li>
                            </ul>    
                        </div>
                    </motion.div>

                    <motion.div
                        initial = {{ opacity: 0, x: 50 }}
                        animate = {{ opacity: 1, x: 0 }}
                        transition = {{ delay: 0.4, duration: 0.6 }}
                    >
                        <div className = "card">
                            <Heart 
                                size = {40} 
                                style = {{ color: 'var(--accent-secondary)', marginBottom: '1rem' }} 
                            />

                            <h2 className = "card-title">
                                What I Love
                            </h2>
                            
                            <p className = "card-title">
                                1. Crafting Real-Time Experiences
                            </p>
                            <p className = "card-description">
                                There is a unique thrill in building systems where data moves instantly. I love the challenge of implementing Socket.IO for seamless messaging or WebRTC for video calls, ensuring that users feel connected in real-time without latency.
                            </p>

                            <p className = "card-title">
                                2. The Logic of Data & Performance
                            </p>
                            <p className = "card-description">
                                I am passionate about the "behind-the-scenes" architecture. Whether it's optimizing complex SQL queries to ensure 24/7 service or building ingestion pipelines to transform raw data into meaningful academic metrics, I enjoy the precision required to make systems run efficiently.
                            </p>

                            <p className = "card-title">
                                3. The Cybersecurity Chess Match
                            </p>
                            <p className = "card-description">
                                Beyond just building features, I love the mindset of security-first development. Exploring how to protect applications through JWT authentication, rate-limiting, and vulnerability mitigation is what drives my current specialization at INSA Rennes.
                            </p>

                            <p className = "card-title">
                                4. Continuous Growth & Open Source
                            </p>
                            <p className = "card-description">
                                I am an avid learner, constantly expanding my toolkit through certifications — from Full Stack/Software development and Cyber Security to Data Analysis. I love the process of taking a new technology, like Tailwind CSS or Redux, and applying it to a personal project to see it come to life.
                            </p>
                        </div>
                    </motion.div>
                </div>
                
                <motion.div
                    initial = {{ opacity: 0, y: 50 }}
                    animate = {{ opacity: 1, y: 0 }}
                    transition = {{ delay: 0.6, duration: 0.6 }}
                    style = {{ marginTop: '2rem' }}
                >
                    <div className = "card">
                        <Target 
                            size = {40} 
                            style = {{ color: 'var(--accent-primary)', marginBottom: '1rem' }} 
                        />

                        <h2 className = "card-title">
                            My Goals
                        </h2>

                        <p className = "card-title">
                            Contributing to Global Engineering Teams
                        </p>
                        <p className = "card-description">
                            With a background that includes experience in both Vietnam and France , and proficiency in four languages, I aim to work within international teams. I am currently seeking a 3-month internship (June–September 2026) where I can contribute to large-scale projects and continue my growth as a versatile, adaptable engineer.
                        </p>

                        <p className = "card-title">
                            Mastering Secure Cloud Architecture
                        </p>
                        <p className = "card-description">
                            My primary academic and professional focus is to deepen my expertise in Cloud Computing and Cybersecurity. I aim to transition from building functional web applications to architecting high-performance, cloud-native systems that are "secure by design," leveraging my current Master's studies at INSA Rennes.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial = {{ opacity: 0, y: 50 }}
                    animate = {{ opacity: 1, y: 0 }}
                    transition = {{ delay: 0.8, duration: 0.6 }}
                    style = {{ marginTop: '2rem' }}
                >
                <div className = "card">
                    <Zap 
                        size = {40} 
                        style = {{ color: 'var(--accent-secondary)', marginBottom: '1rem' }} 
                    />

                    <h2 className = "card-title">
                        Technical Skills
                    </h2>
                    
                    <div style = {{ marginTop: '1.5rem' }}>
                        <h3 style = {{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>
                            Programming Languages
                        </h3>

                        <div className = "tags">
                            {skills.languages.map((skill, index) => (
                                <span 
                                    key = {index} 
                                    className = "tag"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div style = {{ marginTop: '1.5rem' }}>
                        <h3 style = {{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>
                            Frameworks & Libraries
                        </h3>

                        <div className = "tags">
                            {skills.frameworks.map((skill, index) => (
                                <span 
                                    key = {index} 
                                    className = "tag"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div style = {{ marginTop: '1.5rem' }}>
                        <h3 style = {{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>
                            Tools & Technologies
                        </h3>

                        <div className = "tags">
                            {skills.tools.map((skill, index) => (
                                <span 
                                    key = {index} 
                                    className = "tag"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default About;