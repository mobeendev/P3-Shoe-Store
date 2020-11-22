import Shoes from "./../shoes.json";

export default (state, { type, payload }) => {
  switch (type) {
    case "ADD":
      console.log(payload);
      // payload is going to be our sku
      return {
        ...state,
        cart: [...state.cart, Shoes.find((p) => p.sku === payload)],
      };
    case "REMOVE":
      const productIndex = state.cart.findIndex((p) => p.sku === payload);
      const newCart = [...state.cart];
      newCart.splice(productIndex, 1);
      return { ...state, cart: newCart };
    case "EMPTY":
      return { cart: [] };
    default:
      return state;
  }
};
