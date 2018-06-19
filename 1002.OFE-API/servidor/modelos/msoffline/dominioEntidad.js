/**
 * persistencia de la tabla t_dominio_ent en la variable DominioEnt
 * Modificado --- creado --/--/----
 * @author Renato creado 23/01/2018
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var DominioEntidad = conexion.define('DominioEntidad',
  {
    id:{
      type: sequelize.INTEGER,
      field: "se_idominio_ent",
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    parametroEntidad: {
      type: sequelize.INTEGER(32),
      field: "se_iparam_ent",
      allownull:false,
    },
    idioma: {
      type: sequelize.INTEGER(32),
      field: "se_iidioma",
      allownull:false,
    },
    codigo: {
      type:sequelize.TEXT ,
      field: "vc_codigo",
    },
    descripcionCorta: {
      type: sequelize.TEXT,
      field: "vc_desc_corta",
      allownull:false,
    },
    descripcion: {
      type: sequelize.TEXT,
      field: "vc_desc",
      allownull:false,
    },
    usuarioCreacion: {
      type: sequelize.TEXT,
      field: "vc_usu_creacion",
      allownull:false,
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
    tableName: 'fe_organizacion_t_dominio_ent',
    timestamps: false
  }
);
DominioEntidad.sync();
module.exports = DominioEntidad;