/**
 * persistencia de la tabla t_parametro_doc en la variable ParametroDoc
 * Modificado --- creado --/--/----
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var ParametroDoc = conexion.define('ParametroDoc',
  {
    id:{
      type: sequelize.INTEGER,
      field: "se_iparam_doc",
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    desc:{
      type: sequelize.TEXT,
      field: "vc_desc",
      allowNull: true
    },
    usuarioCreacion: {
      type: sequelize.TEXT,
      field: "vc_usu_creacion",
      allowNull: true
    },
    usuarioModificacion: {
      type: sequelize.TEXT,
      field: "vc_usu_modifica",
      allowNull: true
    },
    fechaCreacion: {
      type: sequelize.TEXT(6),
      field: "ts_fec_creacion",
      allowNull: true
    },
    fechaModificacion: {
      type: sequelize.TEXT(6),
      field: "ts_fec_modifica",
      allowNull: true
    },
    estado: {
      type: sequelize.INTEGER(32),
      field: "in_estado",
      allowNull:false,
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
    tableName: 't_parametro_doc',
    timestamps: false
  }
);