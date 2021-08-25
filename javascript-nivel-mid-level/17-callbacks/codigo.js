//forma normal
// function prueba(callback){
//     callback("pedro");
// }

// function decirNombre(nombre){
//     console.log(nombre);
// }

// prueba(decirNombre);

// prueba(function decirNombre(nombre){
//     console.log(nombre);
// })

// prueba(function (nombre){
//     console.log(nombre);
// })

// prueba((nombre) => {
//     console.log(nombre);
// })

// prueba(nombre => console.log(nombre));

// // CALLBACKS

// class Persona {
//     constructor(nombre, instagram) {
//         this.nombre = nombre;
//         this.instagram = instagram;
//     }
// }

// // persona = new Persona("lucas dalto", "@soydalto");
// // console.log(persona);

// //crear muchas personas
// const data = [
//     ["Lucas Dalto", "@SoyDatlo"],
//     ["Robertico", "@Robertico"],
//     ["Rancio Ramirez", "@RancioRamirez"],
//     ["Camila Nesa"]
// ];

// const personas = [];

// for (let i = 0; i < data.length; i++){
//     personas[i] = new Persona(data[i][0], data[i][1]);
// }

// // console.log(personas);
// // console.log(personas[0]);
// // console.log(personas[0].nombre);

// const obtenerPersona = (id, cb) => {
//     if (personas[id] == undefined) {
//         cb("No se ha encontrado la persona");
//     } else {
//         cb(null ,personas[id], id);
//     }
// }

// const obtenerInstagram = (id, cb) => {
//     if (personas[id].instagram == undefined) {
//         cb("No se ha encontrado el IG de la persona");
//     } else {
//         cb(null ,personas[id].instagram);
//     }
// }

// obtenerPersona(3, (err, persona, id) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(persona.nombre);
//         // console.log(persona.instagram);
//         obtenerInstagram(id, (err, instagram) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(instagram);
//             }
//         });
//     }
// })

// CALLBACKS CON PROMESAS

class Persona {
  constructor(nombre, instagram) {
    this.nombre = nombre;
    this.instagram = instagram;
  }
}

const data = [
  ["Lucas Dalto", "@SoyDatlo"],
  ["Robertico", "@Robertico"],
  ["Rancio Ramirez", "@RancioRamirez"],
  ["Camila Nesa"],
];

const personas = [];

for (let i = 0; i < data.length; i++) {
  personas[i] = new Persona(data[i][0], data[i][1]);
}

// console.log(personas);
// console.log(personas[0]);
// console.log(personas[0].nombre);

const obtenerPersona = (id) => {
  return new Promise((resolve, reject) => {
    if (personas[id] == undefined) reject("No se ha encontrado la persona");
    else resolve(personas[id]);
  });
};

const obtenerInstagram = (id) => {
  return new Promise((resolve, reject) => {
    if (personas[id].instagram == undefined)
      reject("No se ha encontrado el instagram");
    else resolve(personas[id].instagram);
  });
};

// obtenerPersona(3).then((persona) => {
//     console.log(persona.nombre);
//     obtenerInstagram(3).then((instagram) => {
//         console.log(instagram);
//     })
// })

let id = 4;
obtenerPersona(id)
  .then((persona) => {
    console.log(persona.nombre);
    return obtenerInstagram(id);
  })
  .then((instagram) => {
    console.log(instagram);
  })
  .catch((e) => {
    console.log(e);
  });

// obtenerPersona(3)
//   .then((persona) => {
//     console.log(persona.nombre);
//     return obtenerInstagram(3);
//   })
//   .then((instagram) => {
//     console.log(instagram);
//   })
//   .then((instagram) => {
//     console.log(instagram);
//   })
//   .then((instagram) => {
//     console.log(instagram);
//   })
//   .then((instagram) => {
//     console.log(instagram);
//   })
//   .then((instagram) => {
//     console.log(instagram);
//   })
//   .then((instagram) => {
//     console.log(instagram);
//   })
//   .then((instagram) => {
//     console.log(instagram);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
