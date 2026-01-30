import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className = "navbar">
            <div className = "nav-container">
                <Link
                    to = "/"
                    className = "nav-logo"
                >
                    {'<Cumau2807 />'}
                </Link>

                <ul className = "nav-links">
                    <li>
                        <Link
                            to = "/"
                            className = {location.pathname === '/' ? 'active' : ''}
                        >
                            HOME
                        </Link>
                    </li>

                    <li>
                        <Link
                            to = "/about"
                            className = {location.pathname === '/about' ? 'active' : ''}
                        >
                            ABOUT
                        </Link>
                    </li>

                    <li>
                        <Link
                            to = "/projects"
                            className = {location.pathname === '/projects' ? 'active' : ''}
                        >
                            PROJECTS
                        </Link>
                    </li>

                    <li>
                        <Link
                            to = "/experiences"
                            className = {location.pathname === '/experiences' ? 'active' : ''}
                        >
                            EXPERIENCES
                        </Link>
                    </li>

                    <li>
                        <Link
                            to = "/certifications"
                            className = {location.pathname === '/certifications' ? 'active' : ''}
                        >
                            CERTIFICATIONS
                        </Link>
                    </li>

                    <li>
                        <Link
                            to = "/contact"
                            className = {location.pathname === '/contact' ? 'active' : ''}
                        >
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;