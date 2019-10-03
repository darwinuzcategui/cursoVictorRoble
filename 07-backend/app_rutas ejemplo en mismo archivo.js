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

// Añadir prefijos O rutas /Cargar rutas
app.use('/api/v0',producto_ruta);


// Rutas par testtaer de prueba
// app.get('/test', function(req, res ){
    app.get('/test-curso', (req, res ) => {
        console.log('test get Sastifactoria !!');
        return res.status(200).send({
            curso: 'Curso Framework',
            alumno: 'Darwin Uzcategui',
            url: 'darwin.com.ve'
        });
        // return res.status(200).send(`
        //  <ul>
        //     <li>NodeJs</li>
        //     <li>Agular</li>
        //     <li>React</li>
        //     <li>Vue</li>
        //  </ul>
        // `);
    });

    app.post('/test-curso', (req, res ) => {
        var hola = req.body.hola;
        var otro1 = req.body.otros;
        console.log('test post Sastifactoria !!'+hola);

        return res.status(200).send({
           
            curso: 'Curso Framework',
            alumno: 'Darwin Uzcategui',
            url: 'darwin.com.ve',
            hola,
            otro1
        });
    });


// Exportar modulo (ficheros actual) exportarlo para poder sar fuera de aqui
module.exports = app;

