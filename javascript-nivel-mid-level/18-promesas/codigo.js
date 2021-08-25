
let nombre = "peddro";
// es un objeto un poco especial, un objeto promesa, ya que nos devuleve los datos encapsulados. y recibe como parametro una funcion
const promesa = new Promise((resolve, reject) => {
    if(nombre !== "pedro") reject("Lo siento, el nombre no es pedro");
    else resolve(nombre);
});

// cuando lanzamos algo con resolve o reject podemos accederlo con then()
// then() es un metodo que recibe un callback
// el then() es cuando sale todo bien y vemos el resolve()
promesa.then((resultado) => {
    console.log(resultado);
}).catch((e) => { // el catch lo usamos para menejar los erroes de las promesas 
    console.log(e);
})
