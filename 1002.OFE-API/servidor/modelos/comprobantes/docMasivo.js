/**
 * persistencia de la tabla t_doc_masivo en la variable DocMasivo
 * Modificado --- creado --/--/----
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var DocMasivo = conexion.define('DocMasivo',
  {
    id:{
      type: sequelize.INTEGER,
      field: "se_idocmasivo",
      autoIncrement: true,
      unique: true,
      primaryKey: true,
      allowNull:false
    },
    iEntidad: {
      type: sequelize.INTEGER,
      field: "se_ientidad",
    },
    tipoDoc: {
      type: sequelize.INTEGER,
      field: "in_tipodoc",
    },
    usuario: {
      type: sequelize.TEXT,
      field: "vc_usuario",
    },
    fecha: {
      type: sequelize.TEXT,
      field: "ts_fecha",
    },
    normArchivo: {
      type: sequelize.TEXT,
      field: "vc_normarchivo",
    },
    tamArchivo: {
      type: sequelize.TEXT,
      field: "vc_tamarchivo",
    },
    ticket: {
      type: sequelize.TEXT,
      field: "vc_ticket",
    },
    totalLineas: {
      type: sequelize.INTEGER,
      field: "in_total_lineas",
    },
    totalError: {
      type: sequelize.INTEGER,
      field: "in_total_error",
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
    tableName: 't_doc_masivo',
    timestamps: false
  }
);