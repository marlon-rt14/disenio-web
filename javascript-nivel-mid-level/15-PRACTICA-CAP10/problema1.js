const sendButton = document.getElementById("snd-nota");

sendButton.addEventListener("click", () => {
  let resultado, mensaje;
  try {
    let prevRes = parseInt(document.getElementById("nota").value);
    if (window.isNaN(prevRes)) {
      throw "Gracioso";
    }
		resultado = verificarAprobacion(8, 4, prevRes);
		mensaje = definirMensaje(resultado[1]);
  } catch (e) {
    resultado = "¿SOS GRACIOSO?";
    mensaje = "He descubierto que intentaste hackear el sitio";
  }
  abrirModal(resultado[0], mensaje);
});

const definirMensaje = (pr) => {
  let resultado;
  switch (pr) {
    case 1:
      resultado = "No podes set tan HDP";
      break;
    case 2:
      resultado = "Sos malisimo para mi materia";
      break;
    case 3:
      resultado = "No sabes casi nada";
      break;
    case 4:
      resultado = "Muy mal";
      break;
    case 5:
      resultado = "Mal";
      break;
    case 6:
      resultado = "Regular";
      break;
    case 7:
      resultado = "¡Bien pero puedes mejorar!";
      break;
    case 8:
      resultado = "¡Muy bien!";
      break;
    case 9:
      resultado = "¡Excelente!";
      break;
    case 10:
      resultado = "¡Insuperable hijo de su pinhi madre!";
      break;
    default:
      resultado = null;
	}
	return resultado;
};

const verificarAprobacion = (nota1,nota2,pr) => {
	let promedio = (nota1 + nota2 + pr) / 3;
	if (promedio >= 7) {
		return [`<span class='green'>APROBADO</span>`, Math.round(promedio)];
	}
		return [`<span class='red'>DESAPROBADO</span>`, Math.round(promedio)];
}

const abrirModal = (res, msg) => {
	document.querySelector(".resultado").innerHTML = res;
	document.querySelector(".mensaje").innerHTML = "Tu prueba: " + msg;
	let modal = document.querySelector(".modelo-background");
	modal.style.display = "flex";
	modal.style.animation = "aparecer 1s forwards";
};
