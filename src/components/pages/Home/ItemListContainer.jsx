import React from "react";
import { useState, useEffect } from "react";
import { products } from "../../../productsMock.js";
import ItemList from "../Home/ItemList.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { Category } from "@mui/icons-material";

const ItemListContainer = () => {
  const navitage = useNavigate();
  const { name } = useParams();
  const { sport } = useParams();
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  console.log(sport);
  console.log(name);

  useEffect(() => {
    let productsFiltered = "";

    name !== undefined
      ? (productsFiltered = products.filter((product) => product[name] === 1))
      : (productsFiltered = products.filter(
          (product) => product.category === sport
        ));

    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      if (x) {
        resolve(name || sport ? productsFiltered : products);
      } else {
        reject({ status: 400, message: "no estás autorizado" });
      }
    });
    getProducts.then((res) => setItems(res)).catch((error) => setError(error));
  }, [name, sport]);

  return <ItemList items={items} error={error} />;
};
export default ItemListContainer;
