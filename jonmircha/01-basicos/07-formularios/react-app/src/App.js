import React from "react";
import "./App.css";
import Formularios from "./components/Formularios";
import Estilos from "./components/Estilos";

function App() {
  return (
    <div className="App">

      <section style={{ marginBottom: "100vh" }}>
        <Formularios />
        <hr />
        <Estilos/>
      </section>
    </div>
  );
}

export default App;
