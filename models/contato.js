

var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var contatoSchema = new mongoose.Schema({
	serial: String, 
	nome: String,
	telefone: String,
	data: String,
	cor: String,
	operadora: {}
});

// Return model
module.exports = restful.model('Contatos', contatoSchema);