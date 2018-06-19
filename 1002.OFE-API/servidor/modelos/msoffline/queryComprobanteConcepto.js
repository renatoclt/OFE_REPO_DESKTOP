/**
 * persistencia de la tabla t_tipo_calc_isc en la variable TipoCalcIsc
 * Modificado --- creado --/--/----
 * @author Renato creado 23/01/2018
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var QueryComprobanteConcepto = conexion.define('QueryComprobanteConcepto',
  {
    id:{
      type: sequelize.INTEGER,
      field: "se_idconcepto",
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    comprobante:{
      type: sequelize.TEXT,
      field: "in_idcomprobante",
      allowNull: false
    },
    concepto:{
      type: sequelize.INTEGER(38),
      field: "in_idconcepto",
      allowNull: false
    },
    idioma:{
      type: sequelize.INTEGER,
      field: "in_ididioma",
      allowNull: false
    },
    codigoConcepto:{
      type: sequelize.INTEGER,
      field: "in_codigoconcepto",
      allowNull: false
    },
    descripcionConcepto: {
      type: sequelize.TEXT,
      field: "vc_descconcepto",
    },
    importeConcepto: {
      type: sequelize.REAL(12,2),
      field: "nu_importeconcepto",
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
    tableName: 'fe_query_t_comprobante_concepto',
    timestamps: false
  }
);
QueryComprobanteConcepto.sync();
module.exports =  QueryComprobanteConcepto;