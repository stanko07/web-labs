import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, SET_CART } from "./TypeAction";

const initialState = {
    cartItems: [],
};

const ReducerCart = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART:
            return { ...state, cartItems: action.payload };

        case ADD_TO_CART:
            return { ...state, cartItems: action.payload };

        case REMOVE_FROM_CART:
            return { ...state, cartItems: action.payload };

        case CLEAR_CART:
            return { ...state, cartItems: [] };

        default:
            return state;
    }
};

export default ReducerCart;
