const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json());
// app.use(morgan('dev'));

//ROUTING

app.get('/user', (req, res) => {
	res.send('GET REQUEST RECEIVED');
});


// MIDDLEWARES 
//si no coincide con ninguna ruta anterior ejecuta este metodo
app.use(express.static('public'));


app.listen('3000', () => {
	console.log('Server running on port 3000');
});