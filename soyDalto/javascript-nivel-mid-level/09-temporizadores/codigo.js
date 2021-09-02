// le decimos que despues de 2 segundos nos diga hola

// const saludar = () => {
// 	document.write("hola");
// }

// setTimeout(saludar, 200);

const temporizador = setTimeout(() => {
	//document.write("hola");
}, 2000);

//clearTimeout(temporizador);

const temporizadorIntervalo = setInterval(() => {
	document.write("hola <br>");
}, 2000);

//clearTimeout(temporizadorIntervalo);

setTimeout(() => {
	clearInterval(temporizadorIntervalo);
}, 5000);