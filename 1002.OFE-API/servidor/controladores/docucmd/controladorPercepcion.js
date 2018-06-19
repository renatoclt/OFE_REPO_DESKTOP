var Documento = require('../../dtos/msdocucmd/documentoDTO');
var uuid = require('../../utilitarios/uuid');
var Serie = require('../../dtos/msparametrosquery/serieDto');
var NumeroALetras = require('../../utilitarios/numerosALetras');
var PercepcionDTO = require("../../dtos/comprobante/percepcionDTO");
var DocumentoQuery = require('../../dtos/msoffline/queryComprobantePagoDTO');
var entidad = require('../../dtos/msoffline/queryEntidadOfflineDTO');
var Evento = require('../../dtos/msoffline/queryComprobanteEventoDTO');
var QueryDocRefenci = require('../../dtos/msoffline/queryDocRefenciDTO');
var DocumentoEntidad = require('../../dtos/msdocucmd/documentoEntidadDTO');
var DocumentoReferencia = require('../../dtos/msdocucmd/documentoReferenciaDTO');
var DocumentoParametro = require('../../dtos/msdocucmd/documentoParametroDTO')
var archivo = require('../../dtos/msoffline/archivoDTO');
var PdfGenerador = require('./index');
var usuario = require('../../dtos/msoffline/usuarioDTO');

var contoladorPercepcion =  function (ruta, rutaEsp){ 

    var nombreHateo = "hComprobante";
    var hateoas = require('./../../utilitarios/hateoas')({ baseUrl: "http://localhost:3000/v1" });
    var hateoasObj = require('./../../utilitarios/hateoasObj');

    hateoas.registerLinkHandler(nombreHateo, function (objecto) {
        var links = {
            "self": rutaEsp.concat('/') + objecto.id
        };
        return links;
    });

    hateoas.registerCollectionLinkHandler(nombreHateo, function (objectoCollection) {
        var links = {
            "self": rutaEsp
        };
        return links;
    });

    router.get (ruta.concat('/'), async function(req, res){
        var regxpag = 10;
        pagina = 0;
        if(req.query.size && req.query.size!=""){
            regxpag = req.query.size;
        }
        if(req.query.pagina && req.query.pagina !=""){
            pagina = req.query.pagina;
        }
        PercepcionDTO.buscarComprobantes(pagina, regxpag).then(function (resDTO) {
            var hateoasObj_comprobante = Object.assign({}, hateoasObj);
            hateoasObj_comprobante.type = nombreHateo;
            hateoasObj_comprobante.data = resDTO.comprobantes;
            hateoasObj_comprobante.nombreColeccion = "percepciones";
            hateoasObj_comprobante.ruta = rutaEsp;
            hateoasObj_comprobante.paginacion.activo = true;
            hateoasObj_comprobante.paginacion.totalreg = resDTO.cantidadReg;
            hateoasObj_comprobante.paginacion.regxpag = regxpag;
            hateoasObj_comprobante.paginacion.pagina = pagina;
            hateoasObj_comprobante.busqueda.activo = false;         
            res.json(hateoas.link(hateoasObj_comprobante));
        });
    });
    router.get(ruta.concat('/search/buscar'), async function (req, res, next) {
        var numeroComprobante="",
            generado="",
            estado="",
            fechaInicio=new Date(),
            fechaFin=new Date(),
            estadoSincronizado="",
            pagina=0,
            limite=0,
            ordenar=0;
            console.log('/////////////////***********************************//////////////////////////////////');
        if (req.query.numeroComprobante && req.query.numeroComprobante!=""){
            numeroComprobante = req.query.numeroComprobante;
        }
        if (req.query.generado && req.query.generado!=""){
            generado = req.query.generado;
        }
        if (req.query.estado && req.query.estado!=""){
            estado = req.query.estado;
        }
        if (req.query.fechaInicio && req.query.fechaInicio!=""){
            fechaInicio = req.query.fechaInicio;
        }
        if (req.query.fechaFin && req.query.fechaFin!=""){
            fechaFin = req.query.fechaFin;
        }
        if (req.query.estadoSincronizado && req.query.estadoSincronizado<2){
            estadoSincronizado = req.query.estadoSincronizado;
        }
        if (req.query.pagina && req.query.pagina>0){
            pagina = req.query.pagina;
        }
        if (req.query.limite && req.query.limite>0){
            limite = req.query.limite;
        }
        
        await PercepcionDTO.buscarComprobanteDinamico(pagina, limite, numeroComprobante,generado,estado,fechaInicio,fechaFin,estadoSincronizado)
        .then(function (resDTO) {
            console.log('/////////////////***********************************//////////////////////////////////');
            console.log(resDTO);
            var hateoasObj_comprobante = Object.assign({}, hateoasObj);
            hateoasObj_comprobante.type = nombreHateo;
            hateoasObj_comprobante.data = resDTO.comprobantes;
            hateoasObj_comprobante.nombreColeccion = "percepciones";
            hateoasObj_comprobante.ruta = rutaEsp;
            hateoasObj_comprobante.paginacion.activo = true;
            hateoasObj_comprobante.paginacion.totalreg = resDTO.cantidadReg;
            hateoasObj_comprobante.paginacion.regxpag = limite;
            hateoasObj_comprobante.paginacion.pagina = pagina;
            hateoasObj_comprobante.busqueda.activo = true; 
            hateoasObj_comprobante.busqueda.parametros = {numeroComprobante:numeroComprobante,generado:generado,estado:estado,estadoSincronizado:estadoSincronizado,fechaInicio:fechaInicio,fechaFin:fechaFin};
            hateoasObj_comprobante.busqueda.ruta = "/search/buscar";        
            res.json(hateoas.link(hateoasObj_comprobante));
        });
    });
    router.post(ruta.concat('/'), async function(req, res){
        data = req.body
        data.id = uuid();
        try{
            let idEntidadOffline = 0; 
            Array.from(data.documentoEntidad).forEach(async function  (element) {
                if (element.idTipoEntidad == 1){
                    entidadData = await entidad.buscar(element.tipoDocumento ,element.documento);
                    idEntidadOffline = entidadData.id ;
                }
            }); 
            data.correlativo = await buscarCorrelativo(data.idTipoComprobante, data.numeroComprobante, constantes.estadoOffline , idEntidadOffline)
            data.vcSerie = data.numeroComprobante;
            data.numeroComprobante = data.numeroComprobante + '-' + data.correlativo;       
            data.estadoSincronizado = constantes.estadoInactivo;
            data.flagOrigenComprobante = constantes.percepcion.flagOrigenComprobante;
            data.flagOrigenCreacion = constantes.percepcion.flagOrigenCreacion;
            data.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l");
            data.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l");
            data.fechaRegistro = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l");
            data.fechaEmision = parseJsonDate(data.fechaEmision);
            data.estado = constantes.inEstadoGuardadoLocal;
            data.version = constantes.versionInicial;
            data.montoComprobante = NumeroALetras.numeroALetras(data.montoDescuento);
            data.tipoFactura = constantes.percepcion.tipoFactura;
            data.generado = constantes.estadoOffline;
            data.idUsuarioCreacion = await buscarUsuario(data.usuarioCreacion);
            //consultar 
            data.igv = 0.0;
            data.isc = 0.0;
            data.otrosTributos = 0.0;
            data.importeReferencial = 0.0;
            data.subtotalComprobante = 0.0;
            data.idindicadorImpuesto = 0
            data.idTablaMoneda = 10001;
            data.idRegistroMoneda = '000001';
            data.idtablaTipoComprobante = constantes.idTablaTipoComprobante;
            data.idRegistroTipoComprobante = 20;
            data.impuestoGvr = 0;
            data.estadoComprobante = constantes.estadoGuardadoLocal;
            await Documento.guardar(data);  
            await guardarQuery(data);
            for (let documentoEntidad of req.body.documentoEntidad){
                documentoEntidad.idComprobante = data.id;
                documentoEntidad.usuarioCreacion = 'Usuario creacion';
                documentoEntidad.usuarioModifica = 'Usuario Modificacion';
                documentoEntidad.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
                documentoEntidad.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
                documentoEntidad.estado = constantes.estadoActivo;
                documentoEntidad.estadoSincronizado = constantes.estadoInactivo;
                documentoEntidad.generado = constantes.estadoInactivo;
                documentoEntidad.correo = documentoEntidad.correoElectronico;
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
            for(let documentoParametro of req.body.documentoParametro){
                documentoParametro.iParamDoc = documentoParametro.idParametro;
                documentoParametro.idComprobantePago = data.id;
                documentoParametro.json = documentoParametro.json;
                documentoParametro.usuarioCreacion = constantes.usuarioOffline;
                documentoParametro.usuarioModificacion = constantes.usuarioOffline;
                documentoParametro.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
                documentoParametro.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
                documentoParametro.estado = constantes.estadoActivo;
                documentoParametro.fechaSincronizado = data.fechaSincronizado;
                documentoParametro.estadoSincronizado = constantes.estadoInactivo;
                await DocumentoParametro.guardar(documentoParametro);
            }
            await guardarArchivo(data.id,idEntidadOffline);
            
        }catch(e){
            console.log(e);
            console.log('ingrese');
        }
        res.json(data);
    })   
};

async function buscarUsuario(nombre){
    usuario = await usuario.buscarUsuarioNombre(nombre);
    return usuario;
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
    console.log(eventoData);
    await Evento.guardar(eventoData);
}
async function guardarArchivo(id,idEntidadOffline){

    console.log('SERVICIO PERCEPCION');
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
    comprobante.inDeguiapublicada = constantes.percepcion.inDeguiapublicada;
    comprobante.vcTipofactura = constantes.percepcion.vcTipofactura ;
    comprobante.vcCodigoerpproveedor = null;
    comprobante.tsFechahoracreacion = null;
    comprobante.vcCodigosociedad = null;
    comprobante.deImpuesto1 = constantes.percepcion.deImpuesto1;
    comprobante.deImpuesto2 = constantes.percepcion.deImpuesto2;
    comprobante.deImpuesto3 = constantes.percepcion.deImpuesto3;
    comprobante.deDescuento = constantes.retencion.deDescuento;
    comprobante.deImportereferencial  = data.totalComprobante;
    comprobante.deSubtotalcomprobantepago = constantes.percepcion.deSubtotalcomprobantepago;
    comprobante.deTotalcomprobantepago = data.totalComprobante;
    comprobante.dePagomontopagadoultimo = null;
    comprobante.deDctomontoultimo = null;
    comprobante.inIdindicadorimpuesto = constantes.percepcion.inIdindicadorimpuesto;
    comprobante.vcIndicadorimpuesto = data.vcIndicadorimpuesto;
    comprobante.chOpregfac = constantes.percepcion.chOpregfac;
    comprobante.vcCodigoerp = null;
    comprobante.vcCoderror = null;
    comprobante.tsFechadocumentoret = null;
    comprobante.vcDescerror = null;
    comprobante.chTipoemision = constantes.percepcion.chTipoemision ;
    comprobante.dePorcentajeimpuesto = null;
    comprobante.inDetraccion = null;
    comprobante.inIdbienservicio = constantes.percepcion.inIdbienservicio ;
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
    comprobante.vcIdtablatipocomprobante  = constantes.idTablaTipoComprobante ;
    comprobante.vcIdregistrotipocomprobante = data.idTipoComprobante ;
    comprobante.chIdtipocomprobante = data.tipoComprobante ;
    comprobante.dePagomontopagado = data.montoPagado ;
    comprobante.deDctomonto = data.montoDescuento ;
    comprobante.vcTicketRetencion = null;
    await DocumentoQuery.guardar(comprobante);
    await guardarEvento(data.id, constantes.usuarioOffline);
    await guardarDocumentoReferencia(comprobante.id, data.documentoReferencia);
}

function documentoDestino(serie ,correlativo){
    //buscar documento por serie y correlativo
    return null;
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
        referenciaDto.estadoSincronizado = constantes.estadoInactivo;
        await QueryDocRefenci.guardarQuery(referenciaDto);
    }
}

async function buscarEntidad(tipoDocumento, documento){
    let datosEntidad = await entidad.buscar(tipoDocumento, documento);
    return datosEntidad;
}

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

function parseJsonDate(jsonDateString){
    jsonDateString = jsonDateString.toString();
    return dateFormat(new Date(parseInt(jsonDateString.replace('/Date(', ''))), "yyyy-mm-dd HH:MM:ss");
}

module.exports = contoladorPercepcion;