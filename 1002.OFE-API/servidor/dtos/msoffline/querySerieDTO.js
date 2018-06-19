/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QuerySerie = require('../../modelos/msoffline/querySerie');
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */


 
QuerySerie.eliminar = function eliminarSerie(){
    return QuerySerie.update(
        {
            estado: constantes.estadoInactivo
        },
        {where: {}})
}

QuerySerie.guardar = function guardarQuerySerie(data){
    return QuerySerie.findOne({where: {id: data.idSerie}}).then(function(obj){
        if(obj){
            return QuerySerie.update({
                id: data.idSerie,
                entidad: data.idEntidad ,
                tipoSerie: data.idTipoSerie ,
                direccion: data.direccion ,
                serie: data.serie ,
                idTipoDocumento: data.idTipoComprobante,
                correlativo: data.correlativo ,
                dominioUbigeo: data.idUbigeo ,
                codigoUbigeo: data.codigoUbigeo,
                usuarioCreacion: data.usuarioCreacion ,
                usuarioModificacion: data.usuarioModificacion ,
                fechaCreacion: data.fechaCreacion ,
                fechaModificacion: data.fechaModificacion ,
                fechaSincronizado: data.fechaSincronizado ,
                estadoSincronizado: data.estadoSincronizado ,    
                estado: constantes.estadoActivo    
            }, {where: {id: data.idSerie}});
        }
        else{
            return QuerySerie.create({
                id: data.idSerie,
                entidad: data.idEntidad ,
                tipoSerie: data.idTipoSerie ,
                direccion: data.direccion ,
                serie: data.serie ,
                idTipoDocumento: data.idTipoComprobante,
                correlativo: data.correlativo ,
                dominioUbigeo: data.idUbigeo ,
                codigoUbigeo: data.codigoUbigeo,
                usuarioCreacion: data.usuarioCreacion ,
                usuarioModificacion: data.usuarioModificacion ,
                fechaCreacion: data.fechaCreacion ,
                fechaModificacion: data.fechaModificacion ,
                fechaSincronizado: data.fechaSincronizado ,
                estadoSincronizado: data.estadoSincronizado ,    
                estado: constantes.estadoActivo    
        });
    }
});
}
    
    

module.exports = QuerySerie;
