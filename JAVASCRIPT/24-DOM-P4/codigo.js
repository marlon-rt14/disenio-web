// ########################################################################################## CREACION DE ELEMENTOS

// const contenedor = document.querySelector(".contenedor");

// const item = document.createElement("LI"); // un elemento no puede ser agregado una vez

// PRIMERA FORMA
// const textoDelItem = document.createTextNode("Este es un item de la lista");
// item.appendChild(textoDelItem);
// contenedor.appendChild(item);

//SEGUNDA FORMA
// item.innerHTML = "Este es un item de la lista"; // pero es un texto, y tiene diferencias ya que no es un objeto

// console.log(item);

// CREAR MUCHOS ELEMENTOS
// for (i = 0; i < 20; i++) {
//   // ESTO ES UN DESPERDICIO DE RECUROS YA QUE CON CADA PASADA EL DOM VA A BORRAR Y VOLVER A PINTAR EL ELEMENTO
//   const item = document.createElement("LI");
//   item.innerHTML = "Este es un elemento de la lista";
//   contenedor.appendChild(item);
// }

//CREAR MUCHOS ELEMENTOS SIN DESPERDICIAR RECURSOS

// const fragemento = document.createDocumentFragment();
// for (i = 0; i < 20; i++) {
//   const item = document.createElement("LI");
//   item.innerHTML = "Este es un elemento de la lista";
//   fragemento.appendChild(item);
// }
// contenedor.appendChild(fragemento);
// console.log(fragemento);

//########################################################################################## OBTENCION Y MODIFICACION DE CHILDS

const contenedor = document.querySelector(".contenedor");
const primerHijo = contenedor.firstChild;
const ultimoHijo = contenedor.lastChild;
const primerElementHijo = contenedor.firstElementChild;
const ultimoElementHijo = contenedor.lastElementChild;
const nodosHijos = contenedor.childNodes;
const hijos = contenedor.children;

// console.log(primerHijo);
// console.log(ultimoHijo);
// console.log(primerElementHijo);
// console.log(ultimoElementHijo);

// console.log(nodosHijos);
// nodosHijos.forEach(hijo => console.log(hijo));

console.log(hijos);
for (hijo of hijos) {
	console.log(hijo);
}
