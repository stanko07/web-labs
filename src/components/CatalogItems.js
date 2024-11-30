import React from "react";
import '../style/Catalogitems.css';
import { Link } from 'react-router-dom';

const colorNameMap = {
    '#228B22': 'Green',
    '#FF69B4': 'Pink',
    '#E52B50': 'Red',
};

const Catalogitems = ({ id, image, name, price, colors }) => {
    return (
        <div className="flower-card">
            <img 
                className="flower-image-all" 
                src={`${process.env.PUBLIC_URL}/images/${image}`} 
                alt={name} 
            />
            <h3 className="flower-name">{name}</h3>
            <p className="flower-price">{price.toLocaleString()}</p>
            <p className="flower-colors">
                {colors.map((color) => (
                <span key={color}>
                    <span className="color-circle" style={{ backgroundColor: color }}></span>
                    {colorNameMap[color] || color}
                    </span>
                ))}
            </p>
            <Link to={`/flower/${id}`}>
                <button className="view-more-btn">View more</button>
            </Link>
        </div>
    );
};

export default Catalogitems;
