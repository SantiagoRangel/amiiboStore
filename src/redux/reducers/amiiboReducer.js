import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
  cart: [],
};
export const amiiboReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      //guarda los productos del fetch
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    //añade un producto revisando si existe para añadirlo y si no agrega la cantidad
    case ActionTypes.ADD_TO_CART:
      const amiibo = state.products.amiibo.find(
        (product) =>
          product.head === payload.amiibo.head &&
          product.tail === payload.amiibo.tail
      );
      const inCart = state.cart.find((product) =>
        product.head === payload.amiibo.head &&
        product.tail === payload.amiibo.tail
          ? true
          : false
      );
      const newState = {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.head === payload.amiibo.head &&
              item.tail === payload.amiibo.tail
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...amiibo, qty: 1 }],
      };
      localStorage.setItem("cart", JSON.stringify(newState.cart));
      return newState;
// resta del producto
    case ActionTypes.SUBS_TO_CART:
      const subState = {
        ...state,
        cart: state.cart.map((item) =>
          item.head === payload.amiibo.head && item.tail === payload.amiibo.tail
            ? { ...item, qty: item.qty - 1 }
            : item
        ),
      };
      localStorage.setItem("cart", JSON.stringify(subState.cart));
      return subState;
// elimina producto del carrito
    case ActionTypes.REMOVE_FROM_CART:
      const remState = {
        ...state,
        cart: state.cart.filter(
          (item) =>
            item.tail !== payload.amiibo.tail ||
            item.head !== payload.amiibo.head
        ),
      };
      localStorage.setItem("cart", JSON.stringify(remState.cart));

      return remState;
      //elimina todos los productos del carrito
    case ActionTypes.REMOVE_ALL:
      const remState2 = {
        ...state,
        cart: [],
      };
      localStorage.setItem("cart", JSON.stringify(remState2.cart));

      return remState2;
    case ActionTypes.SET_CART_LOCAL:
      return {
        ...state,
        cart: payload,
      };
    default:
      return state;
  }
};
