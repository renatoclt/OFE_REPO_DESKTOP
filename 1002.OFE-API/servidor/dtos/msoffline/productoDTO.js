/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var Producto = require('../../modelos/msoffline/producto');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

Producto.guardar = function guardarProducto(data){
    return Producto.create({
        id: data.id,
        entidad: data.entidad,
        tipoCalc: data.tipoCalc ,
        codigo: data.codigo ,
        descripcion: data.descripcion ,
        precioUnitario: data.precioUnitario ,
        montoIsc: data.montoIsc ,
        unidadMedida: data.unidadMedida ,
        afectaDetraccion: data.afectaDetraccion ,
        usuarioCreacion: data.usuarioCreacion,
        usuarioModificacion: data.usuarioModificacion,
        fechaCreacion: data.fechaCreacion,
        fechaModificacion: data.fechaModificacion,
        estado: data.estado,
        fechaSincronizado: data.fechaSincronizado,
        estadoSincronizado: data.estadoSincronizado
    });
}

module.exports = Producto;
