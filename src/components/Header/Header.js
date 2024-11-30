import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <section className='home'>
            <div className="container">
                <div className="header__text-box">
                    <h1>Flowers <br/>
                    what the world needs </h1>
                    <p className='paragraphe'>Experience luxury and performance with our top-tier car collection</p>
                    <button className="browse-button">Browse</button>
                </div>
            </div>
        </section>
    );
};

export default Header;