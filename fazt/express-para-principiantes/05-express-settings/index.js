const express = require('express');
const morgan = require('morgan');

const app = express();

// settings
app.set('appName', 'Fazt Express Tutorial');
app.set('port', '3000');
app.set('view engine', 'ejs'); // establecer como motod de plantilal ejs


// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
	const data = [{name: "john"}, {name: "joe"}, {name: 'cameron'}, {name: 'ryan'}];
	res.render('index.ejs', {people: data}); //le enviamos a nuestra vista los datos
});

app.get('/user', (req, res) => {
	res.send('GET REQUEST RECEIVED');
});


// MIDDLEWARES 
//si no coincide con ninguna ruta anterior ejecuta este metodo
app.use(express.static('public'));


app.listen(app.get('port'), () => {
	console.log(app.get('appName'));
	console.log('Server running on port', app.get('port'));
});