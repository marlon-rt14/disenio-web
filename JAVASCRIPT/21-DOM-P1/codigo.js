//######################################################
// Document - Metodos de Seleccion de elementos

//de esta forma seleccionarmos un elemento por el ID
//parrafo = document.getElementById("parrafo");
//document.write(parrafo);

//nos devuelve una lista, una coleccione de elementos con la etiqueta "p"
//parrafo = document.getElementsByTagName("p");
//document.write(parrafo);
// document.write(parrafo[0]);

//_____________________________________-
//usamos los selectores que vemos en CSS
// - para clases
// # para IDs

// parrafo = document.querySelector(".parrafo");
// document.write(parrafo);

//para seleccionar todos los elementos
// parrafo = document.querySelectorAll(".parrafo");
// document.write(parrafo + "<br>");
// document.write(parrafo[0]);

//##############################################
// Metodos para Definir, Obtener y Eliminar de atributos

// const rangoEtario = document.querySelector(".rangoEtario");
// // document.write(rangoEtario + "<br>");
// // rangoEtario.setAttribute("type", "text");
// // document.write(rangoEtario.getAttribute("type") + "<br>");
// rangoEtario.removeAttribute("type");

// //###############################################
// Atributos globales

const titulo = document.querySelector(".titulo");
const link = document.querySelector(".links");

//titulo.setAttribute("contentEditable", "true");
//titulo.setAttribute("dir", "rtl");
//titulo.setAttribute("hidden", "true");
//link.setAttribute("tabindex", "0");
titulo.setAttribute("title", "jajajaja xd");
