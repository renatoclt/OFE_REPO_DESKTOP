/**
 * @author Roycer Cordova
 * @description Estandar de un objeto para realizar el hateo
 */

var hateoasObj = {
    type: null,                     //{string} nombre del hateo creado
    data: null,                     //{json o array} informacion solicitada
    nombreColeccion: null,          //{string} parametro del json de respuesta, donde se encuentra la data de tipo array
    ruta: null,                     //{string} ruta especifica del servicio
    paginacion:{
        activo: false,              //{boolean} true si tiene paginacion
        totalreg: null,             //{number} total de registros en base de datos
        regxpag: null,              //{number} numero de registros a mostrar en la pagina
        pagina:null                 //{number} pagina actual
    },
    busqueda:{
        activo: false,              //{boolean} true si tiene busqueda
        ruta: null,                 //{string} nombre del path del filtro
        parametros: {}              //{json} contiene los parametros de busqueda
    }
}

module.exports = hateoasObj;
