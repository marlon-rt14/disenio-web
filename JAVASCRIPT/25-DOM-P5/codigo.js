const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("P").innerHTML = "Parrafo";
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Titulo";

const h2_antiguo = document.querySelector(".h2");

// contenedor.replaceChild(h2_nuevo, h2_antiguo);
// contenedor.removeChild(h2_antiguo);

let respuesta = contenedor.hasChildNodes();

if (respuesta) {
	console.log("SI tiene hijos");
} else {
	console.log("No tiene hijos");
}

//##################33 PROPIEDADES DE LOS PARENTS

// console.log(h2_nuevo.parentElement);
// console.log(h2_nuevo.parentNode);


// ################## PROPIEDADES DE LOS SIBLINGS, (HERMANOS)
// console.log(h2_antiguo.nextSibling);
// console.log(h2_antiguo.previousSibling);

// console.log(h2_antiguo.nextElementSibling);
// console.log(h2_antiguo.previousElementSibling);


const div3 = document.querySelector(".div-3");
console.log(div3.closest(".div"));
















