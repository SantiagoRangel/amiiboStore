import { ActionTypes } from "../constants/action-types"

export const setProducts = (products) =>{
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}
export const setCartLocal = (cart) =>{
    return {
        type: ActionTypes.SET_CART_LOCAL,
        payload: cart,
    }
}
export const addToCart = (amiibo) =>{
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: {
            amiibo: amiibo
        },
    }
}
export const subsToCart = (amiibo) =>{
    return {
        type: ActionTypes.SUBS_TO_CART,
        payload: {
            amiibo: amiibo
        },
    }
}
export const removeFromCart = (amiibo) =>{
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: {
            amiibo: amiibo
        },
    }
}
export const removeAllCart = () =>{
    return {
        type: ActionTypes.REMOVE_ALL,
        payload: {
            
        },
    }
}