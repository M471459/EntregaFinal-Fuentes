import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

export const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div>
          <h3>Enlaces útiles</h3>
          <ul style={styles.footerLinks}>
            <li>
              <a href="#">Contáctanos</a>
            </li>
            <li>
              <a href="#">Dirección</a>
            </li>
            <li>
              <a href="#">Trabaja con nosotros</a>
            </li>
            <li>
              <a href="#">Términos y condiciones</a>
            </li>
            <li>
              <a href="#">Cómo cuidamos tu privacidad</a>
            </li>
            <li>
              <a href="#">Accesibilidad</a>
            </li>
            <li>
              <a href="#">Ayuda</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Suscríbete a nuestro boletín</h3>
          <form style={styles.newsletterForm}>
            <input type="email" placeholder="Correo electrónico" />
            <button type="submit">Suscribirse</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
  },
  footerContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  footerLinks: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  newsletterForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};
