// definimo el obejto producto
// y todos los metiodos del api de producto
 'use strict'


var controlador = {

    datosCurso: (req, res ) => {
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
    },

    test: (req, res ) => {
        return res.status(200).send({
            mensaje: ' Soy la Acción test de mi controtalador de Productos'
        });

    }
}; // Final de mi controlador de producto

module.exports = controlador;