/**
 * @author --- Modificado **-**-****
 * @author renato creado 18-12-2017 
 */
var DocReferencia = require('../../modelos/comprobantes/docReferencia')

/**
 * Funcion que guarda docReferencia
 * 
 */
DocReferencia.guardar = function docReferenciaGuardar(data){
    return DocReferencia.create({
        id: data.id, //not null
        idDocumentoOrigen: data.idDocumentoOrigen, //not null
        idDocumentoDestino: data.idDocumentoDestino,
        tipoDocumentoOrigen: data.tipoDocumentoOrigen,//not null
        tipoDocumentoDestino: data.tipoDocumentoDestino,
        serieDocumentoDestino: data.serieDocumentoDestino, //not null
        correlativoDocumentoDestino: data.correlativoDocumentoDestino,//not null
        fechaEmisionDestino: data.fechaEmisionDestino,//not null
        totalImporteDestino: data.totalImporteDestino,//not null
        totalImporteAuxiliarDestino:data.totalImporteAuxiliarDestino,
        totalPorcentajeAuxiliarDestino:data.totalPorcentajeAuxiliarDestino,
        tipoDocumentoOrigenDescripcion:data.tipoDocumentoOrigenDescripcion,
        tipoDocumentoDestinoDescripcion:data.tipoDocumentoDestinoDescripcion,
        monedaDestino: data.monedaDestino,
        totalMonedaDestino:data.totalMonedaDestino,
        polizaFactura: data.polizaFactura,
        anticipo: data.anticipo,
        auxiliar1: data.auxiliar1,
        auxiliar2: data.auxiliar2,
        estadoSincronizado: constantes.estadoInactivo,
        usuarioCreacion:data.usuarioCreacion, //not null
        usuarioModificacion: data.usuarioModificacion,//not null
        fechaCreacion:data.fechaCreacion,//not null
        fechaModificacion:data.fechaModificacion,//not null
        estado: constantes.estadoActivo,//not null
        fechaSincronizado: data.fechaSincronizado//not null
    });
}
module.exports = DocReferencia;
