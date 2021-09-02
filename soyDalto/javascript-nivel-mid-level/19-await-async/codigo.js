
const objeto = {
  propiedad1 : "valor1",    
  propiedad2 : "valor2",    
  propiedad3 : "valor3"    
};

const obtenerInformacion = ()  => {
      //return objeto;
      //setTimeout(()  => {return objeto}, 1000);
      return new Promise((resolve, reject) => {
	    setTimeout(() => {resolve(objeto)}, 3000);
      })
}

//console.log(obtenerInformacion());
//obtenerInformacion().then(resultado => console.log(resultado));


const mostrarResultado = async ()  => {
    resultado = await obtenerInformacion();
    console.log(resultado);
}

mostrarResultado();

//async function mostrarResultado()  {
     //// es igual a la anterior  
//}
