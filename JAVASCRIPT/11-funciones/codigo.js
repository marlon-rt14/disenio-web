
function saludar(){
	let respuesta = prompt("¡Hola Lucas! ¿Como fue tu dia?");
	if (respuesta == "bien") {
		alert("Me alegro");
	}else {
		alert("una pena");
	}
}

//saludar();

function saludo2(){
	//alert("hola");
	return "El saludo funciono correctamente";
}

let respuestaSaludo = saludo2();
//document.write(`${respuestaSaludo} <br>`);


function suma(num1, num2){
	let res = num1 + num2;
	document.write(num1 + num2);
	document.write("<br>");
	//eturn res;
	//return num1 + num2;
}
//document.write(suma(32,12));
suma(12,44);
suma(12,55);


//FUNCIONES FLECHA

const saludo3 = (nombre) => {
	let frase = `¡Hola ${nombre}!, ¿Como estas?`
	document.write(frase + "<br>");
}
saludo3("marlon");

