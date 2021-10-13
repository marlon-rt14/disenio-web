const express = require('express');
const fetch = require('node-fetch-npm');

const router = express.Router();

router.get('/', async (req, res) => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const users = await response.json();
	res.json(users);
	// console.log(response);
})

module.exports = router;