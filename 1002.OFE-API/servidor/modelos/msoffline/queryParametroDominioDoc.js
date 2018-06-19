/**
 * persistencia de la tabla t_parametro_doc en la variable ParametroDoc
 * @author Renato Modificado 10/01/2018
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var QueryParametroDominioDoc = conexion.define('QueryParametroDominioDoc', {
    id: {
      type: sequelize.INTEGER,
      field: "se_paradomidoc",
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    parametroDocumento: {
      type: sequelize.INTEGER(32),
      allowNull: false,
      field: "in_iparam_doc",
    },
    descripcionDocumento: {
      type: sequelize.INTEGER(32),
      field: "vc_descparam_doc",
    },
    dominioDocumento: {
      type: sequelize.TEXT,
      allowNull: false,
      field: "in_idominio_doc",
    },
    idioma: {
      type: sequelize.TEXT,
      allowNull: false,
      field: "in_iidioma",
    },
    codigo: {
      type: sequelize.TEXT,
      allowNull: false,
      field: "vc_codigo",
    },
    descripcion: {
      type: sequelize.TEXT(6),
      allowNull: false,
      field: "vc_desc",
    },
    descripcionCorta: {
      type: sequelize.TEXT(6),
      allowNull: false,
      field: "vc_desc_corta",
    },
    estadoParametro: {
      type: sequelize.TEXT,
      field: "in_estado_parametro"
    },
    estadoDominio: {
      type: sequelize.TEXT,
      field: "in_estado_dominio"
    },
    fechaSincronizado: {
      type: sequelize.TEXT,
      field: "ts_fec_sincronizado"
    },
    estadoSincronizado: {
      type: sequelize.INTEGER,
      field: "in_estado_sincronizado"
    },
    estado: {
      type: sequelize.INTEGER(32),
      field: "in_estado"
    }, 
  },
    {
      tableName: 'fe_query_t_parametro_dominio_doc',
      timestamps: false
    });
    QueryParametroDominioDoc.sync();
  module.exports = QueryParametroDominioDoc;