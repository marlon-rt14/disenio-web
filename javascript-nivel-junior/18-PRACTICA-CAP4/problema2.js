const obtenerInformacion = (materia) => {
  const materias = {
    fisica: ["Perez", "pedro", "pepito", "cofla", "maria"],
    programacion: ["Dalto", "pedro", "juan", "pepito"],
    logica: ["Hernandez", "pedro", "juan", "pepito", "cofla", "maria"],
    quimica: ["Rodriguez", "pedro", "juan", "pepito", "cofla", "maria"],
  };
  if (materias[materia] !== undefined) {
    //return materias[materia];
    return [materias[materia], materia, materias];
  } else {
    return materias;
  }
};

const mostrarInformacion = (materia) => {
  let informacion = obtenerInformacion(materia);
  if (informacion !== false) {
    let profesor = informacion[0][0];
    let alumnos = informacion[0];
    alumnos.shift();
    document.write(
      `El profesor de <b>${informacion[1]}</b> es: <b style='color:red;'>${profesor}</b><br>Los alumnos son: <b style='color:blue;'>${alumnos}</b><br><br>`
    );
  }
};

const cantidadeDeClases = (alumno) => {
  let informacion = obtenerInformacion();
  let clasesPresentes = [];
  let cantidadTotal = 0;
  for (info in informacion) {
    if (informacion[info].includes(alumno)) {
      cantidadTotal++;
      clasesPresentes.push(" " + info);
    }
  }
  return `<b style='color:blue;'>${alumno}</b> esta en <b>${cantidadTotal}</b> clases: <b style='color:green;'>${clasesPresentes}</b><br><br>`;
}

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");


document.write(cantidadeDeClases("cofla"));
document.write(cantidadeDeClases("pedro"));