/**
 * @author --- Modificado **-**-****
 * @author ricardo gamero 30-01-2018
 */
//var ComprobantePago = require('../../modelos/comprobantes/comprobantePago');
var ComprobantePago = require('../../modelos/msoffline/comprobantePago')
var DocEntidad = require('../../modelos/comprobantes/docEntidad');
//var EntidadParametro = require('../../modelos/organizaciones/entidadParametro');
var TipoEnt = require('../../modelos/configuracion/tipoEnt');
var DocReferencia = require('../../modelos/comprobantes/docReferencia');
var constantes = require('../../utilitarios/constantes');
var queryParametroDominioDoc = require('../../modelos/msoffline/queryParametroDominioDoc');
const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */
ComprobantePago.actualizar = function updateCommands(_id){
    return ComprobantePago.update({
        estado: constantes.inEstadoBloqueadoLocal,
        estadoSincronizado: constantes.estadoInactivo,
        estadoComprobantePago: constantes.estadoBloqueadoLocal,
    },
    {
        where: {id: _id}
    }    
);
}

module.exports = ComprobantePago;
