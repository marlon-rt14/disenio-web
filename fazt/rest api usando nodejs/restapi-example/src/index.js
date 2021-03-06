const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000); // en caso exista algun puerto definido en la nube
app.set('json spaces', 2);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false })); // vamos a tratar de entender los datos que vienen desde formularios. datos basicos como inputs

// Global Variables

// Routes
app.use(require('./routes'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));
app.use('/api/local', require('./routes/usersLocal'));

// Public

// Starting Server
app.listen(app.get('port'), () => {
	console.log('Server on port ' + app.get('port'));
});