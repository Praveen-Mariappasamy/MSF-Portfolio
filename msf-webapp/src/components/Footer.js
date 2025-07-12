import React from 'react';
import '../styles/Footer.css';
import logo from '../images/msflogo.png';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-main">
                        <div className="footer-brand full-width">
                            <div className="footer-logo">
                                <img src={logo} alt="M.S.Forms and Print Logo" />
                                <div className="footer-company-name">M.S.Forms and Print</div>
                            </div>
                            <div className="footer-gst">
                                <span className="footer-gst-label">GST:</span>
                                <span className="footer-gst-number">33AAHFM7998J1ZK</span>
                            </div>
                        </div>
                        
                        <div className="footer-section">
                            <h3>Quick Links</h3>
                            <ul className="footer-links">
                                <li><a href="#about">📋 About Us</a></li>
                                <li><a href="#products">📦 Our Products</a></li>
                                <li><a href="#contact">📞 Contact Us</a></li>
                            </ul>
                        </div>
                        
                        <div className="footer-section">
                            <h3>Contact Info</h3>
                            <div className="footer-contact-info">
                                <div className="footer-contact-item">
                                    <span className="footer-contact-icon">📍</span>
                                    <div className="footer-contact-text">
                                        Moulivakkam,<br />
                                        Chennai-600125
                                    </div>
                                </div>
                                <div className="footer-contact-item">
                                    <span className="footer-contact-icon">📞</span>
                                    <div className="footer-contact-text">
                                        <a href="tel:+919840122784">+91 9840122784</a>
                                    </div>
                                </div>
                                <div className="footer-contact-item">
                                    <span className="footer-contact-icon">✉️</span>
                                    <div className="footer-contact-text">
                                        <a href="mailto:msf1971@gmail.com">msf1971@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="footer-bottom">
                        <div className="footer-copyright">
                            © {currentYear} M.S.Forms and Print. All rights reserved.
                        </div>
                        <div className="footer-made-with">
                            Made with <span className="footer-heart">❤️</span> for quality printing
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}