import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, SET_CART } from "./TypeAction";

export const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
};

export const loadCartFromLocalStorage = () => (dispatch) => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    dispatch({ type: SET_CART, payload: savedCart });
};

export const addToCart = (item) => (dispatch, getState) => {
    const { cartItems } = getState().cart;

    const existingItem = cartItems.find(
        (cartItem) => cartItem.id === item.id && cartItem.selectedColor === item.selectedColor
    );

    const maxQuantity = item.all_vailable_colors.find(
        (color) => color.color === item.selectedColor
    ).quantity;

    if (existingItem) {
        const updatedQuantity = existingItem.quantity + item.quantity;

        if (updatedQuantity > maxQuantity) {
            alert(`Максимальна доступна кількість: ${maxQuantity}`);
            return;
        }

        const updatedItems = cartItems.map((cartItem) =>
            cartItem.id === item.id && cartItem.selectedColor === item.selectedColor
                ? { ...cartItem, quantity: updatedQuantity }
                : cartItem
        );
        dispatch({ type: ADD_TO_CART, payload: updatedItems });
    } else {
        if (item.quantity > maxQuantity) {
            alert(`Максимальна доступна кількість: ${maxQuantity}`);
            return;
        }
        dispatch({ type: ADD_TO_CART, payload: [...cartItems, item] });
    }

    saveCartToLocalStorage(getState().cart.cartItems);
};

export const removeFromCart = (id, selectedColor) => (dispatch, getState) => {
    const { cartItems } = getState().cart;

    const updatedItems = cartItems.map((item) =>
        item.id === id && item.selectedColor === selectedColor
            ? { ...item, quantity: item.quantity - 1 }
            : item
    ).filter((item) => item.quantity > 0);

    dispatch({ type: REMOVE_FROM_CART, payload: updatedItems });
    saveCartToLocalStorage(updatedItems);
};

export const clearCart = () => (dispatch) => {
    dispatch({ type: CLEAR_CART });
    localStorage.removeItem('cart');
};
