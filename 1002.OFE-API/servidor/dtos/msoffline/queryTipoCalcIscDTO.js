/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryTipoCalcIsc = require('../../modelos/msoffline/queryTipoCalcIsc');
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */


QueryTipoCalcIsc.eliminar = function eliminarIdioma(){
    return QueryTipoCalcIsc.update(
        {
            estado: constantes.estadoInactivo
        },
        {where: {}})
}

QueryTipoCalcIsc.guardar = function guardarQueryTipoCalcIsc(data){
    return QueryTipoCalcIsc.findOne({where: {id: data.idTipoCalculo}}).then(function(obj){
        if(obj){
            return QueryTipoCalcIsc.update({
                id: data.idTipoCalculo,
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
            }, {where: {id: data.idTipoCalculo}});
        }
        else{
            return QueryTipoCalcIsc.create({
                id: data.idTipoCalculo,
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
    
module.exports = QueryTipoCalcIsc;
