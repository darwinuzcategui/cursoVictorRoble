'use strict';

var express = require('express');
var ProductoControlador = require('../contradores/productoCtrl');

var ruta = express.Router();
// vamos a cargar el modulo multipart
var multipart = require('connect-multiparty');
var md_subir = multipart({ uploadDir: './upload/productos' });

// FIXME: prueba  ERROR POR ACOMODAR EJEMPLO
// Rutas de pruebas
ruta.post('/datos-curso', ProductoControlador.datosCurso);
ruta.get('/test-de-controlador', ProductoControlador.test);

// Rutas de productos, rutas utiles
ruta.post('/save', ProductoControlador.save);
ruta.get('/productos/:ultimos?', ProductoControlador.getProducto);
ruta.get('/producto/:id', ProductoControlador.getUnProducto);
ruta.put('/producto/:id', ProductoControlador.actualizar);
ruta.delete('/producto/:id', ProductoControlador.eliminar);
// para aplicar un midware a la rutra se coloca como segunco parametro
ruta.post('/subir-imagen/:id?', md_subir, ProductoControlador.subir);
ruta.get('/get-imagen/:imagen', ProductoControlador.getImagen);
ruta.get('/buscar/:buscar', ProductoControlador.buscar);

module.exports = ruta;
