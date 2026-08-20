import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import scrollToTop from "../../utils/scrollToTop";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-main">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo" onClick={scrollToTop}>
                            <img src="/icon.webp" alt="Lumen Vitae" />
                        </Link>

                        <p>
                            Authentic Sri Lankan spices, carefully sourced
                            for markets around the world.
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <span>EXPLORE</span>

                            <Link to="/" onClick={scrollToTop}>Home</Link>
                            <Link to="/products" onClick={scrollToTop}>Our Spices</Link>
                            <Link to="/about" onClick={scrollToTop}>About Us</Link>
                            <Link to="/partner" onClick={scrollToTop}>Partner</Link>
                        </div>

                        <div className="footer-column">
                            <span>CONNECT</span>

                            <a href="mailto:hello@yourbrand.com">
                                Email Us
                            </a>

                            <a href="#" target="_blank" rel="noreferrer">
                                LinkedIn
                            </a>

                            <a href="#" target="_blank" rel="noreferrer">
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 Lumen Vitae. ALL RIGHTS RESERVED.</p>

                    <a
                        href="https://www.instagram.com/arx_build/"
                        target="_blank"
                        rel="noreferrer"
                        className="developer-detail"
                    >
                        Developed by arx
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;