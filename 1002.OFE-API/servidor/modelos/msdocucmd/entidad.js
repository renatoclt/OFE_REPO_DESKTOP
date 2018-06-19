/**
 * persistencia de la tabla fe_organizacion_t_entidad en la variable Entidad
 * Modificado --- creado --/--/----
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var Entidad = conexion.define('Entidad',
  {
    id:{
        type: sequelize.TEXT,
        field: "se_ientidad",

        primaryKey: true
    },

    documento: {
      type: sequelize.TEXT(30),
      field: "vc_documento",
    },

    denominacion: {
        type: sequelize.TEXT(30),
        field: "vc_denominacion",
    },

    nombreComercial: {
        type: sequelize.TEXT(30),
        field: "vc_nom_comercia",
    },
    direccionFiscal: {
        type: sequelize.TEXT(30),
        field: "vc_dir_fiscal",
    },
    correo: {
        type: sequelize.TEXT(30),
        field: "vc_correo",
    },
    usuarioCreacion: {
        type: sequelize.TEXT,
        field: "vc_usu_creacion"
    },
    usuarioModifica: {
        type: sequelize.TEXT,
        field: "vc_usu_modifica"
    },
    fechaCreacion: {
        type: sequelize.TEXT(6),
        field: "ts_fec_creacion"
    },
    fechaModificacion: {
        type: sequelize.TEXT(6),
        field: "ts_fec_modifica"
    },
    estado: {
        type: sequelize.INTEGER(32),
        field: "in_estado"
    },
    fechaSincronizacion: {
        type: sequelize.TEXT,
        field: "ts_fec_sincronizado"
    },
    estadoSincronizado: {
        type: sequelize.INTEGER,
        field: "in_estado_sincronizado"
    }
    

  }, 
  {
    tableName: 'fe_organizacion_t_entidad',
    timestamps: false
  }
);

module.exports = Entidad;