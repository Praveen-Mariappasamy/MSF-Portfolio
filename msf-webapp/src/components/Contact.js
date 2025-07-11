import React from 'react';
import '../styles/Contact.css';

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="contact-content">
                    <div className="contact-info">
                        <h2>Get In Touch</h2>
                        <p className="contact-description">
                            Ready to discuss your printing needs? Contact us today for a personalized quote 
                            and discover how we can help bring your projects to life.
                        </p>
                        
                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="contact-icon">📍</div>
                                <div className="contact-text">
                                    <h3>Address</h3>
                                    <p>Moulivakkam, Chennai-600125<br />Tamil Nadu, India</p>
                                </div>
                            </div>
                            
                            <div className="contact-item">
                                <div className="contact-icon">📞</div>
                                <div className="contact-text">
                                    <h3>Phone</h3>
                                    <p><a href="tel:+919840122784">+91 9840122784</a></p>
                                </div>
                            </div>
                            
                            <div className="contact-item">
                                <div className="contact-icon">✉️</div>
                                <div className="contact-text">
                                    <h3>Email</h3>
                                    <p><a href="mailto:msf1971@gmail.com">msf1971@gmail.com</a></p>
                                </div>
                            </div>
                            
                            <div className="contact-item">
                                <div className="contact-icon">🏢</div>
                                <div className="contact-text">
                                    <h3>Business Hours</h3>
                                    <p>Monday - Saturday: 9:00 AM - 6:00 PM<br />Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="contact-cta">
                        <div className="cta-card">
                            <h3>Ready to Start Your Project?</h3>
                            <p>Contact us today for a free consultation and quote</p>
                            <div className="cta-buttons">
                                <a href="tel:+919840122784" className="cta-button primary">
                                    📞 Call Now
                                </a>
                                <a href="mailto:msf1971@gmail.com" className="cta-button secondary">
                                    ✉️ Send Email
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}