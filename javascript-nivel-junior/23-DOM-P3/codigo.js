// const titulo = document.querySelector(".titulo");

// titulo.classList.add("grande");

// titulo.classList.remove("grande");

// let valor = titulo.classList.item(1);
// document.write(valor);

// let nombreDeClase = "grande";
// let valor = titulo.classList.contains(nombreDeClase);
// document.write(valor);
// if (valor) {
//   document.write(`la clase "${nombreDeClase}" SI existe`);
//   titulo.classList.remove(nombreDeClase);
// } else {
//   document.write(`la clase "${nombreDeClase}" NO existe`);
//   titulo.classList.add(nombreDeClase);
// }

// titulo.classList.toggle(nombreDeClase, true); // toggle nos ahorra el codigo de arriba de si la tiene la remueve o si no la tiene la agrega

// titulo.classList.replace("grande", "chico");

//########################################################################################## CREACION DE ELEMENTOS

const titulo = document.querySelector(".titulo");

// let resultado = titulo.textContent;
// let resultado = titulo.innerText;
// let resultado = titulo.outerText; // YA NO SE USA

// let resultado = titulo.textContent;

// document.write(resultado);

let resultado = titulo.outerHTML;

alert(resultado);
