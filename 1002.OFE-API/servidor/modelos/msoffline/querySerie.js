/**
 * persistencia de la tabla t_parametro_doc en la variable ParametroDoc
 * @author Renato Modificado 10/01/2018
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var QuerySerie = conexion.define('QuerySerie', {
    id: {
      type: sequelize.INTEGER,
      field: "se_iserie",
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    entidad: {
      type: sequelize.INTEGER(32),
      allowNull: false,
      field: "in_ientidad",
    },
    tipoSerie: {
      type: sequelize.INTEGER(32),
      field: "in_tipo_serie",
    },
    direccion: {
      type: sequelize.TEXT,
      allowNull: false,
      field: "vc_direccion",
    },
    serie: {
      type: sequelize.TEXT,
      allowNull: false,
      field: "ch_serie",
    },
    correlativo: {
      type: sequelize.TEXT,
      allowNull: false,
      field: "in_correlativo",
    },
    dominioUbigeo: {
      type: sequelize.TEXT(6),
      field: "in_idominio_ubigeo",
    },
    codigoUbigeo: {
      type: sequelize.TEXT(6),
      field: "vc_codigo_ubigeo",
    },
    idTipoDocumento: {
      type: sequelize.TEXT(6),
      allowNull: false,
      field: "vc_idtipodocumento",
    },
    estado:{
      type: sequelize.INTEGER,
      field: "in_estado",
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
      tableName: 'fe_query_t_serie',
      timestamps: false
    });
    QuerySerie.sync();
  module.exports = QuerySerie;