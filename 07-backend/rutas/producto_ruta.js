'use strict'

var express = require('express');
var ProductoControlador = require('../contradores/productoCtrl');

var ruta = express.Router();

// Rutas de pruebas
ruta.post('/datos-curso', ProductoControlador.datosCurso);
ruta.get('/test-de-controlador', ProductoControlador.test);

// Rutas de productos, rutas utiles
ruta.post("/save", ProductoControlador.save);


module.exports = ruta;