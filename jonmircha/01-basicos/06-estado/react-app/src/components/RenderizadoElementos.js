import React, { Component } from "react";

import data from "../helpers/data.json";

function ElementoLista(props) {
  return (
    <li>
      <a href={props.item.web} target="_blank" rel="noreferrer">
        {props.item.name}
      </a>
    </li>
  );
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Primavera", "Verano", "Otoño", "Invierno"],
    };
  }

  render() {
    return (
      <div>
        <h2>Renderizado de elementos</h2>
        <h3>Estaciones del año</h3>
        <ol>
          {this.state.seasons.map((season) => (
            <li key={season}>{season}</li>
          ))}
        </ol>
        <h3>Frameworks frontend Javascript</h3>
        <ul>
          {data.frameworks.map((item) => (
            <ElementoLista key={item.id} item={item} />
          ))}
        </ul>
      </div>
    );
  }
}
