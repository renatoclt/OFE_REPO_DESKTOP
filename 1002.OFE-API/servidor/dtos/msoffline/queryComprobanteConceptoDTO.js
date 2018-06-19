/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryComprobanteConcepto = require('../../modelos/msoffline/queryComprobanteConcepto');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

QueryComprobanteConcepto.guardar = function guardarQueryComprobanteConcepto(data){
    return QueryComprobanteConcepto.create({
        id: data.id,
        comprobante: data.comprobante,
        concepto: data.concepto ,
        idioma: data.idioma ,
        codigoConcepto: data.codigoConcepto ,
        descripcionConcepto: data.descripcionConcepto ,
        importeConcepto: data.importeConcepto ,
        fechaSincronizado: data.fechaSincronizado ,
        estadoSincronizado: data.estadoSincronizado ,
    });
}

module.exports = QueryComprobanteConcepto;
