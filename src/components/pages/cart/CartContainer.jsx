import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../../context/CartContext";
const CartContainer = () => {
  const { cart, clearCart, deleteProduct, getTotal } = useContext(CartContext);
  let total = getTotal();
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
