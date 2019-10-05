// definimo el obejto producto
// y todos los metiodos del api de producto
'use strict'

var validador = require('validator');
var Producto = require('../models/productoModel');



var controlador = {

    // metodos de prueba o test para probar api
    // ********************************************

    datosCurso: (req, res) => {
        var hola = req.body.hola;
        var otro1 = req.body.otros;
        console.log('test post Sastifactoria !!' + hola);

        return res.status(200).send({
            curso: 'Curso Framework',
            alumno: 'Darwin Uzcategui',
            url: 'darwin.com.ve',
            hola,
            otro1
        });
    },

    test: (req, res) => {
        return res.status(200).send({
            mensaje: ' Soy la Acción test de mi controtalador de Productos'
        });

    },
    //********  fin de metodos de prueba*****************


    //***************************************************
    // metodo para Guardar Productos
    // Metodo Permitira crear productos

    save: (req, res) => {
        // Recoger Parametros por el metodos post

        var parametros = req.body;
        console.log(parametros);


        //   Validar datos con la libreria (validator).
        try {
            var validar_nombre = !validador.isEmpty(parametros.nombre);
            var validar_descripcion = !validador.isEmpty(parametros.descripcion);

        } catch (error) {
            return res.status(200).send({
                status: ' Error',
                mensaje: ' Faltan Datos por Enviar !!'
            });
        }
        if (validar_nombre && validar_descripcion) {
            // return res.status(200).send({
            //     mensaje: ' Validadción de Producto correctamente'
            // });

            // Crear el Objeto a guardar.
            var producto = new Producto(); // instaciamos el obejto de acuerdo al modelo

            // Asiganar valores.
            producto.nombre = parametros.nombre;
            producto.descripcion = parametros.descripcion;
            producto.image = null;


            // Guradar el producto.
            producto.save((err, productoStored) => {

                if (err || !productoStored) {
                    return res.status(404).send({
                        status: 'error',
                        mensaje: 'El articulo no se ha Guardado!!! '
                    });
                }
                // Devolver una respuesta.
                return res.status(200).send({
                    status: 'Satisfactorio',
                    producto: productoStored
                });

            });


        } else {
            return res.status(200).send({
                status: ' Error',
                mensaje: ' Los datos no son Validos !!'
            });

        }
    }



}; // Final de mi controlador de producto

module.exports = controlador;