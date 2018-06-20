var constantes = {
    estadoActivo: '1',
    estadoInactivo: '0',
    usuarioOffline: 'offline',
    estadoOffline: '0',
    generadoOnline: '1',
    estadoGuardadoLocal:  'Guardado Local',
    versionInicial: '0',
    inEstadoGuardadoLocal:  '-1',
    estadoEliminadoLocal: 'Eliminado Local',
    inEstadoEliminadoLocal:  '-99',
    estadoBloqueadoLocal: 'Bloqueado Local',// Estado Bloqueado falta sincronizacion
    comunicacionBaja: 'Comunicacion de Baja',
    inEstadoBloqueadoLocal: '-90',// Estado Bloqueado falta sincronizacion
    inEstadoPendienteEnvio: '1',
    estadoPendienteEnvio: 'Pendiente de Envio',
    idiomaEspañol: '1',
    catalogoTipoPrecio: 'tipo_prec_ven',
    catalogoTipoAfecIgv: 'tipo_afec_igv',
    catalogoTipoCalcIsc: 'tipo_calc_isc',
    obsEventoGuardarLocal: 'Creación de nuevo comprobante offline',
    fechaSincronizacionInicio: '2018-06-01',
    assigment: 'assignment',
    paisPeru: 'Perú',
    emisor: 1,
    receptor: 2,
    vacio: ' ',
    renato: 'renato', //valores para asignar incidencias testing
    miguel: 'miguel', //valores para asignar incidencias testing
    jose: 'jose', //valores para asignar incidencias testing
    manuel: 'manuel', //valores para asignar incidencias para testing
    pais: '1',//valor en t_parametro_ent
    tiposDocumentoIdentidad: '2',//valor en t_parametro_ent
    ubigeo: '3',//valor en t_parametro_ent
    logo: '4',//valor en t_parametro_ent
    notificarCorreo: '5',//valor en t_parametro_ent
    idTipocomprobanteRetencion: '20', // valor del id del conprobante tipo de retencion,
    idTipocomprobanteFactura: '01', // valor del id del conprobante tipo de factura
    idTipocomprobanteBoleta: '03', // valor del id del conprobante tipo de boleta
    idTipocomprobantePercepcion: '40', // valor del id del conprobante tipo de guias de remision
    numeroDeComprobante: '15', // Comunicación de Baja - Número de Comprobante
    motivoBaja: '16', //Comunicación de Baja - Motivo de Baja
    fechaBaja: '12', //Comunicacion de baja - Fecha de baja
    docuquery: 'http://https://dev.b2miningdata.com',
    pathDocumentoDetalle: '/fe/ms-documentos-query/v1/documento?id=',
    idTipoDocumentoRuc: '6',
    tipoDocumentoRuc: 'REG. UNICO DE CONTRIBUYENTES',
    idTablaTipoComprobante: '10007',
    vcIdregistromoneda: '000001',
    menuOffline: '12345678-1234-1234-1234-1234567890ab',
    keySuscripcion: '07a12d074c714f62ab037bb2f88e30d3',
    retencion: {
        inDeguiapublicada: '0',
        vcTipofactura: 'M',
        deImpuesto1: '0.0',
        deImpuesto2: '0.0',
        deImpuesto3: '0.0',
        deDescuento: '0.0',
        deSubtotalcomprobantepago: '0.0',
        inIdindicadorimpuesto: '0',
        chOpregfac: '3',
        chTipoemision: 'E',
        inIdbienservicio: '0',
        deAnticipo: '0.00'

    },
    factura:{
        inIdguia: '',
        chAfectaIgv: '',
        vcSpotimpuesto: 'N',
        chNumeroseguimiento: '',
        chNumeroguia: '',
        vcPosicionprodxguia: '',
        vcPosicionprodxoc: 'N',
        inIdproductoconsignado: '0',
        inIdmovimiento: '',
        vcCodigoguiaerp: 'N',
        vcEjercicioguia: '',
        vcTipoguia: 'N',
        tsFechaemisionguia: '',
        vcTipospot: '',
        inIproducto:'1',
        nuPesoBruto: '0.00',
        nuPesoNeto: '0.00',
        nuPesoTotal: '0.00',
        idRegistroUnidad: '',
        idTablaUnidad: '',
        referencia: {
            polizaFactura: '',
            anticipo: 'anticipo',
        },
    },
    boleta:{
        inIdguia: '',
        chAfectaIgv: '',
        vcSpotimpuesto: 'N',
        chNumeroseguimiento: '',
        chNumeroguia: '',
        vcPosicionprodxguia: '',
        vcPosicionprodxoc: 'N',
        inIdproductoconsignado: '0',
        inIdmovimiento: '',
        vcCodigoguiaerp: 'N',
        vcEjercicioguia: '',
        vcTipoguia: 'N',
        tsFechaemisionguia: '',
        vcTipospot: '',
        inIproducto:'1',
        nuPesoBruto: '0.00',
        nuPesoNeto: '0.00',
        nuPesoTotal: '0.00',
        idRegistroUnidad: '',
        idTablaUnidad: '',
        referencia: {
            polizaFactura: '',
            anticipo: 'anticipo',
        },
    },
    percepcion: {
        flagOrigenComprobante: 'p',
        flagOrigenCreacion: '1',
        tipoFactura: 'M',
        inDeguiapublicada: '0',
        vcTipofactura: 'M',
        deImpuesto1: '0.0',
        deImpuesto2: '0.0',
        deImpuesto3: '0.0',
        deDescuento: '0.0',
        deSubtotalcomprobantepago: '0.0',
        inIdindicadorimpuesto: '0',
        chOpregfac: '3',
        chTipoemision: 'E',
        inIdbienservicio: '0',
        deAnticipo: '0.00'

    },
    /**
     * Constantes de API
     */
    FILECMD: {
        tipos_entidad: {
            emisor: '1',
            receptor: '2',
            transportista: '3'
        },
        conceptos: {
            retencion: '7',
            operacionesGravadas: '1',
            operacionesInafectas: '2',
            operacionesExoneradas: '3',
            otrosCargos: '12',
        },
        tipos_documento: {
            factura: '01',
            boleta: '03',
            notaCredito: '07',
            notaDebito: '08',
            retencion: '20',
            percepcion: '40',
            parametros: '05',
            comunicacionBajaComprobantes: 'RA',
            comunicacionBajaNotas: 'RR',
            comunicacionBajaRetencionPercepcion: 'RR',
            comunicacionBajaFacturaBoleta: 'RA'
        },
        tipos_documentos_descripcion: {
            factura: 'FACTURA',
            boleta: 'BOLETA',
            notaCredito: 'NOTA DE CREDITO',
            notaDebito: 'NOTA DE DEBITO',
            retencion: 'RETENCION',
            comunicacionBaja: 'COMUNICACION DE BAJA'
        },
        parametros_entidad: {
            logo: '6',
            plantillaFactura: '7',
            plantillaBoleta: '8',
            plantillaNotaCredito: '9',
            plantillaNotaDebito: '10',
            plantillaGuiaRemision: '11',
            plantillaRetencion: '12',
            plantillaPercepcion: '13',
        },
        plantillas: {
            comprobantes: "facturas.xml",         // Facturas, Boletas
            notas: "notas.xml",       // Crédito, Débito
            retencion: "retenciones-final.xml",
            comunicacion: "comunicacion_baja.xml",
            resumen: "resumen_diario.xml",
            logo: "logo.png",
            logoEbiz: "logo_ebiz.png",
        },
        tipos_archivo: {
            pdf: '1',
            xml: '2',
            cdr: '3',
        }
    },

/////  parametros para DOCUCMD
    DOCUCMD:{
            'parametros-documento':{

                fechaBaja:              {id:12,descripcion:'Comunicacion de baja - Fecha de baja'},
                ticketBaja:             {id:13,descripcion:'Comunicacion de baja - Ticket'},
                retencionTicket:        {id:14,descripcion:'Documento masivo - Ticket'},
                montoLetras:            {id:6,descripcion:'Elementos adicionales en la factura/boleta'},
                numeroComprobanteBaja:  {id:15,descripcion:'Comunicación de Baja - Número de Comprobante'},
                motivoBaja:             {id:16,descripcion:'Comunicación de Baja - Motivo de Baja'},
                ticketResumen:          {id:9,descripcion:'Resumen Diario - Ticket'},
                numeroComprobanteResumen:{id:17,descripcion:'Resumen Diario - Número de Comprobante'},
                fechaGeneracionResumen: {id:18,descripcion:'Resumen Diario - Fecha de Generación'}
            },
            'tabla-maestra':{
                tipoComprobante: '10007',
                tipoUnidadMedida: '10000',
                tipoMoneda: '10001',
                tipoDocumentoEntidad: '10015'
            },
            'tipo-dato':{
                entero:1,
                decimal:2,
                texto:3,
                fecha:4,
                bytes:5
                
            },
            'parametros-documento':{
                fechaBaja:                  {id:12 ,descripcion:'Comunicacion de baja - Fecha de baja'}, 
                ticketBaja:                 {id:13,descripcion:'Comunicacion de baja - Ticket'},      
                retencionTicket:            {id:14,descripcion:'Documento masivo - Ticket'},
                montoLetras:                {id:6 ,descripcion:'Elementos adicionales en la factura/boleta'},
                numeroComprobanteBaja:      {id:15 ,descripcion:'Comunicación de Baja - Número de Comprobante'},   
                motivoBaja:                 {id:16 ,descripcion:'Comunicación de Baja - Motivo de Baja'},
                ticketResumen:              {id:9,descripcion:'Resumen Diario - Ticket'},           
                numeroComprobanteResumen:   {id:17 ,descripcion:'Resumen Diario - Número de Comprobante'},
                fechaGeneracionResumen:     {id:18,descripcion:'Resumen Diario - Fecha de Generación'}
            },
            'tipo-entidad':{
                emisor :1,
                receptor:2,
                transportista:3,
            }

         
    }


}
module.exports = constantes;
