import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import "./Cart.css";

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
    <Grid container spacing={4}>
      <Grid item xs={9}>
        <div>
          <div style={{ padding: "20px" }}>
            <h1>Productos</h1>
          </div>
          <div className="container">
            <div className="column">
              {cart.map((product) => (
                <div
                  key={product.id}
                  style={{ padding: "50px", alignItems: "center" }}
                >
                  <Card sx={{ maxWidth: 1200, boxShadow: "none" }}>
                    <Grid container spacing={10} alignItems="center">
                      <Grid item xs={2}>
                        <CardMedia
                          component="img"
                          height="140"
                          image={product.img}
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="h6"> {product.title} </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="h6">
                          {" "}
                          {product.quantity} Unidad{" "}
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography variant="h6">
                          {" "}
                          $ {product.price} .-
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Button
                          color="error"
                          onClick={() => deleteProduct(product.id)}
                        >
                          Eliminar
                        </Button>
                      </Grid>
                    </Grid>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={2}>
        <div className="column">
          <div style={{ paddingTop: "100px" }}>
            <h2>Total ${total}</h2>
            {cart.length > 0 && (
              <Link to="/checkout">
                <Button variant="contained">Finalizar Compra</Button>
              </Link>
            )}
          </div>
          <div style={{ paddingTop: "50px" }}>
            <Button onClick={clearCartAlert} variant="outlined">
              Limpiar Carrito
            </Button>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Cart;
