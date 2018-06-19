/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var Serie = require('../../modelos/msoffline/serie');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

Serie.guardar = function guardarSerie(data){
    return Serie.create({
        id: data.id,
        entidad: data.entidad,
        dominioEntidad: data.dominioEntidad ,
        tipoSerie: data.tipoSerie ,
        direccion: data.direccion ,
        serie: data.serie,
        correlativo: data.correlativo,
        usuarioCreacion: data.usuarioCreacion,
        usuarioModificacion: data.usuarioModificacion,
        fechaCreacion: data.fechaCreacion,
        fechaModificacion: data.fechaModificacion,
        estado: data.estado,
        fechaSincronizado: data.fechaSincronizado,
        estadoSincronizado: data.estadoSincronizado
    });
}

module.exports = Serie;
