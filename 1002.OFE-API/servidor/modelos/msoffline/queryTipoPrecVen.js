/**
 * persistencia de la tabla t_parametro_doc en la variable ParametroDoc
 * @author Renato Modificado 10/01/2018
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var QueryTipoPrecVen = conexion.define('QueryTipoPrecVen', {
    id: {
      type: sequelize.INTEGER,
      field: "se_itipo_prec",
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    idioma: {
      type: sequelize.INTEGER(32),
      allowNull: false,
      field: "se_iidioma",
    },
    codigo: {
      type: sequelize.INTEGER(32),
      field: "vc_codigo",
    },
    descripcion: {
      type: sequelize.TEXT,
      allowNull: false,
      field: "vc_desc",
    },
    catalogo: {
      type: sequelize.TEXT,
      allowNull: false,
      field: "vc_catalogo",
    },
    estado: {
      type: sequelize.INTEGER(32),
      field: "in_estado"
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
    } 
   
  },
    {
      tableName: 'fe_query_t_tipo_prec_ven',
      timestamps: false
    });
  QueryTipoPrecVen.sync();
  module.exports = QueryTipoPrecVen;