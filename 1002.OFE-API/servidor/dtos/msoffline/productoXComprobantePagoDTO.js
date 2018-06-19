/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var ProductoXComprobantePago = require('../../modelos/msoffline/productoXComprobantePago');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

ProductoXComprobantePago.guardar = function guardarProductoXComprobantePago(data){
    
    return ProductoXComprobantePago.create({
        id: data.id,
        idcomprobantepago: data.idcomprobantepago,
        iDoc: data.iDoc ,
        idGuia: data.idGuia ,
        idProductoXGuia: data.idProductoXGuia ,
        precioUnitario: data.precioUnitario ,
        idProductoXOc: data.idProductoXOc ,
        unidadMedida: data.unidadMedida,
        registroMedida : data.registroMedida,
        tablaUnidad: data.tablaUnidad,
        numeroSeguimiento: data.numeroSeguimiento ,
        numeroGuia: data.numeroGuia ,
        descripcionItem: data.descripcionItem,
        posicionProdXGuia: data.posicionProdXGuia,
        posicion: data.posicion,
        numeroParteItem: data.numeroParteItem,
        posicionProdXOc: data.posicionProdXOc,
        idProductoConsignado: data.idProductoConsignado,
        precioUnitarioItem: data.precioUnitarioItem,
        precioTotalItem: data.precioTotalItem,
        cantidadDespachada: data.cantidadDespachada,
        idMovimiento: data.idMovimiento,
        codigoGuiaErp: data.codigoGuiaErp,
        ejercicioGuia: data.ejercicioGuia ,
        tipoGuia: data.tipoGuia ,
        fechaEmisionGuia: data.fechaEmisionGuia ,
        tiposPot: data.tiposPot ,
        porcentajeImpuesto: data.porcentajeImpuesto ,
        montoImpuesto: data.montoImpuesto ,
        spotImpuesto: data.spotImpuesto ,
        codigoTipoIgv: data.codigoTipoIgv,
        codigoTipoIsc: data.codigoTipoIsc,
        codigoTipoPrecio: data.codigoTipoPrecio,
        subTotalIgv: data.subtotalIgv,
        subTotalIsc: data.subTotalIsc,
        fechaSincronizado: data.fechaSincronizado ,
        estadoSincronizado: data.estadoSincronizado ,
    });
}

module.exports = ProductoXComprobantePago;
