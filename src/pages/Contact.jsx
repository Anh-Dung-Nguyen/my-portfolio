import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        
        setSubmitStatus('success');
        
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
        
        setTimeout(() => {
            setSubmitStatus('');
        }, 3000);
    };

    const contactInfo = [
        {
            icon: <Mail size = {24} />,
            title: 'Email',
            value: 'Anh-Dung.Nguyen@insa-rennes.fr',
            link: 'mailto:Anh-Dung.Nguyen@insa-rennes.fr'
        },
        {
            icon: <Phone size = {24} />,
            title: 'Phone',
            value: '+33749386893',
            link: 'tel:+33749386893'
        },
        {
            icon: <MapPin size = {24} />,
            title: 'Location',
            value: 'Rennes, France',
            link: null
        }
    ];

    const socialLinks = [
        {
            icon: <Github size = {28} />,
            name: 'GitHub',
            link: 'https://github.com/Anh-Dung-Nguyen',
            color: 'var(--accent-primary)'
        },
        {
            icon: <Linkedin size = {28} />,
            name: 'LinkedIn',
            link: 'https://linkedin.com/in/anh-dung-nguyen',
            color: 'var(--accent-secondary)'
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
                    Get In Touch
                </h1>
                
                <p className = "page-subtitle">
                    Let's connect and discuss your next project
                </p>

                <div className = "grid-2" style = {{ alignItems: 'start' }}>
                    <motion.div
                        initial = {{ opacity: 0, x: -50 }}
                        animate = {{ opacity: 1, x: 0 }}
                        transition = {{ delay: 0.2, duration: 0.6 }}
                    >
                        <div className = "card">
                            <h2 className = "card-title">
                                Send Me a Message
                            </h2>

                            <p className = "card-description">
                                Fill out the form below and I'll get back to you as soon as possible.
                            </p>

                            <form 
                                onSubmit = {handleSubmit} 
                                className = "contact-form"
                            >
                                <div className = "form-group">
                                    <label htmlFor = "name">
                                        Name *
                                    </label>
                                    <input
                                        type = "text"
                                        id = "name"
                                        name = "name"
                                        value = {formData.name}
                                        onChange = {handleChange}
                                        required
                                        placeholder = "Nguyen Anh Dung"
                                    />
                                </div>

                                <div className = "form-group">
                                    <label htmlFor = "email">
                                        Email *
                                    </label>
                                    <input
                                        type = "email"
                                        id = "email"
                                        name = "email"
                                        value = {formData.email}
                                        onChange = {handleChange}
                                        required
                                        placeholder = "Anh-Dung.Nguyen@insa-rennes.fr"
                                    />
                                </div>

                                <div className = "form-group">
                                    <label htmlFor = "subject">
                                        Subject *
                                    </label>
                                    <input
                                        type = "text"
                                        id = "subject"
                                        name = "subject"
                                        value = {formData.subject}
                                        onChange = {handleChange}
                                        required
                                        placeholder = "Project Inquiry"
                                    />
                                </div>

                                <div className = "form-group">
                                    <label htmlFor = "message">
                                        Message *
                                    </label>
                                    <textarea
                                        id = "message"
                                        name = "message"
                                        value = {formData.message}
                                        onChange = {handleChange}
                                        required
                                        placeholder = "Tell me about your project..."
                                    />
                                </div>

                                {submitStatus === 'success' && (
                                    <motion.div
                                        initial = {{ opacity: 0, y: -10 }}
                                        animate = {{ opacity: 1, y: 0 }}
                                        style = {{
                                            background: 'rgba(0, 255, 136, 0.1)',
                                            border: '1px solid var(--accent-primary)',
                                            color: 'var(--accent-primary)',
                                            padding: '1rem',
                                            borderRadius: '6px',
                                            marginBottom: '1rem',
                                            textAlign: 'center'
                                        }}
                                    >
                                        ✓ Message sent successfully! I'll get back to you soon.
                                    </motion.div>
                                )}

                                <button 
                                    type = "submit" 
                                    className = "btn" 
                                    style = {{ width: '100%' }}
                                >
                                    <Send 
                                        size = {18} 
                                        style = {{ marginRight: '0.5rem', display: 'inline-block', verticalAlign: 'middle' }} 
                                    />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    <motion.div
                        initial = {{ opacity: 0, x: 50 }}
                        animate = {{ opacity: 1, x: 0 }}
                        transition = {{ delay: 0.4, duration: 0.6 }}
                    >
                        <div className = "card">
                            <h2 className = "card-title">
                                Contact Information
                            </h2>
                            <p className = "card-description">
                                Feel free to reach out through any of these channels.
                            </p>

                            <div style = {{ marginTop: '2rem' }}>
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key = {index}
                                        initial = {{ opacity: 0, y: 20 }}
                                        animate = {{ opacity: 1, y: 0 }}
                                        transition = {{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                                        style = {{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1rem',
                                            padding: '1rem',
                                            marginBottom: '1rem',
                                            background: 'rgba(0, 255, 136, 0.05)',
                                            borderRadius: '8px',
                                            border: '1px solid rgba(0, 255, 136, 0.1)',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = 'rgba(0, 255, 136, 0.1)';
                                            e.currentTarget.style.borderColor = 'var(--accent-primary)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'rgba(0, 255, 136, 0.05)';
                                            e.currentTarget.style.borderColor = 'rgba(0, 255, 136, 0.1)';
                                        }}
                                    >
                                        <div style={{ color: 'var(--accent-primary)' }}>
                                            {info.icon}
                                        </div>
                                        
                                        <div>
                                            <p style = {{ 
                                                fontSize: '0.85rem', 
                                                color: 'var(--text-secondary)',
                                                marginBottom: '0.2rem'
                                            }}>
                                                {info.title}
                                            </p>
                                            {info.link ? (
                                                <a 
                                                    href = {info.link}
                                                    style = {{
                                                        color: 'var(--text-primary)',
                                                        textDecoration: 'none',
                                                        fontSize: '0.95rem',
                                                        transition: 'color 0.3s ease'
                                                }}
                                                onMouseEnter = {(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                                                onMouseLeave = {(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p style = {{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                                                    {info.value}
                                                </p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial = {{ opacity: 0, y: 30 }}
                            animate = {{ opacity: 1, y: 0 }}
                            transition = {{ delay: 1, duration: 0.6 }}
                            className = "card"
                            style = {{ marginTop: '2rem' }}
                        >
                            <h2 className = "card-title">
                                Connect on Social Media
                            </h2>
                            
                            <p className = "card-description">
                                Follow me on social media for updates and tech insights.
                            </p>

                            <div style = {{ 
                                display: 'flex', 
                                gap: '1rem', 
                                marginTop: '1.5rem',
                                justifyContent: 'center'
                            }}>
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key = {index}
                                        href = {social.link}
                                        target = "_blank"
                                        rel = "noopener noreferrer"
                                        initial = {{ opacity: 0, scale: 0 }}
                                        animate = {{ opacity: 1, scale: 1 }}
                                        transition = {{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                                        whileHover = {{ scale: 1.1, rotate: 5 }}
                                        whileTap = {{ scale: 0.95 }}
                                        style = {{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '60px',
                                            height: '60px',
                                            background: 'var(--gradient-2)',
                                            border: '2px solid rgba(0, 255, 136, 0.2)',
                                            borderRadius: '12px',
                                            color: social.color,
                                            transition: 'all 0.3s ease',
                                            textDecoration: 'none'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = social.color;
                                            e.currentTarget.style.boxShadow = `0 0 20px ${social.color}40`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = 'rgba(0, 255, 136, 0.2)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;