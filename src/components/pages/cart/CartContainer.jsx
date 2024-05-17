import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../../context/CartContext";
const CartContainer = () => {
  const { cart, clearCart, deleteProduct, getTotal } = useContext(CartContext);
  let total = parseFloat(getTotal().toFixed(2));
  return (
    <Cart
      cart={cart}
      clearCart={clearCart}
      deleteProduct={deleteProduct}
      total={total}
    />
  );
};

export default CartContainer;
