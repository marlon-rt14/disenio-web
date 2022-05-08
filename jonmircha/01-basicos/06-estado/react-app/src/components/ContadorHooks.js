import React, { useState } from "react";

export default function ContadorHooks(props) {
  // console.log(useState());

  // puede recibir cualquier tipo de dato
  const [contador, setContador] = useState(0);

  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);

  return (
    <>
      <h2>15 Hooks - useState</h2>
      <nav>
        <button onClick={sumar} style={{ padding: "7px", fontSize: "22px" }}>
          +
        </button>
        <button onClick={restar} style={{ padding: "7px", fontSize: "22px" }}>
          -
        </button>
      </nav>
      <h3>
        {contador} {props.titulo}
      </h3>
    </>
  );
}

// propiedades por defecto
ContadorHooks.defaultProps = {
  titulo: "Clicks",
};
