const button = document.querySelector(".button");
const contenedor1 = document.querySelector(".contenedor-1");
const contenedor2 = document.querySelector(".contenedor-2");
const input = document.querySelector(".input-prueba");


input.addEventListener("keydown", (e) => {
	console.log("Una tecla fue presionada");
});

input.addEventListener("keypress", (e) => {
	console.log("Un usuario presiono una tecla y la solto");
});

input.addEventListener("keyup", (e) => {
	console.log("una tecla fue soltada");
});