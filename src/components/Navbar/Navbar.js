import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    // Додаємо початкове значення [] для уникнення undefined
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
                        <li><Link to="/about-flowers">About</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                        {/* Перевірка, що cartItems існує, перед доступом до length */}
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
