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
                    <p className="company-tagline">Professional Printing Solutions Since 2001</p>
                    <a href="#products" className="cta-button secondary">
                        Explore Products
                    </a>
                </div>
            </div>
            <div className="hero-overlay"></div>
        </section>
    );
}