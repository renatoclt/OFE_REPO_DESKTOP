/**
 * @author --- Modificado **-**-****
 * @author renato creado 18-12-2017 
 */
var Archivo = require('../../modelos/msoffline/archivo');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

Archivo.guardar = function guardarComprobantePago(data){
    return Archivo.create({
        id: data.id,
        archivo: data.archivo,
        usuarioCreacion: data.usuarioCreacion,
        usuarioModificacion: data.usuarioModificacion,
        fechaCreacion: data.fechaCreacion,
        fechaModificacion: data.fechaModificacion,
        estado: data.estado,
        fechaSincronizado: data.fechaSincronizado,
        estadoSincronizado: data.estadoSincronizado
    });
}

Archivo.mostrar = function mostrarArchivo(data){
    // return Archivo.findAll({ attributes: filtroAtributos.attributes ,
    //     where: {
    //         id: data
    //     }
    //   });
    return Archivo.findOne(
        { 
            where: {
                id: data
            }
        }
    );
}
var filtroAtributos = {
    attributes: [
                'archivo']
}

module.exports = Archivo;