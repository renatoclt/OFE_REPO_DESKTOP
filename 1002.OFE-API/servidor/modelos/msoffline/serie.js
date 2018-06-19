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
    entidad: {
      type: sequelize.INTEGER(32),
      field: "se_ientidad",
      allowNull:false
    },
    dominioEntidad: {
      type: sequelize.INTEGER(32),
      field: "se_idominio_ent",
    },
    tipoSerie: {
      type: sequelize.TEXT,
      field: "in_tipo_serie",
      allowNull:false
    },
    direccion: {
      type: sequelize.TEXT(4),
      field: "vc_direccion",
      allowNull:false
    },
    serie: {
      type: sequelize.INTEGER(32),
      field: "ch_serie",
      allowNull:false
    },
    correlativo: {
      type: sequelize.INTEGER(32),
      field: "in_correlativo",
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
    tableName: 'fe_organizacion_t_serie',
    timestamps: false,
  }
);

// Serie.sync();

module.exports = Serie;