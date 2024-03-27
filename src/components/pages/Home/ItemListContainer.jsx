import React from "react";
import { ProductCard } from "../../common/ProductCard/ProductCard.jsx";

const ItemListContainer = ({ saludo }) => {
  return (
    <div>
      <h1>{saludo}</h1>
      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          Color: "white",
          display: "flex",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        <ProductCard
          precio={100}
          titulo={"titulo 1"}
          descripcion={"descripcion 1"}
        />
        <ProductCard
          precio={200}
          titulo={"titulo 2"}
          descripcion={"descripcion 3"}
        />
        <ProductCard
          precio={300}
          titulo={"titulo 3"}
          descripcion={"descripcion 3"}
        />
      </div>
    </div>
  );
};
export default ItemListContainer;
