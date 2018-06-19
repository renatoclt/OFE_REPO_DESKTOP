/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryConcepto = require('../../modelos/msoffline/queryConcepto');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

QueryConcepto.guardar = function guardarQueryConcepto(data){
    return QueryConcepto.create({
        id: data.id,
        idioma: data.idioma ,
        codigo: data.codigo ,
        descripcion: data.descripcion ,
        concepto: data.concepto ,
        catalogo: data.catalogo ,
        usuarioCreacion: data.usuarioCreacion ,
        usuarioModificacion: data.usuarioModificacion ,
        fechaCreacion: data.fechaCreacion ,
        fechaModificacion: data.fechaModificacion ,
        estado: data.estado ,
        fechaSincronizado: data.fechaSincronizado ,
        estadoSincronizado: data.estadoSincronizado ,
    });
}

module.exports = QueryConcepto;
