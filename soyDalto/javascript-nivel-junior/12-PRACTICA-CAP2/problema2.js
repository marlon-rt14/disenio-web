
let cantidad = prompt("¿Cuantos alumnos son?");
let alumnos = [];

for(let i = 0; i < cantidad; i++){
	alumnos[i] = [prompt("Nombre del alumno " + (i + 1)), 0];
}

// document.write(alumnos);

const asistencia = (nombre, p) => {
	let presencia = prompt(nombre);
	if(presencia == "p" || presencia == "P"){
		alumnos[p][1]++;
	}
}

// document.write("<br>");
for(let i = 0; i < 30; i++){
	for(item in alumnos){
		// document.write(item);
		// document.write("<br>");
		// document.write(alumnos[item][0]);
		asistencia(alumnos[item][0], item);
	}
}

for(item in alumnos){
	let resultado = `${alumnos[item][0]}: <br>
	____________ Presentes: ${alumnos[item][1]} <br>
	____________ Ausencias: ${30 - alumnos[item][1]} <br>`;
	if (30 - alumnos[item][1] > 18) {
		resultado += `<b style='color: red'>REPROBADO POR INASISTENCIA </b><br><br>`;
	}else{
		resultado += "<br><br>";
	}

	document.write(resultado);
}