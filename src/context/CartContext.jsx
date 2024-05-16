import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let exist = isInCart(product.id);
    if (exist) {
      // [{},{modificado},{}]
      let newArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          // modificacion
          return { ...elemento, quantity: product.quantity };
        } else {
          return elemento;
        }
      }); // []

      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const getQuantityById = (id) => {
    let product = cart.find((el) => el.id === id);
    return product?.quantity;
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };
  const clearCart = () => {
    setCart([]);
  };

  const getTotal = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity * elemento.price;
    }, 0);

    return total;
  };

  const getTotalProducts = () => {
    let totalProducts = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);

    return totalProducts;
  };
  const deleteProduct = (id) => {
    const newArray = cart.filter((product) => product.id !== id);
    setCart(newArray);
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteProduct,
    getQuantityById,
    getTotal,
    getTotalProducts,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
