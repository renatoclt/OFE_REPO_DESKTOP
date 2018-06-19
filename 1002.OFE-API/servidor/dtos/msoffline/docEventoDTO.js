/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var DocEvento = require('../../modelos/msoffline/docEvento');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

DocEvento.guardar = function guardarDocEntidad(data){
    console.log(data);
    return DocEvento.create({
        id: data.id,
        evento: data.evento,
        entidad: data.entidad,
        comprobantePago: data.comprobantePago,
        desc: data.desc,
        estEvento: data.estEvento,
        usuarioCreacion: data.usuarioCreacion,
        usuarioModificacion: data.usuarioModificacion,
        fechaCreacion: data.fechaCreacion,
        fechaModificacion: data.fechaModificacion,
        estado: data.estado,
        fechaSincronizado: data.fechaSincronizado,
        estadoSincronizado: data.estadoSincronizado
    });
}

module.exports = DocEvento;