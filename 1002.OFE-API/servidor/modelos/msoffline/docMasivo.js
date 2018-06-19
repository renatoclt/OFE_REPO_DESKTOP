/**
 * persistencia de la tabla t_doc_parametro en la variable DocParametro
 * Modificado --- creado --/--/----
 * @author Renato creado 07/02/2018
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var DocMasivo = conexion.define('DocParametro',
  {
    id:{
      type: sequelize.INTEGER,
      field: "se_idocmasivo",
      autoIncrement: true,
      unique: true,
      primaryKey: true,
      allowNull:false            
    },
    entidad: {
      type: sequelize.INTEGER(32),
      field: "se_ientidad",
      allowNull:false
    },
    tipoDocumento: {
      type: sequelize.INTEGER(32),
      field: "in_tipodoc",
      allowNull:false
    },
    usuario: {
      type: sequelize.TEXT,
      field: "vc_usuario",
      allowNull:false
    },
    fecha: {
        type: sequelize.TEXT,
        field: "ts_fecha",
    },
    nomarchivo: {
        type: sequelize.TEXT,
        field: "vc_nomarchivo",
    },
    tamanioArchivo: {
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
    tableName: 'fe_comprobante_t_docmasivo',
    timestamps: false
  }
);

DocMasivo.sync();
module.exports = DocMasivo;