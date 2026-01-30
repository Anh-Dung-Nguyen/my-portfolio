import { motion } from 'framer-motion';
import { Award, BookOpen, CheckCircle, ExternalLink } from 'lucide-react';

const Certification = () => {
    const certifications = [
        {
            title: 'Pre Security',
            issuer: 'TryHackMe',
            date: 'January 2026',
            credentialId: 'THM-0AAEW2R5TX',
            link: 'https://tryhackme.com/certificate/THM-0AAEW2R5TX',
            description: 'Learn the basics of cyber security, network, common attacks and Linux'
        },
        {
            title: 'IBM Full Stack Software Developer',
            issuer: 'IBM (via Coursera)',
            date: 'September 2025',
            credentialId: 'P32TZTC4CRZN',
            link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/P32TZTC4CRZN',
            description: 'Cover topics like HTML, CSS, JavaScript, GitHub, Node.js, React, Cloud Native practices, DevOps, CI/CD, Containers, Docker, Kubernetes, OpenShift, Python programming, Databases, SQL, NoSQL, Django ORM, Bootstrap, Application Security, Microservices, Serverless computing'
        },
        {
            title: 'IBM Data Analyst',
            issuer: 'IBM (via Coursera)',
            date: 'June 2023',
            credentialId: 'CQKUZVQY2X7C',
            link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/CQKUZVQY2X7C',
            description: 'Understand the core principles of data analysis and work hands-on with a variety of data sources, project scenarios, and data analysis tools, including Excel, SQL, Relational Databases, Python, Jupyter Notebooks, and Cognos Analytics, gaining practical experience with data manipulation, data analysis, and data visualization'
        },
        {
            title: 'Python (Basic) Certificate',
            issuer: 'HackerRank',
            date: 'July 2022',
            credentialId: 'eb010666c94a',
            link: 'https://www.hackerrank.com/certificates/eb010666c94a',
            description: 'Cover topics like Scalar Types, Operators and Control Flow, Strings, Collections and Iteration, Modularity, Objects and Types and Classes'
        },
        {
            title: 'Java (Basic) Certificate',
            issuer: 'HackerRank',
            date: 'July 2022',
            credentialId: '0d29975bbcc2',
            link: 'https://www.hackerrank.com/certificates/0d29975bbcc2',
            description: 'Cover basic topics in Java language such as classes, data structures, inheritance, exception handling, etc. Expected to be proficient in either Java 7 or Java 8.'
        },
        {
            title: 'SQL (Advanced) Certificate',
            issuer: 'HackerRank',
            date: 'August 2022',
            credentialId: '3f2b0d961e5f',
            link: 'https://www.hackerrank.com/certificates/3f2b0d961e5f',
            description: 'Cover topics like query optimization, data modeling, Indexing, window functions, and pivots in SQL.'
        },
    ];

    const courses = [
        {
            title: 'Pre Security',
            platform: 'TryHackMe',
            status: 'Completed',
            topics: ['Cyber security basics', 'Networking basics and weaknesses', 'The web and common attacks', 'Linux Operating System']
        },
        {
            title: 'IBM Data Analyst',
            platform: 'Coursera',
            status: 'Completed',
            topics: ['Introduction to Data Analytics', 'Excel Basics for Data Analysis', 'Data Visualization and Dashboards with Excel and Cognos', 'Python for Data Science, AI & Development', 'Python Project for Data Science', 'Databases and SQL for Data Science with Python', 'Data Analysis with Python', 'Data Visualization with Python', 'IBM Data Analyst Capstone Project']
        },
        {
            title: 'IBM Full Stack Software Developer',
            platform: 'Coursera',
            status: 'Completed',
            topics: ['Introduction to Software Engineering', 'Introduction to Cloud Computing', 'Introduction to HTML, CSS, & JavaScript', 'Getting Started with Git and GitHub', 'Developing Front-End Apps with React', 'Developing Back-End Apps with Node.js and Express', 'Python for Data Science, AI & Development', 'Developing AI Applications with Python and Flask', 'Django Application Development with SQL and Databases', 'Introduction to Containers w/ Docker, Kubernetes & OpenShift', 'Application Development using Microservices and Serverless', 'Full Stack Application Development Capstone Project'] 
        }
    ];

    return (
        <div className="page-container">
            <motion.div
                initial = {{ opacity: 0, y: 20 }}
                animate = {{ opacity: 1, y: 0 }}
                transition = {{ duration: 0.6 }}
            >
                <h1 className = "page-title">
                    Certifications & Courses
                </h1>

                <p className = "page-subtitle">
                    My continuous learning journey and credentials
                </p>

                <motion.div
                    initial = {{ opacity: 0, y: 30 }}
                    animate = {{ opacity: 1, y: 0 }}
                    transition = {{ delay: 0.2, duration: 0.6 }}
                >
                    <h2 style={{
                        fontFamily: 'Orbitron, sans-serif',
                        fontSize: '2rem',
                        color: 'var(--accent-primary)',
                        marginBottom: '2rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <Award size = {32} />
                        Certifications
                    </h2>

                    <div className = "grid-1">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key = {index}
                                initial = {{ opacity: 0, y: 50 }}
                                animate = {{ opacity: 1, y: 0 }}
                                transition = {{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                            >
                                <div className = "card">
                                    <div style = {{ 
                                        display: 'flex', 
                                        justifyContent: 'space-between', 
                                        alignItems: 'start',
                                        marginBottom: '1rem'
                                    }}>
                                        <h3 className = "card-title">
                                            {cert.title}
                                        </h3>
                                        <CheckCircle 
                                            size = {24} 
                                            style = {{ color: 'var(--accent-primary)', flexShrink: 0 }} 
                                        />
                                    </div>
                                    
                                    <p style = {{ 
                                        color: 'var(--text-secondary)', 
                                        fontSize: '0.9rem',
                                        marginBottom: '0.5rem'
                                    }}>
                                        Issued by {cert.issuer}
                                    </p>
                                    
                                    <p style = {{ 
                                        color: 'var(--accent-secondary)', 
                                        fontSize: '0.85rem',
                                        marginBottom: '1rem'
                                    }}>
                                        {cert.date} • ID: {cert.credentialId}
                                    </p>
                                    
                                    <p className = "card-description">
                                        {cert.description}
                                    </p>
                                    
                                    <a 
                                        href = {cert.link}
                                        target = "_blank"
                                        rel = "noopener noreferrer"
                                        style = {{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            marginTop: '1rem',
                                            color: 'var(--accent-primary)',
                                            textDecoration: 'none',
                                            fontSize: '0.9rem',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter = {(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                                        onMouseLeave = {(e) => e.currentTarget.style.transform = 'translateX(0)'}
                                    >
                                        View Credential <ExternalLink size = {16} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial = {{ opacity: 0, y: 30 }}
                    animate = {{ opacity: 1, y: 0 }}
                    transition = {{ delay: 0.8, duration: 0.6 }}
                    style = {{ marginTop: '4rem' }}
                >
                    <h2 style = {{
                        fontFamily: 'Orbitron, sans-serif',
                        fontSize: '2rem',
                        color: 'var(--accent-secondary)',
                        marginBottom: '2rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <BookOpen size = {32} />
                        Online Courses
                    </h2>

                    <div className = "grid-1">
                        {courses.map((course, index) => (
                            <motion.div
                                key = {index}
                                initial = {{ opacity: 0, y: 50 }}
                                animate = {{ opacity: 1, y: 0 }}
                                transition = {{ delay: 1 + index * 0.1, duration: 0.6 }}
                            >
                                <div className="card">
                                    <div style = {{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                        <h3 
                                            className = "card-title" 
                                            style={{ fontSize: '1.2rem' }}
                                        >
                                            {course.title}
                                        </h3>

                                        <span style = {{
                                            background: course.status === 'Completed' 
                                                ? 'rgba(0, 255, 136, 0.2)' 
                                                : 'rgba(0, 212, 255, 0.2)',
                                            color: course.status === 'Completed' 
                                                ? 'var(--accent-primary)' 
                                                : 'var(--accent-secondary)',
                                            padding: '0.3rem 0.6rem',
                                            borderRadius: '4px',
                                            fontSize: '0.7rem',
                                            fontWeight: '600',
                                            whiteSpace: 'nowrap'
                                        }}>
                                            {course.status}
                                        </span>
                                    </div>
                                    
                                    <p style = {{ 
                                        color: 'var(--text-secondary)', 
                                        fontSize: '0.85rem',
                                        marginBottom: '1rem'
                                    }}>
                                        {course.platform}
                                    </p>
                                    
                                    <div className = "tags">
                                        {course.topics.map((topic, topicIndex) => (
                                            <span 
                                                key = {topicIndex} 
                                                className = "tag" 
                                                style = {{ fontSize: '0.75rem' }}
                                            >
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial = {{ opacity: 0, y: 50 }}
                    animate = {{ opacity: 1, y: 0 }}
                    transition = {{ delay: 1.5, duration: 0.6 }}
                    style = {{ 
                        textAlign: 'center', 
                        marginTop: '4rem',
                        padding: '2rem',
                        background: 'var(--gradient-2)',
                        borderRadius: '12px'
                    }}
                >
                    <BookOpen 
                        size = {48} 
                        style = {{ color: 'var(--accent-primary)', marginBottom: '1rem' }} 
                    />
                    
                    <h3 style = {{ 
                        fontFamily: 'Orbitron, sans-serif',
                        fontSize: '1.5rem',
                        marginBottom: '1rem',
                        color: 'var(--accent-primary)'
                    }}>
                        Never Stop Learning
                    </h3>

                    <p style = {{ color: 'var(--text-secondary)' }}>
                        I'm committed to continuous improvement and staying current with the latest technologies and best practices in software development.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Certification;