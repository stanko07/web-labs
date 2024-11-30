import React from 'react';
import './Footer.css';


const Footer = () => {
return (
    <footer className="footer">
        <div className="footer-container">
    
            <div className="footer-section contact-info">
                <h3 className='Contacts'>CONTACTS</h3>
                <p>Email: freshflowers@gmail.com</p>
                <p>Phone: +38 095 610 84 12</p>
            </div>

    
            <div className="footer-section footer-links">
                <p>MAIN PAGE</p>
                <p>ABOUT OUR SHOP</p>
                <p>FLOWER SHOP</p>
            </div>

    
        <div className="footer-section order-btn">
                    <button>ORDER FLOWERS</button>
            </div>
        </div>

    
        <div className="footer-line"></div>
    </footer>
);
};

export default Footer;
