/**
 * @author --- Modificado **-**-****
 * @author renato creado 19-01-2018
 */
var DocumentoReferencia = require('../../modelos/msoffline/docReferencia');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

DocumentoReferencia.guardar = function guardarDocumento(data){    
    return DocumentoReferencia.create({
        idDocumentoOrigen: data.idDocumentoOrigen ,
        idDocumentoDestino: data.idDocumentoDestino ,
        tipoDocumentoOrigen: data.tipoDocumentoOrigen , 
        tipoDocumentoDestino: data.tipoDocumentoDestino ,
        serieDocumentoDestino: data.serieDocumentoDestino ,
        correlativoDocumentoDestino: data.correlativoDocumentoDestino ,
        fechaEmisionDestino: (dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l")),
        totalImporteDestino: data.totalImporteDestino ,
        totalImporteAuxiliarDestino: data.totalImporteAuxiliarDestino ,
        totalPorcentajeAuxiliarDestino: data.totalPorcentajeAuxiliarDestino ,
        tipoDocumentoOrigenDescripcion: data.tipoDocumentoOrigenDescripcion ,
        tipoDocumentoDestinoDescripcion: data.tipoDocumentoDestinoDescripcion ,
        monedaDestino: data.monedaDestino ,
        totalMonedaDestino: data.totalMonedaDestino ,
        polizaFactura:  data.polizaFactura ,
        anticipo: data.anticipo ,
        auxiliar1: data.auxiliar1 ,
        auxiliar2: data.auxiliar2 ,
        usuarioCreacion: data.usuarioCreacion ,
        usuarioModificacion: data.usuarioModifica ,
        fechaCreacion: (dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l")) ,
        fechaModificacion: (dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l")) ,
        estado: constantes.estadoActivo,
        fechaSincronizacion: (dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l")) ,
        estadoSincronizado:'0 ', // data.estadoSincronizado ,
        generado :' 0', // 0,
        motivo :' 0', // data.motivo,

    });
}

module.exports = DocumentoReferencia;