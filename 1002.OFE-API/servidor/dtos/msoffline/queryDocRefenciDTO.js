/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryDocReferenci = require('../../modelos/msoffline/queryDocReferenci');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

QueryDocReferenci.guardarQuery = function guardarQuery(data){
    return QueryDocReferenci.create({
        id: data.id,
        docOrigen: data.docOrigen ,
        documentoDestino: data.documentoDestino ,
        tipoDocumentoOrigen: data.tipoDocumentoOrigen ,
        tipoDocDes: data.chTipoDocDes ,
        serieDestino: data.serieDestino ,
        corrDest: data.corrDest ,
        fechaEmisionDestino: data.fechaEmisionDestino ,
        nuTotImpAux: data.nuTotImpAux,
        totalImpustoDestino: data.totalImpustoDestino ,
        totalPorAuxiliar: data.totalPorAuxiliar ,
        tdocoriDesc: data.tdocoriDesc ,
        vcTdocDesDesc: data.vcTdocDesDesc,
        deTipoCambio: data.deTipoCambio,
        vcMonedaDestino: data.vcMonedaDestino,
        deTotMoneDes: data.deTotMoneDes,
        vcPolizaFactura: data.vcPolizaFactura,
        deAnticipo: data.deAnticipo,
        vcAuxiliar1: data.vcAuxiliar1,
        vcAuxiliar2: data.vcAuxiliar2,
        usuarioCreacion: data.usuarioCreacion ,
        usuarioModificacion: data.usuarioModificacion ,
        fechaCreacion: data.fechaCreacion ,
        fechaModificacion: data.fechaModificacion ,
        estado: data.estado ,
        fechaSincronizado: data.fechaSincronizado ,
        estadoSincronizado: data.estadoSincronizado , 
    });
}

QueryDocReferenci.guardar = function guardar(data){
    return QueryDocReferenci.create({
        id: data.id,
        docOrigen: data.docOrigen ,
        documentoDestino: data.documentoDestino ,
        tipoDocumentoOrigen: data.tipoDocumentoOrigen ,
        tipoDocDes: data.chTipoDocDes ,
        serieDestino: data.serieDestino ,
        corrDest: data.corrDest ,
        fechaEmisionDestino: data.fechaEmisionDestino ,
        nuTotImpAux: data.nuTotImpAux,
        totalImpustoDestino: data.totalImpustoDestino ,
        totalPorAuxiliar: data.totalPorAuxiliar ,
        tdocoriDesc: data.tdocoriDesc ,
        vcTdocDesDesc: data.vcTdocDesDesc,
        deTipoCambio: data.deTipoCambio,
        vcMonedaDestino: data.vcMonedaDestino,
        deTotMoneDes: data.deTotMoneDes,
        vcPolizaFactura: data.vcPolizaFactura,
        deAnticipo: data.deAnticipo,
        vcAuxiliar1: data.vcAuxiliar1,
        vcAuxiliar2: data.vcAuxiliar2,
        usuarioCreacion: data.usuarioCreacion ,
        usuarioModificacion: data.usuarioModificacion ,
        fechaCreacion: data.fechaCreacion ,
        fechaModificacion: data.fechaModificacion ,
        estado: data.estado ,
        fechaSincronizado: data.fechaSincronizado ,
        estadoSincronizado: data.estadoSincronizado , 
    });
}

module.exports = QueryDocReferenci;
