console.assert(5<3);

//.info() es un mensaje informativo
console.info("che muy bien tu trabajo eh, pero ya no se usa mas");

//.log() es un mensaje de depuracion
console.log("che muy bien tu trabajo eh, pero ya no se usa mas");

//.info() y .log() son casi lo mismo.

console.table([4,78,8,54,654,56,43,465,4,4]);

//mensaje de advertencia
console.warn("che capo, venis bien, pero cuidado porque...");


//.info() y .dir() son casi lo mismo. dir() nos dice el tipo de dato

console.info([4,78,8,54,654,56,43,465,4,4]);
console.dir([5,84,64,6,435,42,1,424,864,5]);

console.count();
console.count();
console.count();
console.count();
console.count();
console.count();
console.count();
console.countReset();
console.count();


console.group("principal");
console.log("hola");
console.log("pedro");
console.groupEnd();


//modificar la letra de la consola
console.log("%crancio","color:#fff;background:#000;border:4px solid red;padding:20px 100px;font-size:50px");