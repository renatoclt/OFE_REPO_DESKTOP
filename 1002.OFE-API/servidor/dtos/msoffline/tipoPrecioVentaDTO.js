/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var TipoPrecioVenta = require('../../modelos/msoffline/tipoPrecioVenta');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

TipoPrecioVenta.guardar = function guardarTipoEntidad(data){
    return TipoPrecioVenta.create({
        id: data.id,
        idioma: data.idioma,
        codigo: data.codigo,
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

module.exports = TipoPrecioVenta;