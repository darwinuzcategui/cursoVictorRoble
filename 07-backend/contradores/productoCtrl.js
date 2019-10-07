// definimo el obejto producto
// y todos los metiodos del api de producto
'use strict'

var validador = require('validator');
var Producto= require('../models/productoModel');



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
                status: 'Error',
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
                status: 'Error',
                mensaje: ' Los datos no son Validos !!'
            });

        }
    },

    getProducto: (req, res) => {

        var consulta = Producto.find({});

        var ultimos = req.params.ultimos;
        //console.log(ultimos);
        if (ultimos || ultimos != undefined) {
            consulta.limit(5);

        }

        // find para buscar los datos de productos
        consulta.sort('-_id').exec((err, productos) => {

            if (err) {
                return res.status(500).send({
                    status: 'Error',
                    mensaje: 'Error a devolver los productos !!'
                });

            }
            if (!productos) {
                return res.status(404).send({
                    status: ' Error',
                    mensaje: 'No hay  productos para visualizar !!'
                });

            }
            return res.status(200).send({
                status: 'Sastifactorio',
                productos
            });

        });


    },

    getUnProducto: (req, res) => {

        // Recoger el id de la url.
        var productoId = req.params.id;


        // Comprobar que existe.
        if (!productoId || productoId == null) {
            return res.status(404).send({
                status: 'error',
                mensaje: 'No existe el Producto !!!'
            });

        }

        // Buscar el articulo.
        Producto.findById(productoId, (err, producto) => {

            if (err || !producto) {
                return res.status(404).send({
                    status: 'error',
                    mensaje: 'No existe Producto !!!'
                });

            }
            // Devolver en Json.
            return res.status(200).send({
                status: 'Satisfactorio',
                producto
            });



        });



    },

    
    actualizar: (req, res) => {
        // Recoger el id del Producto del url.
        var productoId = req.params.id;
        //console.log(productoId);
        

        // Recoger los datos que llegan por put.
        var parametros = req.body;
        //console.log(parametros);
        

        // Validar los datos.
        try{
       
            var validar_nombre = !validador.isEmpty(parametros.nombre);
            var validar_descripcion = !validador.isEmpty(parametros.descripcion);
            


        }catch(err){
           
            return res.status(404).send({
                status: 'Error',
                mensaje: 'Faltan Datos de Productos por enviar !!'
            });

        }

        if(validar_nombre && validar_descripcion){
            // find and update ( Buscar y actulizar los productos)
            //Article.findOneAndUpdate({_id: articleId}, params, {new:true}, (err, articleUpdated) => {
            

                Producto.findOneAndUpdate({_id: productoId}, parametros, {new:true}, (err, productoActulizado) => {
                if(err){
                    
                    return res.status(500).send({
                        status: 'Error',
                        mensaje: 'Error a Actulizar  !!'
                    });

                }

                if (!productoActulizado) {
                   
                    return res.status(404).send({
                        status: 'Error',
                        mensaje: 'No existe el articulo para Actulizar  !!'
                    });

                }
                return res.status(200).send({
                    status:'sastifactorio',
                    producto: productoActulizado

                });

            });

        } else {
            // Devolver la respuesta.
            return res.status(200).send({
                status: 'Error',
                mensaje: 'Validación no es Correcta !!'
            });

        }
    },

    eliminar: (req, res) => {
        // recoger id
        var productoId = req.params.id;
        // Un metodo que buscar y elimina --Find and delete
        Producto.findOneAndDelete({_id: productoId}, (err, productoEliminado) => {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar !!!'
                });
            }

            if(!productoEliminado){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha borrado el articulo, posiblemente no exista !!!'
                });
            }

            return res.status(200).send({
                status: 'success',
                producto: productoEliminado
            });

        }); 
    }

    
}; // Final de mi controlador de producto

module.exports = controlador;