var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var operadoraSchema = new mongoose.Schema({
	nome: String,
	codigo: Number,
	categoria: String,
	preco: Number
});

// Return model
module.exports = restful.model('Operadoras', operadoraSchema);