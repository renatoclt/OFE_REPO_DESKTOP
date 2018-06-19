/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryComprobanteEvento = require('../../modelos/msoffline/queryComprobanteEvento');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */


QueryComprobanteEvento.guardarOffline = function guardarQueryComprobanteConcepto(data){
    return QueryComprobanteEvento.create({
        comprobante: data.inIdcomprobante ,
        evento: data.inIdevento ,
        idioma: data.inIidioma ,
        descripcionEvento: data.vcDescripcionEvento ,
        observacionEvento: data.vcObservacionEvento ,
        estadoEvento: data.inEstadoEvento ,
        fechaCreacion: data.fechaCreacion ,
        usuarioCreacion: data.usuarioCreacion 
    })
}

QueryComprobanteEvento.guardar = function guardarQueryComprobanteConcepto(data, id){
    return QueryComprobanteEvento.findOne({where: {comprobante: data.inIdcomprobante, evento: data.inIdevento}}).then(function(obj){
        if(obj){
            // console.log(obj);
            return QueryComprobanteEvento.update({
                comprobante: data.inIdcomprobante ,
                evento: data.inIdevento ,
                idioma: data.inIidioma ,
                descripcionEvento: data.vcDescripcionEvento ,
                observacionEvento: data.vcObservacionEvento ,
                estadoEvento: data.inEstadoEvento ,
                fechaCreacion: data.fechaCreacion ,
                usuarioCreacion: data.usuarioCreacion 
            }, {where: {id: obj.id}})
        }
        else{
            return QueryComprobanteEvento.create({
                comprobante: data.inIdcomprobante ,
                evento: data.inIdevento ,
                idioma: data.inIidioma ,
                descripcionEvento: data.vcDescripcionEvento ,
                observacionEvento: data.vcObservacionEvento ,
                estadoEvento: data.inEstadoEvento ,
                fechaCreacion: data.fechaCreacion ,
                usuarioCreacion: data.usuarioCreacion 
            })
        }
    });
}

module.exports = QueryComprobanteEvento;
