import React from "react";
import { BeatLoader } from "react-spinners";
import { useState, useEffect } from "react";
import { products } from "../../../productsMock.js";
import ItemList from "../Home/ItemList.jsx";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../../firebaseConfig.js";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { Skeleton } from "@mui/material";

const ItemListContainer = () => {
  const { name } = useParams();
  const { sport } = useParams();
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const productsCollection = collection(db, "products");

    let consulta = productsCollection;

    if (name) {
      consulta = query(productsCollection, where(name, "==", true));
    } else if (sport) {
      consulta = query(productsCollection, where("category", "==", sport));
    }

    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setItems(newArray);
    });
  }, [sport, name]);

  const addDocProducts = () => {
    let productsCollection = collection(db, "products");
    products.forEach((product) => addDoc(productsCollection, product));
  };

  if (items.length === 0) {
    return (
      <div>
        <Skeleton
          variant="rectangular"
          height={200}
          sx={{ fontsize: "10rem" }}
          color="#36d7b7"
        />
        ;
      </div>
    );
  }

  return (
    <>
      <ItemList items={items} error={error} />
    </>
  );
};
export default ItemListContainer;
