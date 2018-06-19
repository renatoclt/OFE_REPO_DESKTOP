/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryComprobantePago = require('../../modelos/msoffline/queryComprobantePago');
var DocReferencia = require('../../modelos/msoffline/docReferencia');
var DocParametro = require('../../modelos/msoffline/docParametro');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */
QueryComprobantePago.guardar = function guardarQueryComprobantePago(data, id){
    return QueryComprobantePago.findOne({where: {id: id}}).then(function(obj){
        if(obj){
            return obj.update({
                id: data.id,
                vcSerie: data.vcSerie ,
                vcCorrelativo: data.vcCorrelativo ,
                inIdorganizacionproveedora: data.inIdorganizacionproveedora ,
                vcOrgproveedoraDocumento: data.vcOrgproveedoraDocumento ,
                vcOrgproveedoraDenominacion: data.vcOrgproveedoraDenominacion ,
                vcOrgproveedoraNomcomercial: data.vcOrgproveedoraNomcomercial ,
                vcOrgproveedoraDirfiscal: data.vcOrgproveedoraDirfiscal ,
                vcOrgproveedoraCorreo: data.vcOrgproveedoraCorreo ,
                vcOrgcompradoraNomcomercial: data.vcOrgcompradoraNomcomercial ,
                inIdorganizacioncompradora: data.inIdorganizacioncompradora ,
                vcOrgcompradoraDenominacio: data.vcOrgcompradoraDenominacio ,
                vcOrgcompradoraDocumento: data.vcOrgcompradoraDocumento ,
                vcOrgcompradoraDirfiscal: data.vcOrgcompradoraDirfiscal ,
                vcOrgcompradoraCorreo: data.vcOrgcompradoraCorreo ,
                inIdarchivoPdf: data.inIdarchivoPdf ,
                inIdarchivoXml: data.inIdarchivoXml ,
                inIdarchivoCdr: data.inIdarchivoCdr ,
                vcArchivopdfUbicacion: data.vcArchivopdfUbicacion ,
                vcArchivoxmlUbicacion: data.vcArchivoxmlUbicacion ,
                vcArchivocdrUbicacion: data.vcArchivocdrUbicacion ,
                vcParamTicket: data.vcParamTicket ,
                tsParamFechabaja: data.tsParamFechabaja ,
                inIdusuarioproveedor: data.inIdusuarioproveedor ,
                inIdusuariocomprador: data.inIdusuariocomprador ,
                inIdtransportista: data.inIdtransportista ,
                vcTransportistaDocumento: data.vcTransportistaDocumento ,
                vcTransportistaDenominacion: data.vcTransportistaDenominacion ,
                chEstadocomprobantepago: data.chEstadocomprobantepago ,
                chFlagplazopago: data.chFlagplazopago ,
                chFlagregistroeliminado: data.chFlagregistroeliminado ,
                chFlagorigencomprobantepago: data.chFlagorigencomprobantepago ,
                chFlagorigencreacion: data.chFlagorigencreacion ,
                inIdguia: data.inIdguia ,
                inIdoc: data.inIdoc ,
                inIdusuariocreacion: data.inIdusuariocreacion ,
                inIdusuariomodificacion: data.inIdusuariomodificacion ,
                inIdorganizacioncreacion: data.inIdorganizacioncreacion ,
                inIdorganizacionmodificacion: data.inIdorganizacionmodificacion ,
                chMonedacomprobantepago: data.chMonedacomprobantepago ,
                tsFechaprogpagocomprobantepag: data.tsFechaprogpagocomprobantepag ,
                tsFechapagocomprobantepago: data.tsFechapagocomprobantepago ,
                tsFechacreacion: data.tsFechacreacion ,
                tsFecharegistro: data.tsFecharegistro ,
                tsFechaemision: data.tsFechaemision ,
                tsFecharecepcioncomprobantepa: data.tsFecharecepcioncomprobantepa ,
                tsFechavencimiento: data.tsFechavencimiento ,
                tsFechaenvio: data.tsFechaenvio ,
                tsFechacambioestado: data.tsFechacambioestado ,
                vcObscomprobantepago: data.vcObscomprobantepago ,
                vcObspagocomprobantepago: data.vcObspagocomprobantepago ,
                vcCondicionpago: data.vcCondicionpago ,
                chTiempoplazo: data.chTiempoplazo ,
                vcDocumentopago: data.vcDocumentopago ,
                vcDocumentosap: data.vcDocumentosap ,
                vcFormapago: data.vcFormapago ,
                vcTipocomprobante: data.vcTipocomprobante ,
                chEstadocomprobantepagocomp: data.chEstadocomprobantepagocomp ,
                inVersion: data.inVersion ,
                vcNumoc: data.vcNumoc ,
                vcNumguia: data.vcNumguia ,
                vcMontocomprobantepago: data.vcMontocomprobantepago ,
                vcLogo: data.vcLogo ,
                vcFirma : data.vcFirma ,
                vcPagotipodocumento: data.vcPagotipodocumento ,
                vcPagonrodocumento: data.vcPagonrodocumento ,
                vcPagomoneda: data.vcPagomoneda ,
                vcPagobanco: data.vcPagobanco ,
                vcDctotipodocumento: data.vcDctotipodocumento ,
                vcDctonrodocumento: data.vcDctonrodocumento ,
                vcDctomoneda: data.vcDctomoneda ,
                vcNrocheque: data.vcNrocheque ,
                chCodigointerno: data.chCodigointerno ,
                inDeguiapublicada: data.inDeguiapublicada ,
                vcTipofactura: data.vcTipofactura ,
                vcCodigoerpproveedor: data.vcCodigoerpproveedor ,
                tsFechahoracreacion: data.tsFechahoracreacion ,
                vcCodigosociedad: data.vcCodigosociedad ,
                deImpuesto1: data.deImpuesto1 ,
                deImpuesto2: data.deImpuesto2 ,
                deImpuesto3: data.deImpuesto3 ,
                deDescuento: data.deDescuento ,
                deImportereferencial : data.deImportereferencial ,
                deSubtotalcomprobantepago: data.deSubtotalcomprobantepago ,
                deTotalcomprobantepago: data.deTotalcomprobantepago ,
                dePagomontopagadoultimo: data.dePagomontopagadoultimo ,
                deDctomontoultimo: data.deDctomontoultimo ,
                inIdindicadorimpuesto: data.inIdindicadorimpuesto ,
                vcIndicadorimpuesto: data.vcIndicadorimpuesto ,
                chOpregfac: data.chOpregfac ,
                vcCodigoerp: data.vcCodigoerp ,
                vcCoderror: data.vcCoderror ,
                tsFechadocumentoret: data.tsFechadocumentoret ,
                vcDescerror: data.vcDescerror ,
                chTipoemision: data.chTipoemision ,
                dePorcentajeimpuesto: data.dePorcentajeimpuesto ,
                inDetraccion: data.inDetraccion ,
                inIdbienservicio: data.inIdbienservicio ,
                vcCodigobienservicio: data.vcCodigobienservicio ,
                vcDescripcionbienservicio: data.vcDescripcionbienservicio ,
                vcPorcentajedetraccion: data.vcPorcentajedetraccion ,        
                vcIdcondicionpago: data.vcIdcondicionpago ,
                vcDescripcioncondicionpago: data.vcDescripcioncondicionpago ,
                vcLlaveerp: data.vcLlaveerp ,
                vcIdtablaestado: data.vcIdtablaestado ,
                vcIdregistroestadoprov: data.vcIdregistroestadoprov ,
                vcIdregistroestadocomp: data.vcIdregistroestadocomp ,
                vcIdtablamoneda: data.vcIdtablamoneda ,
                vcIdregistromoneda: data.vcIdregistromoneda ,
                vcIdtablatipocomprobante : data.vcIdtablatipocomprobante ,
                vcIdregistrotipocomprobante: data.vcIdregistrotipocomprobante ,
                chIdtipocomprobante: data.chIdtipocomprobante ,
                dePagomontopagado: data.dePagomontopagado ,
                inIdentidademisor: data.inIdentidademisor ,
                inIdentidadreceptor: data.inIdentidadreceptor ,
                deDctomonto: data.deDctomonto ,
                vcTicketRetencion: data.vcTicketRetencion
            }, {where: {id: id}});
        }
        else{
            QueryComprobantePago.create({
                id: data.id,
                vcSerie: data.vcSerie ,
                vcCorrelativo: data.vcCorrelativo ,
                inIdorganizacionproveedora: data.inIdorganizacionproveedora ,
                vcOrgproveedoraDocumento: data.vcOrgproveedoraDocumento ,
                vcOrgproveedoraDenominacion: data.vcOrgproveedoraDenominacion ,
                vcOrgproveedoraNomcomercial: data.vcOrgproveedoraNomcomercial ,
                vcOrgproveedoraDirfiscal: data.vcOrgproveedoraDirfiscal ,
                vcOrgproveedoraCorreo: data.vcOrgproveedoraCorreo ,
                vcOrgcompradoraNomcomercial: data.vcOrgcompradoraNomcomercial ,
                inIdorganizacioncompradora: data.inIdorganizacioncompradora ,
                vcOrgcompradoraDenominacio: data.vcOrgcompradoraDenominacio ,
                vcOrgcompradoraDocumento: data.vcOrgcompradoraDocumento ,
                vcOrgcompradoraDirfiscal: data.vcOrgcompradoraDirfiscal ,
                vcOrgcompradoraCorreo: data.vcOrgcompradoraCorreo ,
                inIdarchivoPdf: data.inIdarchivoPdf ,
                inIdarchivoXml: data.inIdarchivoXml ,
                inIdarchivoCdr: data.inIdarchivoCdr ,
                vcArchivopdfUbicacion: data.vcArchivopdfUbicacion ,
                vcArchivoxmlUbicacion: data.vcArchivoxmlUbicacion ,
                vcArchivocdrUbicacion: data.vcArchivocdrUbicacion ,
                vcParamTicket: data.vcParamTicket ,
                tsParamFechabaja: data.tsParamFechabaja ,
                inIdusuarioproveedor: data.inIdusuarioproveedor ,
                inIdusuariocomprador: data.inIdusuariocomprador ,
                inIdtransportista: data.inIdtransportista ,
                vcTransportistaDocumento: data.vcTransportistaDocumento ,
                vcTransportistaDenominacion: data.vcTransportistaDenominacion ,
                chEstadocomprobantepago: data.chEstadocomprobantepago ,
                chFlagplazopago: data.chFlagplazopago ,
                chFlagregistroeliminado: data.chFlagregistroeliminado ,
                chFlagorigencomprobantepago: data.chFlagorigencomprobantepago ,
                chFlagorigencreacion: data.chFlagorigencreacion ,
                inIdguia: data.inIdguia ,
                inIdoc: data.inIdoc ,
                inIdusuariocreacion: data.inIdusuariocreacion ,
                inIdusuariomodificacion: data.inIdusuariomodificacion ,
                inIdorganizacioncreacion: data.inIdorganizacioncreacion ,
                inIdorganizacionmodificacion: data.inIdorganizacionmodificacion ,
                chMonedacomprobantepago: data.chMonedacomprobantepago ,
                tsFechaprogpagocomprobantepag: data.tsFechaprogpagocomprobantepag ,
                tsFechapagocomprobantepago: data.tsFechapagocomprobantepago ,
                tsFechacreacion: data.tsFechacreacion ,
                tsFecharegistro: data.tsFecharegistro ,
                tsFechaemision: data.tsFechaemision ,
                tsFecharecepcioncomprobantepa: data.tsFecharecepcioncomprobantepa ,
                tsFechavencimiento: data.tsFechavencimiento ,
                tsFechaenvio: data.tsFechaenvio ,
                tsFechacambioestado: data.tsFechacambioestado ,
                vcObscomprobantepago: data.vcObscomprobantepago ,
                vcObspagocomprobantepago: data.vcObspagocomprobantepago ,
                vcCondicionpago: data.vcCondicionpago ,
                chTiempoplazo: data.chTiempoplazo ,
                vcDocumentopago: data.vcDocumentopago ,
                vcDocumentosap: data.vcDocumentosap ,
                vcFormapago: data.vcFormapago ,
                vcTipocomprobante: data.vcTipocomprobante ,
                chEstadocomprobantepagocomp: data.chEstadocomprobantepagocomp ,
                inVersion: data.inVersion ,
                vcNumoc: data.vcNumoc ,
                vcNumguia: data.vcNumguia ,
                vcMontocomprobantepago: data.vcMontocomprobantepago ,
                vcLogo: data.vcLogo ,
                vcFirma : data.vcFirma ,
                vcPagotipodocumento: data.vcPagotipodocumento ,
                vcPagonrodocumento: data.vcPagonrodocumento ,
                vcPagomoneda: data.vcPagomoneda ,
                vcPagobanco: data.vcPagobanco ,
                vcDctotipodocumento: data.vcDctotipodocumento ,
                vcDctonrodocumento: data.vcDctonrodocumento ,
                vcDctomoneda: data.vcDctomoneda ,
                vcNrocheque: data.vcNrocheque ,
                chCodigointerno: data.chCodigointerno ,
                inDeguiapublicada: data.inDeguiapublicada ,
                vcTipofactura: data.vcTipofactura ,
                vcCodigoerpproveedor: data.vcCodigoerpproveedor ,
                tsFechahoracreacion: data.tsFechahoracreacion ,
                vcCodigosociedad: data.vcCodigosociedad ,
                deImpuesto1: data.deImpuesto1 ,
                deImpuesto2: data.deImpuesto2 ,
                deImpuesto3: data.deImpuesto3 ,
                deDescuento: data.deDescuento ,
                deImportereferencial : data.deImportereferencial ,
                deSubtotalcomprobantepago: data.deSubtotalcomprobantepago ,
                deTotalcomprobantepago: data.deTotalcomprobantepago ,
                dePagomontopagadoultimo: data.dePagomontopagadoultimo ,
                deDctomontoultimo: data.deDctomontoultimo ,
                inIdindicadorimpuesto: data.inIdindicadorimpuesto ,
                vcIndicadorimpuesto: data.vcIndicadorimpuesto ,
                chOpregfac: data.chOpregfac ,
                vcCodigoerp: data.vcCodigoerp ,
                vcCoderror: data.vcCoderror ,
                tsFechadocumentoret: data.tsFechadocumentoret ,
                vcDescerror: data.vcDescerror ,
                chTipoemision: data.chTipoemision ,
                dePorcentajeimpuesto: data.dePorcentajeimpuesto ,
                inDetraccion: data.inDetraccion ,
                inIdbienservicio: data.inIdbienservicio ,
                vcCodigobienservicio: data.vcCodigobienservicio ,
                vcDescripcionbienservicio: data.vcDescripcionbienservicio ,
                vcPorcentajedetraccion: data.vcPorcentajedetraccion ,        
                vcIdcondicionpago: data.vcIdcondicionpago ,
                vcDescripcioncondicionpago: data.vcDescripcioncondicionpago ,
                vcLlaveerp: data.vcLlaveerp ,
                vcIdtablaestado: data.vcIdtablaestado ,
                vcIdregistroestadoprov: data.vcIdregistroestadoprov ,
                vcIdregistroestadocomp: data.vcIdregistroestadocomp ,
                vcIdtablamoneda: data.vcIdtablamoneda ,
                vcIdregistromoneda: data.vcIdregistromoneda ,
                vcIdtablatipocomprobante : data.vcIdtablatipocomprobante ,
                vcIdregistrotipocomprobante: data.vcIdregistrotipocomprobante ,
                chIdtipocomprobante: data.chIdtipocomprobante ,
                dePagomontopagado: data.dePagomontopagado ,
                inIdentidademisor: data.inIdentidademisor ,
                inIdentidadreceptor: data.inIdentidadreceptor ,
                deDctomonto: data.deDctomonto ,
                vcTicketRetencion: data.vcTicketRetencion ,
            });
        }
    })

}

QueryComprobantePago.actualizarErrorBaja = function actualizarErrorBaja(_id){
    QueryComprobantePago.findOne({where:{id:_id}}).then(function(obj){
        if(obj){
            console.log('/////////////////////////////////////////////////////************************************************************************');
            return QueryComprobantePago.update({
                chEstadocomprobantepagocomp: constantes.estadoEliminadoLocal,
                chEstadocomprobantepago: constantes.inEstadoEliminadoLocal
            },{where: {id:_id}})
        }
    })
}

QueryComprobantePago.actualizarBaja = function actualizarErrorBaja(_id, _serie, _correlativo){
    QueryComprobantePago.findOne({where:{id:_id}}).then(function(obj){
        if(obj){
            return QueryComprobantePago.update({
                vcSerie: _serie,
                vcCorrelativo: _correlativo
            },{where: {id:_id}})
        }
    })
}

QueryComprobantePago.sincronizarDocumentoEstado = function sincronizarDocumentoEstado(data){
    QueryComprobantePago.findOne({where:{id:data.id}}).then(function(obj){
        return QueryComprobantePago.update({
            id: data.id,
            chEstadocomprobantepago: data.chEstadocomprobantepago,
            chEstadocomprobantepagocomp:  data.chEstadocomprobantepagocomp,
        }, {where: {id: data.id}}) ;
    });
}

QueryComprobantePago.sincronizarDocumentoErroneo = function sincronizarDocumentoErroneo(id){
    QueryComprobantePago.findOne({where:{id:id}}).then(function(obj){
        return QueryComprobantePago.update({
            id: id,
            chEstadocomprobantepago: constantes.inEstadoEliminadoLocal,
            chEstadocomprobantepagocomp: constantes.estadoEliminadoLocal,
        }, {where: {id: id}}) ;
    });
}


QueryComprobantePago.comunicacionBaja = function comunicacionBajaPercepcionRetencion(idBaja){
    return QueryComprobantePago.findAll({
        attributes: atributosComunicacionBaja.attributes,
        
        include:[ 
            {
                model: DocReferencia,
                as: 'detalleBaja', 
                attributes: atributosDetalleBaja.attributes,
            },
            {
                model: DocParametro,
                as: 'parametro',
                where: { paramDoc: constantes.motivoBaja}
            }
        ],
        where: {
            chEstadocomprobantepago: constantes.inEstadoBloqueadoLocal,  
            vcIdregistrotipocomprobante: idBaja,
        }
        
    },
        ).map(data =>{
            let motivo = ' ';
            for(parametro of data.dataValues.parametro){
                parametro.dataValues.json = JSON.parse(parametro.json.replace('/',''));
                motivo = parametro.dataValues.json.valor;
            }
            delete data.dataValues.parametro;
            console.log(data.dataValues.detalleBaja);
            for (referencia of data.dataValues.detalleBaja){
                referencia.dataValues.motivo = motivo;
            }
            data.dataValues.tipoSerie = 1;
            return data;
        });
}

var atributosDetalleBaja = {
    attributes : [
        ['ch_corr_dest','correlativo'],
        ['ch_serie_dest','serie'],
        ['se_idoc_destino','idComprobante'],
        ['ch_tipo_doc_ori','tipoComprobante'],
    ]
}

var atributosComunicacionBaja = {
    attributes: [
        ['in_idcomprobantepago','idComprobanteOffline'],
        ['vc_idregistrotipocomprobante','idTipoComprobante'],
        ['in_identidademisor','idEntidad'],
        ['vc_orgproveedora_documento','rucProveedor'],
        ['ch_idtipocomprobante','tipoDocumento'],
        ['vc_orgproveedora_documento','razonSocialProveedor'],
        ['ts_fechaemision','fechaEmisionDocumentoBaja'],
        ['vc_orgproveedora_correo','correo']
    ]
}
module.exports = QueryComprobantePago;
