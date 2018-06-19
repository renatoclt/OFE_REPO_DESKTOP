/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var EntidadQueryOffline = require('../../modelos/msoffline/EntidadQueryOffline');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

EntidadQueryOffline.eliminar = function eliminarIdioma(){
    return EntidadQueryOffline.update(
        {
            estado: constantes.estadoInactivo
        },
        {where: {}})
}
 
EntidadQueryOffline.nuevoID = async function nuevoID(){
    let id = await EntidadQueryOffline.max('id').error(function(error){
        return 0;
    });
    return (id % 10000000) + 10000001;
}

EntidadQueryOffline.guardar = async function guardarEntidadQueryOffline(data){
    return EntidadQueryOffline.findOne({where: {id: data.id}}).then(function(obj){
        if(obj){
            return EntidadQueryOffline.update({
                id: data.id,
                documento: data.documento ,
                denominacion: data.denominacion ,
                nombreComercial: data.nombreComercial ,
                direccionFiscal: data.direccion ,
                correoElectronico: data.correo ,
                logo: data.logo ,
                pais: data.pais ,
                ubigeo: data.ubigeo ,
                tipoDocumento: data.tipoDocumento ,
                idTipoDocumento: data.idTipoDocumento ,
                idEbiz: data.idEbiz ,
                usuarioCreacion: data.usuarioCreacion,
                usuarioModificacion: data.usuarioModificacion,
                fechaCreacion: data.fechaCreacion ,
                fechaModificacion: data.fechaModificacion ,
                estado: data.estado ,
                fechaSincronizado: data.fechaSincronizado ,
                estadoSincronizado: data.estadoSincronizado 
            }, {where: {id: data.id}});
        }
        else{
            return EntidadQueryOffline.create({
                id: data.id,
                documento: data.documento ,
                denominacion: data.denominacion ,
                nombreComercial: data.nombreComercial ,
                direccionFiscal: data.direccion ,
                correoElectronico: data.correo ,
                logo: data.logo ,
                pais: data.pais ,
                ubigeo: data.ubigeo ,
                tipoDocumento: data.tipoDocumento ,
                idTipoDocumento: data.idTipoDocumento ,
                idEbiz: data.idEbiz ,
                usuarioCreacion: data.usuarioCreacion,
                usuarioModificacion: data.usuarioModificacion,
                fechaCreacion: data.fechaCreacion ,
                fechaModificacion: data.fechaModificacion ,
                estado: data.estado ,
                fechaSincronizado: data.fechaSincronizado ,
                estadoSincronizado: data.estadoSincronizado 
        });
    }
});
}

    

EntidadQueryOffline.buscarDocumentoGuardar = async function buscarDocumentoGuardar(data){
    return EntidadQueryOffline.findOne({where: {documento: data.documento , idTipoDocumento: data.idTipoDocumento}}).then(function(obj){
        if(obj){
            return EntidadQueryOffline.update({
                id: obj.id,
                documento: obj.documento,
                denominacion: obj.denominacion,
                nombreComercial: obj.nombreComercial,
                direccionFiscal: obj.direccion,
                correoElectronico: obj.correo,
                idEbiz: obj.idEbiz,
                pais: obj.pais ,
                ubigeo: obj.ubigeo,
                tipoDocumento: obj.tipoDocumento,
                idTipoDocumento: obj.idTipoDocumento,
                usuarioCreacion: obj.usuarioCreacion,
                usuarioModificacion: obj.usuarioModificacion,
                fechaCreacion: obj.fechaCreacion,
                fechaModificacion: obj.fechaModificacion,
                estado: obj.estado,
                fechaSincronizado: obj.fechaSincronizado,
                estadoSincronizado: obj.estadoSincronizado
            },  {where: {tipoDocumento: obj.tipoDocumento , idTipoDocumento: obj.idTipoDocumento}});
        }
        else{
            console.log('///////////////////////////////////////////////////////////////////////////////////////////////');
            return EntidadQueryOffline.create({
                id: data.id,
                documento: data.documento ,
                denominacion: data.denominacion ,
                nombreComercial: data.nombreComercial ,
                direccionFiscal: data.direccion ,
                correoElectronico: data.correo ,
                logo: data.logo ,
                pais: data.pais ,
                ubigeo: data.ubigeo ,
                tipoDocumento: data.tipoDocumento ,
                idTipoDocumento: data.idTipoDocumento ,
                idEbiz: data.idEbiz ,
                usuarioCreacion: data.usuarioCreacion,
                usuarioModificacion: data.usuarioModificacion,
                fechaCreacion: data.fechaCreacion ,
                fechaModificacion: data.fechaModificacion ,
                estado: data.estado ,
                fechaSincronizado: data.fechaSincronizado ,
                estadoSincronizado: data.estadoSincronizado 
            });
        }
    });    
}


EntidadQueryOffline.buscarGuardarActualizar = function buscarGuardarActualizar(data, id){
    return EntidadQueryOffline.findOne({where: {id: id}}).then(function(obj){
        if(obj){
            return EntidadQueryOffline.update({
                id: data.id,
                documento: data.documento,
                denominacion: data.denominacion,
                nombreComercial: data.nombreComercial,
                direccionFiscal: data.direccion,
                correoElectronico: data.correo,
                idEbiz: data.idEbiz,
                pais: data.pais ,
                ubigeo: data.ubigeo,
                tipoDocumento: data.tipoDocumento,
                idTipoDocumento: data.idTipoDocumento,
                usuarioCreacion: data.usuarioCreacion,
                usuarioModificacion: data.usuarioModificacion,
                fechaCreacion: data.fechaCreacion,
                fechaModificacion: data.fechaModificacion,
                estado: data.estado,
                fechaSincronizado: data.fechaSincronizado,
                estadoSincronizado: data.estadoSincronizado
            },  {where: {id: id}});
        }else{
            return EntidadQueryOffline.create({
                id: data.id,
                documento: data.documento,
                denominacion: data.denominacion,
                nombreComercial: data.nombreComercial,
                direccionFiscal: data.direccion,
                correoElectronico: data.correo,
                idEbiz: data.idEbiz,
                pais: data.pais ,
                ubigeo: data.ubigeo,
                tipoDocumento: data.tipoDocumento,
                idTipoDocumento: data.idTipoDocumento,
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



EntidadQueryOffline.buscar = function buscarEntidad(tipoDocumento, documento){
    return EntidadQueryOffline.findOne({ where: {idTipoDocumento: tipoDocumento, documento: documento } });
}

module.exports = EntidadQueryOffline;

9