import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchFlowerById } from '../../services/api';
import { addToCart } from '../../redux/ActionCart';
import './MoreFlowers.css';

const FlowerDetails = () => {
    const [flower, setFlower] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [availableQuantity, setAvailableQuantity] = useState(0);

    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    useEffect(() => {
        Object.keys(localStorage).forEach((key) => {
            if (key.startsWith('flower_')) {
                localStorage.removeItem(key);
            }
        });
        
        const loadFlower = async () => {
            try {
                const data = await fetchFlowerById(id);
                setFlower(data);
                localStorage.setItem(`flower_${id}`, JSON.stringify(data));
            } catch (error) {
                setError("Не вдалося завантажити дані");
            } finally {
                setLoading(false);
            }
        };

        loadFlower();
    }, [id]);

    useEffect(() => {
        if (flower && flower.all_vailable_colors) {
            const updatedColors = flower.all_vailable_colors.map(color => {
                const cartItem = cartItems?.find(
                    item => item.id === flower.id && item.selectedColor === color.color
                );
                return {
                    ...color,
                    quantity: color.quantity - (cartItem ? cartItem.quantity : 0),
                };
            });

            if (JSON.stringify(flower.all_vailable_colors) !== JSON.stringify(updatedColors)) {
                setFlower(prev => ({ ...prev, all_vailable_colors: updatedColors }));
                localStorage.setItem(`flower_${id}`, JSON.stringify({ ...flower, all_vailable_colors: updatedColors }));
            }
        }
    }, [cartItems, flower, id]);

    const PressBack = () => {
        navigate(-1);
    };

    const handleColorChange = (e) => {
        const color = e.target.value;
        setSelectedColor(color);

        if (flower?.all_vailable_colors) {
            const colorInfo = flower.all_vailable_colors.find(c => c.color === color);
            setAvailableQuantity(colorInfo ? colorInfo.quantity : 0);
        }
    };

    const handleAddToCart = () => {
        if (!selectedColor) {
            alert("Будь ласка, оберіть колір");
            return;
        }
    
        if (availableQuantity < selectedQuantity) {
            alert("На складі недостатньо квіток обраного кольору");
            return; 
        }
    
        const itemToAdd = {
            id: flower.id,
            name: flower.name,
            imageSrc: `${process.env.PUBLIC_URL}/images/${flower.image}`,
            price: flower.price,
            selectedColor,
            quantity: selectedQuantity,
            all_vailable_colors: flower.all_vailable_colors,
        };
    
        dispatch(addToCart(itemToAdd));
        setSuccessMessage('Товар успішно додано до кошика!');
        setTimeout(() => setSuccessMessage(''), 2500);
    };
    

    if (loading) return <p className="loading-message">Завантаження...</p>;
    if (error) return <p className="error-message">{error}</p>;
    if (!flower) return <div className="container">Товар не знайдено</div>;

    return (
        <div className="flower-detail-container">
            <div className="flower-detail">
                <img
                    src={`${process.env.PUBLIC_URL}/images/${flower.image}`}
                    alt={flower.name}
                    className="flower-detail-image"
                />
                <h1 className="flower-detail-title">{flower.name}</h1>
                <p className="flower-detail-description">
                    {flower.description || "Опис відсутній"}
                </p>

                <div className="flower-selector-container">
                    <h4>Виберіть колір:</h4>
                    <select
                        className="flower-selector"
                        value={selectedColor}
                        onChange={handleColorChange}
                    >
                        <option value="">Виберіть</option>
                        {flower.all_vailable_colors?.map(color => (
                            <option key={color.color} value={color.color}>
                                {color.color} (доступно: {color.quantity})
                            </option>
                        ))}
                    </select>
                </div>

                {selectedColor && (
                    <div className="flower-selector-container">
                        <h4>Виберіть кількість:</h4>
                        <select
                            className="flower-quantity-selector"
                            value={selectedQuantity}
                            onChange={e => setSelectedQuantity(Number(e.target.value))}
                        >
                            {[...Array(Math.max(availableQuantity, 1)).keys()].map((_, i) => (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                    </div>
                )}

                {successMessage && <div className="success-message">{successMessage}</div>}

                <div className="action-buttons">
                    <button onClick={PressBack}>Назад</button>
                    <button onClick={handleAddToCart}>Додати до кошика</button>
                </div>
            </div>
        </div>
    );
};

export default FlowerDetails;