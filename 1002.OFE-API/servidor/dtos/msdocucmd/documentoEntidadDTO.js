/**
 * @author --- Modificado **-**-****
 * @author renato creado 18-12-2017 
 */
var DocumentoEntidad = require('../../modelos/msoffline/docEntidad');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

DocumentoEntidad.guardarEntidad = function guardarDocumentoEntidad(data){
    return DocumentoEntidad.create({
        tipoEntidad: data.idTipoEntidad,
        entidad: data.idEntidad ,
        comprobantepago: data.idComprobante ,
        correo: data.correo,
        usuarioCreacion: data.usuarioCreacion ,
        usuarioModificacion: data.usuarioModifica ,
        fechaCreacion: data.fechaCreacion ,
        fechaModificacion: data.fechaModificacion ,
        estado: data.estado ,
        fechaSincronizado: data.fechaSincronizacion ,
        estadoSincronizado: data.estadoSincronizado ,
        generado: data.generado ,
    });
}

DocumentoEntidad.buscarGuardarActualizar = function buscarGuardarActualizar(data,id){
    return DocumentoEntidad.findOne({where: {id: id}}).then(function(obj){
        if(obj){
            return DocumentoEntidad.update({
                tipoEntidad: data.idTipoEntidad,
                entidad: data.idEntidad ,
                comprobantepago: data.idComprobante ,
                correo: data.correo,
                usuarioCreacion: data.usuarioCreacion ,
                usuarioModificacion: data.usuarioModifica ,
                fechaCreacion: data.fechaCreacion ,
                fechaModificacion: data.fechaModificacion ,
                estado: data.estado ,
                fechaSincronizado: data.fechaSincronizacion ,
                estadoSincronizado: data.estadoSincronizado ,
                generado: data.generado ,
            }, {where: {id: id}});
        }
        else{
            return DocumentoEntidad.create({
                tipoEntidad: data.idTipoEntidad,
                entidad: data.idEntidad ,
                comprobantepago: data.idComprobante ,
                correo: data.correo,
                usuarioCreacion: data.usuarioCreacion ,
                usuarioModificacion: data.usuarioModifica ,
                fechaCreacion: data.fechaCreacion ,
                fechaModificacion: data.fechaModificacion ,
                estado: data.estado ,
                fechaSincronizado: data.fechaSincronizacion ,
                estadoSincronizado: data.estadoSincronizado ,
                generado: data.generado ,
            });
        }
    });
}

module.exports = DocumentoEntidad;