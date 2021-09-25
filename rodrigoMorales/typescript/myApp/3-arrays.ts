let persona = {
  nombre: "marlon",
  edad: 23,
  direccion: {
    calle: "Calle Sucre",
    comuna: "Bolivar",
  },
  cursos: ["Flutter", "Patros de diseño", "SQL", 1],
};

// let hobbies: string[];
// hobbies = ['futbol', 'leer', 'escuchar musica', 1];

// let hobbies: any[];
// hobbies = ['futbol', 'leer', 'escuchar musica', 1];

let hobbies: string[] = ["futbol", "leer", "escuchar musica"];

for (const hobbie of hobbies) {
	console.log(hobbie.toUpperCase());
}

// console.log(hobbies);
