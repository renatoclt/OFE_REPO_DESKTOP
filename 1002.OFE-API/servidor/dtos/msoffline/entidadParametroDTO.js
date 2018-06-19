/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var EntidadParametro = require('../../modelos/msoffline/entidadParametro');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

EntidadParametro.guardar = function guardarEntidadParametro(data){
    return EntidadParametro.create({
        id: data.id,
        entidad: data.entidad,
        parametroEntidad: data.parametroEntidad,
        json: data.json,
        usuarioCreacion: data.usuarioCreacion,
        usuarioModificacion: data.usuarioModificacion,
        fechaCreacion: data.fechaCreacion,
        fechaModificacion: data.fechaModificacion,
        estado: data.estado,
        fechaSincronizado: data.fechaSincronizado,
        estadoSincronizado: data.estadoSincronizado
    });
}

module.exports = EntidadParametro;