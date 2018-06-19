/**
 * persistencia de la tabla t_parametro_doc en la variable ParametroDoc
 * @author Renato Modificado 10/01/2018
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var QueryIdioma = conexion.define('QueryIdioma', {
    id: {
      type: sequelize.INTEGER,
      field: "se_iidioma",
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    descripcionCorta: {
      type: sequelize.INTEGER(32),
      allowNull: false,
      field: "ch_desc_corta",
    },
    descripcion: {
      type: sequelize.TEXT,
      allowNull: false,
      field: "vc_desc",
    },
    usuarioCreacion: {
      type: sequelize.TEXT,
      allowNull: false,
      field: "vc_usu_creacion",
    },
    usuarioModificacion: {
      type: sequelize.TEXT,
      allowNull: false,
      field: "vc_usu_modifica",
    },
    fechaCreacion: {
      type: sequelize.TEXT(6),
      allowNull: false,
      field: "ts_fec_creacion",
    },
    fechaModificacion: {
      type: sequelize.TEXT(6),
      allowNull: false,
      field: "ts_fec_modifica",
    },
    fechaSincronizado: {
      type: sequelize.TEXT,
      field: "ts_fec_sincronizado"
    },
    estadoSincronizado: {
      type: sequelize.INTEGER,
      field: "in_estado_sincronizado"
    } ,
    estado: {
      type: sequelize.INTEGER(32),
      field: "in_estado"
    },
  },
    {
      tableName: 'fe_query_t_idioma',
      timestamps: false
    });
    QueryIdioma.sync();
  module.exports = QueryIdioma;