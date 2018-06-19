/**
 * persistencia de la tabla t_doc_evento en la variable DocEvento
 * Modificado --- creado --/--/----
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var DocEvento = conexion.define('DocEvento',
  {
    id:{
      type: sequelize.INTEGER,
      field: "se_idocevento",
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    iEvento: {
      type: sequelize.INTEGER(32),
      field: "se_ievento",
      allowNull:false
    },
    idComprobantePago: {
      type: sequelize.INTEGER(32),
      field: "in_idcomprobantepago",
      allowNull:false
    },
    desc: {
      type: sequelize.TEXT,
      field: "vc_desc",
      allowNull:false
    },
    estEvento: {
      type: sequelize.INTEGER(32),
      field: "in_est_evento",
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
    tableName: 't_doc_evento',
    timestamps: false
  }
);