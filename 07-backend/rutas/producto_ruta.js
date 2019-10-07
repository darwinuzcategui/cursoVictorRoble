'use strict'

var express = require('express');
var ProductoControlador = require('../contradores/productoCtrl');

var ruta = express.Router();

// Rutas de pruebas
ruta.post('/datos-curso', ProductoControlador.datosCurso);
ruta.get('/test-de-controlador', ProductoControlador.test);

// Rutas de productos, rutas utiles
ruta.post('/save', ProductoControlador.save);
ruta.get('/productos/:ultimos?',ProductoControlador.getProducto);
ruta.get('/producto/:id',ProductoControlador.getUnProducto);
ruta.put('/producto/:id',ProductoControlador.actualizar);
ruta.delete('/producto/:id',ProductoControlador.eliminar);

module.exports = ruta;