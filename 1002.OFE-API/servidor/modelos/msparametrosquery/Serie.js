/**
 * persistencia de la tabla t_serie en la variable Serie
 * @author Renato Modificado 10/01/2018
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var Serie = conexion.define('Serie',
  {
    idSerie:{
      type: sequelize.INTEGER,
      field: "se_iserie",
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    idEntidad: {
      type: sequelize.INTEGER(32),
      field: "in_ientidad",
      allowNull:false
    },
    idTipoSerie: {
      type: sequelize.INTEGER(32),
      field: "in_tipo_serie",
      allowNull:false
    },
    direccion: {
      type: sequelize.TEXT,
      field: "vc_direccion",
      allowNull:false
    },
    serie: {
      type: sequelize.TEXT(4),
      field: "ch_serie",
      allowNull:false
    },
    correlativo: {
      type: sequelize.INTEGER(32),
      field: "in_correlativo",
      allowNull:false
    },
    idTipoComprobante: {
      type: sequelize.INTEGER(32),
      field: "vc_idtipodocumento",
      allowNull:false
    },
    idUbigeo: {
      type: sequelize.INTEGER(32),
      field: "in_idominio_ubigeo",
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
    tableName: 'fe_query_t_serie',
    timestamps: false,
  }
);
module.exports = Serie;