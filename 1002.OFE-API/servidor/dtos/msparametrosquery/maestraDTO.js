
/**
 * @author --- Modificado **-**-****
 * @author renato creado 18-12-2017 
 */
var Maestra = require('../../modelos/msparametrosquery/Maestra')

/**
 * Funcion que retorna la tabla T_Maestra segun el campo codigo
 * 
 * @param {*} codigoTabla Se envia el codigo del catalogo
 */
Maestra.filtro = function maestraFiltro(codigoTabla){
    return Maestra.findAll({ attributes: filtroAtributos.attributes ,
        where: {
            tabla: codigoTabla
        }
      });
}

//atributos utilizados por function maestraFiltro
var filtroAtributos = {
    attributes: [
                'organizacion', 
                'tabla',
                'codigo',
                'descripcionCorta',
                'descripcionLarga',
                'descripcionLargaIngles',
                'iso',
                'habilitado'],
}
module.exports = Maestra;