import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Eagle',
            description: 'A full-stack e-commerce website with user authentication, product management, shopping cart, and payment integration.',
            technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux ToolKit/Thunk', 'Paypal', 'Cloudinary', 'Vercel', 'JWT Authentication'],
            github: 'https://github.com/Anh-Dung-Nguyen/eagle',
            demo: 'https://eagle-67e4-ml71e4d23-anh-dung-nguyens-projects.vercel.app/',
            status: 'Completed'
        },
        {
            title: 'SwiftTalk',
            description: 'Real-time messaging application with user authentication and sending messages using Socket.IO',
            technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'JWT Authentication', 'Rate-Limiting (Arcjet)', 'Cloudinary', 'Resend', 'Zustand', 'TailwindCSS'],
            github: 'https://github.com/Anh-Dung-Nguyen/SwiftTalk',
            demo: 'https://swifttalk-dqchk.sevalla.app',
            status: 'Completed'
        },
        {
            title: 'LinkUp',
            description: 'Real-time chat, video calling and sharing screen',
            technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'TanStack Query', 'Custom Hooks', 'JWT', 'Tailwind CSS'],
            github: 'https://github.com/Anh-Dung-Nguyen/LinkUp',
            demo: 'https://linkup-rug0.onrender.com',
            status: 'Completed'
        },
        {
            title: 'TodoApp',
            description: 'A cross-platform mobile application designed to help you efficiently manage your daily tasks',
            technologies: ['Flutter', 'Dart'],
            github: 'https://github.com/Anh-Dung-Nguyen/TodoApp',
            demo: 'https://github.com/Anh-Dung-Nguyen/TodoApp',
            status: 'Completed'
        }
    ];

    return (
        <div className = "page-container">
            <motion.div
                initial = {{ opacity: 0, y: 20 }}
                animate = {{ opacity: 1, y: 0 }}
                transition = {{ duration: 0.6 }}
            >
                <h1 className = "page-title">
                    Projects
                </h1>

                <p className = "page-subtitle">
                    A showcase of my recent work and creations
                </p>

                <div className = "grid-1">
                    {projects.map((project, index) => (
                        <motion.div
                            key = {index}
                            initial = {{ opacity: 0, y: 50 }}
                            animate = {{ opacity: 1, y: 0 }}
                            transition = {{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <div className = "card">
                                <div style = {{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                                    <h2 className = "card-title">
                                        {project.title}
                                    </h2>
                                    <span 
                                        style = {{
                                        background: project.status === 'Completed' 
                                            ? 'rgba(0, 255, 136, 0.2)' 
                                            : 'rgba(0, 212, 255, 0.2)',
                                        color: project.status === 'Completed' 
                                            ? 'var(--accent-primary)' 
                                            : 'var(--accent-secondary)',
                                        padding: '0.3rem 0.8rem',
                                        borderRadius: '4px',
                                        fontSize: '0.75rem',
                                        fontWeight: '600'
                                        }}
                                    >
                                        {project.status}
                                    </span>
                                </div>
                                
                                <p className = "card-description">
                                    {project.description}
                                </p>
                                
                                <div className = "tags">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span 
                                            key = {techIndex} 
                                            className = "tag"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                <div style = {{ 
                                    display: 'flex', 
                                    gap: '1rem', 
                                    marginTop: '1.5rem',
                                    paddingTop: '1rem',
                                    borderTop: '1px solid rgba(0, 255, 136, 0.1)'
                                }}>
                                    <a 
                                        href = {project.github} 
                                        target = "_blank" 
                                        rel = "noopener noreferrer"
                                        style = {{
                                            color: 'var(--text-secondary)',
                                            textDecoration: 'none',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            transition: 'color 0.3s ease'
                                        }}
                                        onMouseEnter = {(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                                        onMouseLeave = {(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                                    >
                                        <Github size = {18} />
                                        <span>
                                            Code
                                        </span>
                                    </a>
                                    <a 
                                        href = {project.demo} 
                                        target = "_blank" 
                                        rel = "noopener noreferrer"
                                        style = {{
                                            color: 'var(--text-secondary)',
                                            textDecoration: 'none',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            transition: 'color 0.3s ease'
                                        }}
                                        onMouseEnter = {(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                                        onMouseLeave = {(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                                    >
                                        <ExternalLink size = {18} />
                                        <span>
                                            Live Demo
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial = {{ opacity: 0, y: 50 }}
                    animate = {{ opacity: 1, y: 0 }}
                    transition = {{ delay: 0.8, duration: 0.6 }}
                    style = {{ 
                        textAlign: 'center', 
                        marginTop: '3rem',
                        padding: '2rem',
                        background: 'var(--gradient-2)',
                        borderRadius: '12px'
                    }}
                >
                    <Code2 
                        size={48} 
                        style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }} 
                    />

                    <h3 style = {{ 
                        fontFamily: 'Orbitron, sans-serif',
                        fontSize: '1.5rem',
                        marginBottom: '1rem',
                        color: 'var(--accent-primary)'
                    }}>
                        Want to see more?
                    </h3>

                    <p style = {{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                        Check out my GitHub for more projects and contributions
                    </p>

                    <a 
                        href = "https://github.com/Anh-Dung-Nguyen" 
                        target = "_blank" 
                        rel = "noopener noreferrer"
                        className = "btn"
                    >
                        Visit My GitHub
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Projects;