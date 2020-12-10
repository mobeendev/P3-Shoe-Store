import React, { createContext, useContext, useReducer } from "react";
import CartReducer from "../reducer/CartReducer";

export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const initialState = { cart: [] };

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addItem = (sku) => dispatch({ type: "ADD", payload: sku });
  const removeItem = (sku) => dispatch({ type: "REMOVE", payload: sku });
  const emptyCart = () => dispatch({ type: "EMPTY" });

  function countItemsInCart(sku) {
    const itemsInCart =
      state.cart.filter((product) => product.sku === sku) ?? [];
    return itemsInCart.length;
  }

  function totalPrice() {
    return groupCartItems().reduce((totalPrice, product) => {
      return totalPrice + product.price * product.quantity;
    }, 0);
  }

  function groupCartItems() {
    return state.cart.reduce((newCart, product) => {
      // check the newCart array for a product
      const indexInCart = newCart.findIndex((p) => p.sku === product.sku);
      const isInCart = indexInCart !== -1;

      if (isInCart) {
        newCart[indexInCart].quantity = newCart[indexInCart].quantity + 1;
        return newCart;
      }

      newCart.push({ ...product, quantity: 1 });
      return newCart;
    }, []);
  }

  function presentInCart(sku) {
    return state.cart.some((product) => product.sku === sku);
  }

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        emptyCart,
        cart: state.cart,
        cartGroupedByItems: groupCartItems(),
        countItemsInCart,
        presentInCart,
        totalPrice: totalPrice(),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
