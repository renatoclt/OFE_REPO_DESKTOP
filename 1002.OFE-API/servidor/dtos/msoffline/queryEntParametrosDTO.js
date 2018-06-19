/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryEntParametros = require('../../modelos/msoffline/queryEntParametros');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

QueryEntParametros.guardar = function guardarQueryEntParametros(data){
    return QueryEntParametros.create({
        id: data.id,
        entidad: data.entidad ,                           
        paramEntidad: data.paramEntidad ,                           
        json: data.json ,                           
        tipo: data.tipo ,                           
        valor: data.valor ,                           
        auxEntero: data.auxEntero ,                           
        auxCaracter: data.auxCaracter ,                           
        fechaSincronizado: data.fechaSincronizado ,                           
        estadoSincronizado: data.estadoSincronizado ,                                 
    });
}

module.exports = QueryEntParametros;
