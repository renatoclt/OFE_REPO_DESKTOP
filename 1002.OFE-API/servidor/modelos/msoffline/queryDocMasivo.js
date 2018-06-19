/**
 * persistencia de la tabla t_serie en la variable Serie
 * @author Renato Modificado 10/01/2018
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var QueryDocMasivo = conexion.define('QueryDocMasivo',
  {
    id:{
      type: sequelize.INTEGER,
      field: "se_idocmasivo",
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    entidad: {
      type: sequelize.INTEGER(32),
      field: "se_ientidad",
      allowNull:false
    },
    tipoDocumento: {
      type: sequelize.INTEGER(32),
      field: "in_tipodoc",
    },
    usuario: {
      type: sequelize.TEXT,
      field: "vc_usuario",
      allowNull:false
    },
    fecha: {
      type: sequelize.TEXT(4),
      field: "ts_fecha",
      allowNull:false
    },
    nomArchivo: {
      type: sequelize.INTEGER(32),
      field: "vc_nomarchivo",
      allowNull:false
    },
    tamanioArchivo: {
      type: sequelize.TEXT,
      field: "vc_tamarchivo",
      allowNull:false
    },
    ticket: {
      type: sequelize.TEXT,
      field: "vc_ticket",
      allowNull:false
    },
    totalLineas: {
      type: sequelize.TEXT(6),
      field: "in_total_lineas",
      allowNull:false
    },
    totalError: {
      type: sequelize.TEXT(6),
      field: "in_total_error",
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
    tableName: 'fe_query_t_docmasivo',
    timestamps: false,
  }
);

QueryDocMasivo.sync();

module.exports = QueryDocMasivo;