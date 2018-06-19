/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryIdioma = require('../../modelos/msoffline/queryIdioma');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

QueryIdioma.eliminar = function eliminarIdioma(){
    return QueryIdioma.update(
        {
            estado: constantes.estadoInactivo
        },
        {where: {}})
}


QueryIdioma.guardar = function guardarQueryIdioma(data){
    return QueryIdioma.findOne({where: {id: data.id}}).then(function(obj){
        if(obj){
            return QueryIdioma.update({
                id: data.id,
                descripcion: data.descripcion ,
                descripcionCorta: data.descripcionCorta ,
                usuarioCreacion: data.usuarioCreacion ,
                usuarioModificacion: data.usuarioModificacion ,
                fechaCreacion: data.fechaCreacion ,
                fechaModificacion: data.fechaModificacion ,
                fechaSincronizado: data.fechaSincronizado ,
                estadoSincronizado: data.estadoSincronizado ,
                estado: constantes.estadoActivo
            }, {where: {id: data.id}});
        }
        else{
            return QueryIdioma.create({
                id: data.id,
                descripcion: data.descripcion ,
                descripcionCorta: data.descripcionCorta ,
                usuarioCreacion: data.usuarioCreacion ,
                usuarioModificacion: data.usuarioModificacion ,
                fechaCreacion: data.fechaCreacion ,
                fechaModificacion: data.fechaModificacion ,
                fechaSincronizado: data.fechaSincronizado ,
                estadoSincronizado: data.estadoSincronizado ,
                estado: constantes.estadoActivo
        });
    }});
}


module.exports = QueryIdioma;
