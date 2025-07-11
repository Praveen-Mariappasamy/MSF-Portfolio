import React from 'react';
import '../styles/Hero.css';
import logo from '../images/msflogo.png';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-content m-auto">
                <div className="hero-logo">
                    <img src={logo} alt="M.S.Forms and Print Logo" className="logo" />
                </div>
                <div className="hero-text">
                    <h1 className="company-name">M.S.Forms and Print</h1>
                    <p className="company-tagline">Professional Printing Solutions Since 1971</p>
                    <div className="hero-info">
                        <div className="info-item">
                            <span className="info-icon">📍</span>
                            <span>Moulivakkam, Chennai-600125</span>
                        </div>
                        <div className="info-item">
                            <span className="info-icon">📞</span>
                            <span>9840122784</span>
                        </div>
                        <div className="info-item">
                            <span className="info-icon">✉️</span>
                            <span>msf1971@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-overlay"></div>
        </section>
    );
}