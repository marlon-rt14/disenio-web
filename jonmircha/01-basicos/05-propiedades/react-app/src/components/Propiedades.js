import React, { Component } from "react";
import PropTypes from 'prop-types'

export default function Propiedades(props) {
  return (
    <div>
      <h2>Propiedades</h2>
      <p>{props.porDefecto}</p>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? "verdadero" : "falso"}</li>
        <li>{props.arreglo.join(",")}</li>
        <li>{props.arreglo.map(props.funcion).join(" - ")}</li>
        <li>{props.objeto.nombre + " - " + props.objeto.correo}</li>
        <li>{props.elementoReact}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  );
}

Propiedades.defaultProps = {
  porDefecto: "Las Props",
};

Propiedades.propTypes = {
	numero: PropTypes.number.isRequired
}
