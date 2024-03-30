import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="Footer">
            <div className='bbb'>
                <ul className="bullet-list">
                    <li className="companies">Commitment to Customer Loyalty</li>
                    <li className="companies">Advanced and Reliable Hightech Machineries</li>
                    <li className="companies">Established and Trusted Business Partners</li>
                    <li className="companies">Convenient Doorstep Delivery Services</li>
                </ul>
            </div>
            <div className='contact-follow'>
                <h3 className='companies'>Contact us:</h3>
                <a href="#" className='hh'>msformsandprints@gmail.com | msfprints@rediffmail.com</a>
                <h4 className='hh'>9840122784 / 9840122782</h4>
          

          
                <h3 className='companies'>Follow us on:</h3>
                <img className="image" src="./images/Instagram.png" alt="Instagram" />
                <img className="image" src="./images/Facebook.avif" alt="Facebook" />
                <img className="image" src="./images/x.jpeg" alt="X" />
                <img className="image" src="./images/discord.png" alt="discord" />
            </div>
            <div className='bbb'>
                <ul className="bullet-list">
                    <li className="companies">Consistent Quality of Services</li>
                    <li className="companies">Extensive Field Experience and Expertise</li>
                    <li className="companies">Commitment to Customer Satisfaction</li>
                    <li className="companies">Transparent and Valid Pricing</li>
                </ul>
            </div>
        </footer>
    )
}