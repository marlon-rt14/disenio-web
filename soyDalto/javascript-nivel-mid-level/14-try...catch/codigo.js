
try {
    dlkfjsdlkfajlkj
}catch(error){
    //typeof nos sirve para ver el tipo de dato
    console.log(typeof error);
    console.log("Se ha ocurrido un error de referencia");
    if(3 > 2){
	console.log("Se ejecuta esta accion por verdadero");
    }else{
	console.log("Se ejecuta esta accion por falso");
    }
}finally{
    console.log("me muestro igual");
}


const pruebaTry = () =>{
    try{
	return 1;
    }catch(e){
	return 2;
    }finally{
	return 3;
    }
}

console.log(pruebaTry());


try {
    throw "pito"
    throw { // lanzamos un array asociado como error
	error: "Nombre del error";
	info: "Descripcion del error";
    }
}catch(e){
    console.log(e);
    console.log(e.error);
    console.log(e.info)
}finally{

}
