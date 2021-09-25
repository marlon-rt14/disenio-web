// let persona2 = {
//   nombre: "marlon",
//   edad: 23,
//   direccion: {
//     calle: "Calle Sucre",
//     comuna: "Bolivar",
//   },
// };

let persona: {
  nombre: string;
  edad: number;
  direccion: {
    calle: string;
    comuna: string;
  };
} = {
  nombre: "marlon",
  edad: 23,
  direccion: {
    calle: "Calle sucre",
    comuna: "Bolivar",
  },
};

console.log(persona);
console.log(persona.nombre);
