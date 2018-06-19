/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var DominioEntidad = require('../../modelos/msoffline/dominioEntidad');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

DominioEntidad.guardar = function guardarDominioEntidad(data){
    return DominioEntidad.create({
        id: data.id,
        parametroEntidad: data.parametroEntidad,
        idioma: data.idioma,
        codigo: data.codigo,
        descripcionCorta: data.descripcionCorta,
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

module.exports = DominioEntidad;