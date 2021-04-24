// path module 
const path = require('path');
// express module
const express = require('express');
// hbs view engine
const hbs = require('hbs');
const app = express();

// set dynamic views file
app.set('views', path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');

app.use(express.urlencoded());

// set public folder as static folder for static file
app.use(express.static('public'));
// route untuk halaman home
app.get('/', (req, res) => {
	// render file index.hbs
	res.render('index', {
		email : "Andik Script",
		name : "AnSap"
	});
});

// route untuk halaman home dengan parameter name
// app.get('/:name', (req, res) => {
// 	res.render('index', {
// 		name : req.params.name
// 	});
// });

// route untuk halaman form
app.get('/form', (req, res) => {
	res.render('form');
});

// route untuk submit form
app.post('/result', (req, res) => {
	res.render('result', {
		email : req.body.email,
		password : req.body.password
	});
});

// route untuk halaman about
app.get('/about', (req,res) => {
	res.send('Welcome to about');
});

app.listen(8080, () => {
	console.log('Server running at port 8080');
});