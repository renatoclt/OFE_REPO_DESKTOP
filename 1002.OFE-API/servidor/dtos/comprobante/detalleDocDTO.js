var DocDetalle = require('../../modelos/comprobantes/detalleDoc')

/**
 * Funcion que guarda en la tabla t_doc_referncia
 */
DocDetalle.guardar = function docEntidadGuardar(data){
    return DocDetalle.create({
        id: data.id,
        idTipoEntidad: data.idTipoEntidad,
        idEntidad:data.idEntidad,
        idComprobantepago: data.idComprobantePago,
        usuarioCreacion: data.usuarioCreacion,
        usuarioModificacion: data.usuarioModificacion,
        fechaCreacion: data.fechaCreacion,
        fechaModificacion: data.fechaModificacion,
        estado: constantes.estadoInactivo,
        estadoSincronizado: data.estado,
    });
}
module.exports = DocDetalle;
