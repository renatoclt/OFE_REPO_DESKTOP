/**
 * persistencia de la tabla t_ent_parametro en la variable EntidadParametro
 * Modificado --- creado --/--/----
 * @author Renato creado 23/01/2018
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var EntidadParametro = conexion.define('EntidadParametro',
  {
    id:{
      type: sequelize.INTEGER,
      field: "se_ientparametro",
      unique: true,
      primaryKey: true,
      allowNull:false   
    },
    entidad: {
        type: sequelize.INTEGER,
        field: "se_ientidad",
    },
    parametroEntidad: {
      type: sequelize.INTEGER,
      field: "se_iparam_ent",
    },
    json: {
      type: sequelize.TEXT,
      field: "vc_json",
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
    tableName: 'fe_organizacion_t_ent_parametro',
    timestamps: false
  }
);
EntidadParametro.sync();
module.exports = EntidadParametro;