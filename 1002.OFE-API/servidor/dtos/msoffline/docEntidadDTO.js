/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var DocEntidad = require('../../modelos/msoffline/docEntidad');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

DocEntidad.guardar = function guardarDocEntidad(data){
    console.log(data);
    return DocEntidad.create({
        id: data.id,
        tipoEntidad: data.tipoEntidad,
        entidad: data.entidad,
        comprobantepago: data.comprobantepago,
        usuarioCreacion: data.usuarioCreacion,
        usuarioModificacion: data.usuarioModificacion,
        fechaCreacion: data.fechaCreacion,
        fechaModificacion: data.fechaModificacion,
        estado: data.estado,
        fechaSincronizado: data.fechaSincronizado,
        estadoSincronizado: data.estadoSincronizado
    });
}

module.exports = DocEntidad;