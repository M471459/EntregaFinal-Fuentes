import { TextField, Container, Grid, Typography, Button } from "@mui/material";
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
        <div
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            padding: 3,
          }}
        >
          <Typography variant="h4" align="center" sx={{ marginBottom: 2 }}>
            ¡Felicitaciones por tu Compra!
          </Typography>
          <Typography variant="body1" align="center">
            Tu pedido ha sido procesado correctamente. Tú identificador de
            compra es:{orderId}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
            href="/"
          >
            Volver a la Tienda
          </Button>
        </div>
      ) : (
        <div
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            padding: 3,
          }}
        >
          <Typography variant="h4" align="center" sx={{ marginBottom: 2 }}>
            Completa con tus datos para finalizar la compra
          </Typography>
          <Container>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    type="text"
                    label="Nombre"
                    name="name"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    type="text"
                    label="Apellido"
                    name="last"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    type="text"
                    placeholder="Teléfono"
                    name="phone"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    type="text"
                    placeholder="Correo electrónico"
                    name="email"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" type="submit">
                    Finalizar Comprar
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Container>
        </div>
      )}
    </div>
  );
};
