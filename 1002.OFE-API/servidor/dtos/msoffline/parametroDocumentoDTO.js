/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var ParametroDocumento = require('../../modelos/msoffline/parametroDocumento');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

ParametroDocumento.guardar = function guardarParametroDocumento(data){
    return ParametroDocumento.create({
        id: data.id,
        descripcion: data.descripcion,
        usuarioCreacion: data.usuarioCreacion,
        usuarioModificacion: data.usuarioModificacion,
        fechaCreacion: data.fechaCreacion,
        fechaModificacion: data.fechaModificacion,
        estado: data.estado,
        fechaSincronizado: data.fechaSincronizado,
        estadoSincronizado: data.estadoSincronizado
    });
}

module.exports = ParametroDocumento;