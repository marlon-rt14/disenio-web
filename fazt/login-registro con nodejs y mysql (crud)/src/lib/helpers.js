
const bcrypt = require('bcryptjs');

const helpers = {};


helpers.encryptPassword = async (password) => {
	const salt = await bcrypt.genSalt(10); //generar un patro, una cadena de caracteres
	const hash = await bcrypt.hash(password, salt); //cfrar la clave
	return hash;
};

helpers.matchPassword = async (password, savedPassword) => {
	try {
		return await bcrypt.compare(password, savedPassword);
	} catch (e) {
		console.log('ERROR');
	}

};

module.exports = helpers;
