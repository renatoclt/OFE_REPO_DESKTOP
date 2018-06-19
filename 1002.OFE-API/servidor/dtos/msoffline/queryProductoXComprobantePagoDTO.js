/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryProductoXComprobantePagoDTO = require('../../modelos/msoffline/queryProductoXComprobantePago');
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

QueryProductoXComprobantePagoDTO.guardar = function guardarQueryProducto(data){
    return QueryProductoXComprobantePagoDTO.create({
        id: data.id,
        inIdcomprobantepago : data.inIdcomprobantepago,
        inItipoPrecioventa : data.inItipoPrecioventa ,
        inCodigoPrecioventa : data.inCodigoPrecioventa ,
        vcDescPrecioventa : data.vcDescPrecioventa ,
        inItipoCalculoisc : data.inItipoCalculoisc ,
        inCodigoCalculoisc : data.inCodigoCalculoisc ,
        vcDescCalculoisc : data.vcDescCalculoisc ,
        inItipoAfectacionigv : data.inItipoAfectacionigv ,
        inCodigoAfectacionigv : data.inCodigoAfectacionigv ,
        vcDescAfectacionigv : data.vcDescAfectacionigv ,
        chAfectaIgv : data.chAfectaIgv ,
        inIdguia : data.inIdguia ,
        vcSpotimpuesto : data.vcSpotimpuesto ,
        chNumeroseguimiento : data.chNumeroseguimiento ,
        chNumeroguia : data.chNumeroguia ,
        vcDescripcionitem : data.vcDescripcionitem ,
        vcPosicionprodxguia : data.vcPosicionprodxguia ,
        vcNumeroparteitem : data.vcNumeroparteitem ,
        vcPosicionprodxoc : data.vcPosicionprodxoc ,
        inIdproductoconsignado : data.inIdproductoconsignado ,
        dePreciounitarioitem : data.dePreciounitarioitem ,
        deCantidaddespachada : data.deCantidaddespachada ,
        inIdmovimiento : data.inIdmovimiento ,
        vcCodigoguiaerp : data.vcCodigoguiaerp ,
        vcEjercicioguia : data.vcEjercicioguia ,
        vcTipoguia : data.vcTipoguia ,
        tsFechaemisionguia : data.tsFechaemisionguia ,
        vcTipospot : data.vcTipospot ,
        dePorcentajeimpuesto : data.dePorcentajeimpuesto ,
        deMontoimpuesto : data.deMontoimpuesto ,
        inIproducto : data.inIproducto ,
        vcCodigoProducto : data.vcCodigoProducto ,
        vcPosicion : data.vcPosicion ,
        vcUnidadmedida : data.vcUnidadmedida ,
        dePreciototalitem : data.dePreciototalitem ,
        nuSubtotalIgv : data.nuSubtotalIgv ,
        nuSubtotalIsc : data.nuSubtotalIsc ,
        nuPesoBruto : data.nuPesoBruto ,
        nuPesoNeto : data.nuPesoNeto ,
        nuPesoTotal : data.nuPesoTotal ,
        nuDescuento: data.nuDescuento,
        idRegistroUnidad: data.idRegistroUnidad,
        idTablaUnidad: data.idTablaUnidad,
        fechaSincronizado: data.fechaSincronizado,
        estadoSincronizado: data.estadoSincronizado,
    });
}

module.exports = QueryProductoXComprobantePagoDTO;
