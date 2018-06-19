/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var TipoEntidad = require('../../modelos/msoffline/tipoEntidad');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */


 
TipoEntidad.eliminar = function eliminarTipoEntidad(){
    return TipoEntidad.update(
        {
            estado: constantes.estadoInactivo
        },
        {where: {}})
}


TipoEntidad.guardar = function guardarTipoEntidad(data){
    return TipoEntidad.findOne({where: {id: data.id}}).then(function(obj){
        if(obj){
            return TipoEntidad.update({
                id: data.id,
                descripcion: data.descripcion,
                usuarioCreacion: data.usuarioCreacion,
                usuarioModificacion: data.usuarioModificacion,
                fechaCreacion: data.fechaCreacion,
                fechaModificacion: data.fechaModificacion,
                estado: data.estado,
                fechaSincronizado: data.fechaSincronizado,
                estadoSincronizado: data.estadoSincronizado
            }, {where: {id: data.id}});
        }
        else{
            return TipoEntidad.create({
                id: data.id,
                descripcion: data.descripcion,
                usuarioCreacion: data.usuarioCreacion,
                usuarioModificacion: data.usuarioModificacion,
                fechaCreacion: data.fechaCreacion,
                fechaModificacion: data.fechaModificacion,
                estado: data.estado,
                fechaSincronizado: data.fechaSincronizado,
                estadoSincronizado: data.estadoSincronizado
        });
    }
});
}

    
   
module.exports = TipoEntidad;