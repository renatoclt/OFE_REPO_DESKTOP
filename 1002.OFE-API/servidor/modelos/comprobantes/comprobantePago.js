var DocEntidad = require('./docEntidad');
var Usuario = require('../msoffline/usuario');
/**
 * persistencia de la tabla t_comprobantepago en la variable ComprobantePago
 * Modificado --- creado --/--/----
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var ComprobantePago = conexion.define('ComprobantePago',
  {
    id:{
        type: sequelize.TEXT,
        field: "in_idcomprobantepago",
        unique: true,
        primaryKey: true,
        allowNull:false
    },
    numeroComprobante: {
      type: sequelize.TEXT(30),
      field: "ch_numerocomprobantepago",
      allowNull:false
    },
    idProveedor: {
      type: sequelize.INTEGER(32),
      field: "in_idusuarioproveedor",
    },
    idOrganizacionCompradora: {
      type: sequelize.INTEGER(32),
      field: "in_idorganizacioncompradora",
    },
    idOrganizacionProveedora: {
      type: sequelize.INTEGER(32),
      field: "in_idorganizacionproveedora",
    },
    rucProveedor: {
      type: sequelize.TEXT(30),
      field: "ch_rucproveedor",
      allowNull:false
    },
    rucComprador: {
      type: sequelize.TEXT(30),
      field: "ch_ruccomprador",
      allowNull:false
    },
    estadoComprobante: {
      type: sequelize.TEXT(30),
      field: "ch_estadocomprobantepagoprov",
      allowNull:false
    },
    flagPlazoPago: {
      type: sequelize.TEXT(1),
      field: "ch_flagplazopago",
      allowNull:false
    },
    flagRegistroEliminado: {
      type: sequelize.TEXT(1),
      field: "ch_flagregistroeliminado",
      allowNull:false
    },
    flagOrigenComprobante: {
      type: sequelize.TEXT(1),
      field: "ch_flagorigencomprobantepago",
      allowNull:false
    },
    flagOrigenCreacion: {
      type: sequelize.TEXT(1),
      field: "ch_flagorigencreacion",      
      allowNull:false
    },
    idGuia: {
      type: sequelize.INTEGER(32),
      field: "in_idguia",
    },
    iDoc: {
      type: sequelize.INTEGER(32),
      field: "in_idoc",
    },
    idUsuarioCreacion: {
      type: sequelize.INTEGER(32),
      field: "in_idusuariocreacion",
    },
    idUsuarioModificacion: {
      type: sequelize.INTEGER(32),
      field: "in_idusuariomodificacion",
    },
    idOrganizacionCreacion: {
      type: sequelize.INTEGER(32),
      field: "in_idorganizacioncreacion",
    },
    idOrganizacionModificacion: {
      type: sequelize.INTEGER(32),
      field: "in_idorganizacionmodificacion",
    },
    razonSocialProveedor: {
      type: sequelize.TEXT(100),
      field: "vc_razonsocialproveedora",
    },
    razonSocialComprador: {
      type: sequelize.TEXT(100),
      field: "vc_razonsocialcompradora",
    },
    moneda: {
      type: sequelize.TEXT(30),
      field: "ch_monedacomprobantepago",
    },
    fechaProgPagoComprobantePag: {
      type: sequelize.TEXT,
      field: "ts_fechaprogpagocomprobantepag",
    },
    fechaPagoComprobantePago: {
      type: sequelize.TEXT,
      field: "ts_fechapagocomprobantepago",
    },
    fechaCreacion: {
      type: sequelize.TEXT,
      field: "ts_fechacreacion",
    },
    fechaRegistro: {
      type: sequelize.TEXT(6),
      field: "ts_fecharegistro",
    },
    fechaEmision: {
      type: sequelize.TEXT(6),
      field: "ts_fechaemision",
    },
    fechaRecepcionComprobantePa: {
      type: sequelize.TEXT(6),
      field: "ts_fecharecepcioncomprobantepa",
    },
    fechaVencimiento: {
      type: sequelize.TEXT,
      field: "ts_fechavencimiento",
    },
    fechaEnvio: {
      type: sequelize.TEXT,
      field: "ts_fechaenvio",
    },
    fechaCambioEstado: {
      type: sequelize.TEXT,
      field: "ts_fechacambioestado",
    },
    observacionComprobante: {
      type: sequelize.TEXT,
      field: "vc_obscomprobantepago",
    },
    obsPagoComprobantePago: {
      type: sequelize.TEXT,
      field: "vc_obspagocomprobantepago",
    },
    condicionPago: {
      type: sequelize.TEXT(100),
      field: "vc_condicionpago",
    },
    tiempoPlazo: {
      type: sequelize.TEXT(30),
      field: "ch_tiempoplazo",
    },
    documentoPago: {
      type: sequelize.TEXT(50),
      field: "vc_documentopago",
    },
    documentoSap: {
      type: sequelize.TEXT(50),
      field: "vc_documentosap",
    },
    formaPago: {
      type: sequelize.TEXT(50),
      field: "vc_formapago",
    },
    tipoComprobante: {
      type: sequelize.TEXT(100),
      field: "vc_tipocomprobante",
    },
    estado: {
      type: sequelize.TEXT(30),
      field: "ch_estadocomprobantepagocomp",
    },
    version: {
      type: sequelize.INTEGER(32),
      field: "in_version",
    },
    idUsuarioComprador: {
      type: sequelize.INTEGER(32),
      field: "in_idusuariocomprador",
    },
    numoc: {
      type: sequelize.TEXT(20),
      field: "vc_numoc",
    },
    numeroGuia: {
      type: sequelize.TEXT(20),
      field: "vc_numguia",
    },
    montoComprobante: {
      type: sequelize.TEXT(250),
      field: "vc_montocomprobantepago",
    },
    logo: {
      type: sequelize.TEXT(250),
      field: "vc_logo",
    },
    firma: {
      type: sequelize.TEXT(250),
      field: "vc_firma",
    },
    pagoTipoDocumento: {
      type: sequelize.TEXT(200),
      field: "vc_pagotipodocumento",
    },
    pagoNroDocument: {
      type: sequelize.TEXT(200),
      field: "vc_pagonrodocumento",
    },
    pagoMoneda: {
      type: sequelize.TEXT(200),
      field: "vc_pagomoneda",
    },
    pagoBanco: {
      type: sequelize.TEXT(200),
      field: "vc_pagobanco",
    },
    tipoDocumentoDescuento: {
      type: sequelize.TEXT(200),
      field: "vc_dctotipodocumento",
    },
    numeroDocumentoDescuento: {
      type: sequelize.TEXT(200),
      field: "vc_dctonrodocumento",
    },
    monedaDescuento: {
      type: sequelize.TEXT(200),
      field: "vc_dctomoneda",
    },
    numeroCheque: {
      type: sequelize.TEXT(50),
      field: "vc_nrocheque",
    },
    codigoInterno: {
      type: sequelize.TEXT(10),
      field: "ch_codigointerno",
    },
    guiaPublicada: {
      type: sequelize.INTEGER(32),
      field: "in_deguiapublicada",
    },
    tipoFactura: {
      type: sequelize.TEXT(20),
      field: "vc_tipofactura",
    },
    codigoErpProveedor: {
      type: sequelize.TEXT(16),
      field: "vc_codigoerpproveedor",
    },
    fechaHoraCreacion: {
      type: sequelize.TEXT(6),
      field: "ts_fechahoracreacion",
    },
    codigoSociedad: {
      type: sequelize.TEXT(4),
      field: "vc_codigosociedad",
    },
    igv: {
      type: sequelize.REAL(15,4),
      field: "de_impuesto1",
    },
    isc: {
      type: sequelize.REAL(15,4),
      field: "de_impuesto2",
    },
    otrosTributos: {
      type: sequelize.REAL(15,4),
      field: "de_impuesto3",
    },
    descuento: {
      type: sequelize.REAL(15,4),
      field: "de_descuento",
    },
    importeReferencial: {
      type: sequelize.REAL(15,4),
      field: "de_importereferencial",
    },
    subtotalComprobante: {
      type: sequelize.REAL(15,4),
      field: "de_subtotalcomprobantepago",
    },
    totalComprobante: {
      type: sequelize.REAL(15,4),
      field: "de_totalcomprobantepago",
    },
    pagoMontoPagadoUltimo: {
      type: sequelize.REAL(15,4),
      field: "de_pagomontopagadoultimo",
    },
    dctoMontoUltimo: {
      type: sequelize.REAL(15,4),
      field: "de_dctomontoultimo",
    },
    idindicadorImpuesto: {
      type: sequelize.INTEGER(32),
      field: "in_idindicadorimpuesto",
    },
    descripcionIndicadorImpuesto: {
      type: sequelize.TEXT(5),
      field: "vc_indicadorimpuesto",
    },
    tipoItem: {
      type: sequelize.TEXT(5),
      field: "ch_opregfac",
    },
    codigoErp: {
      type: sequelize.TEXT(5),
      field: "vc_codigoerp",
    },
    codError: {
      type: sequelize.TEXT(255),
      field: "vc_coderror",
    },
    fechaDocumentoRetencion: {
      type: sequelize.TEXT,
      field: "ts_fechadocumentoret",
    },
    descError: {
      type: sequelize.TEXT(2048),
      field: "vc_descerror",
    },
    tipoEmision: {
      type: sequelize.TEXT(1),
      field: "ch_tipoemision",
    },
    porcentajeImpuesto: {
      type: sequelize.REAL(15,4),
      field: "de_porcentajeimpuesto",
    },
    detraccion: {
      type: sequelize.TEXT(2),
      field: "in_detraccion",
    },
    idBienServicio: {
      type: sequelize.INTEGER(32),
      field: "in_idbienservicio",
    },
    codigoBienServicio: {
      type: sequelize.TEXT(20),
      field: "vc_codigobienservicio",
    },
    descripcionBienServicio: {
      type: sequelize.TEXT(100),
      field: "vc_descripcionbienservicio",
    },
    porcentajeDetraccion: {
      type: sequelize.TEXT(10),
      field: "vc_porcentajedetraccion",
    },
    idCondicionPago: {
      type: sequelize.TEXT(20),
      field: "vc_idcondicionpago",
    },
    descripcionCondicionPago: {
      type: sequelize.TEXT(100),
      field: "vc_descripcioncondicionpago",
    },
    llaveErp: {
      type: sequelize.TEXT(50),
      field: "vc_llaveerp",
    },
    idTablaEstado: {
      type: sequelize.TEXT(8),
      field: "vc_idtablaestado",
    },
    idRegistroEstadoProveedor: {
      type: sequelize.TEXT(8),
      field: "vc_idregistroestadoprov",
    },
    idRegistroEstadoComprador: {
      type: sequelize.TEXT(8),
      field: "vc_idregistroestadocomp",
    },
    idTablaMoneda: {
      type: sequelize.TEXT(8),
      field: "vc_idtablamoneda",
    },
    idRegistroMoneda: {
      type: sequelize.TEXT(8),
      field: "vc_idregistromoneda",
    },
    idTablaTipoComprobante: {
      type: sequelize.TEXT(8),
      field: "vc_idtablatipocomprobante",
    },
    idRegistroTipoComprobante: {
      type: sequelize.TEXT(8),
      field: "vc_idregistrotipocomprobante",
    },
    idTipoComprobante: {
      type: sequelize.TEXT(2),
      field: "ch_idtipocomprobante",
    },
    impuestoGvr: {
      type: sequelize.REAL(15,4),
      field: "de_impuestogvr",
    },
    montoPagado: {
      type: sequelize.REAL(15,4),
      field: "de_pagomontopagado",
    },
    montoDescuento: {
      type: sequelize.REAL(15,4),
      field: "de_dctomonto",
    },
    fecSincronizado: {
      type: sequelize.TEXT,
      field: "ts_fec_sincronizado",
    },
    estadoSincronizado: {
      type: sequelize.INTEGER,
      field: "in_estado_sincronizado",
    },
    identidadReceptor: {
      type: sequelize.INTEGER,
      field: "in_identidadreceptor",
    },
    identidadEmisor: {
      type: sequelize.INTEGER,
      field: "in_identidademisor",
    },
    ticketRetencion: {
      type: sequelize.TEXT,
      field: "vc_ticketretencion",
    },
    generado: {
      type: sequelize.INTEGER,
      field: "in_generado",
    },
    
    
  }, 
  {
    tableName: 'comprobante_t_comprobantepago',
    timestamps: false
  }
);
// ComprobantePago.hasMany(DocEntidad,
//     { as: 'documentoEntidad',foreignKey: 'idcomprobantepago', targetKey: 'idcomprobantepago'}
//     );

ComprobantePago.belongsTo(Usuario, {as:'Usuario', foreignKey: 'idUsuarioCreacion'});

module.exports = ComprobantePago;
