import React from "react";
import  "../style/Navbar.css"

const Navbar = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                <img src={require('../icons/flower-svg.png')} alt="Nexcent Logo" />
            
                </div>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/catalog">Catalog</a></li>
                        <li><a href="/about flowers">About</a></li>
                        <li><a href="/pricing">Pricing</a></li>
                    </ul>
                </nav>
                <a href="#" className="register-button">Order Now →</a>
            </div>
        </header>
    );
}

export default Navbar;