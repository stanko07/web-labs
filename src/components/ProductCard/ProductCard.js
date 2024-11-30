import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';


function ProductCard({ id, name, price, colors , image}) {
    return (
        <div className="product-card">
        <img className="flower-image-all" 
                src={`${process.env.PUBLIC_URL}/images/${image}`} 
                alt={name} />
            <h3>{name}</h3>
            <p>{price}</p>
            <div className="colors">
                {colors.map((color, index) => (
                    <span key={index} style={{ backgroundColor: color }} className="color-circle"></span>
                ))}
            </div>
            <Link to={`/flower/${id}`}>
                <button className="view-more-btn">View more</button>
            </Link>

        </div>
    );
}

export default ProductCard;
