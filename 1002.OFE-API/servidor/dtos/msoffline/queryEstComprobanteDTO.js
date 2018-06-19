/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryEstComprobante = require('../../modelos/msoffline/queryEstComprobante');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

QueryEstComprobante.eliminar = function eliminarIdioma(){
    return QueryEstComprobante.update(
        {
            estado: constantes.estadoInactivo
        },
        {where: {}})
}


QueryEstComprobante.guardar = function guardarQueryEstComprobante(data){
    return QueryEstComprobante.findOne({where: {id: data.id}}).then(function(obj){
        if(obj){
            return QueryEstComprobante.update({
                id: data.id,
                idioma: data.idioma ,
                descripcion: data.descripcion ,
                abreviatura: data.abreviatura ,
                fechaSincronizado: data.fechaSincronizado ,
                estadoSincronizado: data.estadoSincronizado ,
                estado: constantes.estadoActivo
            }, {where: {id: data.id}});
        }
        else{
            return QueryEstComprobante.create({
                id: data.id,
                idioma: data.idioma ,
                descripcion: data.descripcion ,
                abreviatura: data.abreviatura ,
                fechaSincronizado: data.fechaSincronizado ,
                estadoSincronizado: data.estadoSincronizado ,
                estado: constantes.estadoActivo
        });
    }
});
}



    
    

module.exports = QueryEstComprobante;
