var Comprobante = require('../../modelos/comprobantes/comprobantePago');
constantes = require('../../utilitarios/constantes');
sequelize = require("sequelize");

Comprobante.BajaRetencion= function guardarDocumento(data){
    console.log(data);
    return Comprobante.create({
        id: data.id,
        numeroComprobante:'',
        rucProveedor: data.rucProveedor,
        rucComprador:' ',
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
        estadoComprobante: constantes.inEstadoBloqueadoLocal,
        flagPlazoPago: ' ',
        flagRegistroEliminado: ' ',
        flagOrigenComprobante: 'p',
        flagOrigenCreacion: '1',

        //data.idSerie,

        //datos q no estan en el dto
        ticketBaja: data.ticket,
        fechaRegistro: dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l"),
        fechaCreacion: dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l"),
        version: data.version, 
        tipoFactura: 'M',
        otrosTributos: data.otrosTributos,
        descuento: data.descuento,
        totalcomprobante: data.totalcomprobante,
        subtotalComprobante: data.subtotalComprobante,
        importeReferencial: data.importeReferencial,
        montoComprobante: data.montoComprobante,
        idindicadorImpuesto: data.idindicadorImpuesto,
        impuestoGvr: data.impuestoGvr,
    });
}
module.exports = Comprobante;