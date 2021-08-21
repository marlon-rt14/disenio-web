let nombres = [
  "abecedario",
  "maria",
  "jorge",
  "manzana",
  "pedro",
  "dedo",
  "bobo",
];
let numeros = [5, 4, 3, 2, 1];

//document.write("Array original: <b>" + nombres + "</b><br>");
// document.write("Array original: <b>" + numeros + "</b><br>");

//let resultado = nombres.pop();
//let resultado = nombres.shift();
//document.write("Elemento removido: <b style='color: #f00;'>" + resultado + "</b><br>");

//let resultado = nombres.push("juancito");
//let resultado = nombres.push("juancito","robert");
//document.write("Posicion del nuevo elemento: <b>" + resultado + "</b><br>");

// document.write("Reverse <br>");
// document.write(numeros + "<br>");
// let resultado = numeros.reverse();
// document.write(resultado);
//document.write("Elemento removido: <b>" + numeros.unshift(0) + "</b></br>");
//document.write("Resultado: <b>" + numeros.sort() + "</b></br>");

// //SPLLICE
// document.write("Array original: <b>" + nombres + "</b><br>");
// //document.write("Elementos removidos: <b style='color: #f00;'>" + nombres.splice(1, 3) + "</b></br>");
// document.write("Elementos reemplazados: <b style='color: #f00;'>" + nombres.splice(1, 3, "roberto", "gustavo", "maximo") + "</b></br>");
// document.write("Resltado: <b>" + nombres + "</b><br>");

//document.write("Resultado: <b>" + nombres + "</b></br>");
// document.write("Resultado: <b>" + numeros + "</b></br>");

//_______________________- ASESORES _______________________---

// document.write(nombres + "<br>");

// //let resultado = nombres.join("<br>elemento: ");
// let resultado = nombres.slice(0, 3);

// //document.write("elemento: " + resultado); //join
// document.write(resultado); //slice

//________________ DE REPITICION _____________________

//nombres.filter((valor) => document.write(valor + "<br>"));

//Aqui estamos diciendo que si cada palabra del array es mayor a cuatro letras nos la muestre, la vaya agregando a la variable resultado que tambien es un array
let resultado = nombres.filter( valor => valor.length > 5);
document.write(resultado);

// numeros.filter(function (valor) {
//   document.write(valor + "<br>");
// });
