var tablaComprobante = require('../../modelos/comprobantes/comprobantePago');
var atributos=tablaComprobante.tableAttributes;

var nuevoComprobanteDTO={};
        
nuevoComprobanteDTO=atributos;
nuevoComprobanteDTO.idSerie=null;
nuevoComprobanteDTO.usuarioCreacion='';
nuevoComprobanteDTO.usuarioModificacion='';
nuevoComprobanteDTO.ticketRetencion='';
nuevoComprobanteDTO.documentoEntidad =[];
nuevoComprobanteDTO.documentoConcepto=[];
nuevoComprobanteDTO.documentoParametro=[];
nuevoComprobanteDTO.documentoReferencia =[];
nuevoComprobanteDTO.detalleEbiz=[];
        
module.exports = nuevoComprobanteDTO;
