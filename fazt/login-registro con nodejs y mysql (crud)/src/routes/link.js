const express = require('express');
const router = express.Router();

const pool = require('../database');

const { isLoggedIn } = require('../lib/auth');

// cuando el navegador trate de enviar una peticion get 
router.get('/add', isLoggedIn, (req, res) => {
	// res.send('Form');
	res.render('links/add');
})

router.post('/add', isLoggedIn, async (req, res) => {
	const { title, url, description } = req.body;
	const newLink = {
		title,
		url,
		description,
		user_id: req.user.id
	};
	// usamos await porque la consulta le toma un tiemo 
	await pool.query('INSERT INTO links SET ?',[newLink]);
	// res.send("recibido");
	req.flash('success', 'Link saved successfully');
	res.redirect('/links');
});

router.get('/', isLoggedIn, async (req, res) => {
	const links = await pool.query('SELECT * FROM links WHERE user_id = ?', [req.user.id]);
	res.render('links/list', { links });
});

router.get('/delete/:id', isLoggedIn, async (req, res) => {
	const { id } = req.params;
	await pool.query('DELETE FROM links WHERE id = ?', [id]);
	req.flash('success', 'Link Removed Successfully');
	res.redirect('/links');
});

router.get('/edit/:id', isLoggedIn, async (req, res) => {
	const { id } = req.params;
	const links = await pool.query('SELECT * FROM links WHERE id = ?', [id]);
	res.render('links/edit', {links: links[0]});
});

router.post('/edit/:id',isLoggedIn,  async (req, res) => {
	const { id } = req.params;
	const { title, description, url } = req.body;
	const newLink = {
		title,
		description,
		url
	};

	await pool.query('UPDATE links SET ? WHERE id = ?', [newLink, id]);
	req.flash('success', 'Link Updated Successfully');
	res.redirect('/links');
});

module.exports = router;