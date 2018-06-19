/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryDocMasivoDetDTO = require('../../modelos/msoffline/queryDocMasivoDet');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

QueryDocMasivoDetDTO.guardar = function guardarQueryDocMasivoDet(data){
    return QueryDocMasivoDetDTO.create({
        id: data.id,
        docMasivo: data.docMasivo ,
        fila: data.fila ,
        columna: data.columna ,
        serie: data.serie ,
        numero: data.numero ,
        descripcionError: data.descripcionError ,
        fechaSincronizado: data.fechaSincronizado ,
        estadoSincronizado: data.estadoSincronizado ,
    });
}

module.exports = QueryDocMasivoDetDTO;
