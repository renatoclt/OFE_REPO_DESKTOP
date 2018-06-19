/**
 * persistencia de la tabla t_concepto en la variable Concepto
 * Modificado --- creado --/--/----
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var Concepto = conexion.define('Concepto',
  {
    id: {
      type: sequelize.INTEGER,
      field: "se_iconcepto",
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    idioma: {
      type: sequelize.INTEGER,
      field: "se_iidioma",
    },
    codigo: {
      type: sequelize.INTEGER,
      field: "in_codigo",
    },
    descripcion: {
      type: sequelize.TEXT,
      field: "vc_desc",
    },
    catalogo: {
      type: sequelize.TEXT,
      field: "vc_catalogo",
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
    tableName: 't_concepto',
    timestamps: false
  }
);

module.exports = Concepto;