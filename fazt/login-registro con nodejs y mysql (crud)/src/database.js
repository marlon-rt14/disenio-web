const mysql = require('mysql');
const { promisify } = require('util');

const { database } = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
	if (err) {
		if (err.code === 'PROTOCOL_CONNECTION_LOST') { // la conexion con la base de datos se ha perdidio 
			console.error('DATABASE CONNECTION WAS CLOSED');
		}
		if (err.code === 'ER_CON_COUNT_ERROR') { // para combrobar cuantas conexiones tine la BDD hasta el momento
			console.error('DATABASE HAS TOO MANY CONNECTIONS');
		}
		if (err.code === 'ENCONNREFUSED') {
			console.error('DATABASE CONNECTION WAS REFUSED'); // por ejemplo cuando los credenciales no son correctos
		}
	}

	if (connection) connection.release();
	console.log('DB is Connected');
	return;
});

// convertir callbacks a promesas (cuando no se tiene async await)
pool.query = promisify(pool.query);

module.exports = pool;