let trabajo = "240 minutos de trabajo";
let estudio = "100 minutos de estudio";
let tp = "100 minutos hacer trabajos practicos";
let homework = "30 minutos de cosas de la casa";
let descanso = "10 minutos de descanso";

console.log("TAREAS");
for (let i = 0; i < 14; i++) {
	if(i == 0){
		console.group("Semana 1");
	}
  console.groupCollapsed("Dia " + (i + 1));
  console.log(trabajo);
  console.log(descanso);
  console.log(estudio);
  console.log(tp);
  console.log(homework);
  console.groupEnd();
  
  if(i == 7){
	  console.groupEnd();
	  console.groupCollapsed("Semana 2");
  }
}

console.groupEnd();
console.groupEnd();



