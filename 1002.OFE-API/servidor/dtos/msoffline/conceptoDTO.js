/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var Concepto = require('../../modelos/msoffline/concepto');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

Concepto.eliminar = function eliminarIdioma(){
    return Concepto.update(
        {
            estado: constantes.estadoInactivo
        },
        {where: {}})
}


Concepto.guardar = function guardarConcepto(data){
    return Concepto.findOne({where: {id: data.idConcepto}}).then(function(obj){
        if(obj){
            return Concepto.update({
                id: data.idConcepto,
                idioma: data.idioma,
                codigo: data.codigo,
                descripcion: data.descripcion,
                catalogo: data.catalogo,
                usuarioCreacion: data.usuarioCreacion,
                usuarioModificacion: data.usuarioModificacion,
                fechaCreacion: data.fechaCreacion,
                fechaModificacion: data.fechaModificacion,
                estado: data.estado,
                fechaSincronizado: data.fechaSincronizado,
                estadoSincronizado: data.estadoSincronizado
            }, {where: {id: data.idConcepto}});
        }
        else{
            return Concepto.create({
                id: data.idConcepto,
                idioma: data.idioma,
                codigo: data.codigo,
                descripcion: data.descripcion,
                catalogo: data.catalogo,
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


module.exports = Concepto;