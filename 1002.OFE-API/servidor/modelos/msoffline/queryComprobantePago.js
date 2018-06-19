var DocReferencia = require('../msoffline/docReferencia');
var DocParametro = require('../msoffline/docParametro');
var QueryComprobantePago = conexion.define('QueryComprobantePago',
  {
    id:{
        type: sequelize.TEXT,
        field: "in_idcomprobantepago",
        unique: true,
        primaryKey: true,
        allowNull:false
    },
    vcSerie: {
      type: sequelize.TEXT(30),
      field: "vc_serie"
    },
    vcCorrelativo: {
      type: sequelize.TEXT,
      field: "vc_correlativo"
    },
    inIdorganizacionproveedora: {
      type: sequelize.TEXT,
      field: "in_idorganizacionproveedora",
    },
    vcOrgproveedoraDocumento: {
      type: sequelize.TEXT,
      field: "vc_orgproveedora_documento",
    },
    vcOrgproveedoraDenominacion: {
      type: sequelize.TEXT,
      field: "vc_orgproveedora_denominacion",
    },
    vcOrgproveedoraNomcomercial: {
      type: sequelize.TEXT,
      field: "vc_orgproveedora_nomcomercial",
    },
    vcOrgproveedoraDirfiscal: {
      type: sequelize.TEXT,
      field: "vc_orgproveedora_dirfiscal",
    },
    vcOrgproveedoraCorreo: {
      type: sequelize.TEXT,
      field: "vc_orgproveedora_correo",
    },
    vcOrgcompradoraNomcomercial: {
      type: sequelize.TEXT,
      field: "vc_orgcompradora_nomcomercial",
    },
    inIdorganizacioncompradora: {
      type: sequelize.TEXT,
      field: "in_idorganizacioncompradora",
    },
    vcOrgcompradoraDenominacio: {
      type: sequelize.TEXT,
      field: "vc_orgcompradora_denominacio",
    },
    vcOrgcompradoraDocumento: {
      type: sequelize.TEXT,
      field: "vc_orgcompradora_documento",
    },
    vcOrgcompradoraDirfiscal: {
      type: sequelize.TEXT,
      field: "vc_orgcompradora_dirfiscal",      
    },
    vcOrgcompradoraCorreo: {
      type: sequelize.TEXT,
      field: "vc_orgcompradora_correo",
    },
    inIdarchivoPdf: {
      type: sequelize.INTEGER,
      field: "in_idarchivo_pdf",
    },
    inIdarchivoXml: {
      type: sequelize.INTEGER,
      field: "in_idarchivo_xml",
    },
    inIdarchivoCdr: {
      type: sequelize.INTEGER,
      field: "in_idarchivo_cdr",
    },
    vcArchivopdfUbicacion: {
      type: sequelize.TEXT,
      field: "vc_archivopdf_ubicacion",
    },
    vcArchivoxmlUbicacion: {
      type: sequelize.TEXT,
      field: "vc_archivoxml_ubicacion",
    },
    vcArchivocdrUbicacion: {
      type: sequelize.TEXT,
      field: "vc_archivocdr_ubicacion",
    },
    vcParamTicket: {
      type: sequelize.TEXT,
      field: "vc_param_ticket",
    },
    tsParamFechabaja: {
      type: sequelize.TEXT,
      field: "ts_param_fechabaja",
    },
    inIdusuarioproveedor: {
      type: sequelize.TEXT,
      field: "in_idusuarioproveedor",
    },
    inIdusuariocomprador: {
      type: sequelize.TEXT,
      field: "in_idusuariocomprador",
    },
    inIdtransportista: {
      type: sequelize.INTEGER,
      field: "in_idtransportista",
    },
    vcTransportistaDocumento: {
      type: sequelize.TEXT,
      field: "vc_transportista_documento",
    },
    vcTransportistaDenominacion: {
      type: sequelize.TEXT,
      field: "vc_transportista_denominacion",
    },
    chEstadocomprobantepago: {
      type: sequelize.TEXT(6),
      field: "ch_estadocomprobantepago",
    },
    chFlagplazopago: {
      type: sequelize.TEXT,
      field: "ch_flagplazopago",
    },
    chFlagregistroeliminado: {
      type: sequelize.TEXT,
      field: "ch_flagregistroeliminado",
    },
    chFlagorigencomprobantepago: {
      type: sequelize.TEXT,
      field: "ch_flagorigencomprobantepago",
    },
    chFlagorigencreacion: {
      type: sequelize.TEXT,
      field: "ch_flagorigencreacion",
    },
    inIdguia: {
      type: sequelize.TEXT,
      field: "in_idguia",
    },
    inIdoc: {
      type: sequelize.TEXT(100),
      field: "in_idoc",
    },
    inIdusuariocreacion: {
      type: sequelize.TEXT(30),
      field: "in_idusuariocreacion",
    },
    inIdusuariomodificacion: {
      type: sequelize.TEXT(50),
      field: "in_idusuariomodificacion",
    },
    inIdorganizacioncreacion: {
      type: sequelize.TEXT(50),
      field: "in_idorganizacioncreacion",
    },
    inIdorganizacionmodificacion: {
      type: sequelize.TEXT(50),
      field: "in_idorganizacionmodificacion",
    },
    chMonedacomprobantepago: {
      type: sequelize.TEXT,
      field: "ch_monedacomprobantepago",
    },
    tsFechaprogpagocomprobantepag: {
      type: sequelize.TEXT,
      field: "ts_fechaprogpagocomprobantepag",
    },
    tsFechapagocomprobantepago: {
      type: sequelize.TEXT,
      field: "ts_fechapagocomprobantepago",
    },
    tsFechacreacion: {
      type:sequelize.TEXT,
      field: "ts_fechacreacion",
    },
    tsFecharegistro: {
      type: sequelize.TEXT,
      field: "ts_fecharegistro",
    },
    tsFechaemision: {
     // type: sequelize.DATE,
      type: sequelize.TEXT(20),
      field: "ts_fechaemision",
      
    },
    tsFecharecepcioncomprobantepa: {
      type: sequelize.TEXT(250),
      field: "ts_fecharecepcioncomprobantepa",
    },
    tsFechavencimiento: {
      type: sequelize.TEXT(250),
      field: "ts_fechavencimiento",
    },
    tsFechaenvio: {
      type: sequelize.TEXT(250),
      field: "ts_fechaenvio",
    },
    tsFechacambioestado: {
      type: sequelize.TEXT(200),
      field: "ts_fechacambioestado",
    },
    vcObscomprobantepago: {
      type: sequelize.TEXT(200),
      field: "vc_obscomprobantepago",
    },
    vcObspagocomprobantepago: {
      type: sequelize.TEXT(200),
      field: "vc_obspagocomprobantepago",
    },
    vcCondicionpago: {
      type: sequelize.TEXT(200),
      field: "vc_condicionpago",
    },
    chTiempoplazo: {
      type: sequelize.TEXT(200),
      field: "ch_tiempoplazo",
    },
    vcDocumentopago: {
      type: sequelize.TEXT(200),
      field: "vc_documentopago",
    },
    vcDocumentosap: {
      type: sequelize.TEXT(200),
      field: "vc_documentosap",
    },
    vcFormapago: {
      type: sequelize.TEXT(50),
      field: "vc_formapago",
    },
    vcTipocomprobante: {
      type: sequelize.TEXT(10),
      field: "vc_tipocomprobante",
    },
    chEstadocomprobantepagocomp: {
      type: sequelize.TEXT,
      field: "ch_estadocomprobantepagocomp",
    },
    inVersion: {
      type: sequelize.TEXT,
      field: "in_version",
    },
    vcNumoc: {
      type: sequelize.TEXT(16),
      field: "vc_numoc",
    },
    vcNumguia: {
      type: sequelize.TEXT(6),
      field: "vc_numguia",
    },
    vcMontocomprobantepago: {
      type: sequelize.TEXT(4),
      field: "vc_montocomprobantepago",
    },
    vcLogo: {
      type: sequelize.TEXT,
      field: "vc_logo",
    },
    vcFirma: {
      type: sequelize.TEXT,
      field: "vc_firma",
    },
    vcPagotipodocumento: {
      type: sequelize.TEXT,
      field: "vc_pagotipodocumento",
    },
    vcPagonrodocumento: {
      type: sequelize.TEXT,
      field: "vc_pagonrodocumento",
    },
    vcPagomoneda: {
      type: sequelize.TEXT,
      field: "vc_pagomoneda",
    },
    vcPagobanco: {
      type: sequelize.TEXT,
      field: "vc_pagobanco",
    },
    vcDctotipodocumento: {
      type: sequelize.TEXT,
      field: "vc_dctotipodocumento",
    },
    vcDctonrodocumento: {
      type: sequelize.TEXT,
      field: "vc_dctonrodocumento",
    },
    vcDctomoneda: {
      type: sequelize.TEXT,
      field: "vc_dctomoneda",
    },
    vcNrocheque: {
      type: sequelize.TEXT,
      field: "vc_nrocheque",
    },
    chCodigointerno: {
      type: sequelize.TEXT,
      field: "ch_codigointerno",
    },
    inDeguiapublicada: {
      type: sequelize.INTEGER,
      field: "in_deguiapublicada",
    },
    vcTipofactura: {
      type: sequelize.TEXT,
      field: "vc_tipofactura",
    },
    vcCodigoerpproveedor: {
      type: sequelize.TEXT,
      field: "vc_codigoerpproveedor",
    },
    tsFechahoracreacion: {
      type: sequelize.TEXT,
      field: "ts_fechahoracreacion",
    },
    vcCodigosociedad: {
      type: sequelize.TEXT,
      field: "vc_codigosociedad",
    },
    deImpuesto1: {
      type: sequelize.REAL(15,4),
      field: "de_impuesto1",
    },
    deImpuesto2: {
      type: sequelize.REAL,
      field: "de_impuesto2",
    },
    deImpuesto3: {
      type: sequelize.REAL,
      field: "de_impuesto3",
    },
    deDescuento: {
      type: sequelize.REAL,
      field: "de_descuento",
    },
    deImportereferencial: {
      type: sequelize.REAL,
      field: "de_importereferencial",
    },
    deSubtotalcomprobantepago: {
      type: sequelize.REAL,
      field: "de_subtotalcomprobantepago",
    },
    deTotalcomprobantepago: {
      type: sequelize.REAL,
      field: "de_totalcomprobantepago",
    },
    dePagomontopagadoultimo: {
      type: sequelize.REAL,
      field: "de_pagomontopagadoultimo",
    },
    deDctomontoultimo: {
      type: sequelize.REAL,
      field: "de_dctomontoultimo",
    },
    inIdindicadorimpuesto: {
      type: sequelize.INTEGER,
      field: "in_idindicadorimpuesto",
    },
    vcIndicadorimpuesto: {
      type: sequelize.TEXT,
      field: "vc_indicadorimpuesto",
    },
    chOpregfac: {
      type: sequelize.TEXT,
      field: "ch_opregfac",
    },
    vcCodigoerp: {
      type: sequelize.TEXT,
      field: "vc_codigoerp",
    },
    vcCoderror: {
      type: sequelize.TEXT,
      field: "vc_coderror",
    },
    tsFechadocumentoret: {
      type: sequelize.TEXT,
      field: "ts_fechadocumentoret",
    },
    vcDescerror: {
      type: sequelize.TEXT,
      field: "vc_descerror",
    },
    chTipoemision: {
      type: sequelize.TEXT,
      field: "ch_tipoemision",
    },
    dePorcentajeimpuesto: {
      type: sequelize.REAL,
      field: "de_porcentajeimpuesto",
    },
    inDetraccion: {
      type: sequelize.TEXT,
      field: "in_detraccion",
    },
    inIdbienservicio: {
      type: sequelize.INTEGER,
      field: "in_idbienservicio",
    },
    vcCodigobienservicio: {
      type: sequelize.TEXT,
      field: "vc_codigobienservicio",
    },
    vcDescripcionbienservicio: {
      type: sequelize.TEXT,
      field: "vc_descripcionbienservicio",
    },
    vcPorcentajedetraccion: {
      type: sequelize.TEXT,
      field: "vc_porcentajedetraccion",
    },
    vcIdcondicionpago: {
      type: sequelize.TEXT,
      field: "vc_idcondicionpago",
    },
    vcDescripcioncondicionpago: {
      type: sequelize.TEXT,
      field: "vc_descripcioncondicionpago",
    },
    vcLlaveerp: {
      type: sequelize.TEXT,
      field: "vc_llaveerp",
    },
    vcIdtablaestado: {
      type: sequelize.TEXT,
      field: "vc_idtablaestado",
    },
    vcIdregistroestadoprov: {
      type: sequelize.TEXT,
      field: "vc_idregistroestadoprov",
    },
    vcIdregistroestadocomp: {
      type: sequelize.TEXT,
      field: "vc_idregistroestadocomp",
    },
    vcIdtablamoneda: {
      type: sequelize.TEXT,
      field: "vc_idtablamoneda",
    },
    vcIdregistromoneda: {
      type: sequelize.TEXT,
      field: "vc_idregistromoneda",
    },
    vcIdtablatipocomprobante: {
      type: sequelize.TEXT,
      field: "vc_idtablatipocomprobante",
    },
    vcIdregistrotipocomprobante: {
      type: sequelize.TEXT,
      field: "vc_idregistrotipocomprobante",
    },
    chIdtipocomprobante: {
      type: sequelize.TEXT,
      field: "ch_idtipocomprobante",
    },
    deImpuestogvr: {
      type: sequelize.REAL,
      field: "de_impuestogvr",
    },
    dePagomontopagado: {
      type: sequelize.REAL,
      field: "de_pagomontopagado",
    },
    inIdentidademisor:{
      type: sequelize.INTEGER,
      field: "in_identidademisor",
    },
    inIdentidadreceptor:{
      type: sequelize.INTEGER,
      field: "in_identidadreceptor",
    },
    deDctomonto: {
      type: sequelize.REAL,
      field: "de_dctomonto",
    },
    vcTicketRetencion: {
      type: sequelize.TEXT,
      field: "vc_ticketretencion",
    }
  }, 
  {
    tableName: 'fe_query_t_comprobantepago',
    timestamps: false,
  }
);

QueryComprobantePago.hasMany(DocReferencia,
  { as: 'detalleBaja',foreignKey: 'idDocumentoOrigen', targetKey: 'idDocumentoOrigen'}
  );

  QueryComprobantePago.hasMany(DocParametro,
    { as: 'parametro',foreignKey: 'comprobantePago', targetKey: 'comprobantePago'}
    );
  

QueryComprobantePago.sync();

module.exports = QueryComprobantePago;

