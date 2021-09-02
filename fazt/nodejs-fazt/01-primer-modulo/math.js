
const Math = {};

function add(num1, num2) {
	return num1 + num2;
}

function substract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	if (num2 == 0) {
		console.log("No se puede dividir por 0");
		return "Syntax Error";
	} else {
		return num1 / num2;
	}
}

function hello(name){
    console.log("hola ", name);
}


Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

module.exports = Math;
module.exports = hello;

//exports.<nombre> = <la funcion que vamos a llamar>
//exports.add = add;
//exports.substract = substract;
//exports.multiply = multiply;
//exports.divide = divide;

// console.log(divide(9, 0));
