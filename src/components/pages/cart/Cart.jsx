import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = ({ cart, clearCart, deleteProduct, total }) => {
  const clearCartAlert = () => {
    Swal.fire({
      showConfirmButton: true,
      showDenyButton: true,
      title: "¿Está seguro de desea limpiar el carrito?",
      confirmButtonText: "Sí",
      denyButtonText: "No",
      confirmButtonColor: "red",
      denyButtonColor: "grey",
    }).then((res) => {
      if (res.isConfirmed) {
        clearCart();
        Swal.fire({
          title: "el carrito efectivamente fue eliminado",
          icon: "success",
        });
      } else if (res.isDenied) {
        Swal.fire({
          title: "el carrito queda como estaba",
          icon: "info",
        });
      }
    });
  };
  return (
    <div>
      <h1>Estos Productos tienes el Carro:</h1>
      {cart.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <h3>{product.quantity}</h3>
          <h3>{product.price}</h3>

          <button onClick={() => deleteProduct(product.id)}>Eliminar</button>
        </div>
      ))}
      <h2>El total a pagar es {total}</h2>

      <Button onClick={clearCartAlert} variant="outlined">
        Limpiar Carrito
      </Button>
      {cart.length > 0 && (
        <Link to="/checkout">
          <Button variant="contained">Finalizar Compra</Button>
        </Link>
      )}
    </div>
  );
};

export default Cart;
