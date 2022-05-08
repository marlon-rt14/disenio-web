// GET
// fetch("https://reqres.in/api/unknow/2")
//   .then((res) => res.json()) // Nos devuelve una promesa unsamon un .then() para acceder a la respuesta encapsulada
//   // como resultado del metodo text() nos devuelve otra promesa
//   .then((res) => console.log(res)); // Usamos otro .then() para acceder al valor de la respuesta pero ya como un dato valido

// ------------------------------------------------------------

const imagen = document.querySelector('.imagen');

fetch("../img/diferencia.jpg")
	.then(res => res.blob())
	.then(img => imagen.src = URL.createObjectURL(img));

// ################################################

// POST
// let nuevo = {
//   nombre: "marlon",
//   edad: 24,
// };

// fetch("https://reqres.in/api/users", {
//   method: "POST",
//   body: JSON.stringify(nuevo),
//   headers: { "Content-type": "application/json" },
// })
//   .then((res) => res.json())
//   .then((res) => console.log(res));
