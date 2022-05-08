import React, { Component } from "react";

const Prueba = (props) => (
  <h2 style={border}>
		<i>{ props.msg}</i>
  </h2>
);

// function Prueba(props) {
// 	return (
// 		<div style={border}>
// 			<h2>{ props.msg}</h2>
// 		</div>
// 	);
// }

// export default class Prueba extends Component {
//   render() {
//     return (
//       <div style={{ border: "2px solid red" }}>
//         <h2 style={border}>Titulo de la noticia</h2>
// 				<i style={{display: 'flex'}}>Fecha y hora</i>
//         <p style={border}>Aqui va la descripcion de la noticia</p>
//         <p style={border}>{this.props.msg}</p>
//       </div>
//     );
//   }
// }

export default Prueba;

const border = {
  textAlign: "justify",
};
