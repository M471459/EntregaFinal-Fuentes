import { Button, TextField } from "@mui/material";
import React, { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

export const Checkout = () => {
  const { clearCart } = useContext(CartContext);
  const [info, setInfo] = useState({
    name: "",
    last: "",
    phone: "",
    email: "",
  });
  const { cart, getTotal } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  const handleChange = (event) => {
    let { name, value } = event.target;
    setInfo({ ...info, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let objeto = {
      buyer: info,
      items: cart,
      total: getTotal(),
    };
    let ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, objeto)
      .then((res) => setOrderId(res.id))
      .catch((error) => {
        console.log(error);
      });

    cart.forEach((product) => {
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      });
    });
    clearCart();
  };

  return (
    <div style={{ padding: "100px" }}>
      {orderId ? (
        <h1>Su Identificador de la Compra es: {orderId}</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            type="text"
            label="Nombre"
            name="name"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            type="text"
            label="Apellido"
            name="last"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            type="text"
            placeholder="Teléfono"
            name="phone"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            type="text"
            placeholder="Correo electrónico"
            name="email"
            onChange={handleChange}
          />

          <Button variant="contained" type="submit">
            Finalizar Comprar
          </Button>
        </form>
      )}
    </div>
  );
};
