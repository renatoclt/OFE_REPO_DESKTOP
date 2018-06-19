/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryTipoAfecIgv = require('../../modelos/msoffline/queryTipoAfecIgv');
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */


QueryTipoAfecIgv.eliminar = function eliminarIdioma(){
    return QueryTipoAfecIgv.update(
        {
            estado: constantes.estadoInactivo
        },
        {where: {}})
}


QueryTipoAfecIgv.guardar = function guardarQueryTipoAfecIgv(data){
    return QueryTipoAfecIgv.findOne({where: {id: data.idTipoAfectacion}}).then(function(obj){
        if(obj){
            return QueryTipoAfecIgv.update({
                id: data.idTipoAfectacion,
                idioma: data.idIdioma ,
                codigo: data.codigo ,
                descripcion: data.descripcion ,
                afectaIgv: data.afectaIgv ,
                catalogo: data.catalogo ,
                usuarioCreacion: data.usuarioCreacion ,
                usuarioModificacion: data.usuarioModificacion ,
                fechaCreacion: data.fechaCreacion ,
                fechaModificacion: data.fechaModificacion ,
                fechaSincronizado: data.fechaSincronizado ,
                estadoSincronizado: data.estadoSincronizado ,
                estado: constantes.estadoActivo,
            }, {where: {id: data.idTipoAfectacion}});
        }
        else{
            return QueryTipoAfecIgv.create({
                id: data.idTipoAfectacion,
                idioma: data.idIdioma ,
                codigo: data.codigo ,
                descripcion: data.descripcion ,
                afectaIgv: data.afectaIgv ,
                catalogo: data.catalogo ,
                usuarioCreacion: data.usuarioCreacion ,
                usuarioModificacion: data.usuarioModificacion ,
                fechaCreacion: data.fechaCreacion ,
                fechaModificacion: data.fechaModificacion ,
                fechaSincronizado: data.fechaSincronizado ,
                estadoSincronizado: data.estadoSincronizado ,
                estado: constantes.estadoActivo,
        });
    }
});
}

module.exports = QueryTipoAfecIgv;
