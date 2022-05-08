// let objeto = {
//   propiedad: "datos",
// };

// let variable1 = "string";

// let funcion = function () { }

// console.log(objeto.__proto__);
// console.log(variable1.__proto__);
// // console.log(funcion);

//////////////////////////////////////////

// let variable = ["pedro", 234, null];
// console.log(variable);

class Objeto {
  constructor() {}

  hablar() {
    console.log("hola");
  }
}

const obj = new Objeto();

// lo hacemos asi cuando queremos modificar el metodo el el prototipo
obj.__proto__.hablar = () => {
	console.log('modificado desde afuera');
}

// obj.hablar = () => {
// 	console.log('modificado afuera');
// }

// heredar un metodo del __proto__
let arr = [];
arr.__proto__ = obj
console.log(arr);

// obj.hablar();
// console.log(obj.__proto__.hablar);
