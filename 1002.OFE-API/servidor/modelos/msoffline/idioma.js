/**
 * persistencia de la tabla t_idioma en la variable Idioma
 * Modificado --- creado --/--/----
 * @author Renato creado 22/01/2018
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var Idioma = conexion.define('Idioma',
  {
    id:{
      type: sequelize.INTEGER,
      field: "se_iidioma",
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    descripcionCorta: {
      type: sequelize.TEXT(2),
      field: "ch_desc_corta",
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
    tableName: 'fe_configuracion_t_idioma',
    timestamps: false
  }
);
Idioma.sync();
module.exports = Idioma;