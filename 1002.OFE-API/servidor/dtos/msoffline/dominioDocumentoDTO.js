/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var DominioDocumento = require('../../modelos/msoffline/dominioDocumento');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

DominioDocumento.guardar = function guardarEvento(data){
    return DominioDocumento.create({
        id: data.id,
        parametroDocumento: data.parametroDocumento,
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

module.exports = DominioDocumento;