/**
 * persistencia de la tabla t_parametro_ent en la variable ParametroEnt
 * Modificado --- creado --/--/----
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var ParametroEntidad = conexion.define('ParametroEntidad',
  {
    id:{
      type: sequelize.INTEGER,
      field: "se_iparam_ent",
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    descripcion: {
      type: sequelize.TEXT,
      field: "vc_desc",
    },
    usuarioCreacion: {
      type: sequelize.TEXT,
      field: "vc_usu_creacion",
    },
    usuarioModificacion: {
      type: sequelize.TEXT,
      field: "vc_usu_modifica",
    },
    fechaCreacion: {
      type: sequelize.TEXT(6),
      field: "ts_fec_creacion",
    },
    fechaModificacion: {
      type: sequelize.TEXT(6),
      field: "ts_fec_modifica",
    },
    estado: {
      type: sequelize.INTEGER(32),
      field: "in_estado"
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
    tableName: 'fe_organizacion_t_parametro_ent',
    timestamps: false
  }
);
ParametroEntidad.sync();
module.exports = ParametroEntidad;