/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryDocMasivo = require('../../modelos/msoffline/queryDocMasivo');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

QueryDocMasivo.guardar = function guardarQueryDocMasivo(data){
    return QueryDocMasivo.create({
        id: data.id,
        entidad: data.entidad ,
        tipoDocumento: data.tipoDocumento ,
        usuario: data.usuario ,
        fecha: data.fecha ,
        nomArchivo: data.nomArchivo ,
        tamanioArchivo: data.tamanioArchivo ,
        ticket: data.ticket ,
        totalLineas: data.totalLineas ,
        totalError: data.totalError ,
        estado: data.estado ,
        fechaSincronizado: data.fechaSincronizado ,     
        estadoSincronizado: data.estadoSincronizado ,                             
                   
    });
}

module.exports = QueryDocMasivo;
