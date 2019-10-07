'use strict'

var mongoose = require ('mongoose');
var app      = require ('./app');

var port = 3900;
var url = 'mongodb://localhost:27017/api_rest_blog';
var opciones = {
    useNewUrlParser: true,
    useUnifiedTopology: true };

// configuraciones interna para la base datos
// para utilizar promesas y desactivar los metodos antiguos 
mongoose.set('useFindAndModifify', false);
mongoose.Promise = global.Promise; 
mongoose.connect(url, opciones)
        .then(() => {
            console.log('La conexión a la base de Datos Sastifactoriamente .-. !!!');

            // Crear servidor y ponerme a ecuchar peticiones HTTP
            app.listen(port, () => {
                console.log('Servidor corriendo em http://localhost:'+port);
                

            });
            

})
