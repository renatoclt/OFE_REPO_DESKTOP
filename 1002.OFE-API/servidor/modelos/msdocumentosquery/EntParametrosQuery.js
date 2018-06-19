/**
 * persistencia de la tabla t_serie en la variable Serie
 * @author jose felix ccopacondori
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var EntParametrosQuery = conexion.define('EntParametrosQuery',
  {
    seIdentidad:{
      type: sequelize.INTEGER,
      field: "se_identidad",
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    inIentidad: {
      type: sequelize.INTEGER,
      field: "in_ientidad",
      allowNull:false
    },
    inIparamEnt: {
      type: sequelize.INTEGER,
      field: "in_iparam_ent",
      allowNull:false
    },
    vcJson: {
      type: sequelize.INTEGER,
      field: "vc_json",
      allowNull:true
    },
    inTipo: {
      type: sequelize.INTEGER,
      field: "in_tipo",
      allowNull:true
    },
    vcValor: {
      type: sequelize.TEXT(4),
      field: "vc_valor",
      allowNull:true
    },
    auxEntero: {
      type: sequelize.INTEGER,
      field: "aux_entero",
      allowNull:false
    },
    auxImporte: {
      type: sequelize.REAL,
      field: "aux_importe",
      allowNull:true
    },
    auxFecha: {
      type: sequelize.TEXT,
      field: "aux_fecha",
      allowNull:true
    },
    auxCaracter: {
      type: sequelize.TEXT,
      field: "aux_caracter",
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
    tableName: 'fe_query_t_ent_parametros',
    timestamps: false,
  }
);

module.exports = EntParametrosQuery;