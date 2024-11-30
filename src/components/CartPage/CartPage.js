// CartPage.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'; 
import { removeFromCart, loadCartFromLocalStorage, clearCart, addToCart } from '../../redux/ActionCart';
import './CartPage.css';

const CartPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems) || [];
    const navigate = useNavigate(); 

    useEffect(() => {
        dispatch(loadCartFromLocalStorage());
    }, [dispatch]);

    const handleRemove = (itemID, selectedColor) => {
        dispatch(removeFromCart(itemID, selectedColor));
    };

    const handleIncreaseQuantity = (itemID, selectedColor) => {
        const itemToAdd = cartItems.find(
            (item) => item.id === itemID && item.selectedColor === selectedColor
        );
        if (!itemToAdd) return;

        const maxQuantity = itemToAdd.all_vailable_colors.find(
            (color) => color.color === selectedColor
        ).quantity;

        if (itemToAdd.quantity + 1 > maxQuantity) {
            alert(`Максимальна доступна кількість: ${maxQuantity}`);
            return;
        }

        dispatch(addToCart({ ...itemToAdd, quantity: 1 }));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const calculateTotalPrice = () => {
        return cartItems
            .reduce((total, item) => {
                const itemPrice = parseFloat(item.price) || 0;
                const itemQuantity = parseInt(item.quantity, 10) || 1;
                return total + itemPrice * itemQuantity;
            }, 0)
            .toFixed(2);
    };

    const handleContinueToCheckout = () => {
        navigate('/checkout'); 
    };

    return (
        <div className="cart-container">
            <h1 className="cart-header" style={{ color: 'black' }}>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p className="cart-empty">Your cart is empty</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={`${item.id}-${item.selectedColor}`} className="cart-item">
                            <img src={item.imageSrc} alt={item.name} />
                            <h2>{item.name}</h2>
                            <p>Колір: {item.selectedColor}</p>
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <div className="quantity-controls">
                                <button
                                    className="remove-button"
                                    onClick={() => handleRemove(item.id, item.selectedColor)}
                                >
                                    -
                                </button>
                                <button
                                    className="increase-button"
                                    onClick={() => handleIncreaseQuantity(item.id, item.selectedColor)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {cartItems.length > 0 && (
                <>
                    <div className="cart-summary">
                        <p>Total: ${calculateTotalPrice()}</p>
                    </div>

                    <div className="cart-actions">
                        <button className="clear-cart-button" onClick={handleClearCart}>
                            Clear All Items
                        </button>
                        <NavLink className="link_to_catalog" to="/catalog">
                            Continue Shopping
                        </NavLink>
                        {/* Додаємо кнопку для переходу до Checkout */}
                        <button className="checkout-button" onClick={handleContinueToCheckout}>
                            Continue to Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;
