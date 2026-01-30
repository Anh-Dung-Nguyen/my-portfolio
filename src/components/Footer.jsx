import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className = "footer">
            <div className = "footer-content">
                <div className = "social-links">
                    <a
                        href = "https://github.com/Anh-Dung-Nguyen"
                        target = "_blank"
                        rel = "noopener noreferrer"
                        aria-label = "GitHub"
                    >
                        <Github size = {24} />
                    </a>

                    <a
                        href = "https://linkedin.com/in/anh-dung-nguyen"
                        target = "_blank"
                        rel = "noopener noreferrer"
                        aria-label = "LinkedIn"
                    >
                        <Linkedin size = {24} />
                    </a>

                    <a
                        href = "mailto:Anh-Dung-Nguyen@insa-rennes.fr"
                        aria-label = "Email"
                    >
                        <Mail size = {24} />
                    </a>
                </div>

                <p>
                    &copy; {currentYear} Nguyen Anh Dung. All rights reserved.
                </p>

                <p style = {{fontSize: '0.8rem', marginTop: '0.5rem'}}>
                    Built with React & caffein.
                </p>
            </div>
        </footer>
    );
};

export default Footer;