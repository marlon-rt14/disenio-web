// const getName = () => {
//   fetch("../data/informacion.txt")
//     .then((res) => {
//       // console.log(res);
//       if (res.ok) Promise.resolve(res);
//       else Promise.reject(res);
//     })
//     .then((res) => console.log(res))
//     .catch((e) => console.log(e));
// };

// #########################################################
// FETCH

// const getName = async () => {
//   let peticion = await fetch("../data/informacion.txt");
//   // console.log(peticion);
//   let resultado = await peticion.json();
//   // console.log(resultado);
//   let div = document.createElement("DIV");
//   div.classList.add("nombre");
//   div.innerHTML = resultado.nombre;
//   document.body.appendChild(div);
// };

// const getAge = async () => {
// 	let peticion = await fetch("../data/informacion.txt");
//   // console.log(peticion);
//   let resultado = await peticion.json();
//   // console.log(resultado);
//   let div = document.createElement("DIV");
//   div.classList.add("edad");
//   div.innerHTML = resultado.edad;
//   document.body.appendChild(div);
// };

// document.getElementById("getName").addEventListener("click", getName);
// document.getElementById("getAge").addEventListener("click", getAge);

// ##########################################################

// AXIOS

const getName = async () => {
  let resultado = await axios("../data/informacion.txt");
  // console.log(resultado);
  let div = document.createElement("DIV");
  div.classList.add("nombre");
  div.innerHTML = resultado.data.nombre;
  document.body.appendChild(div);
};

const getAge = async () => {
	let resultado = await axios("../data/informacion.txt");
  // console.log(resultado);
  let div = document.createElement("DIV");
  div.classList.add("edad");
  div.innerHTML = resultado.data.edad;
  document.body.appendChild(div);
};

document.getElementById("getName").addEventListener("click", getName);
document.getElementById("getAge").addEventListener("click", getAge);