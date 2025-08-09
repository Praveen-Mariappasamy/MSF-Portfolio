import React from 'react';
import '../styles/Footer.css';
import logo from '../images/msflogo.png';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-main" style={{ display: 'flex' }}>
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
                            <h3 style={{ textAlign: 'center' }}>Contact Info</h3>
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
                                        <a href="tel:+919840122784">9840122784</a>
                                        <span> | </span>
                                        <a href="tel:+919840822166">9840822166</a>
                                    </div>
                                </div>
                                <div className="footer-contact-item">
                                    <span className="footer-contact-icon">✉️</span>
                                    <div className="footer-contact-text">
                                        <a href="mailto:msformsandprint@gmail.com">msformsandprint@gmail.com</a>
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