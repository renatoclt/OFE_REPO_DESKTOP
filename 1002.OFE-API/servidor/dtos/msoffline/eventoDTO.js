/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var Evento = require('../../modelos/msoffline/evento');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 */



Evento.eliminar = function eliminarEvento(){
    return Evento.update(
        {
            estado: constantes.estadoInactivo
        },
        {where: {}})
}


Evento.guardar = function guardarEvento(data){
    return Evento.findOne({where: {id: data.id}}).then(function(obj){
        if(obj){
            return Evento.update({
                id: data.id,
                idioma: data.idioma,
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
            return Evento.create({
                id: data.id,
                idioma: data.idioma,
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
    

module.exports = Evento