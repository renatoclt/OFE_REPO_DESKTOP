/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var TipoAfecIgv = require('../../modelos/msoffline/tipoAfecIgv');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

TipoAfecIgv.guardar = function guardarTipoAfecIgv(data){
    return TipoAfecIgv.create({
        id: data.id,
        idioma: data.idioma,
        codigo: data.codigo,
        descripcion: data.descripcion,
        afectaIgv: data.afectaIgv,
        catalogo: data.catalogo,
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

module.exports = TipoAfecIgv;