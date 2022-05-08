import React from "react";
import "./App.css";

import Prueba from "./components/Prueba";
import Propiedades from "./components/Propiedades";

function App() {
  return (
    <div className="App">
      <section>
        <Prueba msg="El curso de jonmircha" />
        <Propiedades
          cadena="esto es una cadena de texto"
          numero={ 19}
          booleano={true}
          arreglo={[1, 2, 3]}
          objeto={{ nombre: "marlon", correo: "marlon@gmail.com" }}
          funcion={(num) => num * num} // pasamos una funcion
          elementoReact={<i>Esto es un elemento React</i>} // pasar elementos react
          componenteReact={<Prueba msg="soy un componente pasado com prop" />} // pasar componente react
        />
      </section>
    </div>
  );
}

export default App;
