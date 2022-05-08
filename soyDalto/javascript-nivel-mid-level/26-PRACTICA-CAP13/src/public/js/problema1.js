const getInfo = async () => {
  let aprobados = document.querySelector(".num-aprobados");
  let desaprobados = document.querySelector(".num-desaprobados");
  try {
    let resultado = await axios("../data/informacion.txt");
    aprobados.innerHTML = resultado.data.aprobados;
    desaprobados.innerHTML = resultado.data.desaprobados;
  } catch (e) {
    aprobados.innerHTML = "La API falló";
    desaprobados.innerHTML = "La API falló";
  }
};

document.getElementById("getInfo").addEventListener("click", getInfo);
