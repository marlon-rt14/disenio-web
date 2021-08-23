const nombre = document.getElementById("nombre");
const email = document.getElementById("mail");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");

// console.log(boton);

boton.addEventListener("click", (e) => {
  //evita que se envien los datos, que se recargue la pagina
  e.preventDefault();
  let error = validarCampos();
  if (error[0]) {
    resultado.innerHTML = error[1];
    resultado.classList.add("red");
    resultado.classList.remove("green");
  } else {
    resultado.innerHTML = "Solicitud enviada correctamente";
    resultado.classList.add("green");
    resultado.classList.remove("red");
  }
});

const validarCampos = () => {
  let error = [];
  if (nombre.value.length < 5 || nombre.value.length > 40) {
    error[0] = true;
    error[1] = "El nombre es inválido";
    return error;
  } else if (
    email.value.length < 5 ||
    email.value.length > 40 ||
    email.value.indexOf("@") == -1 ||
    email.value.indexOf(".") == -1
  ) {
    error[0] = true;
    error[1] = "El mail es invalido";
    return error;
  } else if (materia.value.length < 4 || materia.value.length > 40) {
	  error[0] = true;
	  error[1] = "La materia no existe";
	  return error;
  }
  error[0] = false;
  return error;
};
