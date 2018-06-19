/**
 * @author --- Modificado **-**-****
 * @author renato creado 20-02-2018 
 */
var DocumentosAzure = require('../../modelos/msoffline/documentoAzure');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

DocumentosAzure.eliminar = function eliminarIdioma(){
    return DocumentosAzure.update(
        {
            estado: constantes.estadoInactivo
        },
        {where: {}})
}



DocumentosAzure.guardar = function guardarDocumentosAzure(data){
    return DocumentosAzure.findOne({where: {id: data.id}}).then(function(obj){
        if(obj){
            return DocumentosAzure.update({
                id: data.id,
                idEntidad: data.idEntidad,
                logoEntidad: data.logoEntidad,
                logoEbiz: data.logoEbiz,
                tipoComprobante: data.tipoComprobante,
                plantillaPdf: data.plantillaPdf,
                usuarioCreacion: data.usuarioCreacion,
                usuarioModificacion: data.usuarioModificacion,
                fechaCreacion: data.fechaCreacion,
                fechaModificacion: data.fechaModificacion,
                estado: data.estado,
                fechaSincronizado: data.fechaSincronizado,
                estadoSincronizado: data.estadoSincronizado,
                estado: constantes.estadoActivo
            }, {where: {id: data.id}});
        }
        else{
            return DocumentosAzure.create({
                id: data.id,
                idEntidad: data.idEntidad,
                logoEntidad: data.logoEntidad,
                logoEbiz: data.logoEbiz,
                tipoComprobante: data.tipoComprobante,
                plantillaPdf: data.plantillaPdf,
                usuarioCreacion: data.usuarioCreacion,
                usuarioModificacion: data.usuarioModificacion,
                fechaCreacion: data.fechaCreacion,
                fechaModificacion: data.fechaModificacion,
                estado: data.estado,
                fechaSincronizado: data.fechaSincronizado,
                estadoSincronizado: data.estadoSincronizado,
                estado: constantes.estadoActivo
        });
    }
});
}
    
  
DocumentosAzure.mostarPlantilla = function(entidad, idTipoComprobante){
    return DocumentosAzure.findAll({ attributes: filtroAtributos.attributes ,
        where: {
            idEntidad: entidad , tipoComprobante: idTipoComprobante
        }
      });

}
DocumentosAzure.buscar = function buscarDocumentoAzure(idEntidad, idTipoComprobante){
    return DocumentosAzure.findOne({ where: {idEntidad: idEntidad, tipoComprobante: idTipoComprobante } });
}

var filtroAtributos = {
    attributes: [
                'id', 
                'idEntidad',
                'tipoComprobante',
                'logoEntidad',
                'logoEbiz',
                'plantillaPdf'],
}

module.exports = DocumentosAzure;