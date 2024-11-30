import { combineReducers } from 'redux';
import ReducerCart from "./ReducerCart";

export const rootReducer = combineReducers({
    cart: ReducerCart,
});
