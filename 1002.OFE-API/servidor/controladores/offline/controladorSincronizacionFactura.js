var queryComprobante = require('../../dtos/msoffline/queryComprobantePagoDTO');
var queryComprobanteDocParametroDTO = require('../../dtos/msoffline/queryDocParametroDTO');
var queryComprobanteEventoDTO = require('../../dtos/msoffline/queryComprobanteEventoDTO');
var comprobantePagoDTO = require('../../dtos/msoffline/comprobantePagoDTO');
var documentoEntidadDTO = require('../../dtos/msdocucmd/documentoEntidadDTO');
var documentoReferenciaDTO = require('../../dtos/msdocucmd/documentoReferenciaDTO');
var entidadDTO = require('../../dtos/msoffline/entidadDTO')
var queryEntidad = require('../../dtos/msoffline/queryEntidadDTO');
var queryEntidadOffline = require('../../dtos/msoffline/queryEntidadOfflineDTO');
var Client = require('node-rest-client').Client;
var Usuario = require('../../dtos/msoffline/usuarioDTO');
var Sincronizacion = require('../../dtos/msoffline/sincronizacionDTO');
var ComprobanteQuery = require('../../dtos/msoffline/queryComprobantePagoDTO'); 

var QueryProductoXComprobantePagoDTO = require('../../dtos/msoffline/queryProductoXComprobantePagoDTO')

var controladorSincronizacionFactura = function (ruta, rutaEsp) {
    router.get(ruta.concat('/'), async function (req, res) {
        try{
            var data = await comprobantePagoDTO.sincronizarFactura();
            data.forEach((element) => {
                // console.log((element));
                element.DocEntidad.forEach(entidad => {
                    if(entidad.tipoEntidad == 1){
                        //no guardo entidad
                        element.dataValues.correoProveedor = entidad.correo;
                    }
                    if(entidad.tipoEntidad == 2){
                        element.dataValues.correoComprador = entidad.correo;
                    }
                });
                delete element.dataValues.DocEntidad;
            });
            res.json(data);
        }catch (e){
            console.log(e);
            res.json({count: 0});
        }
    });
    router.get(ruta.concat('/actualizarEstadoComprobante'), async function(req, res){
        try{
            var data = await comprobantePagoDTO.estadosPendientes(constantes.FILECMD.tipos_documento.factura);
            res.json(data);
        }catch(e){
            console.log(e);
            res.json({error: e});
        }
    });
    router.post(ruta.concat('/actualizarComprobanteLocal'), async function (req, res) {
        let data = {};
        data.id = req.body.id;
        data.chEstadocomprobantepagocomp = req.body.chEstadocomprobantepagocomp;
        data.chEstadocomprobantepago = req.body.chEstadocomprobantepago;
        await comprobantePagoDTO.sincronizarDocumentoEstado(data);
        await queryComprobante.sincronizarDocumentoEstado(data);
        for(evento of req.body.eventos){
            await queryComprobanteEventoDTO.guardar(evento);
        }
        res.send('{}');
    });
    router.post(ruta.concat('/actualizarSincronizacion'), async function (req, res) {
        await comprobantePagoDTO.sincronizarDocumento(req.body.id);
        res.send('{}');
    });
    router.post(ruta.concat('/actualizarSincronizacionErronea'), async function (req, res) {
        await comprobantePagoDTO.sincronizarDocumentoErroneo(req.body.id);
        await queryComprobante.sincronizarDocumentoErroneo(req.body.id);
        let data = {};
        data.inIdcomprobante = req.body.id;
        data.inIdevento = constantes.inEstadoEliminadoLocal ;
        data.inIidioma = constantes.idiomaEspañol ,
        data.vcDescripcionEvento = constantes.estadoEliminadoLocal ,
        data.vcObservacionEvento = req.body.error ,
        data.inEstadoEvento = constantes.estadoActivo,
        data.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        data.usuarioCreacion = constantes.usuarioOffline; 
        await queryComprobanteEventoDTO.guardarOffline(data);
        res.json({});
    });
    router.post(ruta.concat('/actualizarFecha'), async function (req, res){
        try{
            await Sincronizacion.actualizarFecha(constantes.FILECMD.tipos_documento.factura, req.body.fecha);
            res.json({});
        }
        catch(e){
            res.json({ 'error': e})
        }
    });

    router.post(ruta.concat('/actualizarErrorBaja'), async function(req, res){  
        await queryComprobante.actualizarErrorBaja(req.body.id)
        await comprobantePagoDTO.sincronizarDocumentoBajaErroneo(req.body.id);
        res.status(200).send('{}');
    });


    router.post(ruta.concat('/actualizarBaja'), async function(req, res){  
        var parts =  req.body.numeroDocumento.split("/");
        var serie = parts[0];
        var numeroComprobante = parts[1]+ '-'+ parts[2] ;
        await queryComprobante.actualizarBaja(req.body.id, serie,numeroComprobante)
        res.status(200).send('{}');
    });
    

    router.get(ruta.concat('/obtenerComunicacionBaja'),async function (req, res){
        try{
            res.json(await ComprobanteQuery.comunicacionBaja(constantes.FILECMD.tipos_documento.comunicacionBajaFacturaBoleta));
        }catch(e){
            console.log(e);
            res.json({'error':e})
        }
    });
    router.post(ruta.concat('/'), async function (req, res) {
        try{
            comprobanteQ = req.body;
            guardarEntidad(comprobanteQ.entidadcompradora);
            guardarEntidad(comprobanteQ.entidadproveedora);
            comprobanteQ.id = comprobanteQ.inIdcomprobantepago;
            comprobanteQ.tsFechacreacion = dateFormat(new Date(parseInt(comprobanteQ.tsFechacreacion)), "yyyy-mm-dd HH:MM:ss");
            comprobanteQ.inIdentidadreceptor = comprobanteQ.entidadcompradora.seIentidad;
            comprobanteQ.inIdentidademisor = comprobanteQ.entidadproveedora.seIentidad;
            comprobanteQ.tsFechaemision = parseJsonDate(comprobanteQ.tsFechaemision);
            comprobanteQ.tsFecharegistro = parseJsonDate(comprobanteQ.tsFecharegistro);
            comprobanteQ.tsFechacreacion = parseJsonDate(comprobanteQ.tsFechacreacion);
            await queryComprobante.guardar(comprobanteQ, comprobanteQ.id);
            for (let parametro of comprobanteQ.parametros) {
                parametro.id = parametro.inIdocparametro;
                parametro.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
                parametro.estadoSincronizado = constantes.estadoActivo;
                await queryComprobanteDocParametroDTO.guardar(parametro, parametro.id);
            }
            for (let evento of comprobanteQ.eventos){
                evento.id = evento.seIdocevento;
                evento.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
                evento.estadoSincronizado = constantes.estadoActivo;
                await queryComprobanteEventoDTO.guardar(evento, evento.seIdocevento);
            }
            
            guardarComprobante(comprobanteQ);   
            res.send('{}');
        }catch (e){
            console.log(e);
            res.json({count: 0});
        }
    });
}

async function guardarComprobante(data){
    guardarUsuario(data.idUsuarioCreacion);
    let comprobante = {};
    comprobante.id = data.inIdcomprobantepago;
    comprobante.numeroComprobante = data.vcSerie + '-' + data.vcCorrelativo;
    comprobante.idProveedor = data.inIdorganizacionproveedora;
    comprobante.idOrganizacionCompradora = data.inIdorganizacioncompradora;
    comprobante.idOrganizacionProveedora = data.inIdorganizacionproveedora;
    comprobante.rucProveedor = data.vcOrgproveedoraDocumento;
    comprobante.rucComprador = data.vcOrgcompradoraDocumento;
    comprobante.flagPlazoPago = data.chFlagplazopago;
    comprobante.flagRegistroEliminado = data.chFlagregistroeliminado;
    comprobante.flagOrigenComprobante = data.chFlagorigencomprobantepago;
    comprobante.flagOrigenCreacion = data.chFlagorigencreacion;
    comprobante.idGuia = data.inIdguia;
    comprobante.iDoc = data.inIdoc;
    comprobante.idUsuarioCreacion = data.inIdusuariocreacion;
    comprobante.idUsuarioModificacion = data.inIdusuariomodificacion;
    comprobante.idOrganizacionCreacion = data.inIdorganizacioncreacion;
    comprobante.idOrganizacionModificacion = data.inIdorganizacionmodificacion;
    comprobante.razonSocialProveedor = data.vcOrgproveedoraDenominacion;
    comprobante.razonSocialComprador = data.vcOrgcompradoraDenominacio;
    comprobante.moneda = data.chMonedacomprobantepago;
    comprobante.fechaProgPagoComprobantePag = data.tsFechaprogpagocomprobantepag;
    comprobante.fechaPagoComprobantePago = data.tsFechapagocomprobantepago;
    comprobante.fechaCreacion = parseJsonDate(data.tsFechacreacion);
    comprobante.fechaRegistro = parseJsonDate(data.tsFecharegistro);
    comprobante.fechaEmision = parseJsonDate(data.tsFechaemision);
    comprobante.fechaRecepcionComprobantePa = data.tsFecharecepcioncomprobantepa;
    comprobante.fechaVencimiento = data.tsFechavencimiento;
    comprobante.fechaEnvio = data.tsFechaenvio;
    comprobante.fechaCambioEstado = data.tsFechacambioestado;
    comprobante.observacionComprobante = data.vcObscomprobantepago;
    comprobante.obsPagoComprobantePago = data.vcObspagocomprobantepago;
    comprobante.condicionPago = data.vcCondicionpago;
    comprobante.tiempoPlazo = data.chTiempoplazo;
    comprobante.documentoPago = data.vcDocumentopago;
    comprobante.documentoSap = data.vcDocumentosap;
    comprobante.formaPago = data.vcFormapago;
    comprobante.tipoComprobante = data.vcTipocomprobante;
    comprobante.estado  = data.chEstadocomprobantepago;
    comprobante.version = data.inVersion; 
    comprobante.idUsuarioComprador = data.inIdusuariocomprador;
    comprobante.numoc = data.vcNumoc;
    comprobante.numeroGuia = data.vcNumguia;
    comprobante.montoComprobante = data.vcMontocomprobantepago;
    comprobante.logo = data.vcLogo;
    comprobante.firma = data.vcFirma;
    comprobante.pagoTipoDocumento = data.vcPagotipodocumento;
    comprobante.pagoNroDocument = data.vcPagonrodocumento;
    comprobante.pagoMoneda = data.vcPagomoneda;
    comprobante.pagoBanco = data.vcPagobanco;
    comprobante.tipoDocumentoDescuento = data.vcDctotipodocumento;
    comprobante.numeroDocumentoDescuento = data.vcDctonrodocumento;
    comprobante.monedaDescuento = data.vcDctomoneda;
    comprobante.numeroCheque = data.vcNrocheque;
    comprobante.codigoInterno = data.chCodigointerno;
    comprobante.guiaPublicada = data.inDeguiapublicada;
    comprobante.tipoFactura = data.vcTipofactura;
    comprobante.codigoErpProveedor = data.vcCodigoerpproveedor;
    comprobante.fechaHoraCreacion = data.tsFechahoracreacion;
    comprobante.codigoSociedad = data.vcCodigosociedad;
    comprobante.igv = data.deImpuesto1;
    comprobante.isc = data.deImpuesto2;
    comprobante.otrosTributos = data.deImpuesto3;
    comprobante.descuento = data.deDescuento;
    comprobante.importeReferencial = data.deImportereferencial ;
    comprobante.subtotalComprobante = data.deSubtotalcomprobantepago ;
    comprobante.totalComprobante = data.deTotalcomprobantepago ;
    comprobante.pagoMontoPagadoUltimo = data.dePagomontopagadoultimo ;
    comprobante.dctoMontoUltimo = data.deDctomontoultimo ;
    comprobante.idindicadorImpuesto = data.inIdindicadorimpuesto ;
    comprobante.descripcionIndicadorImpuesto = data.vcIndicadorimpuesto ;
    comprobante.tipoItem = data.chOpregfac ;
    comprobante.codigoErp = data.vcCodigoerp ;
    comprobante.codError = data.vcCoderror ;
    comprobante.fechaDocumentoRetencion = data.tsFechadocumentoret ;
    comprobante.descError = data.vcDescerror ;
    comprobante.tipoEmision = data.chTipoemision ;
    comprobante.porcentajeImpuesto = data.dePorcentajeimpuesto ;
    comprobante.detraccion = data.inDetraccion ;
    comprobante.idBienServicio = data.inIdbienservicio ;
    comprobante.codigoBienServicio = data.vcCodigobienservicio ;
    comprobante.descripcionBienServicio = data.vcDescripcionbienservicio ;
    comprobante.porcentajeDetraccion = data.vcPorcentajedetraccion ;
    comprobante.idCondicionPago = data.vcIdcondicionpago ;
    comprobante.descripcionCondicionPago = data.vcDescripcioncondicionpago ;
    comprobante.llaveErp = data.vcLlaveerp; 
    comprobante.idTablaEstado = data.vcIdtablaestado ;
    comprobante.idRegistroEstadoProveedor = data.vcIdregistroestadoprov ;
    comprobante.idRegistroEstadoComprador = data.vcIdregistroestadocomp ;
    comprobante.idTablaMoneda = data.vcIdtablamoneda ;
    comprobante.idRegistroMoneda = data.vcIdregistromoneda ;
    comprobante.idTablaTipoComprobante = data.vcIdtablatipocomprobante ;
    comprobante.idRegistroTipoComprobante = data.vcIdregistrotipocomprobante ;
    comprobante.idTipoComprobante = data.chIdtipocomprobante ;
    comprobante.impuestoGvr = data.deImpuestogvr ;
    comprobante.montoPagado = data.dePagomontopagado ;
    comprobante.montoDescuento = data.deDctomonto ;
    comprobante.fecSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
    comprobante.estadoSincronizado = constantes.estadoActivo;
    comprobante.generado = constantes.generadoOnline ;
    comprobante.estadoComprobantePago = data.chEstadocomprobantepagocomp;
    comprobante.guiapublicada = data.inDeguiapublicada;
    comprobante.identidadEmisor = data.entidadproveedora.seIentidad;
    comprobante.identidadReceptor = data.entidadcompradora.seIentidad;
    await comprobantePagoDTO.buscarGuardarActualizar(comprobante, comprobante.id);
    let documentoEntidadProveedor = {};
    documentoEntidadProveedor.idTipoEntidad = constantes.emisor ;
    documentoEntidadProveedor.idEntidad = data.entidadproveedora.seIentidad;
    documentoEntidadProveedor.idComprobante = comprobante.id ;
    documentoEntidadProveedor.correo = data.vcOrgproveedoraCorreo ;
    documentoEntidadProveedor.usuarioCreacion = constantes.usuarioOffline;
    documentoEntidadProveedor.usuarioModifica = constantes.usuarioOffline;
    documentoEntidadProveedor.fechaCreacion = comprobante.fechaCreacion ;
    documentoEntidadProveedor.fechaModificacion = comprobante.fechaCreacion ;
    documentoEntidadProveedor.estado = constantes.estadoActivo;
    documentoEntidadProveedor.fechaSincronizacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
    documentoEntidadProveedor.estadoSincronizado = constantes.estadoActivo ;
    documentoEntidadProveedor.generado = constantes.generadoOnline ;
    let documentoEntidadComprador = {};
    documentoEntidadComprador.idEntidad = data.entidadcompradora.seIentidad;
    documentoEntidadComprador.idComprobante = comprobante.id ;
    documentoEntidadComprador.correo = data.vcOrgproveedoraCorreo ;
    documentoEntidadComprador.usuarioCreacion = constantes.usuarioOffline;
    documentoEntidadComprador.usuarioModifica = constantes.usuarioOffline;
    documentoEntidadComprador.fechaCreacion = comprobante.fechaCreacion ;
    documentoEntidadComprador.fechaModificacion = comprobante.fechaCreacion ;
    documentoEntidadComprador.estado = constantes.estadoActivo;
    documentoEntidadComprador.fechaSincronizacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
    documentoEntidadComprador.estadoSincronizado = constantes.estadoActivo ;
    documentoEntidadComprador.generado = constantes.generadoOnline ;
    documentoEntidadComprador.idTipoEntidad = constantes.receptor;
    await documentoEntidadDTO.guardarEntidad(documentoEntidadProveedor);
    await documentoEntidadDTO.guardarEntidad(documentoEntidadComprador);
    await guardarProductoXComprobantePago(comprobante.id, data.detalle);
    //await detalleComprobante(comprobante.id);
    
}


function parseJsonDate(jsonDateString){
    jsonDateString = jsonDateString.toString();
    return dateFormat(new Date(parseInt(jsonDateString.replace('/Date(', ''))), "yyyy-mm-dd HH:MM:ss");
}

function guardarEntidad(data){
    let entidad = {};
    entidad.id = data.seIentidad;
    entidad.documento = data.vcDocumento;
    entidad.denominacion = data.vcDenominacion;
    entidad.nombreComercial = data.vcNomComercia;
    entidad.direccion = data.vcDirFiscal;
    entidad.correo = data.vcCorreo;
    entidad.usuarioCreacion = data.vcUsuCreacion;
    entidad.usuarioModificacion = data.vcUsuModifica;
    entidad.fechaCreacion = data.tsFecCreacion;
    entidad.fechaModificacion = data.tsFecModifica;
    entidad.estado = data.inEstado;
    entidad.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
    entidad.estadoSincronizado = constantes.estadoActivo;
    entidad.pais = data.vcPais == null ? constantes.paisPeru : data.vcPais;
    entidad.ubigeo = data.vcUbigeo;
    entidad.tipoDocumento = data.vcTipoDocumento;
    entidad.idTipoDocumento = data.inTipoDocumento;
    entidadDTO.buscarGuardarActualizar(entidad, entidad.id);
    queryEntidad.buscarGuardarActualizar(entidad, entidad.id);
    queryEntidadOffline.buscarGuardarActualizar(entidad, entidad.id);
}

async function guardarUsuario(idUsuario){
    let data = {};
    data.id = idUsuario;
    await Usuario.buscarYGuardar(data, idUsuario);
}

function detalleComprobante(id){
    var client = new Client(); 
    var url = constantes.docuquery + constantes.pathDocumentoDetalle + id;
    var promise = new Promise(function(resolve,reject){
        return client.get(url, function (data, response) {
            resolve({data:data,response:response});
        });
    });
    return promise;
}

async function guardarProductoXComprobantePago(id , data){    
    for(let producto of data){
        producto.id = producto.inIdcomprobantepagodetalle;
        await QueryProductoXComprobantePagoDTO.guardar(producto);
    }
    
}

module.exports = controladorSincronizacionFactura;
