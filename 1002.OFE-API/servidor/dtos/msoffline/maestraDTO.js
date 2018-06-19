/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var Maestra = require('../../modelos/msoffline/maestra');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */



Maestra.eliminar = function eliminarMaestra(){
    return Maestra.update(
        {
            estado: constantes.estadoInactivo
        },
        {where: {}})
}


Maestra.guardar = function guardarMaestra(data){
    return Maestra.findOne({where: {tabla: data.tabla, codigo: data.codigo }}).then(function(obj){
        if(obj){
            return Maestra.update({
                organizacion: data.organizacion,
                tabla: data.tabla,
                codigo: data.codigo ,
                descripcionCorta: data.descripcionCorta ,
                descripcionLarga: data.descripcionLarga ,
                descripcionLargaIngles: data.descripcionLargaIngles,
                tipo: data.tipo,
                iso: data.iso ,
                equivalencia: data.equivalencia ,
                equivalenciaSalida: data.equivalenciaSalida ,
                habilitado: data.habilitado ,
                orden: data.orden ,
                default: data.default ,
                idTablaPadre: data.idTablaPadre ,
                registroPadre: data.registroPadre ,
                fechaCreacion: data.fechaCreacion ,
                fechaModificacion: data.fechaModificacion ,
                portal: data.portal ,
                perfil: data.perfil ,
                fechaSincronizado: data.fechaSincronizado,
                estadoSincronizado: data.estadoSincronizado,
                estado: constantes.estadoActivo
            }, {where: {tabla: data.tabla, codigo: data.codigo }});
        }
        else{
            return Maestra.create({
                organizacion: data.organizacion,
                tabla: data.tabla,
                codigo: data.codigo ,
                descripcionCorta: data.descripcionCorta ,
                descripcionLarga: data.descripcionLarga ,
                descripcionLargaIngles: data.descripcionLargaIngles,
                tipo: data.tipo,
                iso: data.iso ,
                equivalencia: data.equivalencia ,
                equivalenciaSalida: data.equivalenciaSalida ,
                habilitado: data.habilitado ,
                orden: data.orden ,
                default: data.default ,
                idTablaPadre: data.idTablaPadre ,
                registroPadre: data.registroPadre ,
                fechaCreacion: data.fechaCreacion ,
                fechaModificacion: data.fechaModificacion ,
                portal: data.portal ,
                perfil: data.perfil ,
                fechaSincronizado: data.fechaSincronizado,
                estadoSincronizado: data.estadoSincronizado,
                estado: constantes.estadoActivo

        });
    }
});
}
    
module.exports = Maestra;
