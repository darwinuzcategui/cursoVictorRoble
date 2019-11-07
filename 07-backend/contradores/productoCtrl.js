// definimo el obejto producto
// y todos los metiodos del api de producto
'use strict';

var validador = require('validator');
var fs = require('fs');
var path = require('path');
var Producto = require('../models/productoModel');

// creacion de la clases controladores que tiene todo los metodos de mi api rest
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

  // metodos para guardar productos
  //*************************** */
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
      if (parametros.image) {
        producto.image = parametros.image;
      } else {
        producto.image = null;
      }

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
  // metodo para consultar todoslos producto
  //**************************** */
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
  // metodo para consultar un producto
  //**************************** */
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

  // metodo para actulizar productos
  actualizar: (req, res) => {
    // Recoger el id del Producto del url.
    var productoId = req.params.id;
    //console.log(productoId);

    // Recoger los datos que llegan por put.
    var parametros = req.body;
    //console.log(parametros);

    // Validar los datos.
    try {
      var validar_nombre = !validador.isEmpty(parametros.nombre);
      var validar_descripcion = !validador.isEmpty(parametros.descripcion);
    } catch (err) {
      return res.status(404).send({
        status: 'Error',
        mensaje: 'Faltan Datos de Productos por enviar !!'
      });
    }

    if (validar_nombre && validar_descripcion) {
      // find and update ( Buscar y actulizar los productos)
      //Article.findOneAndUpdate({_id: articleId}, params, {new:true}, (err, articleUpdated) => {

      Producto.findOneAndUpdate(
        { _id: productoId },
        parametros,
        { new: true },
        (err, productoActulizado) => {
          if (err) {
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
            status: 'sastifactorio',
            producto: productoActulizado
          });
        }
      );
    } else {
      // Devolver la respuesta.
      return res.status(200).send({
        status: 'Error',
        mensaje: 'Validación no es Correcta !!'
      });
    }
  },

  // metodo para eliminar Productos
  //******************************
  eliminar: (req, res) => {
    // recoger id
    var productoId = req.params.id;

    // Un metodo que buscar y elimina --Find and delete
    Producto.findOneAndDelete({ _id: productoId }, (err, productoEliminado) => {
      if (err) {
        return res.status(500).send({
          status: 'error',
          message: 'Error al borrar !!!'
        });
      }

      if (!productoEliminado) {
        return res.status(404).send({
          status: 'error',
          message: 'No se ha borrado el articulo, posiblemente no exista !!!'
        });
      }

      return res.status(200).send({
        status: 'sastifactorio',
        producto: productoEliminado
      });
    });
  },

  // metodo subir archivos en servidor
  //********************************** */
  subir: (req, res) => {
    // Configurar el modulo conect Multiparty rutas/productos ( esto se hizo en rutas productos)

    // Recoger el fichero de la petición
    var nombre_archivo = 'Imagen no Subida...';

    //console.log(req.files);
    if (!req.files) {
      return res.status(404).send({
        status: 'error',
        mensaje: nombre_archivo
      });
    }

    // Conseguir nombre y la extesion de archivo
    var archivo_path = req.files.file0.path;
    console.log(archivo_path);
    var archivo_split = archivo_path.split('\\');
    // * ADVERTENCIA * EN LINUX O MAC
    // var archivo_split = archivo_path.split('\\');
    // console.log(archivo_split);
    // Nombre de archivo
    var nombre_archivo = archivo_split[2];
    var extesion_split = nombre_archivo.split('.');
    var archivo_extesion = extesion_split[1];
    console.log(archivo_extesion);

    // Comprbar La extesion, (solo imagenes) si no es valida borrar el archivo.
    if (
      archivo_extesion != 'png' &&
      archivo_extesion != 'jpg' &&
      archivo_extesion != 'jpeg' &&
      archivo_extesion != 'gif'
    ) {
      // borra el archivo
      fs.unlink(archivo_path, err => {
        return res.status(200).send({
          status: 'error',
          mensaje: 'La extesión de la imagen no valida !!!'
        });
      });
    } else {
      // si todo es valido, saco id que me llega por url
      var productoId = req.params.id;
      if (productoId) {
        // Buscar el articulo, asiganarle el nombre de la imagen y actulizarlo
        Producto.findOneAndUpdate(
          { _id: productoId },
          { image: nombre_archivo },
          { new: true },
          (err, productoActulizado) => {
            if (err || !productoActulizado) {
              return res.status(200).send({
                status: 'error',
                mensaje: 'error al guardar producto'
              });
            }
            return res.status(200).send({
              status: 'satisfcatorio',
              producto: productoActulizado
            });
          }
        );
      } else {
        return res.status(200).send({
          status: 'satisfcatorio',
          image: nombre_archivo
        });
      }

      /*
            return res.status(200).send({
                archivo: req.files,
                split: archivo_split,
                archivo_extesion
            });

            */
    }
  }, // fin del metodo Subir archivo de imagen

  // metodo para visualizar la imagen
  //********************************** */
  getImagen: (req, res) => {
    var archivo = req.params.imagen;
    var path_file = './upload/productos/' + archivo;

    fs.exists(path_file, exists => {
      if (exists) {
        return res.sendFile(path.resolve(path_file));
      } else {
        return res.status(404).send({
          status: 'error',
          mensaje: 'La Imagen No exsiste !!!'
        });
      }
    });
  }, // fin de get imagen

  // metodos buscar
  //************************** */
  buscar: (req, res) => {
    // Sacar el String a buscar
    var buscarString = req.params.buscar;

    //  Buscar varias condiciones.
    // con los metodos Find or
    // TODO:  colocar LA BUSQUEDA POR CODIGOS Y OTROS CAMPOS
    // TODO: REALIZAR EL PROCESO EXPRESIONES REGULARES

    Producto.find({
      $or: [
        { nombre: { $regex: buscarString, $options: 'i' } },
        { descripcion: { $regex: buscarString, $options: 'i' } }
      ]
    })
      .sort([['fecha', 'descending']])
      .exec((err, productos) => {
        if (err) {
          return res.status(500).send({
            status: 'error',
            mensaje: 'error en la peticion de busqueda'
          });
        }
        if (!productos || productos.length <= 0) {
          return res.status(500).send({
            status: 'error',
            mensaje: 'No hay articulos para mostrar'
          });
        }

        return res.status(200).send({
          status: 'sastifactorio',
          mensaje: 'Buscar producto',
          productos
        });
      });
  }
}; // Final de mi controlador de producto

module.exports = controlador;
