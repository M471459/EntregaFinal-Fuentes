import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { products } from "../../../productsMock";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  useEffect(() => {
    let itemEncontrado = products.find((product) => product.id === +id);
    const getProduct = new Promise((resolve, reject) => {
      resolve(itemEncontrado);
    });
    getProduct.then((res) => setItem(res));
  }, [id]);
  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
