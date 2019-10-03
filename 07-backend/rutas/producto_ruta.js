'use strict'

var express = require('express');
var ProductoControlador = require ('../contradores/productoCtrl');

var ruta = express.Router();

ruta.post('/datos-curso',ProductoControlador.datosCurso);
ruta.get('/test-de-controlador', ProductoControlador.test);

module.exports = ruta;

