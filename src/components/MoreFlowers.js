// src/components/MoreFlowers.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchFlowerById } from '../services/api';
import '../style/MoreFlowers.css';

const MoreFlowers = () => {
    const [flower, setFlower] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const loadFlower = async () => {
            try {
                const data = await fetchFlowerById(id);
                setFlower(data);
            } catch (error) {
                setError("Не вдалося завантажити дані");
            } finally {
                setLoading(false);
            }
        };

        loadFlower();
    }, [id]);

    if (loading) return <p>Завантаження...</p>;

    if (error) return <p>{error}</p>;

    if (!flower) {
        return <div className="container mx-auto px-4 py-8">Flower not found</div>;
    }

    const PressBack = () => {
        navigate(-1);
    };

    return (
        <div className="flower-details">
            <h1>{flower.name}</h1>
            <img src={`${process.env.PUBLIC_URL}/images/${flower.image}`} alt={flower.name} />
            <p>Price: ${flower.price}</p>
            <p>Description: {flower.description}</p>
            <p>Boom time: {flower.bloomTime}</p>
            <p>Care tips: {flower.careTips}</p>
            <button onClick={PressBack}>Back</button>
        </div>
    );
};

export default MoreFlowers;
