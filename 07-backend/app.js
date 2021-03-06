'use strict'

// Cargar Modulos de Node para crear servidor
var express   = require ('express'); // para servidor
var bodyParser= require ('body-parser'); //  para poder cargar peticion pasarla objeto Json

// Ejecutar express (http)
var app = express(); // para cargar la app eso lo que se a exporta v

// Cargar Ficheros rutas

var producto_ruta = require('./rutas/producto_ruta');


// Middlewares --> es algo que se ejecuta ante de cargar una ruta o url app
app.use(bodyParser.urlencoded({extended:false}));// utilizar el body parse cargarlo
app.use(bodyParser.json()); // aqui convirte cualquier peticion a json



// CORS activar en CORS PARA Permitir peteicion de los clients
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



// Añadir prefijos O rutas /Cargar rutas
app.use('/api/v0',producto_ruta);



// Exportar modulo (ficheros actual) exportarlo para poder sar fuera de aqui
module.exports = app;

