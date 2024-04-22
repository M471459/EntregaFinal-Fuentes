import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-heading">404 - Página no encontrada</h1>
      <p className="not-found-text">
        Lo sentimos, la página que estás buscando no existe.
      </p>
    </div>
  );
};

export default NotFound;
