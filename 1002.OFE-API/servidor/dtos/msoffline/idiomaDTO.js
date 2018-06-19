/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var Idioma = require('../../modelos/msoffline/idioma');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */
Idioma.contar = function contarIdioma(){
    return Idioma.findAndCountAll();
}

Idioma.CrearTabla = function CrearTabla(){
    console.log('****************************');
    Idioma.createTable('Todos', {
        id
    }).then(() => {
        console.log('cree tabla idioma');
        // perform further operations if needed
    });;
}

Idioma.eliminar = function eliminarIdioma(){
    return Idioma.update(
        {
            estado: constantes.estadoInactivo
        },
        {where: {}})
}


Idioma.guardar = function guardarIdioma(data){
    return Idioma.findOne({where: {id: data.id}}).then(function(obj){
        if(obj){
            return Idioma.update({
                id: data.id,
                descripcion: data.descripcion,
                descripcionCorta: data.descripcionCorta,
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
            return Idioma.create({
                id: data.id,
                descripcion: data.descripcion,
                descripcionCorta: data.descripcionCorta,
                usuarioCreacion: data.usuarioCreacion,
                usuarioModificacion: data.usuarioModificacion,
                fechaCreacion: data.fechaCreacion,
                fechaModificacion: data.fechaModificacion,
                estado: data.estado,
                fechaSincronizado: data.fechaSincronizado,
                estadoSincronizado: data.estadoSincronizado
        });
    }});
}
    
module.exports = Idioma;