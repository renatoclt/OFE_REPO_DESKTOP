var BoletaDTO = require("../../dtos/comprobante/boletaDTO");
var uuid = require('../../utilitarios/uuid');
var NumeroALetras = require('../../utilitarios/numerosALetras');
var Serie = require('../../dtos/msparametrosquery/serieDto');
var Documento = require('../../dtos/msdocucmd/documentoDTO');
var entidad = require('../../dtos/msoffline/queryEntidadOfflineDTO');
var DocumentoQuery = require('../../dtos/msoffline/queryComprobantePagoDTO');
var Evento = require('../../dtos/msoffline/queryComprobanteEventoDTO');
var QueryProductoXComprobantePagoDTO = require('../../dtos/msoffline/queryProductoXComprobantePagoDTO');
var DocumentoEntidad = require('../../dtos/msdocucmd/documentoEntidadDTO');
var DocConcepto = require('../../dtos/msoffline/docConcepetoDTO');
var DocumentoParametro = require('../../dtos/msoffline/docParametroDTO');
var Detalle = require('../../dtos/msoffline/productoXComprobantePagoDTO');
var DocumentoReferencia = require('../../dtos/msoffline/docReferenciaDTO');
var QueryDocRefenci = require('../../dtos/msoffline/queryDocRefenciDTO');
var PdfGenerador = require('./index');
var archivo = require('../../dtos/msoffline/archivoDTO');
var usuario = require('../../dtos/msoffline/usuarioDTO');

var controladorBoletas = function (ruta, rutaEsp) {
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

    router.get(ruta.concat('/'), function (req, res, next) {
        var regxpag = 10
        pagina = 0;

        if (req.query.pagina) {
            pagina = req.query.pagina;
        }
        if (req.query.limite) {
            regxpag = req.query.limite;
        }
        BoletaDTO.buscarComprobantes(pagina, regxpag).then(function (resDTO) {
            var hateoasObj_comprobante = Object.assign({}, hateoasObj);
            hateoasObj_comprobante.type = nombreHateo;
            hateoasObj_comprobante.data = resDTO.comprobantes;
            hateoasObj_comprobante.nombreColeccion = "boletas";
            hateoasObj_comprobante.ruta = rutaEsp;
            hateoasObj_comprobante.paginacion.activo = true;
            hateoasObj_comprobante.paginacion.totalreg = resDTO.cantidadReg;
            hateoasObj_comprobante.paginacion.regxpag = regxpag;
            hateoasObj_comprobante.paginacion.pagina = pagina;
            hateoasObj_comprobante.busqueda.activo = false;         
            res.json(hateoas.link(hateoasObj_comprobante));
        });
    });

    router.get(ruta.concat('/:id'), function (req, res, next) {
        BoletaDTO.buscarComprobante(req.params.id).then(function (resDTO) {
            var hateoasObj_comprobante = Object.assign({}, hateoasObj);
            hateoasObj_comprobante.type = nombreHateo;
            hateoasObj_comprobante.data = resDTO;
            hateoasObj_comprobante.paginacion.activo = false;
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
            limite=10,
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
        if (req.query.size && req.query.size>0){
            limite = req.query.size;
        }
        
        await BoletaDTO.buscarComprobanteDinamico(pagina, limite, numeroComprobante,generado,estado,fechaInicio,fechaFin,estadoSincronizado)
        .then(function (resDTO) {
            console.log('/////////////////***********************************//////////////////////////////////');
            console.log(resDTO);
            var hateoasObj_comprobante = Object.assign({}, hateoasObj);
            hateoasObj_comprobante.type = nombreHateo;
            hateoasObj_comprobante.data = resDTO.comprobantes;
            hateoasObj_comprobante.nombreColeccion = "boletas";
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
    router.post(ruta.concat('/'), async function (req, res, next) {
        data = req.body
        data.id = uuid();
        console.log('JSON COMPROBANTE');
        console.log(data);
        // console.log(errorForzado);
        try{
            let idEntidad = 0; 
            Array.from(data.documentoEntidad).forEach(function (element) {
                if (element.idTipoEntidad == 1){
                    idEntidad = element.idEntidad ;
                }
            }); 
            data.vcSerie = data.numeroComprobante;
            data.correlativo = await buscarCorrelativo(data.idTipoComprobante, data.numeroComprobante, constantes.estadoOffline , idEntidad);
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
            data.montoComprobante = NumeroALetras.numeroALetras(data.montoPagado);
            data.tipoFactura = constantes.percepcion.tipoFactura;
            data.generado = constantes.estadoOffline;
            data.idUsuarioCreacion = await buscarUsuario(data.usuarioCreacion);
            //consultar 
            data.igv = data.igv;
            data.isc = data.isc;
            data.otrosTributos = data.otrosTributos;
            data.importeReferencial = data.importeReferencial;
            data.subtotalComprobante = data.subtotalComprobante;
            // data.importeReferencial = 0.0;
            // data.subtotalComprobante = 0.0;
            data.idindicadorImpuesto = 0
            data.idTablaMoneda = 10001;
            data.idRegistroMoneda = '000001';
            data.idtablaTipoComprobante = constantes.idTablaTipoComprobante;
            data.idRegistroTipoComprobante = 20;
            data.impuestoGvr = 0;
            data.estadoComprobante = constantes.estadoGuardadoLocal;
            for (let documentoEntidad of req.body.documentoEntidad){
                if(documentoEntidad.idTipoEntidad == constantes.receptor){
                    data.tipoDocumento = "0".concat(documentoEntidad.tipoDocumento) ;
                    console.log('///////////////////////////////**************************************************************/////////////');
                    break;
                }
            }
            //data.tipoDocumento = data.idTipoComprobante;
            
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
                await DocumentoEntidad.guardarEntidad(documentoEntidad);
            }
            
            for (let concepto of req.body.documentoConcepto){
                concepto.concepto = data.codigoConcepto,
                concepto.descripcion = data.descripcionConcepto,
                concepto.comprobantePago = data.id,
                concepto.usuarioCreacion = constantes.usuarioOffline;
                concepto.usuarioModificacion = constantes.usuarioOffline;
                concepto.fechaCreacion =dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
                concepto.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
                concepto.estado = constantes.estadoActivo;
                concepto.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
                concepto.estadoSincronizado = constantes.estadoInactivo;
                await DocConcepto.guardar(concepto);
            }
            console.log('*******************************************************************************************************');
            console.log(req.body);
            //console.log(dataError)
            for (let parametros of req.body.documentoParametro){
                guardarParametro(data.id, parametros);
            }
            for (let referencia of req.body.documentoReferencia){
                guardarReferencia(data.id, referencia);
            }
            console.log('BOLETA SERVICIO');
            await guardarArchivo(data.id, idEntidad);
           
        }catch(e){
            console.log(e);
            console.log('ingrese');
        }
        res.json(data);
    })

};
async function guardarArchivo(id, idEntidad){
    data.id  = id;
    var archivoSerial = await PdfGenerador.start(data, idEntidad);
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
async function guardarProducto(id, idComprobante,  data){
    let producto = data;
    producto.id = id;
    producto.idcomprobantepago = idComprobante;
    producto.unidadMedida  = data.codigoUnidadMedida;
    producto.tablaUnidad = data.idTablaUnidad;
    producto.registroUnidad = data.idRegistroUnidad;
    producto.numeroParteItem = data.codigoItem;
    producto.precioUnitarioItem = data.precioUnitario;
    producto.precioTotalItem = data.precioTotal;
    producto.cantidadDespachada = data.cantidad;
    producto.subTotalIsc = data.detalle.subtotalIsc;
    producto.subtotalIgv = data.detalle.subtotalIgv;
    producto.codigoTipoPrecio = zfill(data.detalle.codigoTipoPrecio,2);
    producto.codigoTipoIgv = data.detalle.codigoTipoIgv;
    producto.codigoTipoIsc = zfill(data.detalle.codigoTipoIsc,2);
    producto.fechaSincronizado = dateFormat(data.fechaEmision, "yyyy-mm-dd HH:MM:ss");
    producto.estadoSincronizado = constantes.estadoInactivo;

    await Detalle.guardar(producto);
}


async function guardarParametro(id, parametros){
    let param = parametros;
    param.paramDoc = parametros.idParametro;
    param.descripcionParametro = parametros.descripcionParametro;
    param.comprobantePago = id;
    param.json = parametros.json;
    param.usuarioCreacion = 'Usuario creacion';
    param.usuarioModificacion = 'Usuario Modificacion';
    param.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
    param.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
    param.estado = constantes.estadoActivo;
    param.estadoSincronizado = constantes.estadoInactivo;
    DocumentoParametro.guardar(param);
}
async function guardarReferencia(id, referencia){
    let refer = referencia;
    refer.idDocumentoOrigen = id;
    refer.idDocumentoDestino  = refer.idDocumentoDestino;
    refer.tipoDocumentoOrigen  = refer.tipoDocumentoOrigen;
    refer.tipoDocumentoDestino  = refer.tipoDocumentoDestino;
    refer.serieDocumentoDestino  = refer.serieDocumentoDestino;
    refer.correlativoDocumentoDestino  = refer.correlativoDocumentoDestino;
    refer.fechaEmisionDestino = refer.fechaEmisionDestino;
    refer.totalImporteDestino  = refer.totalImporteDestino;
    refer.totalImporteAuxiliarDestino  = refer.totalImporteAuxiliarDestino;
    refer.totalPorcentajeAuxiliarDestino  = (refer.auxiliar2 * 100) / refer.totalImporteAuxiliarDestino;
    refer.tipoDocumentoOrigenDescripcion  = refer.tipoDocumentoOrigenDescripcion;
    refer.tipoDocumentoDestinoDescripcion  = constantes.factura.referencia.anticipo;
    refer.monedaDestino = refer.monedaDestino ;
    refer.totalMonedaDestino = refer.totalImporteDestino ;
    refer.polizaFactura = constantes.factura.referencia.polizaFactura;
    refer.anticipo = refer.anticipo;
    refer.auxiliar1 = refer.auxiliar1 ;
    refer.auxiliar2 = refer.auxiliar2 ;
    refer.estadoSincronizado = constantes.estadoInactivo;
    refer.usuarioCreacion = constantes.usuarioOffline ;
    refer.usuarioModificacion = constantes.usuarioOffline  ;
    refer.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"); 
    refer.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"); 
    refer.estado =  constantes.estadoActivo ;
    refer.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");        
    DocumentoReferencia.guardar(refer);
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
    await guardarProductoXComprobantePago(comprobante.id, data.detalleEbiz);
}

async function buscarUsuario(nombre){
    usuario = await usuario.buscarUsuarioNombre(nombre);
    return usuario;
}

async function guardarProductoXComprobantePago(id , data){    
    for(let producto of data){
        producto.id = uuid();
        await guardarProducto(producto.id, id, producto);
        producto.inIdcomprobantepago = id;
        producto.inItipoPrecioventa = producto.detalle.idTipoPrecio ;
        producto.inCodigoPrecioventa = producto.detalle.codigoTipoPrecio ;
        producto.vcDescPrecioventa = producto.detalle.descripcionTipoPrecio ;
        producto.inItipoCalculoisc = producto.detalle.idTipoIsc ;
        producto.inCodigoCalculoisc = producto.detalle.codigoTipoIsc ;
        producto.vcDescCalculoisc = producto.detalle.descripcionTipoIsc ;
        producto.inItipoAfectacionigv = producto.idTipoIgv ;
        producto.inCodigoAfectacionigv = producto.codigoTipoIgv ;
        producto.vcDescAfectacionigv = producto.descripcionTipoIgv ;
        producto.chAfectaIgv = constantes.boleta.chAfectaIgv;
        producto.inIdguia = constantes.boleta.inIdguia ;
        producto.vcSpotimpuesto = constantes.boleta.vcSpotimpuesto;
        producto.chNumeroseguimiento = constantes.boleta.chNumeroseguimiento;
        producto.chNumeroguia = constantes.boleta.chNumeroguia ;
        producto.vcDescripcionitem = producto.descripcionItem ;
        producto.vcPosicionprodxguia = constantes.boleta.vcPosicionprodxguia ;
        producto.vcNumeroparteitem = producto.codigoItem ;
        producto.vcPosicionprodxoc = constantes.boleta.vcPosicionprodxoc ;
        producto.inIdproductoconsignado = constantes.boleta.inIdproductoconsignado ;
        producto.dePreciounitarioitem = producto.precioUnitario ;
        producto.deCantidaddespachada = producto.cantidad ;
        producto.inIdmovimiento = constantes.boleta.inIdmovimiento ;
        producto.vcCodigoguiaerp = constantes.boleta.vcCodigoguiaerp ;
        producto.vcEjercicioguia = constantes.boleta.vcEjercicioguia ;
        producto.vcTipoguia = constantes.boleta.vcTipoguia ;
        producto.tsFechaemisionguia = constantes.boleta.tsFechaemisionguia ;
        producto.vcTipospot = constantes.boleta.vcTipospot ;
        producto.dePorcentajeimpuesto = producto.descuento ;
        producto.deMontoimpuesto = producto.montoImpuesto ;
        producto.inIproducto = constantes.boleta.inIproducto ; //CONSULTAR
        producto.vcCodigoProducto = producto.codigoItem ;
        producto.vcPosicion = constantes.boleta.vcPosicion ; // consultar
        producto.vcUnidadmedida = producto.unidadMedida ;
        producto.dePreciototalitem = producto.precioTotal ;
        producto.nuSubtotalIgv = producto.subtotalIgv ;
        producto.nuSubtotalIsc = producto.subtotalIsc ;
        producto.nuPesoBruto = constantes.boleta.nuPesoBruto ;
        producto.nuPesoNeto = constantes.boleta.nuPesoNeto ;
        producto.nuPesoTotal = constantes.boleta.nuPesoTotal ;
        producto.nuDescuento = producto.descuento;
        producto.idRegistroUnidad = constantes.boleta.idRegistroUnidad;
        producto.idTablaUnidad = constantes.boleta.idTablaUnidad;
        producto.fechaSincronizado = producto.fechaSincronizado;
        producto.estadoSincronizado = constantes.estadoInactivo;
        await QueryProductoXComprobantePagoDTO.guardar(producto);
    }
    
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
        referenciaDto.estadoSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        await QueryDocRefenci.guardarQuery(referenciaDto);
    }
}

async function buscarEntidad(tipoDocumento, documento){
    let datosEntidad = await entidad.buscar(tipoDocumento, documento);
    return datosEntidad;
}

module.exports = controladorBoletas;