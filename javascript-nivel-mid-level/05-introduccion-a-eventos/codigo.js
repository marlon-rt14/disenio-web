const button = document.querySelector(".button");


//Ya no es recomendable - onEventHandlers
// button.onclick = () => {
// 	alert("Hola");
// }


// Forma recomendable - EventListeners
//sin parametros
// button.addEventListener("click", saludar);
// function saludar() {
// 	alert("Hola");
// 	button.removeEventListener("click", saludar); //removemos el evento
// }

//Con parametros
// button.addEventListener("click", () => {
// 	alert("Hola");
// });


//###########################################################

//objeto event
// button.addEventListener("click", (evt) => {
// 	console.log(evt.target);
// });



// ################################################################################################

//flujo de eventos o event flow
const contenedor = document.querySelector(".contenedor");

button.addEventListener("click", (evt) => {
	alert("Di click en un boton ");
	evt.stopPropagation(); // de esta forma hacemos que la pila de eventos se dentenga, y solo se ejecute el evento del boton en este caso.
	// Lo que hace es que se dejen de ejecutar todos los eventso que estaban asociados, que no se ejecute ningun evento mas .
});

contenedor.addEventListener("click", (evt) => {
	alert("Di click en el contenedor");
});

//event capturing
// contenedor.addEventListener("click", (evt) => {
// 	alert("Di click en el contenedor");
// }, true);

