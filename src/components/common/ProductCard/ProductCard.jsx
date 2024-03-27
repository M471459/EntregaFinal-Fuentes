import React from "react";

export const ProductCard = (props) => {
  const { titulo, descripcion, precio } = props;
  return (
    <div>
      <h1>{titulo}</h1>
      <h2>{descripcion}</h2>
      <h3>{precio}</h3>
    </div>
  );
};
