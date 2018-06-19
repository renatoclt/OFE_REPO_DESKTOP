/**
 * @author renato Modificado 10-01-2018
 * @author renato creado 18-12-2017 
 */
var Serie = require('../../modelos/msparametrosquery/Serie');

/**
 * Funcion que retorna la tabla T_Maestra segun el campo codigo
 * 
 * @param {*} codigoTabla Se envia el codigo del catalogo
 */
Serie.filtro = function serieFiltro(id_entidad,id_tipo_comprobante,id_tipo_serie){
    var data = Serie.findAll({ attributes: filtroAtributosSerie.attributes ,
        where: {
            idEntidad: id_entidad,
            idTipoComprobante:id_tipo_comprobante,
            idTipoSerie:id_tipo_serie,
            estado: constantes.estadoActivo,
        }
      });
    return  data;
}

Serie.filtroSecundario = function serieFiltroSecundario(id_entidad,id_tipo_comprobante){
    var data = Serie.findAll({ attributes: filtroAtributosSerie.attributes ,
        where: {
            idEntidad: id_entidad,
            idTipoComprobante:id_tipo_comprobante,
            estado: constantes.estadoActivo,     
        }
      });
    return  data;
}

/**
 * Funcion que retorna la tabla T_Serie segun su id
 * 
 * @param {*} codigoTabla Se envia el codigo del catalogo
 */
Serie.buscarId = function buscarId(id){
    var data = Serie.findAll({ attributes: filtroAtributosSerie.attributes ,
        where: {
            idSerie: id
        }
      });
    return  data;
}

/**
 * Funcion que retorna la tabla T_Serie segun su id
 * 
 * @param {*} codigoTabla Se envia el codigo del catalogo
 */
Serie.buscarSerie = function buscarSerie(tipoComprobante, serie, tipoSerie , entidad){
    var data = Serie.findAll({ attributes: filtroAtributosSerie.attributes ,
        where: {
            idEntidad: entidad,
            idTipoSerie: tipoSerie,
            idTipoComprobante: tipoComprobante,
            serie: serie,           
            estado: constantes.estadoActivo, 
        }
      });
    return  data;
}
Serie.acturalizarCorrelativo = function(id, correlativo){
    var data = Serie.update({
        correlativo: correlativo,
        estado: constantes.estadoActivo,
    },
    { where: { idSerie: id } }
);
}


//atributos utilizados por function maestraFiltro
var filtroAtributosSerie = {
    attributes: [
                'idSerie', 
                'idEntidad',
                'idTipoSerie',
                'direccion',
                'idTipoComprobante',
                'serie',
                'correlativo',
                'idUbigeo'],
}
module.exports = Serie;

//idUbigeo -- codigoUbigeo doc_entidad
