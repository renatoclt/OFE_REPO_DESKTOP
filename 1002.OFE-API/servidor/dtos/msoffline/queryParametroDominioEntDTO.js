/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryParametroDominioEnt = require('../../modelos/msoffline/queryParametroDominioEnt');
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

QueryParametroDominioEnt.guardar = function guardarQueryParametroDominioEnt(data){
    return QueryParametroDominioEnt.create({
        id: data.id,
        parametroEntidad: data.parametroEntidad ,
        descripcionParametroEntidad: data.descripcionParametroEntidad ,
        dominioEntidad: data.dominioEntidad ,
        idioma: data.idioma ,
        codigo: data.codigo ,
        descripcion: data.descripcion ,
        descripcionCorta: data.descripcionCorta ,
        estadoParametro: data.estadoParametro ,
        estadoDominio: data.estadoDominio ,
        fechaSincronizado: data.fechaSincronizado ,
        estadoSincronizado: data.estadoSincronizado ,
    });
}

module.exports = QueryParametroDominioEnt;
