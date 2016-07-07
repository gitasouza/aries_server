var express = require('express');
var router = express.Router();

// Models
var Product = require('../models/product');
var Contato = require('../models/contato'); 
var Operadora = require('../models/operadora'); 

// Routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');

Contato.methods(['get', 'put', 'post', 'delete']);
Contato.register(router, '/contatos');

Operadora.methods(['get', 'put', 'post', 'delete']);
Operadora.register(router, '/operadoras');

module.exports = router;