// function suma(num1, num2){
// 	return resultado;
// }

// function resta(num1, num2){
// 	return resultado;
// }

// function multiplicacion(num1, num2){
// 	return resultado;
// }

// function division(num1, num2){
// 	return resultado;
// }

const suma = (num1, num2) => {
  return parseInt(num1) + parseInt(num2);
};

const resta = (num1, num2) => {
  return parseInt(num1) - parseInt(num2);
};

const multiplicacion = (num1, num2) => {
  return parseInt(num1) * parseInt(num2);
};

const division = (num1, num2) => {
  return parseInt(num1) / parseInt(num2);
};

alert("¿Que operacion deseas realizar?");
let operacion = prompt("1: summa, 2: resta, 3: multiplicion, 4: division");
let resultado;
if (operacion == 1) {
  resultado = suma(prompt("numero 1"), prompt("nummero 2"));
} else if (operacion == 2) {
  resultado = resta(prompt("numero 1"), prompt("nummero 2"));
} else if (operacion == 3) {
  resultado = multiplicacion(prompt("numero 1"), prompt("nummero 2"));
} else if (operacion == 4) {
  resultado = division(prompt("numero 1"), prompt("nummero 2"));
}else {
	alert("No se ha encontrado la operacion");
}

document.write(`El resultado es: ${resultado}`);
