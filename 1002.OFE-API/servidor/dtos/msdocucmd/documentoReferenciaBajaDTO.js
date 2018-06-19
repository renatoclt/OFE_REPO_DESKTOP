/**
 * @author --- Modificado **-**-****
 * @author renato creado 19-01-2018
 */
var DocumentoReferencia = require('../../modelos/msdocucmd/documentoReferencia');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

DocumentoReferencia.guardar = function guardarDocumento(data){    
    return DocumentoReferencia.create({
        idDocumentoOrigen: data.idDocumentoOrigen ,
        idDocumentoDestino: data.idDocumentoDestino,
        tipoDocumentoOrigen: data.tipoComprobante ,
        serieDocumentoDestino: data.serie ,
        correlativoDocumentoDestino: data.correlativo ,
        fechaEmisionDestino: data.fechaEmisionDestino,
        totalImporteDestino: data.totalImporteDestino ,
        usuarioCreacion: data.usuarioCreacion ,
        usuarioModifica: data.usuarioModifica ,
        fechaCreacion: data.fechaCreacion ,
        fechaModificacion: data.fechaModificacion ,
        estadoComprobante: data.estadoComprobante ,

    });
}

module.exports = DocumentoReferencia;