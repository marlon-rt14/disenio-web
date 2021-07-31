class Calculadora {
  constructor() {}

  sumar(num1, num2) {
    return parseInt(num1) + parseInt(num2);
  }
  restar(num1, num2) {
    return parseInt(num1) + parseInt(num2);
  }
  multiplicar(num1, num2) {
    return parseInt(num1) + parseInt(num2);
  }
  dividir(num1, num2) {
    return parseInt(num1) + parseInt(num2);
  }
  exponenciar(num, exp) {
    return num ** exp;
  }
  raizCuadrada(num) {
    return Math.sqrt(num);
  }
  raizCubica(num) {
    return Math.cbrt(num);
  }
}

const calculadora = new Calculadora();

alert("Que operacion deseas realizar?");
let op = prompt(`1: suma, 2: resta, 3: multiplicacion, 4: division,
5: exponente, 6: raiz cuadrada, 7: raiz cubica`);

if (op == 1) {
  let num1 = prompt("Primer numero para sumar:");
  let num2 = prompt("Segundo numero para sumar: ");
  let resultado = calculadora.sumar(num1, num2);
  alert(`El resultado es: ${resultado}`);
} else if (op == 2) {
  let num1 = prompt("Primer numero para restar:");
  let num2 = prompt("Segundo numero para restar: ");
  let resultado = calculadora.restar(num1, num2);
  alert(`El resultado es: ${resultado}`);
} else if (op == 3) {
  let num1 = prompt("Primer numero para multiplicar:");
  let num2 = prompt("Segundo numero para multiplicar: ");
  let resultado = calculadora.multiplicar(num1, num2);
  alert(`El resultado es: ${resultado}`);
} else if (op == 4) {
  let num1 = prompt("Primer numero para dividir:");
  let num2 = prompt("Segundo numero para dividir: ");
  let resultado = calculadora.dividir(num1, num2);
  alert(`El resultado es: ${resultado}`);
} else if (op == 5) {
  let num = prompt("Ingrese a potenciar:");
  let exp = prompt("Segundo numero como exponente: ");
  let resultado = calculadora.exponenciar(num, exp);
  alert(`El resultado es: ${resultado}`);
} else if (op == 6) {
  let num = prompt("Conocer la raiz cuadrada de:");
  let resultado = calculadora.raizCuadrada(num);
  alert(`El resultado es: ${resultado}`);
} else if (op == 7) {
  let num = prompt("Conocer la raiz cubica de:");
  let resultado = calculadora.raizCubica(num);
  alert(`El resultado es: ${resultado}`);
}
