/**
 * @author --- Modificado **-**-****
 * @author renato creado 18-12-2017 
 */
var Documento = require('../../modelos/msdocucmd/documento');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

Documento.guardar = function guardarDocumento(data){
    return Documento.create({
        id: data.id,
        idOrganizacionProveedora: data.idOrganizacionProveedora,
        numeroComprobante: data.numeroComprobante,
        rucProveedor: data.rucProveedor,
        rucComprador: data.rucComprador,
        idTablaTipoComprobante: data.idTablaTipoComprobante,
        idRegistroTipoComprobante: data.idRegistroTipoComprobante,
        idTipoComprobante: data.idTipoComprobante,
        razonSocialProveedor: data.razonSocialProveedor,
        razonSocialComprador: data.razonSocialComprador,
        moneda: data.moneda,
        fechaEmision: data.fechaEmision,
        observacionComprobante: data.observacionComprobante,
        tipoComprobante: data.tipoComprobante,
        montoPagado: data.montoPagado,
        monedaDescuento: data.monedaDescuento,
        montoDescuento: data.montoDescuento,
        numeroCheque: data.descuento,
        totalComprobante: data.totalComprobante,
        tipoItem: data.tipoItem,
        porcentajeImpuesto: data.porcentajeImpuesto,
        idTablaMoneda: data.idTablaMoneda,
        idRegistroMoneda: data.idRegistroMoneda,
        estadoComprobante: data.estadoComprobante,
        flagPlazoPago: ' ',
        flagRegistroEliminado: ' ',
        flagOrigenComprobante: data.flagOrigenComprobante,
        flagOrigenCreacion: data.flagOrigenCreacion,
        fechaRegistro: data.fechaRegistro,
        fechaCreacion: data.fechaCreacion,
        estado : data.estado,
        version: data.version, 
        tipoFactura: data.tipoFactura,
        igv : data.igv,
        isc: data.isc,
        otrosTributos: data.otrosTributos,
        descuento: data.descuento,
        totalcomprobante: data.totalcomprobante,
        subtotalComprobante: data.subtotalComprobante,
        importeReferencial: data.importeReferencial,
        montoComprobante: data.montoComprobante,
        idindicadorImpuesto: data.idindicadorImpuesto,
        impuestoGvr: data.impuestoGvr,
        generado: data.generado,
        idProveedor: data.idProveedor,
        tipoDocumento: data.tipoDocumento,
        idUsuarioCreacion: data.idUsuarioCreacion,
        idUsuarioModificacion: data.idUsuarioModificacion,
        estadoSincronizado: data.estadoSincronizado,
        fechaSincronizado: data.fechaSincronizado,
    });
}

module.exports = Documento;