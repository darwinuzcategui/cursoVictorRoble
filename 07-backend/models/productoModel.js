//  clases para crear un modelos
//  difinimos propiedades y estructuuras
//  modelo intectaur con la base datos
//  utilizo esto para comunicarme la colecion de articulos
'use strict'

var mongoose = require('mongoose');
var esquema = mongoose.Schema;

var ProductoEsquema = esquema({
    titulo: String,
    contenido: String,
    fecha: { type: Date, default: Date.now },
    image: String
});

module.exports = mongoose.model('Producto', ProductoEsquema);

// que mongoose.mode crear la coleccion basada en modelo ejmplo, nombre lo coloca en minuscula y lo plural
// productos-->Guarda documentos de este tipo y con estructura de colleción.