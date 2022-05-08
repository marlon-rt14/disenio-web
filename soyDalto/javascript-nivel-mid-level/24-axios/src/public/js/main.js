// fetch('../data/informacion.txt')
// 	.then(res => res.json())
// 	.then(data => console.log(data));


// ########################################################
// axios('../data/informacion.txt')
// 	.then(res => console.log(res.data));

// axios.post('https://reqres.in/api/users', {
// 	"nombre": "marlon",
// 	"apellido": "ruiz"
// })
// 	.then(res => console.log(res.data));

// Tambien podemon abrir las configuraciones de axios
axios('https://reqres.in/api/users', {
	method: "post",
	data: {"nombre": "marlon"}
})
	.then(res => console.log(res.data));