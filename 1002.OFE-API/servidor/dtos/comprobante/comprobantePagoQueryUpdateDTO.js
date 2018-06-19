/**
 * @author ricardo gamero coronado
 */

var ComprobantePagoQueryUpdate= require('../../modelos/comprobantes/comprobantePagoQuery');
var dateFormat = require('dateformat');
sequelize = require("sequelize");
const Op = conexion.Op;

ComprobantePagoQueryUpdate.actualizarQuery = function updateQuery(_id,fecha){
    return ComprobantePagoQueryUpdate.update({
        chEstadocomprobantepago:  constantes.estadoInactivo,
        inVersion: 1,
        chEstadocomprobantepago: constantes.inEstadoBloqueadoLocal,
        chEstadocomprobantepagocomp: constantes.estadoBloqueadoLocal,
        tsParamFechabaja: fecha,
    },{
        where: {inIdcomprobantepago: _id}
    }
);
} 
module.exports = ComprobantePagoQueryUpdate;
