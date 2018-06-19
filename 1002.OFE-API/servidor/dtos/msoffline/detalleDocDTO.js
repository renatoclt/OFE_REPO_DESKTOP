/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var DetalleDoc = require('../../modelos/msoffline/detalleDoc');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

DetalleDoc.guardar = function guardarDetalleDoc(data){
    return DetalleDoc.create({
        id: data.id,
        idComprobantePago: data.idComprobantePago,
        tipoAfec: data.tipoAfec,
        tipoCalc: data.tipoCalc,
        tipoPrec: data.tipoPrec,
        producto: data.producto,
        numeroItem: data.numeroItem,
        unidadMedida: data.unidadMedida,
        subTotalVen: data.subTotalVen,
        subTotalIgv: data.subTotalIgv,
        subTotalIsc: data.subTotalIsc,
        pesoBruto: data.pesoBruto,
        pesoNeto: data.pesoNeto ,
        pesoTotal: data.pesoTotal ,
        descuento: data.descuento ,
        usuarioCreacion: data.usuarioCreacion ,
        usuarioModificacion: data.usuarioModificacion ,
        fechaCreacion: data.fechaCreacion ,
        fechaModificacion: data.fechaModificacion ,      
        estado: data.estado ,
        fechaSincronizado: data.fechaSincronizado ,
        estadoSincronizado: data.estadoSincronizado ,
    });
}

module.exports = DetalleDoc;