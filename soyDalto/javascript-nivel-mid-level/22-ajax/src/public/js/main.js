// let peticion;

// if (window.XMLHttpRequest) {
// 	peticion = new XMLHttpRequest();
// } else {
// 	peticion = new ActiveXObject("Microsoft.XMLHTTP");
// }

// // console.log(peticion);

// // HACER ESTAS VALIDACIONES QUEDO EN EL PASO PORQUE ES MUCHA PAJA
// // peticion.addEventListener("readystatechange", () => {
// //   // console.log(peticion.readyState);
// //   // console.log(peticion.response);
// //   if (peticion.readyState == 4) {
// //     if (peticion.status == 200) {
// //       console.log(peticion.response);
// //     } else {
// //       console.log(peticion.status);
// //     }
// //   }
// // });

// // AHORA SE USA
// peticion.addEventListener('load', () => {
// 	let respuesta;
// 	if (peticion.status == 200) respuesta = peticion.response;
// 	else respuesta = "Lo siento no se ha encontrado el recurso";
// 	// console.log(respuesta);
// 	console.log(typeof respuesta);
// 	console.log(JSON.parse(respuesta));
// })

// peticion.open("GET", "../data/informacion.txt");
// peticion.send(); // enviamos la peticion

// // console.log(peticion);

//#######################################################

let peticion;

if (window.XMLHttpRequest) {
  peticion = new XMLHttpRequest();
} else {
  peticion = new ActiveXObject("Microsoft.XMLHTTP");
}

// console.log(peticion);

// AHORA SE USA
peticion.addEventListener("load", () => {
  let respuesta;
  if (peticion.status == 200 || peticion.status == 201)
    respuesta = peticion.response;
  else respuesta = "Lo siento, no se ha encontrado el recurso";
  // console.log(peticion);
  console.log(JSON.parse(respuesta));
});

peticion.open("POST", "https://reqres.in/api/users");
peticion.setRequestHeader("Content-type", "application/json;charset=UTF8");
peticion.send(
  JSON.stringify({
    nombre: "Marlon",
    edad: 24,
  })
); // enviamos la peticion

// console.log(peticion);
