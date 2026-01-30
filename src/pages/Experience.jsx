import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: 'Full Stack Development Intern',
            company: 'OpenCEMS',
            location: 'Anglet, France',
            period: 'June 2025 - September 2025',
            description: 'I built a robust data engineering pipeline to ingest DBLP data into MongoDB and developed specialized APIs to calculate complex metrics like the normalized h-index. Additionally, I designed interactive D3.js visualizations and integrated the CSO ontology to ensure fair, domain-normalized performance evaluations for researchers.',
            achievements: [
                'Architected Academic Analysis Infrastructure: Designed and implemented the REPA platform using a diverse stack including React, Node.js, and Python.',
                'Engineered Scalable Data Pipelines: Developed a specialized ingestion pipeline for DBLP data within MongoDB to handle large-scale bibliometric datasets.',
                'Developed Advanced Analytical APIs: Built backend services to calculate complex metrics such as the normalized h-index and academic age.',
                'Implemented Fair Evaluation Systems: Integrated the CSO ontology and D3.js visualizations to provide domain-normalized performance insights for researchers.'
            ]
        },
        {
            title: 'Back-end Developer Intern',
            company: 'PVI Insurance Corporation',
            location: 'Hanoi, Vietnam',
            period: 'June 2024 - September 2024',
            description: 'Using C# and ASP.NET, I built robust APIs designed for stability and high-volume traffic. My work focused on Data Optimization, where I leveraged Entity Framework and LINQ to streamline MS SQL Server queries, ensuring the system maintained 24/7 availability and peak performance for insurance evaluators.',
            achievements: [
                'Engineered High-Availability Back-end Systems: Successfully designed and implemented robust APIs using C# and ASP.NET for a critical "Online Insurance Assessment" platform.',
                'Optimized Data Performance: Improved application efficiency and data integrity by optimizing complex queries via Entity Framework and LINQ.',
                'Supported 24/7 Mission-Critical Infrastructure: Managed MS SQL Server databases to ensure continuous service and high performance for real-time insurance operations.'
            ]
        },
        {
            title: 'Project Intern',
            company: 'IMT Atlantique',
            location: 'Rennes, France',
            period: 'June 2023 - August 2023',
            description: 'Assisting professors in measuring and visualizing data for the project "Research on Mobile Phone Waves in Faraday Environments"',
            achievements: [
                'The project was completed and announced in October 2023.'
            ]
        },
    ];

    return (
        <div className="page-container">
            <motion.div
                initial = {{ opacity: 0, y: 20 }}
                animate = {{ opacity: 1, y: 0 }}
                transition = {{ duration: 0.6 }}
            >
                <h1 className = "page-title">
                    Experiences
                </h1>

                <p className = "page-subtitle">
                    My professional journey and work history
                </p>

                <div style = {{ position: 'relative' }}>
                    <div style = {{
                        position: 'absolute',
                        left: '20px',
                        top: '0',
                        bottom: '0',
                        width: '2px',
                        background: 'var(--gradient-1)',
                        opacity: '0.3'
                    }} />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key = {index}
                            initial = {{ opacity: 0, x: -50 }}
                            animate = {{ opacity: 1, x: 0 }}
                            transition = {{ delay: index * 0.2, duration: 0.6 }}
                            style = {{ position: 'relative', paddingLeft: '60px', marginBottom: '2rem' }}
                        >
                            <div style = {{
                                position: 'absolute',
                                left: '11px',
                                top: '30px',
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                background: 'var(--gradient-1)',
                                border: '3px solid var(--bg-primary)',
                                boxShadow: 'var(--shadow-glow)'
                            }} />

                            <div className = "card">
                                <div style = {{ marginBottom: '1rem' }}>
                                    <h2 className = "card-title">
                                        {exp.title}
                                    </h2>
                                    
                                    <div style = {{ 
                                        display: 'flex', 
                                        flexWrap: 'wrap', 
                                        gap: '1rem', 
                                        marginTop: '0.5rem',
                                        color: 'var(--text-secondary)',
                                        fontSize: '0.9rem'
                                    }}>
                                        <div style = {{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                            <Briefcase size = {16} />
                                            <span>
                                                {exp.company}
                                            </span>
                                        </div>
                                        <div style = {{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                            <MapPin size = {16} />
                                            <span>
                                                {exp.location}
                                            </span>
                                        </div>
                                        <div style = {{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                            <Calendar size = {16} />
                                            <span>
                                                {exp.period}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <p className = "card-description">
                                    {exp.description}
                                </p>

                                <div style = {{ marginTop: '1.5rem' }}>
                                    <h3 style = {{ 
                                        color: 'var(--accent-primary)', 
                                        fontSize: '1rem',
                                        marginBottom: '0.8rem',
                                        fontFamily: 'Orbitron, sans-serif'
                                    }}>
                                        Key Achievements
                                    </h3>

                                    <ul style = {{ 
                                        listStyle: 'none', 
                                        padding: 0,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.5rem'
                                    }}>
                                        {exp.achievements.map((achievement, achIndex) => (
                                            <li key = {achIndex} style = {{ 
                                                color: 'var(--text-primary)',
                                                paddingLeft: '1.5rem',
                                                position: 'relative'
                                            }}>
                                                <span style={{
                                                    position: 'absolute',
                                                    left: '0',
                                                    color: 'var(--accent-primary)'
                                                }}>
                                                    ▹
                                                </span>
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial = {{ opacity: 0, y: 50 }}
                    animate = {{ opacity: 1, y: 0 }}
                    transition = {{ delay: 1, duration: 0.6 }}
                    style = {{ 
                        textAlign: 'center', 
                        marginTop: '3rem',
                        padding: '2rem',
                        background: 'var(--gradient-2)',
                        borderRadius: '12px'
                    }}
                >
                    <h3 style = {{ 
                        fontFamily: 'Orbitron, sans-serif',
                        fontSize: '1.5rem',
                        marginBottom: '1rem',
                        color: 'var(--accent-primary)'
                    }}>
                        Looking for opportunities
                    </h3>

                    <p style = {{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>

                    <a 
                        href = "/contact" 
                        className = "btn"
                    >
                        Get In Touch
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Experience;