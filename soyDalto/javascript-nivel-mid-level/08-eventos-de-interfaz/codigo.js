const img = document.querySelector(".img-prueba");
const input = document.querySelector(".input-prueba");
const contenedor = document.querySelector(".seleccionado");

// img.addEventListener("error", (e) => {
// 	console.log("ha sucedido un error");
// });

// window.addEventListener("load", (e) => {
//   console.log("ha cargado el sitio");
// });

// window.addEventListener("beforeunload", (e) => {
//   console.log("te estas por ir del sito");
// });

// window.addEventListener("resize", (e) => {
//   console.log("se ha actualizado la resolucion");
// });

// window.addEventListener("scroll", (e) => {
//   console.log("se ha escrolleado");
// });

input.addEventListener("select", (e) => {
	// console.log("se ha seleccionado el texto");
	// console.log(e);
	// console.log("inicia: " + e.target.selectionStart);
	// console.log("termina: " + e.target.selectionEnd);

	let start = e.target.selectionStart;
	let end = e.target.selectionEnd;

	let textoCompleto = input.value;
	contenedor.innerHTML = textoCompleto.substring(start, end);

});
