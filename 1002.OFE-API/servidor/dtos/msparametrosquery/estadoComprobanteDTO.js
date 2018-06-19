
/**
 * @author --- Modificado **-**-****
 * @author renato creado 18-12-2017 
 */
var EstadoComprobante = require('../../modelos/msparametrosquery/estadoComprobante')

/**
 * Funcion que retorna la tabla T_Maestra segun el campo codigo
 * 
 * @param {*} codigoTabla Se envia el codigo del catalogo
 */
EstadoComprobante.listar = function estadoComprobanteFiltro(codigoTabla){
    return EstadoComprobante.findAll({ attributes: filtroAtributos.attributes ,
        where: {
        }
      });
}

//atributos utilizados por function maestraFiltro
var filtroAtributos = {
    attributes: [
                ['se_iestado','idEstadoComprobante'], 
                'idIdioma',
                'descripcion',
                'abreviacion'
            ],
}
module.exports = EstadoComprobante;