import React from "react";
import { useState } from "react";
import Counter from "./Counter";

export const CounterContainer = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) setContador(contador + 1);
    else alert("Lo siento, no tenemos más unidades de este producto en stock");
  };

  const restar = () => {
    if (contador > 1) setContador(contador - 1);
    else "el mínimo es 1";
  };

  let objectProps = {
    restar,
    sumar,
    contador,
    onAdd,
  };
  return <Counter {...objectProps} />;
};
