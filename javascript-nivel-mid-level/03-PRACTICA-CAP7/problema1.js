// let alto = window.screen.availHeight; // es la altura que puede tener la window del browser si esta maximizada, incluidas las barras del browser mientras que screen.height basicamente es el alto total de la pantalla
// let ancho = screen.availWidth;

let alto = window.screen.height;
let ancho = window.screen.width;

let comprar = confirm(`El alto es: ${alto}, el ancho es: ${ancho}`);

if (comprar) {
  alert("Compra realizada exitosamente");
} else {
  alert("Compra cancelada");
}
