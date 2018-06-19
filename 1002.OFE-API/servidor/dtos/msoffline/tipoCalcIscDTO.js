/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var TipoCalcIsc = require('../../modelos/msoffline/tipoCalcIsc');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

TipoCalcIsc.guardar = function guardarTipoCalcIsc(data){
    return TipoCalcIsc.create({
        id: data.id,
        idioma: data.idioma,
        codigo: data.codigo,
        descripcion: data.descripcion,
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

module.exports = TipoCalcIsc;