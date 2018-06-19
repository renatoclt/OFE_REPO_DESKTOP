/**
 * @author --- Modificado **-**-****
 * @author renato creado 18-12-2017 
 */
var ComprobantePago = require('../../modelos/msoffline/comprobantePago');
var ComprobantePagoXProducto = require('../../modelos/msoffline/productoXComprobantePago');
var documentoReferencia = require('../../modelos/msoffline/docReferencia');
var documentoEntidad = require('../../modelos/msoffline/docEntidad');
var documentoParametro = require('../../modelos/msoffline/docParametro');
var queryParametroDominioDoc = require('../../modelos/msoffline/queryParametroDominioDoc');
var documentoConcepto = require('../../modelos/msoffline/docConcepto')
const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */
ComprobantePago.guardar = function guardarComprobantePago(data){
    return ComprobantePago.create({
        id: data.id,
        numeroComprobante: data.numeroComprobante,
        idProveedor: data.idProveedor,
        idOrganizacionCompradora: data.idOrganizacionCompradora,
        idOrganizacionProveedora: data.idOrganizacionProveedora,
        rucProveedor: data.rucProveedor,
        rucComprador: data.rucComprador,
        flagPlazoPago: data.flagPlazoPago,
        flagRegistroEliminado: data.flagRegistroEliminado,
        flagOrigenComprobante: data.flagOrigenComprobante,
        flagOrigenCreacion: data.flagOrigenCreacion,
        idGuia: data.idGuia,
        iDoc: data.iDoc,
        idUsuarioCreacion: data.idUsuarioCreacion,
        idUsuarioModificacion: data.idUsuarioModificacion,
        idOrganizacionCreacion: data.idOrganizacionCreacion,
        idOrganizacionModificacion: data.idOrganizacionModificacion,
        razonSocialProveedor: data.razonSocialProveedor,
        razonSocialComprador: data.razonSocialComprador,
        moneda: data.moneda,
        fechaProgPagoComprobantePag: data.fechaProgPagoComprobantePag,
        fechaPagoComprobantePago: data.fechaPagoComprobantePago,
        fechaCreacion: data.fechaCreacion,
        fechaRegistro: data.fechaRegistro,
        fechaEmision: data.fechaEmision,
        fechaRecepcionComprobantePa: data.fechaRecepcionComprobantePa,
        fechaVencimiento: data.fechaVencimiento,
        fechaEnvio: data.fechaEnvio,
        fechaCambioEstado: data.fechaCambioEstado,
        observacionComprobante: data.observacionComprobante,
        obsPagoComprobantePago: data.obsPagoComprobantePago,
        condicionPago: data.condicionPago,
        tiempoPlazo: data.tiempoPlazo,
        documentoPago: data.documentoPago,
        documentoSap: data.documentoSap,
        formaPago: data.formaPago,
        tipoComprobante: data.tipoComprobante,
        estado : data.estado,
        version: data.version, 
        idUsuarioComprador: data.idUsuarioComprador,
        numoc: data.numoc,
        numeroGuia: data.numeroGuia,
        montoComprobante: data.montoComprobante,
        logo: data.logo,
        firma: data.firma,
        pagoTipoDocumento: data.pagoTipoDocumento,
        pagoNroDocument: data.pagoNroDocument,
        pagoMoneda: data.pagoMoneda,
        pagoBanco: data.pagoBanco,
        tipoDocumentoDescuento: data.tipoDocumentoDescuento,
        numeroDocumentoDescuento: data.numeroDocumentoDescuento,
        monedaDescuento: data.monedaDescuento,
        numeroCheque: data.numeroCheque,
        codigoInterno: data.codigoInterno,
        guiaPublicada: data.guiaPublicada,
        tipoFactura: data.tipoFactura,
        codigoErpProveedor: data.codigoErpProveedor,
        fechaHoraCreacion: data.fechaHoraCreacion,
        codigoSociedad: data.codigoSociedad,
        igv: data.igv,
        isc: data.isc,
        otrosTributos: data.otrosTributos,
        descuento: data.descuento,
        importeReferencial: data.importeReferencial ,
        subtotalComprobante: data.subtotalComprobante ,
        totalComprobante: data.totalComprobante ,
        pagoMontoPagadoUltimo: data.pagoMontoPagadoUltimo ,
        dctoMontoUltimo: data.dctoMontoUltimo ,
        idindicadorImpuesto: data.idindicadorImpuesto ,
        descripcionIndicadorImpuesto: data.descripcionIndicadorImpuesto ,
        tipoItem: data.tipoItem ,
        codigoErp: data.codigoErp ,
        codError: data.codError ,
        fechaDocumentoRetencion: data.fechaDocumentoRetencion ,
        descError: data.descError ,
        tipoEmision: data.tipoEmision ,
        porcentajeImpuesto: data.porcentajeImpuesto ,
        detraccion: data.detraccion ,
        idBienServicio: data.idBienServicio ,
        codigoBienServicio: data.codigoBienServicio ,
        descripcionBienServicio: data.descripcionBienServicio ,
        porcentajeDetraccion: data.porcentajeDetraccion ,
        idCondicionPago: data.idCondicionPago ,
        descripcionCondicionPago: data.descripcionCondicionPago ,
        llaveErp: data.llaveErp ,
        idTablaEstado: data.idTablaEstado ,
        idRegistroEstadoProveedor: data.idRegistroEstadoProveedor ,
        idRegistroEstadoComprador: data.idRegistroEstadoComprador ,
        idTablaMoneda: data.idTablaMoneda ,
        idRegistroMoneda: data.idRegistroMoneda ,
        idTablaTipoComprobante: data.idTablaTipoComprobante ,
        idRegistroTipoComprobante: data.idRegistroTipoComprobante ,
        idTipoComprobante: data.idTipoComprobante ,
        impuestoGvr: data.impuestoGvr ,
        montoPagado: data.montoPagado ,
        montoDescuento: data.montoDescuento ,
        fecSincronizado: data.fecSincronizado ,
        estadoSincronizado: data.estadoSincronizado ,
        generado: data.generado ,
        estadoComprobantePago: data.estadoComprobantePago,
        guiapublicada: data.guiapublicada,
    });
}


ComprobantePago.buscarGuardarActualizar = function buscarGuardarActualizar(data, id){
    return ComprobantePago.findOne({where: {id: id}}).then(function(obj){
        if(obj){
            return ComprobantePago.update({
                id: data.id,
                numeroComprobante: data.numeroComprobante,
                idProveedor: data.idProveedor,
                idOrganizacionCompradora: data.idOrganizacionCompradora,
                idOrganizacionProveedora: data.idOrganizacionProveedora,
                rucProveedor: data.rucProveedor,
                rucComprador: data.rucComprador,
                flagPlazoPago: data.flagPlazoPago,
                flagRegistroEliminado: data.flagRegistroEliminado,
                flagOrigenComprobante: data.flagOrigenComprobante,
                flagOrigenCreacion: data.flagOrigenCreacion,
                idGuia: data.idGuia,
                iDoc: data.iDoc,
                idUsuarioCreacion: data.idUsuarioCreacion,
                idUsuarioModificacion: data.idUsuarioModificacion,
                idOrganizacionCreacion: data.idOrganizacionCreacion,
                idOrganizacionModificacion: data.idOrganizacionModificacion,
                razonSocialProveedor: data.razonSocialProveedor,
                razonSocialComprador: data.razonSocialComprador,
                moneda: data.moneda,
                fechaProgPagoComprobantePag: data.fechaProgPagoComprobantePag,
                fechaPagoComprobantePago: data.fechaPagoComprobantePago,
                fechaCreacion: data.fechaCreacion,
                fechaRegistro: data.fechaRegistro,
                fechaEmision: data.fechaEmision,
                fechaRecepcionComprobantePa: data.fechaRecepcionComprobantePa,
                fechaVencimiento: data.fechaVencimiento,
                fechaEnvio: data.fechaEnvio,
                fechaCambioEstado: data.fechaCambioEstado,
                observacionComprobante: data.observacionComprobante,
                obsPagoComprobantePago: data.obsPagoComprobantePago,
                condicionPago: data.condicionPago,
                tiempoPlazo: data.tiempoPlazo,
                documentoPago: data.documentoPago,
                documentoSap: data.documentoSap,
                formaPago: data.formaPago,
                tipoComprobante: data.tipoComprobante,
                estado : data.estado,
                version: data.version, 
                idUsuarioComprador: data.idUsuarioComprador,
                numoc: data.numoc,
                numeroGuia: data.numeroGuia,
                montoComprobante: data.montoComprobante,
                logo: data.logo,
                firma: data.firma,
                pagoTipoDocumento: data.pagoTipoDocumento,
                pagoNroDocument: data.pagoNroDocument,
                pagoMoneda: data.pagoMoneda,
                pagoBanco: data.pagoBanco,
                tipoDocumentoDescuento: data.tipoDocumentoDescuento,
                numeroDocumentoDescuento: data.numeroDocumentoDescuento,
                monedaDescuento: data.monedaDescuento,
                numeroCheque: data.numeroCheque,
                codigoInterno: data.codigoInterno,
                guiaPublicada: data.guiaPublicada,
                tipoFactura: data.tipoFactura,
                codigoErpProveedor: data.codigoErpProveedor,
                fechaHoraCreacion: data.fechaHoraCreacion,
                codigoSociedad: data.codigoSociedad,
                igv: data.igv,
                isc: data.isc,
                otrosTributos: data.otrosTributos,
                descuento: data.descuento,
                importeReferencial: data.importeReferencial ,
                subtotalComprobante: data.subtotalComprobante ,
                totalComprobante: data.totalComprobante ,
                pagoMontoPagadoUltimo: data.pagoMontoPagadoUltimo ,
                dctoMontoUltimo: data.dctoMontoUltimo ,
                idindicadorImpuesto: data.idindicadorImpuesto ,
                descripcionIndicadorImpuesto: data.descripcionIndicadorImpuesto ,
                tipoItem: data.tipoItem ,
                codigoErp: data.codigoErp ,
                codError: data.codError ,
                fechaDocumentoRetencion: data.fechaDocumentoRetencion ,
                descError: data.descError ,
                tipoEmision: data.tipoEmision ,
                porcentajeImpuesto: data.porcentajeImpuesto ,
                detraccion: data.detraccion ,
                idBienServicio: data.idBienServicio ,
                codigoBienServicio: data.codigoBienServicio ,
                descripcionBienServicio: data.descripcionBienServicio ,
                porcentajeDetraccion: data.porcentajeDetraccion ,
                idCondicionPago: data.idCondicionPago ,
                descripcionCondicionPago: data.descripcionCondicionPago ,
                llaveErp: data.llaveErp ,
                idTablaEstado: data.idTablaEstado ,
                idRegistroEstadoProveedor: data.idRegistroEstadoProveedor ,
                idRegistroEstadoComprador: data.idRegistroEstadoComprador ,
                idTablaMoneda: data.idTablaMoneda ,
                idRegistroMoneda: data.idRegistroMoneda ,
                idTablaTipoComprobante: data.idTablaTipoComprobante ,
                idRegistroTipoComprobante: data.idRegistroTipoComprobante ,
                idTipoComprobante: data.idTipoComprobante ,
                impuestoGvr: data.impuestoGvr ,
                montoPagado: data.montoPagado ,
                montoDescuento: data.montoDescuento ,
                fecSincronizado: data.fecSincronizado ,
                estadoSincronizado: data.estadoSincronizado ,
                generado: data.generado ,
                estadoComprobantePago: data.estadoComprobantePago,
                guiapublicada: data.guiapublicada,
                identidadEmisor: data.identidadEmisor,
                identidadReceptor: data.identidadReceptor
            }, {where: {id: id}});
        }
        else{
            return ComprobantePago.create({
                id: data.id,
                numeroComprobante: data.numeroComprobante,
                idProveedor: data.idProveedor,
                idOrganizacionCompradora: data.idOrganizacionCompradora,
                idOrganizacionProveedora: data.idOrganizacionProveedora,
                rucProveedor: data.rucProveedor,
                rucComprador: data.rucComprador,
                flagPlazoPago: data.flagPlazoPago,
                flagRegistroEliminado: data.flagRegistroEliminado,
                flagOrigenComprobante: data.flagOrigenComprobante,
                flagOrigenCreacion: data.flagOrigenCreacion,
                idGuia: data.idGuia,
                iDoc: data.iDoc,
                idUsuarioCreacion: data.idUsuarioCreacion,
                idUsuarioModificacion: data.idUsuarioModificacion,
                idOrganizacionCreacion: data.idOrganizacionCreacion,
                idOrganizacionModificacion: data.idOrganizacionModificacion,
                razonSocialProveedor: data.razonSocialProveedor,
                razonSocialComprador: data.razonSocialComprador,
                moneda: data.moneda,
                fechaProgPagoComprobantePag: data.fechaProgPagoComprobantePag,
                fechaPagoComprobantePago: data.fechaPagoComprobantePago,
                fechaCreacion: data.fechaCreacion,
                fechaRegistro: data.fechaRegistro,
                fechaEmision: data.fechaEmision,
                fechaRecepcionComprobantePa: data.fechaRecepcionComprobantePa,
                fechaVencimiento: data.fechaVencimiento,
                fechaEnvio: data.fechaEnvio,
                fechaCambioEstado: data.fechaCambioEstado,
                observacionComprobante: data.observacionComprobante,
                obsPagoComprobantePago: data.obsPagoComprobantePago,
                condicionPago: data.condicionPago,
                tiempoPlazo: data.tiempoPlazo,
                documentoPago: data.documentoPago,
                documentoSap: data.documentoSap,
                formaPago: data.formaPago,
                tipoComprobante: data.tipoComprobante,
                estado : data.estado,
                version: data.version, 
                idUsuarioComprador: data.idUsuarioComprador,
                numoc: data.numoc,
                numeroGuia: data.numeroGuia,
                montoComprobante: data.montoComprobante,
                logo: data.logo,
                firma: data.firma,
                pagoTipoDocumento: data.pagoTipoDocumento,
                pagoNroDocument: data.pagoNroDocument,
                pagoMoneda: data.pagoMoneda,
                pagoBanco: data.pagoBanco,
                tipoDocumentoDescuento: data.tipoDocumentoDescuento,
                numeroDocumentoDescuento: data.numeroDocumentoDescuento,
                monedaDescuento: data.monedaDescuento,
                numeroCheque: data.numeroCheque,
                codigoInterno: data.codigoInterno,
                guiaPublicada: data.guiaPublicada,
                tipoFactura: data.tipoFactura,
                codigoErpProveedor: data.codigoErpProveedor,
                fechaHoraCreacion: data.fechaHoraCreacion,
                codigoSociedad: data.codigoSociedad,
                igv: data.igv,
                isc: data.isc,
                otrosTributos: data.otrosTributos,
                descuento: data.descuento,
                importeReferencial: data.importeReferencial ,
                subtotalComprobante: data.subtotalComprobante ,
                totalComprobante: data.totalComprobante ,
                pagoMontoPagadoUltimo: data.pagoMontoPagadoUltimo ,
                dctoMontoUltimo: data.dctoMontoUltimo ,
                idindicadorImpuesto: data.idindicadorImpuesto ,
                descripcionIndicadorImpuesto: data.descripcionIndicadorImpuesto ,
                tipoItem: data.tipoItem ,
                codigoErp: data.codigoErp ,
                codError: data.codError ,
                fechaDocumentoRetencion: data.fechaDocumentoRetencion ,
                descError: data.descError ,
                tipoEmision: data.tipoEmision ,
                porcentajeImpuesto: data.porcentajeImpuesto ,
                detraccion: data.detraccion ,
                idBienServicio: data.idBienServicio ,
                codigoBienServicio: data.codigoBienServicio ,
                descripcionBienServicio: data.descripcionBienServicio ,
                porcentajeDetraccion: data.porcentajeDetraccion ,
                idCondicionPago: data.idCondicionPago ,
                descripcionCondicionPago: data.descripcionCondicionPago ,
                llaveErp: data.llaveErp ,
                idTablaEstado: data.idTablaEstado ,
                idRegistroEstadoProveedor: data.idRegistroEstadoProveedor ,
                idRegistroEstadoComprador: data.idRegistroEstadoComprador ,
                idTablaMoneda: data.idTablaMoneda ,
                idRegistroMoneda: data.idRegistroMoneda ,
                idTablaTipoComprobante: data.idTablaTipoComprobante ,
                idRegistroTipoComprobante: data.idRegistroTipoComprobante ,
                idTipoComprobante: data.idTipoComprobante ,
                impuestoGvr: data.impuestoGvr ,
                montoPagado: data.montoPagado ,
                montoDescuento: data.montoDescuento ,
                fecSincronizado: data.fecSincronizado ,
                estadoSincronizado: data.estadoSincronizado ,
                generado: data.generado ,
                estadoComprobantePago: data.estadoComprobantePago,
                guiapublicada: data.guiapublicada,
                identidadEmisor: data.identidadEmisor,
                identidadReceptor: data.identidadReceptor
            });
        }
    });
}


ComprobantePago.sincronizarDocumentoEstado = function sincronizarDocumentoEstado(data){
    ComprobantePago.findOne({where:{id:data.id}}).then(function(obj){
        return ComprobantePago.update({
            id: data.id,
            fecSincronizado:  dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
            estadoSincronizado: constantes.estadoActivo,
            estado: data.chEstadocomprobantepago,
            estadoComprobantePago: data.chEstadocomprobantepagocomp,
        }, {where: {id: data.id}}) ;
    });
}

ComprobantePago.estadosPendientes = function estadosPendientes(idTipoComprobante){
    return ComprobantePago.findAll({
        where: {
            estado: {[Op.between]: [-81, 2]}, 
            estadoSincronizado: constantes.estadoActivo , 
            idTipoComprobante: idTipoComprobante 
        }});
}

ComprobantePago.sincronizarDocumentoErroneo = function sincronizarDocumentoErroneo(id){
    ComprobantePago.findOne({where:{id:id}}).then(function(obj){
        return ComprobantePago.update({
            id: id,
            fecSincronizado:  dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
            estadoSincronizado: constantes.estadoActivo,
            estado: constantes.inEstadoEliminadoLocal,
            estadoComprobantePago: constantes.estadoEliminadoLocal,
        }, {where: {id: id}}) ;
    });
}

ComprobantePago.sincronizarDocumentoBajaErroneo = function sincronizarDocumentoErroneo(id){
    ComprobantePago.findOne({where:{id:id}}).then(function(obj){
        return ComprobantePago.update({
            id: id,
            fecSincronizado:  dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
            estadoSincronizado: constantes.estadoActivo,
            estado: constantes.inEstadoBloqueadoLocal,
            estadoComprobantePago: constantes.estadoBloqueadoLocal,
        }, {where: {id: id}}) ;
    });
}

ComprobantePago.sincronizarDocumento = function sincronizarDocumento(id){
    ComprobantePago.findOne({where:{id:id}}).then(function(obj){
        return ComprobantePago.update({
            id: id,
            fecSincronizado:  dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
            estadoSincronizado: constantes.estadoActivo,
            estado: constantes.inEstadoPendienteEnvio ,
            estadoComprobantePago: constantes.estadoPendienteEnvio         
        }, {where: {id: id}}) ;
    });
}
ComprobantePago.filtro = function comprobantePagoFiltro(){
    return ComprobantePago.findAll({ attributes: atributosComprobantePago.attributes ,
        include:[ 
            {
                model: DocEntidad,
                as: 'docEntidad', 
                attributes: atributosDocumentoEntidad.attributes,
                include:[

                    // {
                    //     model: Entidad,
                    //     attributes: atributosEntidad.attributes,
                    //     include:{
                    //         model: EntidadParametro,
                    //         attributes: atributosEntidadParametro.attributes,
                    //     },
                    // },
                    {
                        model: TipoEnt,
                        attributes: atributosTipoEntidad.attributes,
                    }

                ],
            },
            {
                model: DocReferencia,
                as: 'DocEntidad',
                attributes: atributosDocumentoReferencia.attributes
            }
        ],
        where: {
            estadoSincronizado: constantes.estadoInactivo
        }
      });
}



ComprobantePago.sincronizarRetencion = function comprobanteSincronizar(){
    return ComprobantePago.findAll({ attributes: atributosSincronizar.attributes ,
        include:[ 
            {
                model: documentoReferencia,
                as: 'facturasAfectadas', 
                attributes: atributosDocumentoReferencia.attributes,
            },
            {
                model: documentoEntidad,
                as: 'DocEntidad', 
                attributes: atributosDocumentoEntidad.attributes,
            },
        ],
        where: {
            estadoSincronizado: constantes.estadoInactivo,
            estado: constantes.inEstadoGuardadoLocal,
            idTipoComprobante: constantes.idTipocomprobanteRetencion
        }
      });
}

ComprobantePago.sincornizarPercepcion = function comprobanteSincronizarPercepcion(){
    return ComprobantePago.findAll({ attributes: atributosSincronizar.attributes ,
        include:[ 
            {
                model: documentoReferencia,
                as: 'referencias', 
                attributes: atributosDocumentoReferenciaPercepcion.attributes,
            },
            {
                model: documentoEntidad,
                as: 'DocEntidad', 
                attributes: atributosDocumentoEntidad.attributes,
            },
            {
                model: documentoParametro,
                as: 'parametros',
                attributes: atributosParametroPercepcion.attributes,
                include: [{
                        model: queryParametroDominioDoc,
                        as: 'ParametroDominio',
                        attributes: atributosParametroDominio
                    }
                ]
            }
        ],
        where: {
            estadoSincronizado: constantes.estadoInactivo,
            idTipoComprobante:  constantes.idTipocomprobantePercepcion
        }
      }).map( data => {
          data.dataValues.descuento = parseFloat(data.dataValues.montoDescuento).toFixed(2) ;
          data.dataValues.montoPagado = parseFloat(data.dataValues.montoPagado).toFixed(2);
          data.dataValues.montoDescuento = parseFloat(data.dataValues.montoDescuento).toFixed(2);
          data.dataValues.totalComprobante = parseFloat(data.dataValues.totalComprobante).toFixed(2);
          data.dataValues.porcentajeImpuesto = parseFloat((data.dataValues.montoDescuento * 100)/ data.dataValues.totalComprobante).toFixed(2);
          data.dataValues.fechaEmision = new Date(data.dataValues.fechaEmision).getTime();
          data.dataValues.parametros.map( parametros =>{
              parametros.json = JSON.parse(parametros.json.replace('/',''));
              parametros.dataValues.idParametro = parametros.dataValues.ParametroDominio.dataValues.parametroDocumento;
              delete parametros.dataValues.ParametroDominio;
              return parametros;
          });
          data.dataValues.referencias.map(referencias =>{
              referencias.dataValues.fechaEmision = new Date(referencias.dataValues.fechaEmision).getTime();              
              return referencias;
          });
          return data;
      });
}



ComprobantePago.sincronizarFactura = function comprobanteSincronizaFactura(){
    return ComprobantePago.findAll({ attributes: atributosSincronizarFactura.attributes ,
        include:[ 
            {
                model: ComprobantePagoXProducto,
                as: 'detalle', 
                attributes: atributosFacturaDetalle.attributes,
            },
            {
                model: documentoEntidad,
                as: 'DocEntidad', 
                attributes: atributosDocumentoEntidad.attributes,
            },
            {
                model: documentoConcepto,
                as: 'conceptos',
                attributes: atributosConceptoFactura.attributes,
            },
            {
                model: documentoReferencia,
                as: 'anticipos',
                attributes: atributosReferenciaFactura.attributes,
            },
            {
                model: documentoParametro,
                as: 'parametros',
                attributes: atributosParametroFactura.attributes
            }
        ],
        where: {
            estadoSincronizado: constantes.estadoInactivo,
            idTipoComprobante: constantes.idTipocomprobanteFactura,
        }
      }).map(data =>{
        data.dataValues.fechaEmision = new Date(data.dataValues.fechaEmision).getTime();
        data.dataValues.parametros.map( parametros =>{
            parametros.json = JSON.parse(parametros.json.replace('/',''));
            return parametros;
        });
        data.dataValues.detalle.map(detalle =>{
            console.log(detalle);
            detalle.dataValues.idProducto = null;
            detalle.codigoTipoIsc = zfill(detalle.dataValues.codigoTipoIsc , 2);
            detalle.codigoTipoPrecio = zfill(detalle.dataValues.codigoTipoPrecio , 2);
            return detalle;
        })

        return data;
      });
}

ComprobantePago.sincronizarBoleta = function comprobanteSincronizaFactura(){
    return ComprobantePago.findAll({ attributes: atributosSincronizarBoleta.attributes ,
        include:[ 
            {
                model: ComprobantePagoXProducto,
                as: 'detalle', 
                attributes: atributosFacturaDetalle.attributes,
            },
            {
                model: documentoEntidad,
                as: 'DocEntidad', 
                attributes: atributosDocumentoEntidad.attributes,
            },
            {
                model: documentoConcepto,
                as: 'conceptos',
                attributes: atributosConceptoFactura.attributes,
            },
            {
                model: documentoReferencia,
                as: 'anticipos',
                attributes: atributosReferenciaFactura.attributes,
            },
            {
                model: documentoParametro,
                as: 'parametros',
                attributes: atributosParametroFactura.attributes
            }
        ],
        where: {
            estadoSincronizado: constantes.estadoInactivo,
            idTipoComprobante: constantes.idTipocomprobanteBoleta,
        }
      }).map(data =>{
        data.dataValues.fechaEmision = new Date(data.dataValues.fechaEmision).getTime();
        data.dataValues.parametros.map( parametros =>{
            parametros.json = JSON.parse(parametros.json.replace('/',''));
            return parametros;
        });
        data.dataValues.detalle.map(detalle =>{
            detalle.dataValues.idProducto = null;
            detalle.dataValues.codigoTipoIsc = zfill(detalle.dataValues.codigoTipoIsc , 2);
            detalle.dataValues.codigoTipoPrecio = zfill(detalle.dataValues.codigoTipoPrecio , 2);
            return detalle;
        })

        return data;
      });
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


var atributosSincronizar = {
    attributes: [
                ['in_idcomprobantepago', 'idComprobanteOffline'], 
                'numeroComprobante',
                'rucComprador',
                'razonSocialComprador',
                //'correoProveedor',
                //'correoComprador',
                'moneda',
                'fechaEmision',
                'observacionComprobante',
                'montoPagado',
                'monedaDescuento',
                'montoDescuento',
                'totalComprobante',
                'tipoItem'
            ],
}

var atributosSincronizarFactura = {
    attributes: [
                ['in_idcomprobantepago', 'idComprobanteOffline'], 
                'numeroComprobante',
                'rucComprador',
                'razonSocialComprador',
                'moneda',
                'fechaEmision',
                'observacionComprobante',
                'montoPagado',
                'monedaDescuento',
                'montoDescuento',
                'totalComprobante',
                'tipoItem',
                'igv',
                'isc',
                'otrosTributos',
                'descuento',
                'importeReferencial',
                ['de_subtotalcomprobantepago','subTotalComprobante'],
                'totalComprobante'
            ],
}



var atributosSincronizarBoleta = {
    attributes: [
                ['in_idcomprobantepago', 'idComprobanteOffline'], 
                ['vc_tipodocumento','tipoDocumentoComprador'],
                ['ch_ruccomprador','documentoComprador'],
                'numeroComprobante',
                'rucComprador',
                'razonSocialComprador',
                'moneda',
                'fechaEmision',
                'observacionComprobante',
                'montoPagado',
                'monedaDescuento',
                'montoDescuento',
                'totalComprobante',
                'tipoItem',
                'igv',
                'isc',
                'otrosTributos',
                'descuento',
                'importeReferencial',
                ['de_subtotalcomprobantepago','subTotalComprobante'],
                'totalComprobante'
            ],
}
// "serie": "F002",
// "correlativo": "0000002",
// "fechaEmision": 1517892988428,
// "totalImporteSoles": "972",
// "totalRetenidoSoles": "29.16",
// "porcentajeRetenido": "3",
// "monedaOriginal": "USD",
// "totalMonedaOriginal": "300",
// "tipoDeCambio": "3.24",
// "totalFacturaConRetencion": "942.84"

var atributosDocumentoReferencia = {
    attributes: [
        ['ch_serie_dest','serie'], 
        ['ch_corr_dest','correlativo'],
        ['da_fec_emi_dest','fechaEmision'],
        ['nu_tot_imp_dest','totalImporteSoles'],
        ['nu_tot_imp_aux','totalRetenidoSoles'],
        [sequelize.literal('(COALESCE(nu_tot_imp_aux, 0) * 100) / COALESCE(nu_tot_imp_dest, 0)'),'porcentajeRetenido'],
        ['vc_mone_des','monedaOriginal'],
        ['de_tot_mone_des','totalMonedaOriginal'],
        ['vc_aux_1','tipoDeCambio'],
        [sequelize.literal('COALESCE(nu_tot_imp_dest, 0) + COALESCE(nu_tot_imp_aux, 0)'),'totalFacturaConRetencion']
    ],
}

var atributosDocumentoReferenciaPercepcion = {
    attributes: [
        [sequelize.literal("ch_serie_dest ||'-'|| ch_corr_dest  "), 'numeroComprobante'],
        ['vc_aux_1','tipoDeCambio'],
        ['nu_tot_imp_dest','totalFacturaConPercepcion'],
        ['nu_tot_por_aux','totalPercibido'],
        ['da_fec_emi_dest','fechaEmision'],
        ['vc_aux_2','totalImporteDestino'],
        ['vc_mone_des','monedaDestino'],
        ['de_tot_mone_des','totalMonedaDestino'],
        ['ch_tipo_doc_des','tipoDocumentoDestino']
    ]
}

var atributosDocumentoEntidad = {
    attributes: [
        'id',
        'tipoEntidad',
        'correo',
    ]
}

var atributosParametroPercepcion = {
    attributes: [
        ['se_iparam_doc', 'idParametro'],
        'json',
        'descripcionParametro'
    ]
}


var atributosParametroDominio = {
    attributes: [
        'parametroDocumento',
        'dominioDocumento'
    ]
}

var atributosFacturaDetalle = {
    attributes: [
        'descripcionItem',
        ['vc_unidadmedida','codigoUnidadMedida'],
        'posicion',
        ['vc_numeroparteitem','codigoItem'],
        ['de_preciounitarioitem','precioUnitario'],
        ['de_preciototalitem','precioTotal'],
        ['de_cantidaddespachada','cantidad'],
        'montoImpuesto',
        'codigoTipoIgv',
        'codigoTipoIsc',
        'codigoTipoPrecio',
        //'idProducto',
        ['de_preciounitarioitem','precioUnitarioVenta'],
        ['de_preciototalitem','subTotalVenta'],
        'subTotalIgv',
        'subTotalIsc',
    ]
}

var atributosConceptoFactura = {
    attributes: [
        'idConcepto',
        ['se_iconcepto', 'codigoConcepto'],
        ['vc_desc','descripcionConcepto'],
        ['nu_importe','importe'],
    ]
}

var atributosReferenciaFactura = {
    attributes: [
        [sequelize.literal("ch_serie_dest ||'-'|| ch_corr_dest  "), 'numeroComprobante'],
        ['de_anticipo','monto']
    ]
}

var atributosParametroFactura = {
    attributes: [
        ['se_iparam_doc','idParametro'],
        ['vc_desc','descripcionParametro'],
        'json'
    ]
} 

module.exports = ComprobantePago;