var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Mongo DB
mongoose.connect('mongodb://localhost:27017/rest_full');


// Express
var app = express();

// Para acessar a API fora desta origem
app.all('*', function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});



app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Rotas
app.use('/api', require('./routes/api'));

// Start Server
app.listen(3000);
console.log('rodando');