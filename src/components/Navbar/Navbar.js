import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

    const cartItems = useSelector((state) => state.cart.cartItems || []);

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <img src={require('../../icons/flower-svg.png')} alt="Nexcent Logo" />
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/catalog">Catalog</Link></li>
                        <li><Link to="/checkout">About</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
            
                        <li><Link to="/cart">Cart ({cartItems.length})</Link></li>
                    </ul>
                </nav>
                <button className="register-button" onClick={() => { /* додайте функцію для обробки замовлення */ }}>
                    Order Now →
                </button>
            </div>
        </header>
    );
}

export default Navbar;
