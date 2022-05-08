import React from "react";
import "./App.css";

import Prueba from "./components/Prueba";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";
import ComunicacionComponentes from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
import AjaxApis from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHooks";
import AjaxHooks from "./components/AjaxHook";
import HooksPersonalizados from "./components/HooksPersonalizados";
import Referencias from "./components/Referencias";

function App() {
  return (
    <div className="App">
      <section>
        <Prueba msg="El curso de jonmircha" />
        <hr />
        <Propiedades
          cadena="esto es una cadena de texto"
          numero={19}
          booleano={true}
          arreglo={[1, 2, 3]}
          objeto={{ nombre: "marlon", correo: "marlon@gmail.com" }}
          funcion={(num) => num * num} // pasamos una funcion
          elementoReact={<i>Esto es un elemento React</i>} // pasar elementos react
          componenteReact={<Prueba msg="soy un componente pasado com prop" />} // pasar componente react
        />
        <hr />
        <Estado />
        <hr />
        <RenderizadoCondicional />
        <hr />
      </section>

      <section>
        <RenderizadoElementos />
        <hr />
        <EventosES6 />
        <hr />
        <EventosES7 />
        <hr />
        <MasSobreEventos />
        <hr />
        <ComunicacionComponentes />
        <hr />
        <CicloVida />
        <hr />
        <AjaxApis />
        <hr />
      </section>

      <section style={{ marginBottom: "100vh" }}>
        <ContadorHooks titulo="Seguidores" />
        <hr />
        <ScrollHooks />
        <hr />
        <RelojHooks />
        <hr />
        <AjaxHooks />
        <hr />
        <HooksPersonalizados />
        <hr/>
        <Referencias/>
      </section>
    </div>
  );
}

export default App;
