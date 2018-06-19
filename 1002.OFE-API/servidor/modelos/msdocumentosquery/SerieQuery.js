/**
 * persistencia de la tabla t_serie en la variable Serie
 * @author jose felix ccopacondori
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var SerieQuery = conexion.define('SerieQuery',
  {
    seIserie:{
      type: sequelize.INTEGER,
      field: "se_iserie",
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    inIentidad: {
      type: sequelize.INTEGER,
      field: "in_ientidad",
      allowNull:false
    },
    inTipoSerie: {
      type: sequelize.INTEGER,
      field: "in_tipo_serie",
      allowNull:false
    },
    vcDireccion: {
      type: sequelize.TEXT,
      field: "vc_direccion",
      allowNull:false
    },
    chSerie: {
      type: sequelize.TEXT(4),
      field: "ch_serie",
      allowNull:false
    },
    inCorrelativo: {
      type: sequelize.INTEGER(32),
      field: "in_correlativo",
      allowNull:false
    },
    inIdominioUbigeo: {
      type: sequelize.INTEGER(32),
      field: "in_idominio_ubigeo",
      allowNull:true
    },
    vcCodigoUbigeo: {
      type: sequelize.INTEGER(32),
      field: "vc_codigo_ubigeo",
      allowNull:true
    },
    vcUsuCreacion: {
      type: sequelize.TEXT,
      field: "vc_usu_creacion",
      allowNull:false
    },
    vcUsuModifica: {
      type: sequelize.TEXT,
      field: "vc_usu_modifica",
      allowNull:false
    },
    tsFecCreacion: {
      type: sequelize.TEXT,
      field: "ts_fec_creacion",
      allowNull:false
    },
    tsFecModifica: {
      type: sequelize.TEXT,
      field: "ts_fec_modifica",
      allowNull:false
    },
    inEstado: {
      type: sequelize.INTEGER,
      field: "in_estado",
      allowNull:false
    },
    vcIdtipodocumento: {          
      type: sequelize.TEXT,
      field: "vc_idtipodocumento",
      allowNull:true
    },
    fechaSincronizado: {
      type: sequelize.TEXT,
      field: "ts_fec_sincronizado",
      allowNull:true
    },
    estadoSincronizado: {
      type: sequelize.INTEGER,
      field: "in_estado_sincronizado"
    }        
  },
  {
    tableName: 'fe_query_t_serie',
    timestamps: false,
  }
);

module.exports = SerieQuery;