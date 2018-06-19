/**
 * persistencia de la tabla t_parametro_doc en la variable ParametroDoc
 * @author Renato Modificado 23/01/2018
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var TipoEntidad = conexion.define('TipoEntidad', {
    id: {
      type: sequelize.INTEGER,
      field: "se_itipo_ent",
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: sequelize.TEXT,
      allowNull: false,
      field: "vc_desc",
    },
    estado: {
      type: sequelize.INTEGER(32),
      allowNull: false,
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
      tableName: 'fe_configuracion_t_tipo_ent',
      timestamps: false
    });
  
    TipoEntidad.sync();

  module.exports = TipoEntidad;