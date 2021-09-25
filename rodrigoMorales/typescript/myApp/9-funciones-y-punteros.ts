// retorno numero
function sumar(valor1: number, valor2: number) {
  return valor1 + valor2;
}

// retorno string
function concatenar(valor1: number, valor2: number): string {
  return valor1.toString() + valor2;
}

// retorno void, ejecutable
function imprimir() {
  console.log(sumar(2, 3));
  console.log(concatenar(2, 3));
  console.log(multiplicar(2, 3));
  console.log(dividir(2, 3));
}

// FUNCIONES FLECHA

const multiplicar = (valor1: number, valor2: number) => {
  return valor1 * valor2;
};

// funcion flecha retornando string
const dividir = (valor1: number, valor2: number): string => {
  return valor1 / valor2 + "";
};

// OTRAS FUNCIONES

const throwError = (message: string) => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

// PUTEROS

// let sumar2 = sumar; // tiene que ser en la misma linea de lo contrario nos devolvera any

// let sumar2: Function;
// sumar2 = imprimir;

let sumar2: (a: number, b: number) => number;
sumar2 = sumar;

console.log(sumar2(6, 4));

// imprimir();
