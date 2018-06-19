/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var Entidad = require('../../modelos/msoffline/entidad');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */
Entidad.eliminar = function eliminarIdioma(){
    return Entidad.update(
        {
            estado: constantes.estadoInactivo
        },
        {where: {}})
}


Entidad.guardar = function guardarEntidad(data){
    return Entidad.findOne({where: {id: data.id}}).then(function(obj){
        if(obj){
            return Entidad.update({
                id: data.id,
                documento: data.documento,
                denominacion: data.denominacion,
                nombreComercial: data.nombreComercial,
                direccion: data.direccion,
                correo: data.correo,
                idEbiz: data.idEbiz,
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
            return Entidad.create({
                id: data.id,
                documento: data.documento,
                denominacion: data.denominacion,
                nombreComercial: data.nombreComercial,
                direccion: data.direccion,
                correo: data.correo,
                idEbiz: data.idEbiz,
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

    
   

Entidad.buscarGuardarActualizar = function buscarGuardarActualizar(data, id){
    return Entidad.findOne({where: {id: id}}).then(function(obj){
        if(obj){
            return Entidad.update({
                id: data.id,
                documento: data.documento,
                denominacion: data.denominacion,
                nombreComercial: data.nombreComercial,
                direccion: data.direccion,
                correo: data.correo,
                idEbiz: data.idEbiz,
                usuarioCreacion: data.usuarioCreacion,
                usuarioModificacion: data.usuarioModificacion,
                fechaCreacion: data.fechaCreacion,
                fechaModificacion: data.fechaModificacion,
                estado: data.estado,
                fechaSincronizado: data.fechaSincronizado,
                estadoSincronizado: data.estadoSincronizado
            },  {where: {id: id}});
        }else{
            return Entidad.create({
                id: data.id,
                documento: data.documento,
                denominacion: data.denominacion,
                nombreComercial: data.nombreComercial,
                direccion: data.direccion,
                correo: data.correo,
                idEbiz: data.idEbiz,
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

module.exports = Entidad;