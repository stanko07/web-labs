import React from 'react';
import { useNavigate } from 'react-router-dom';
import successIcon from '../../icons/галачка.png';
import './SuccessPage.css';

const SuccessPage = () => {
    const navigate = useNavigate();

    const handleGoToCatalog = () => {
        navigate('/catalog');
    };

    return (
        <div className="success-page">
            <img src={successIcon} alt="Success" className="success-icon" />
            <h1>Успіх!</h1>
            <p>Ваше замовлення було успішно оформлене.</p>
            <button className="go-to-catalog-button" onClick={handleGoToCatalog}>
                Повернутися до каталогу
            </button>
        </div>
    );
};

export default SuccessPage;
