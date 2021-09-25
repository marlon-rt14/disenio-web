
enum role { estudiante, profesor };

let persona = {
  nombre: "marlon",
  edad: 23,
  direccion: {
    calle: "Calle Sucre",
    comuna: "Bolivar",
  },
  cursos: ["Flutter", "Patros de diseño", "SQL", 1],
	role: role.estudiante
};

console.log(persona);