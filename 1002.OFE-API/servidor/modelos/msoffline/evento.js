/**
 * persistencia de la tabla t_evento en la variable Evento
 * Modificado --- creado --/--/----
 * @author Renato creado 22/01/2018
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var Evento = conexion.define('Evento',
  {
    id:{
      type: sequelize.INTEGER,
      field: "se_ievento",
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    idioma: {
      type: sequelize.TEXT(32),
      field: "se_iidioma",
      allowNull:false
    },
    descripcion: {
      type: sequelize.TEXT,
      field: "vc_desc",
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
      field: "ts_fecha_modifica",
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
    tableName: 'fe_configuracion_t_evento',
    timestamps: false
  }
);
Evento.sync();
module.exports = Evento;