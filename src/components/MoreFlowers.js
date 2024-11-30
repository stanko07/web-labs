import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FlowerContext } from '../context/FloweContext';
import '../style/MoreFlowers.css';

const MoreFlowers = () => {
    const { flowers } = useContext(FlowerContext);
    const navigate = useNavigate();
    const { id } = useParams();
    const flower = flowers.find(flower => flower.id === parseInt(id));

    if (!flower) {
        return <div className="container mx-auto px-4 py-8">Flower not found</div>;
    }

    const PressBack = () => {
        navigate('/catalog');
    };

    return (
        <div className="flower-details">
            <h1>{flower.name}</h1>
            <img src={`${process.env.PUBLIC_URL}/images/${flower.image}`} alt={flower.name} />
            <p>Price: ${flower.price}</p>
            <p>Description: {flower.description}</p>
            <p>Boom time: {flower.bloomTime}</p>
            <p>Care tips: {flower.careTips}</p>
            <button onClick={PressBack}>Back to Catalog</button>
        </div>
    );
};

export default MoreFlowers;
