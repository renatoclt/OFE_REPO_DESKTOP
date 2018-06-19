/**
 * @author --- Modificado **-**-****
 * @author renato creado 18-12-2017 
 */
var DocEntidad = require('../../modelos/comprobantes/docEntidad')

/**
 * Funcion que guarda en la tabla t_doc_referncia
 */
DocEntidad.guardar = function docEntidadGuardar(data){
    return DocEntidad.create({
        idTipoEntidad: data.idTipoEntidad,
        idEntidad:data.idEntidad,
        correo: data.correo,
        idcomprobantepago: data.idComprobantePago,
        usuarioCreacion: data.usuarioCreacion,
        usuarioModificacion: data.usuarioModificacion,
        fechaCreacion: data.fechaCreacion,
        fechaModificacion: data.fechaModificacion,
        estado: constantes.estadoInactivo,
        estadoSincronizado: data.estado,
    });
}
module.exports = DocEntidad;
