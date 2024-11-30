import React from 'react';
import '../style/ProductCard.css';

function ProductCard({ name, price, colors , image}) {
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
        </div>
    );
}

export default ProductCard;
