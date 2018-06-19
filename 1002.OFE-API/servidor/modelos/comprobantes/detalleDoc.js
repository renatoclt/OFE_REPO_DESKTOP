var TipoAfec = require('../configuracion/tipoAfecIgv');
var TipoCalc = require('../configuracion/tipoCalcIsc');
var TipoPrec = require('../configuracion/tipoPrecVen');
var Producto = require('../organizaciones/producto');
/**
 * persistencia de la tabla t_detalle_doc en la variable DetalleDoc
 * Modificado --- creado --/--/----
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var DetalleDoc = conexion.define('DetalleDoc',
  {
    id:{
      type: sequelize.TEXT,
      field: "in_idcomprobantepagodetalle",
      unique: true,
      primaryKey: true,
      allowNull:false
    },
    idComprobantePago: {
      type: sequelize.INTEGER(32),
      field: "in_idcomprobantepago",
      allowNull:false
    },
    iTipoAfec: {
      type: sequelize.INTEGER(32),
      field: "se_itipo_afec",
      allowNull:false
    },
    iTipoCalc: {
      type: sequelize.INTEGER(32),
      field: "se_itipo_calc",
      allowNull:false
    },
    iTipoPrec: {
      type: sequelize.INTEGER(32) ,
      field: "se_itipo_prec",
      allowNull:false
    },
    iProducto: {
      type: sequelize.INTEGER(32),
      field: "se_iproducto",
    },
    numeroItem: {
      type: sequelize.INTEGER(32),
      field: "in_numero_item",
      allowNull:false
    },
    unidadMedida: {
      type: sequelize.TEXT(30),
      field: "vc_unidadmedida",
    },
    subTotalVen: {
      type: sequelize.REAL(12,2),
      field: "nu_subtotalven",
      allowNull:false
    },
    subTotalIgv: {
      type: sequelize.REAL(12,2),
      field: "nu_subtotal_igv",
      allowNull:false
    },
    subTotalIsc: {
      type: sequelize.REAL(12,2),
      field: "nu_subtotal_isc",
    },
    pesoBruto: {
      type: sequelize.REAL(12,2),
      field: "nu_peso_bruto",
    },
    pesoNeto: {
      type: sequelize.REAL(12,2),
      field: "nu_peso_neto",
    },
    pesoTotal: {
      type: sequelize.REAL(12,2),
      field: "nu_peso_total",
    },
    descuento: {
      type: sequelize.REAL(12,2),
      field: "nu_descuento",
    },
    usuarioCreacion: {
      type: sequelize.TEXT,
      field: "vc_usu_creacion",
      allowNull:false
    },
    usuarioModificacion: {
      type: sequelize.TEXT,
      field: "vc_usu_modifica",
      allowNull:false
    },
    fechaCreacion: {
      type: sequelize.TEXT(6),
      field: "ts_fec_creacion",
      allowNull:false
    },
    fechaModificacion: {
      type: sequelize.TEXT(6),
      field: "ts_fec_modifica",
      allowNull:false
    },
    estado: {
      type: sequelize.INTEGER(32),
      field: "in_estado",
      allowNull:false
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
    tableName: 'fe_comprobante_t_detalle_doc',
    timestamps: false
  }
);



module.exports = DetalleDoc;