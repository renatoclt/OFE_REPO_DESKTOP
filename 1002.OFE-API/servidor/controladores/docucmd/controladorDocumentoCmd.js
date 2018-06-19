var Documento = require('../../dtos/msdocucmd/documentoDTO');
var DocumentoEntidad = require('../../dtos/msdocucmd/documentoEntidadDTO');
var DocumentoReferencia = require('../../dtos/msdocucmd/documentoReferenciaDTO');   
var uuid = require('../../utilitarios/uuid');
var NumeroALetras = require('../../utilitarios/numerosALetras');
var archivo = require('../../dtos/msoffline/archivoDTO');
var Serie = require('../../dtos/msparametrosquery/serieDto');
var DocumentoQuery = require('../../dtos/msoffline/queryComprobantePagoDTO');
var entidad = require('../../dtos/msoffline/queryEntidadOfflineDTO');
var Evento = require('../../dtos/msoffline/queryComprobanteEventoDTO');
var QueryDocRefenci = require('../../dtos/msoffline/queryDocRefenciDTO');
var PdfGenerador = require('./index');
var usuario = require('../../dtos/msoffline/usuarioDTO')
/**
 * Controlador del
 * 
 * @param {*} ruta ruta del servicio
 * @param {*} rutaEsp ruta para el hateos 
 */
var contoladorComprobante =  function (ruta, rutaEsp){ 
    /**
     * Guardaremos documentos 
     * Actualmente solo guarda retenciones 
     * 
     * 1 await guarda en la tabla comprobante pago
     * 2 await guarda en la tabla docEntidad
     * 3 await guarda en la tabla docReferencia
     * y declaramos una funcion asincrona q espera los datos de la tabla
     * //falta guardar in_idusuarioproveedor
     * falta en la tabla T_comprobante
     * rucproveedor añadir PE   
     * RUCCOMPRADOR añadir PE
     * idUsuarioCreacion //ya funciona lo añadi en la cabezera del servicio
     * idUsuarioModifiacion //ya funciona lo añadi en la cabezera del servicio
     * funcion de convertir a letras
     * //falta en la tabla t_doc_entidad
     * usuario creacion
     * usuario modificacion
     * //guardar documento referencia
     * usuario creacion
     * usuario modificacion
     */
    router.post(ruta.concat('/guardarRetencion'), async function(req, res){
        data = req.body;
        data.id = uuid();
        try{
            data.fechaEmision = dateFormat(data.fechaEmision, "yyyy-mm-dd HH:MM:ss");
            data.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l");
            data.fechaRegistro = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l");
            data.idOrganizacionProveedora = req.headers.org_id;
            data.idProveedor = req.headers.org_id;
            data.idUsuarioCreacion = req.headers.user_id;
            data.idUsuarioModificacion = req.headers.user_id;
            data.flagOrigenComprobante = 'p';
            data.estado = '-1';
            data.flagOrigenCreacion = '1';
            data.estadoComprobante = 'Guardado Local';
            data.version = 1;
            data.tipoFactura = 'M';
            data.igv = 0;
            data.isc = 0;
            data.otrosTributos = 0; 
            data.descuento = 0;
            data.totalcomprobante = data.totalComprobante;
            data.importeReferencial =  data.totalComprobante;
            data.subtotalComprobante = 0;
            data.montoComprobante = NumeroALetras.numeroALetras(data.montoDescuento);
            data.idindicadorImpuesto = 0;
            data.impuestoGvr = 0;
            data.generado = 0;
            data.estadoSincronizado = 0;
            data.idUsuarioCreacion = await buscarUsuario(data.usuarioCreacion);
            data.porcentajeImpuesto = 0;
            data.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l");
            data.vcSerie = data.numeroComprobante;          
            let idEntidad = 0; 
            Array.from(data.documentoEntidad).forEach(function (element) {
                if (element.idTipoEntidad == 1){
                    idEntidad = element.idEntidad ;
                }
            }); 
            console.log(idEntidad);
            data.correlativo = await buscarCorrelativo(data.idTipoComprobante, data.numeroComprobante, constantes.estadoOffline , idEntidad)
            data.numeroComprobante = data.numeroComprobante + '-' + data.correlativo;
            await Documento.guardar(data);
            await guardarQuery(data);
            for (let documentoEntidad of data.documentoEntidad){
                documentoEntidad.idComprobante = data.id;
                documentoEntidad.usuarioCreacion = 'Usuario creacion';
                documentoEntidad.usuarioModifica = 'Usuario Modificacion';
                documentoEntidad.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
                documentoEntidad.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
                documentoEntidad.estado = constantes.estadoActivo;
                documentoEntidad.estadoSincronizado = constantes.estadoInactivo;
                documentoEntidad.generado = constantes.estadoInactivo;
                await DocumentoEntidad.guardarEntidad(documentoEntidad);
            }        
            for(let documentoReferencia of req.body.documentoReferencia ){
                documentoReferencia.idDocumentoOrigen = data.id;
                documentoReferencia.idDocumentoDestino = documentoDestino();
                documentoReferencia.usuarioCreacion ='Usuario creacion';
                documentoReferencia.usuarioModifica = 'Usuario Modificacion';
                documentoReferencia.fechaEmisionDestino =  dateFormat(new Date(), "yyyy-mm-dd");
                documentoReferencia.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
                documentoReferencia.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
                documentoReferencia.anticipo = 0;
                documentoReferencia.estado = constantes.estadoActivo;
                documentoReferencia.estadoSincronizado = constantes.estadoInactivo;
                documentoReferencia.generado = constantes.estadoInactivo;
                await DocumentoReferencia.guardar(documentoReferencia);
            }
            //await listarDocumento;
            await guardarArchivo(data.id, idEntidad );
            
            res.json(data);
        }
        catch(err){
            res.status(500).send('error');
            console.log('error al ingresar' + err);
        }
    })
    router.post(ruta.concat('/guardarDocumentoEntidad'), async function(req, res){
        data = req.body;
        data.id = uuid();
        try{
            data.fechaEmision = dateFormat(data.fechaEmision, "yyyy-mm-dd HH:MM:ss");
            data.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l");
            data.fechaRegistro = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l");
            data.idOrganizacionProveedora = req.headers.org_id;
            data.idProveedor = req.headers.org_id;
            data.idUsuarioCreacion = req.headers.user_id;
            data.idUsuarioModificacion = req.headers.user_id;
            data.flagOrigenComprobante = 'p';
            data.estadoComprobante = '-1';
            data.flagOrigenCreacion = '1';
            data.estado = 'Guardado Local';
            data.version = 1;
            data.tipoFactura = 'M';
            data.igv = 0;
            data.isc = 0;
            data.otrosTributos = 0; 
            data.descuento = 0;
            data.totalcomprobante = 0;
            data.importeReferencial =  data.totalComprobante;
            data.subtotalComprobante = 0;
            data.montoComprobante = NumeroALetras.numeroALetras(data.montoDescuento);
            data.idindicadorImpuesto = 0;
            data.impuestoGvr = 0;
            data.generado = 0;
            data.estadoSincronizado = 0;
            data.porcentajeImpuesto = 0;
            data.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l");
            await Documento.guardar(data);
            let i = 0;
            for (let documentoEntidad of req.body.documentoEntidad){
                i = i+1;
                documentoEntidad.id = i;
                documentoEntidad.idComprobante = data.id;
                documentoEntidad.usuarioCreacion = 'Usuario creacion';
                documentoEntidad.usuarioModifica = 'Usuario Modificacion';
                documentoEntidad.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
                documentoEntidad.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
                documentoEntidad.estado = constantes.estadoActivo;
                documentoEntidad.estadoSincronizado = constantes.estadoInactivo;
                documentoEntidad.generado = constantes.estadoInactivo;
                //DocumentoEntidad.guardarBien(documentoEntidad);
                await DocumentoEntidad.guardarEntidad(documentoEntidad);
            }    
            res.json(data);
        }
        catch(err){
            res.status(500).send('error');
            console.log('error al ingresar' + err);
        }
    });
};

async function buscarCorrelativo(tipoComprobante, serie, tipoSerie , entidad){
    let correlativo = 0;
    try{
        let data  = await Serie.buscarSerie(tipoComprobante, serie, tipoSerie , entidad); 
        correlativo = parseInt(data[0].dataValues.correlativo) + 1;
        await Serie.acturalizarCorrelativo(data[0].dataValues.idSerie , correlativo);
    }
    catch(e){
        console.log(e);
        correlativo = 1
    }
    return zfill(correlativo,8);
}

async function buscarUsuario(nombre){
    usuario = await usuario.buscarUsuarioNombre(nombre);
    return usuario;
}

async function guardarQuery(data){
    let comprobante = {};
    comprobante.id = data   .id;
    comprobante.vcSerie= data.vcSerie ;
    comprobante.vcCorrelativo = data.correlativo ;
    for (let entidad of data.documentoEntidad){
        if(entidad.idTipoEntidad == constantes.receptor){
            let datosEntidad =  await buscarEntidad(entidad.tipoDocumento, entidad.documento);
            datosEntidad = datosEntidad == null ? {} : datosEntidad.dataValues;
            comprobante.inIdorganizacionproveedora = datosEntidad.idEbiz ;
            comprobante.vcOrgproveedoraDocumento = datosEntidad.documento ;
            comprobante.vcOrgproveedoraDenominacion = datosEntidad.denominacion ;
            comprobante.vcOrgproveedoraNomcomercial = datosEntidad.nombreComercial;
            comprobante.vcOrgproveedoraDirfiscal  = datosEntidad.direccionFiscal;
            comprobante.vcOrgproveedoraCorreo = datosEntidad.correoElectronico;
            comprobante.inIdentidadreceptor = datosEntidad.id;
        }else if (entidad.idTipoEntidad == constantes.emisor){  
            let datosEntidad =  await buscarEntidad(entidad.tipoDocumento, entidad.documento);
            datosEntidad = datosEntidad.dataValues;
            comprobante.inIdentidademisor = datosEntidad.id;
            comprobante.vcOrgcompradoraNomcomercial = datosEntidad.nombreComercial;
            comprobante.inIdorganizacioncompradora = datosEntidad.idEbiz ;
            comprobante.vcOrgcompradoraDenominacio = datosEntidad.denominacion ;
            comprobante.vcOrgcompradoraDocumento = datosEntidad.documento ;
            comprobante.vcOrgcompradoraDirfiscal = datosEntidad.direccionFiscal ;
            comprobante.vcOrgcompradoraCorreo = data.correoElectronico ;        
        }   
    }
    comprobante.inIdarchivoPdf = null;
    comprobante.inIdarchivoXml = null;
    comprobante.inIdarchivoCdr = null;
    comprobante.vcArchivopdfUbicacion = null;
    comprobante.vcArchivoxmlUbicacion = null;
    comprobante.vcArchivocdrUbicacion = null;
    comprobante.vcParamTicket = null ;
    comprobante.tsParamFechabaja = null;
    comprobante.inIdusuarioproveedor = null;
    comprobante.inIdusuariocomprador = null;
    comprobante.inIdtransportista = null;
    comprobante.vcTransportistaDocumento = null;
    comprobante.vcTransportistaDenominacion = data.vcTransportistaDenominacion ;
    comprobante.chEstadocomprobantepago =  '-1';
    comprobante.chFlagplazopago = 'N' ;
    comprobante.chFlagregistroeliminado = 'N';
    comprobante.chFlagorigencomprobantepago = 'N';
    comprobante.chFlagorigencreacion = 'N';
    comprobante.inIdguia = null ;
    comprobante.inIdoc = null ;
    comprobante.inIdusuariocreacion = null;
    comprobante.inIdusuariomodificacion = null;
    comprobante.inIdorganizacioncreacion = null;
    comprobante.inIdorganizacionmodificacion = null;
    comprobante.chMonedacomprobantepago = data.moneda;
    comprobante.tsFechaprogpagocomprobantepag = null;
    comprobante.tsFechapagocomprobantepago = null;
    //en el modelo implementaron para que guarde en numero aun no lo he arreglado
    comprobante.tsFechacreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
    comprobante.tsFecharegistro = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
    comprobante.tsFechaemision = dateFormat(data.fechaEmision, "yyyy-mm-dd HH:MM:ss");
    comprobante.tsFecharecepcioncomprobantepa = null;
    comprobante.tsFechavencimiento = null ;
    comprobante.tsFechaenvio = null;
    comprobante.tsFechacambioestado = null;
    comprobante.vcObscomprobantepago = data.observacionComprobante ;
    comprobante.vcObspagocomprobantepago = null ;
    comprobante.vcCondicionpago = null;
    comprobante.chTiempoplazo = null;
    comprobante.vcDocumentopago = null;
    comprobante.vcDocumentosap = null;
    comprobante.vcFormapago = null;
    comprobante.vcTipocomprobante = data.tipoComprobante ;
    comprobante.chEstadocomprobantepagocomp = constantes.estadoGuardadoLocal ;
    comprobante.inVersion = constantes.versionInicial ;
    comprobante.vcNumoc = null ;
    comprobante.vcNumguia = null ;
    comprobante.vcMontocomprobantepago = NumeroALetras.numeroALetras(data.montoDescuento);
    comprobante.vcLogo = null ;
    comprobante.vcFirma  = null;
    comprobante.vcPagotipodocumento = null;
    comprobante.vcPagonrodocumento = null;
    comprobante.vcPagomoneda = null;
    comprobante.vcPagobanco = null;
    comprobante.vcDctotipodocumento = null;
    comprobante.vcDctonrodocumento = null;
    comprobante.vcDctomoneda = data.monedaDescuento ;
    comprobante.vcNrocheque = null ;
    comprobante.chCodigointerno = null ;
    comprobante.inDeguiapublicada = constantes.retencion.inDeguiapublicada;
    comprobante.vcTipofactura = constantes.retencion.vcTipofactura ;
    comprobante.vcCodigoerpproveedor = null;
    comprobante.tsFechahoracreacion = null;
    comprobante.vcCodigosociedad = null;
    comprobante.deImpuesto1 = constantes.retencion.deImpuesto1;
    comprobante.deImpuesto2 = constantes.retencion.deImpuesto2;
    comprobante.deImpuesto3 = constantes.retencion.deImpuesto3;
    comprobante.deDescuento = constantes.retencion.deDescuento;
    comprobante.deImportereferencial  = data.totalComprobante;
    comprobante.deSubtotalcomprobantepago = constantes.retencion.deSubtotalcomprobantepago;
    comprobante.deTotalcomprobantepago = data.totalComprobante;
    comprobante.dePagomontopagadoultimo = null;
    comprobante.deDctomontoultimo = null;
    comprobante.inIdindicadorimpuesto = constantes.retencion.inIdindicadorimpuesto;
    comprobante.vcIndicadorimpuesto = data.vcIndicadorimpuesto;
    comprobante.chOpregfac = constantes.retencion.chOpregfac;
    comprobante.vcCodigoerp = null;
    comprobante.vcCoderror = null;
    comprobante.tsFechadocumentoret = null;
    comprobante.vcDescerror = null;
    comprobante.chTipoemision = constantes.retencion.chTipoemision ;
    comprobante.dePorcentajeimpuesto = null;
    comprobante.inDetraccion = null;
    comprobante.inIdbienservicio = constantes.retencion.inIdbienservicio ;
    comprobante.vcCodigobienservicio = null;
    comprobante.vcDescripcionbienservicio = null;
    comprobante.vcPorcentajedetraccion = null;        
    comprobante.vcIdcondicionpago = null;
    comprobante.vcDescripcioncondicionpago = null;
    comprobante.vcLlaveerp = null;
    comprobante.vcIdtablaestado = null;
    comprobante.vcIdregistroestadoprov = null;
    comprobante.vcIdregistroestadocomp = null;
    comprobante.vcIdtablamoneda = data.idTablaMoneda ;
    comprobante.vcIdregistromoneda = data.idRegistroMoneda ;
    comprobante.vcIdtablatipocomprobante  = data.idTablaTipoComprobante ;
    comprobante.vcIdregistrotipocomprobante = data.idTipoComprobante ;
    comprobante.chIdtipocomprobante = data.tipoComprobante ;
    comprobante.dePagomontopagado = data.montoPagado ;
    comprobante.deDctomonto = data.montoDescuento ;
    comprobante.vcTicketRetencion = null;
    await DocumentoQuery.guardar(comprobante);
    await guardarEvento(comprobante.id, 'offline');
    await guardarDocumentoReferencia(comprobante.id, data.documentoReferencia);
}

async function guardarDocumentoReferencia(idOrigen, data){
    for(referencia of data){
        let referenciaDto = {};
        referenciaDto.docOrigen = idOrigen;
        referenciaDto.documentoDestino = null;
        referenciaDto.tipoDocumentoOrigen = referencia.tipoDocumentoOrigen ;
        referenciaDto.chTipoDocDes = referencia.tipoDocumentoDestino;
        referenciaDto.serieDestino = referencia.serieDocumentoDestino ;
        referenciaDto.corrDest = referencia.correlativoDocumentoDestino ;
        referenciaDto.fechaEmisionDestino = dateFormat(data.fechaEmision, "yyyy-mm-dd HH:MM:ss"); //preguntar
        referenciaDto.nuTotImpAux = referencia.totalImporteAuxiliarDestino;
        referenciaDto.totalImpustoDestino = referencia.totalImporteDestino ;
        referenciaDto.totalPorAuxiliar = referencia.totalPorcentajeAuxiliarDestino ;
        referenciaDto.tdocoriDesc = referencia.tipoDocumentoOrigenDescripcion ;
        referenciaDto.vcTdocDesDesc = referencia.tipoDocumentoDestinoDescripcion;
        referenciaDto.deTipoCambio = referencia.auxiliar1;
        referenciaDto.vcMonedaDestino = referencia.monedaDestino;
        referenciaDto.deTotMoneDes = referencia.totalMonedaDestino;
        referenciaDto.vcPolizaFactura = null;
        referenciaDto.deAnticipo = constantes.retencion.deAnticipo;
        referenciaDto.vcAuxiliar1 = referencia.auxiliar1;
        referenciaDto.vcAuxiliar2 = parseInt(referencia.totalImporteDestino) - parseInt(referencia.totalImporteAuxiliarDestino);
        referenciaDto.usuarioCreacion = constantes.usuarioOffline;
        referenciaDto.usuarioModificacion = constantes.usuarioOffline ;
        referenciaDto.fechaCreacion = dateFormat(data.fechaEmision, "yyyy-mm-dd HH:MM:ss"); 
        referenciaDto.fechaModificacion =dateFormat(data.fechaEmision, "yyyy-mm-dd HH:MM:ss"); 
        referenciaDto.estado = constantes.estadoActivo;
        referenciaDto.fechaSincronizado = dateFormat(data.fechaEmision, "yyyy-mm-dd HH:MM:ss"); 
        referenciaDto.estadoSincronizado = constantes.estadoInactivo
        // console.log('*********************************************');
        // console.log(referenciaDto);
        await QueryDocRefenci.guardarQuery(referenciaDto);
    }
}

async function guardarEvento(inIdcomprobante, usuarioCreacion ){
    let eventoData = {};
    //evento.id = data.seIdocevento;
    eventoData.inIdcomprobante = inIdcomprobante;
    eventoData.inIdevento = constantes.inEstadoGuardadoLocal;
    eventoData.inIidioma = constantes.idiomaEspañol;
    eventoData.vcDescripcionEvento = constantes.estadoGuardadoLocal;
    eventoData.vcObservacionEvento =  constantes.obsEventoGuardarLocal;
    eventoData.inEstadoEvento = constantes.estadoActivo;
    eventoData.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
    eventoData.usuarioCreacion = usuarioCreacion;
    // console.log(eventoData);
    await Evento.guardar(eventoData);
}

async function guardarArchivo(id, idEntidadOffline){

    data.id  = id;
    var archivoSerial = await PdfGenerador.start(data, idEntidadOffline);
    data.archivo = archivoSerial;
    data.usuarioCreacion = constantes.usuarioOffline;
    data.usuarioModificacion = constantes.usuarioOffline;
    data.fechaCreacion =  dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
    data.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
    data.estado = parseInt(constantes.estadoActivo) ;
    data.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
    data.estadoSincronizado = parseInt(constantes.estadoInactivo);
    await archivo.guardar(data);
}

async function buscarEntidad(tipoDocumento, documento){
    let datosEntidad = await entidad.buscar(tipoDocumento, documento);
    return datosEntidad;
}


function documentoDestino(serie ,correlativo){
    //buscar documento por serie y correlativo
    return null;
}

function consultarUuidUsuario(id){
    return '111';
}

function zfill(number, width) {
    var numberOutput = Math.abs(number); /* Valor absoluto del número */
    var length = number.toString().length; /* Largo del número */ 
    var zero = "0"; /* String de cero */  
    
    if (width <= length) {
        if (number < 0) {
             return ("-" + numberOutput.toString()); 
        } else {
             return numberOutput.toString(); 
        }
    } else {
        if (number < 0) {
            return ("-" + (zero.repeat(width - length)) + numberOutput.toString()); 
        } else {
            return ((zero.repeat(width - length)) + numberOutput.toString()); 
        }
    }
}


module.exports = contoladorComprobante;