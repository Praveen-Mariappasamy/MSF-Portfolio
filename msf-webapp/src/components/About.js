import React from 'react';
import '../styles/About.css';

export default function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2>About M.S.Forms and Print</h2>
                        <p className="about-description">
                            With over 24+ years of excellence in the printing industry, M.S.Forms and Print has been 
                            Chennai's trusted partner for all printing needs since 2001. We specialize in high-quality 
                            commercial printing solutions, serving businesses across various industries.
                        </p>
                        <div className="about-features">
                            <div className="feature">
                                <div className="feature-icon">🏆</div>
                                <div className="feature-text">
                                    <h3>24+ Years Experience</h3>
                                    <p>Decades of expertise in commercial printing</p>
                                </div>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">⚡</div>
                                <div className="feature-text">
                                    <h3>Quick Turnaround</h3>
                                    <p>Fast and efficient printing services</p>
                                </div>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">✨</div>
                                <div className="feature-text">
                                    <h3>Premium Quality</h3>
                                    <p>Superior materials and printing standards</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-stats">
                        <div className="stat">
                            <div className="stat-number">24+</div>
                            <div className="stat-label">Years in Business</div>
                        </div>
                        <div className="stat">
                            <div className="stat-number">1000+</div>
                            <div className="stat-label">Happy Clients</div>
                        </div>
                        <div className="stat">
                            <div className="stat-number">10+</div>
                            <div className="stat-label">Product Categories</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}