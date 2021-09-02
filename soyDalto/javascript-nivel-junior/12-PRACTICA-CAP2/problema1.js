// let personas = [1, 2, 3, 4, 5];

// for (let i = 1; i <= personas.length; i++) {
//   let edad = prompt("¿Cual es su edad?");
//   let hora = prompt("Hora que entra: ");
//   if (hora >= 2 && hora < 3) {
//     document.write(`Persona ${i}: `);
//     document.write("Entras y no pagas" + "<br>");
//     continue;
//   }
//   if (edad >= 18) {
//     document.write(`Persona ${i}: `);
//     document.write("Por ser mayor de edad entras. <br>");
//   } else {
//     document.write(`Persona ${i}: `);
//     document.write(`Eres menor de edad boludo <br>`);
//   }
// }

let free = false;

const validarClient = tiempo => {
	let edad = prompt("¿Cual es tu edad?");
	if (edad >= 18) {
		if (tiempo >= 2 && tiempo < 7 && free == false) {
			alert("podes pasar gratis");
			free = true;
		}else{
			alert("podes pasar, perto tienes que pagar");
		}
	}else{
		alert("mira papu, sos menor de edad y no podes pasar.")
	}
}

//validarClient(2.30);
