import React from 'react';
import { motion } from 'framer-motion';
import { Code, Download, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/CV_Nguyen_Anh_Dung_en.pdf';
        link.download = 'NguyenAnhDung_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className = 'page-container'>
            <motion.div
                className = "hero"
                initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition = {{duration: 0.8}}
            >
                <div className = 'hero-content'>
                    <motion.div
                        initial = {{y: 50, opacity: 0}}
                        animate = {{y: 0, opacity: 1}}
                        transition = {{delay: 0.2, duration: 0.8}}
                    >
                        <Code
                            size = {60}
                            style = {{color: 'var(--accent-primary)', marginBottom: '1rem'}}
                        />
                    </motion.div>

                    <motion.h1
                        initial = {{y: 50, opacity: 0}}
                        animate = {{y: 0, opacity: 1}}
                        transition = {{delay: 0.4, duration: 0.8}}
                    >
                        Hi, I'm Nguyen Anh Dung
                    </motion.h1>

                    <motion.p
                        className = 'tagline'
                        initial = {{y: 50, opacity: 0}}
                        animate = {{y: 0, opacity: 1}}
                        transition = {{delay: 0.6, duration: 0.8}}
                    >
                        Computer Science Student | Back-end/Front-end/Software Developer | Jr Penetration Tester
                    </motion.p>

                    <motion.div
                        className = 'hero-cta'
                        initial = {{y: 50, opacity: 0}}
                        animate = {{y: 0, opacity: 1}}
                        transition = {{delay: 0.8, duration: 0.8}}
                    >
                        <Link
                            to = "/projects"
                            className = 'btn'
                        >
                            <Rocket
                                size = {18}
                                style = {{marginRight: '0.5rem', display: 'inline-block', verticalAlign: 'middle'}}
                            />
                            View My Work
                        </Link>

                        <button
                            onClick = {handleDownloadCV}
                            className = 'btn btn-outline'
                        >
                            <Download
                                size = {18}
                                style = {{marginRight: '0.5rem', display: 'inline-block', verticalAlign: 'middle'}}
                            />
                            Download CV
                        </button>
                    </motion.div>
                </div>
            </motion.div>

            <motion.section
                initial = {{opacity: 0, y: 50}}
                animate = {{opacity: 1, y: 0}}
                transition = {{delay: 1, duration: 0.8}}
                style = {{marginTop: '4rem'}}
            >
                <h2 style={{
                    fontFamily: 'Orbitron, sans-serif',
                    fontSize: '2rem',
                    textAlign: 'center',
                    marginBottom: '2rem',
                    color: 'var(--accent-secondary)'
                }}>
                    What I Do
                </h2>

                <div className = 'grid-3'>
                    <div className = 'card'>
                        <h3 className = 'card-title'>
                            Full-Stack Development
                        </h3>

                        <p className = 'card-description'>
                            Architecting scalable web applications using the MERN stack (MongoDB, Express, React, Node.js), Java/SpringBoot and C#/.NET. I specialize in integrating real-time features with Socket.io and managing complex state with Redux Toolkit and Zustand.                        
                        </p>
                    </div>

                    <div className = 'card'>
                        <h3 className = 'card-title'>
                            Data Engineering & Analytics
                        </h3>

                        <p className = 'card-description'>
                            Designing robust data ingestion pipelines and complex APIs for high-performance academic and insurance platforms. Experienced in optimizing MS SQL Server queries and implementing data visualization tools with D3.js for domain-specific metrics.
                        </p>
                    </div>

                    <div className = 'card'>
                        <h3 className = 'card-title'>
                            Cloud & Security-First Engineering
                        </h3>

                        <p className = 'card-description'>
                            Building secure infrastructures by implementing JWT authentication, Rate-Limiting (Arcjet), and Entity Framework optimizations. Currently specializing in Cybersecurity and Cloud Computing to identify and mitigate system vulnerabilities.
                        </p>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default Home;