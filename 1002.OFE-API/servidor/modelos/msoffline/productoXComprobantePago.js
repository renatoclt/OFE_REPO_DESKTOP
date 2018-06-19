/**
 * persistencia de la tabla t_productoxcomprobantepago en la variable ProductoXComprobantePago
 * No tiene datos de auditoria tabla de EBIZ
 * Modificado --- creado --/--/----
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var ProductoXComprobantePago = conexion.define('ProductoXComprobantePago',
  {
    id:{
      type: sequelize.TEXT,
      field: "in_idcomprobantepagodetalle",
      unique: true,
      primaryKey: true,
      allowNull:false   
    },
    idcomprobantepago: {
      type: sequelize.INTEGER(32),
      field: "in_idcomprobantepago",
      allowNull:false  
    },
    iDoc: {
      type: sequelize.INTEGER,
      field: "in_idoc",
    },
    idGuia: {
      type: sequelize.INTEGER,
      field: "in_idguia",
    },
    idProductoXGuia: {
      type: sequelize.INTEGER,
      field: "in_idproductoxguia",
    },
    idProductoXOc: {
      type: sequelize.INTEGER(),
      field: "in_idproductoxoc",
    },
    numeroSeguimiento: {
      type: sequelize.TEXT(30),
      field: "ch_numeroseguimiento",
    },
    numeroGuia: {
      type: sequelize.TEXT(30),
      field: "ch_numeroguia",
    },
    descripcionItem: {
      type: sequelize.TEXT(254),
      field: "vc_descripcionitem",
    },
    posicionProdXGuia: {
      type: sequelize.TEXT(20),
      field: "vc_posicionprodxguia",
    },
    registroMedida:{
      type: sequelize.TEXT(30),
      field: "vc_registromedida"
    },
    unidadMedida: {
      type: sequelize.TEXT(30),
      field: "vc_unidadmedida",
    },
    tablaUnidad:{
      type: sequelize.TEXT(30),
      field: "vc_idtablaunidad",
    },
    posicion: {
      type: sequelize.TEXT(30),
      field: "vc_posicion",
    },
    numeroParteItem: {
      type: sequelize.TEXT(30),
      field: "vc_numeroparteitem",
    },
    posicionProdXOc: {
      type: sequelize.TEXT(20),
      field: "vc_posicionprodxoc",
    },
    idProductoConsignado: {
      type: sequelize.TEXT(32),
      field: "in_idproductoconsignado",
    },
    precioUnitarioItem: {
      type: sequelize.REAL(12,2),
      field: "de_preciounitarioitem",
    },
    precioTotalItem: {
      type: sequelize.REAL(12,2),
      field: "de_preciototalitem",
    },
    cantidadDespachada: {
      type: sequelize.REAL(12,2),
      field: "de_cantidaddespachada",
    },
    idMovimiento: {
      type: sequelize.INTEGER,
      field: "in_idmovimiento",
    },
    codigoGuiaErp: {
      type: sequelize.TEXT(20),
      field: "vc_codigoguiaerp",
    },
    ejercicioGuia: {
      type: sequelize.TEXT(4),
      field: "vc_ejercicioguia",
    },
    tipoGuia: {
      type: sequelize.TEXT(5),
      field: "vc_tipoguia",
    },
    fechaEmisionGuia: {
      type: sequelize.TEXT ,
      field: "ts_fechaemisionguia",
    },
    tiposPot: {
      type: sequelize.TEXT(20),
      field: "vc_tipospot",
    },
    porcentajeImpuesto: {
      type: sequelize.REAL(12,2),
      field: "de_porcentajeimpuesto",
    },
    montoImpuesto: {
      type: sequelize.REAL(12,2),
      field: "de_montoimpuesto",
    },
    spotImpuesto: {
      type: sequelize.TEXT,
      field: "vc_spotimpuesto",
    },    
    codigoTipoIgv:{
      type: sequelize.TEXT,
      field: "vc_codigoTipoIgv",
    } ,  
    codigoTipoIsc:{
      type: sequelize.TEXT,
      field: "vc_codigotipoIsc",
    } ,  
    codigoTipoPrecio:{
      type: sequelize.TEXT,
      field: "vc_codigoTipoPrecio"
    },    
    subTotalIgv:{
      type: sequelize.TEXT,
      field: "vc_subTotalIgv"
    },
    subTotalIsc:{
      type: sequelize.TEXT,
      field: "vc_subTotalIsc"
    },

    fechaSincronizado: {
      type: sequelize.TEXT,
      field: "ts_fec_sincronizado"
    },
    estadoSincronizado: {
      type: sequelize.INTEGER,
      field: "in_estado_sincronizado"
    }        
  },
  {
      tableName: 'comprobante_t_productoxcomprobantepago',
      timestamps: false
  }
);


ProductoXComprobantePago.sync();
module.exports = ProductoXComprobantePago