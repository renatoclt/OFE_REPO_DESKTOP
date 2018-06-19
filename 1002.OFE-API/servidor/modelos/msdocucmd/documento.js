/**
 * persistencia de la tabla t_comprobantepago en la variable ComprobantePago
 * Modificado --- creado --/--/----
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var Documento = conexion.define('ComprobantePago',
  {
    id:{
        type: sequelize.TEXT,
        field: "in_idcomprobantepago",

        primaryKey: true
    },

    numeroComprobante: {
      type: sequelize.TEXT(30),
      field: "ch_numerocomprobantepago",
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
    },

    rucComprador: {
      type: sequelize.TEXT(30),
      field: "ch_ruccomprador",
    },

    estadoComprobante: {
      type: sequelize.TEXT(30),
      field: "ch_estadocomprobantepagoprov",
    },

    flagPlazoPago: {
        type: sequelize.TEXT(30),
        field: "ch_flagplazopago",
      },
   
    flagRegistroEliminado: {
      type: sequelize.TEXT(1),
      field: "ch_flagregistroeliminado",
    },
    flagOrigenComprobante: {
      type: sequelize.TEXT(1),
      field: "ch_flagorigencomprobantepago",
    },
    flagOrigenCreacion: {
      type: sequelize.TEXT(1),
      field: "ch_flagorigencreacion",      
    },

    //PENDIENTES DE CONFIRMAR USO
	idTablaTipoComprobante: {
        type: sequelize.TEXT,
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

    // FIN PENDIENTES

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

    impuestoGvr: {
        type: sequelize.REAL(15,4),
        field: "de_impuestogvr",
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

    montoPagado: {
        type: sequelize.REAL(15,4),
        field: "de_pagomontopagado",
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

    montoDescuento: {
        type: sequelize.REAL(15,4),
        field: "de_dctomonto",
    },

    numeroCheque: {
        type: sequelize.TEXT(50),
        field: "vc_nrocheque",
    },

    tipoFactura: {
        type: sequelize.TEXT(20),
        field: "vc_tipofactura",
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
    fechaDocumentoRetencion: {
      type: sequelize.TEXT,
      field: "ts_fechadocumentoret",
    },
    tipoEmision: {
      type: sequelize.TEXT(1),
      field: "ch_tipoemision",
    },

    porcentajeImpuesto: {
      type: sequelize.REAL(15,4),
      field: "de_porcentajeimpuesto",
    },

    porcentajeDetracction: {
      type: sequelize.TEXT(10),
      field: "vc_porcentajedetraccion",
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
    generado:{
        type: sequelize.INTEGER,
        field: "in_generado",
    },
    tipoDocumento:{
        type: sequelize.TEXT,
        field: "vc_tipodocumento"
    },
    estadoSincronizado: {
        type: sequelize.INTEGER(32),
        field: "in_estado_sincronizado",
        allowNull:false
    },
    fechaSincronizado: {
        type: sequelize.TEXT,
        field: "ts_fec_sincronizado"
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
module.exports = Documento;