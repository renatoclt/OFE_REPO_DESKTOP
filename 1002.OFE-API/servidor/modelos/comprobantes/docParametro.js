/**
 * persistencia de la tabla t_doc_parametro en la variable DocParametro
 * Modificado --- creado --/--/----
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var DocParametro = conexion.define('DocParametro',
  {
    id:{
      type: sequelize.INTEGER,
      field: "se_idocparametro",
      autoIncrement: true,
      unique: true,
      primaryKey: true,
      allowNull:false            
    },
    iParamDoc: {
      type: sequelize.INTEGER(32),
      field: "se_iparam_doc",
      allowNull:false
    },
    idComprobantePago: {
      type: sequelize.INTEGER(32),
      field: "in_idcomprobantepago",
      allowNull:false
    },
    descripcionParametro:{
      type: sequelize.TEXT,
      field: "vc_desc",
    },
    json: {
      type: sequelize.TEXT,
      field: "vc_json",
      allowNull:false
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
    tableName: 'fe_comprobante_t_doc_parametro',
    timestamps: false
  }
);
module.exports = DocParametro;