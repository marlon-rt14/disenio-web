// const http = require('http');

// const server  = http.createServer((req, res) => {
// 	//enviar una respuesta al navegador 
// 	res.status = 200;
// 	//estableces cabecera indicando el tipo de contenido que vamos a enviar
// 	res.setHeader('Content-type', 'text/plain');
// 	res.end('hello world');
// });

// server.listen(3000, () => {
// 	console.log('Server on port 3000');
// })


const express = require('express');
const app = express(); // iniciamos el servidor

//enviamos algo cuando se hace una peticion get
app.get('/', (req, res) => {
	res.send('Hellow world');
});

app.listen(3000, () => {
	console.log('Server on port 3000');
})