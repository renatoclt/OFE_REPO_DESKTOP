/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var DocParametro = require('../../modelos/msoffline/docParametro');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

DocParametro.guardar = function guardarDocEntidad(data){    
    return DocParametro.create({
        paramDoc: data.paramDoc, 
        descripcionParametro: data.descripcionParametro, 
        comprobantePago: data.comprobantePago, 
        json: data.json, 
        usuarioCreacion: data.usuarioCreacion,
        usuarioModificacion: data.usuarioModificacion,
        fechaCreacion: data.fechaCreacion,
        fechaModificacion: data.fechaModificacion,
        estado: data.estado,
        fechaSincronizado: data.fechaSincronizado,
        estadoSincronizado: data.estadoSincronizado
    });
}

module.exports = DocParametro;