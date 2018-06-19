
/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var ParametroEntidad = require('../../modelos/msoffline/parametroEntidad');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

ParametroEntidad.eliminar = function eliminarParametroEntidad(){
    return ParametroEntidad.update(
        {
            estado: constantes.estadoInactivo
        },
        {where: {}})
}

ParametroEntidad.guardar = function guardarParametroEntidad(data){
    return ParametroEntidad.findOne({where: {id: data.id}}).then(function(obj){
        if(obj){
            return ParametroEntidad.update({
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
            return ParametroEntidad.create({
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
    
    

module.exports = ParametroEntidad;
