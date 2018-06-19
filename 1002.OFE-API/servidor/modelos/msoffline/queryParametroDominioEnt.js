/**
 * persistencia de la tabla t_parametro_doc en la variable ParametroDoc
 * @author Renato Modificado 10/01/2018
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var QueryParametroDominioEnt = conexion.define('QueryParametroDominioEnt', {
    id: {
      type: sequelize.INTEGER,
      field: "se_paradomient",
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    parametroEntidad: {
      type: sequelize.INTEGER(32),
      allowNull: false,
      field: "in_iparam_ent",
    },
    descripcionParametroEntidad: {
      type: sequelize.INTEGER(32),
      field: "vc_descparam_ent",
    },
    dominioEntidad: {
      type: sequelize.TEXT,
      allowNull: false,
      field: "in_idominio_ent",
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
    } 
  },
    {
      tableName: 'fe_query_t_parametro_dominio_ent',
      timestamps: false
    });
    QueryParametroDominioEnt.sync();
  module.exports = QueryParametroDominioEnt;