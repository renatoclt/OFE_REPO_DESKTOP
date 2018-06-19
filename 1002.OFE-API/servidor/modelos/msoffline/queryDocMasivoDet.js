/**
 * persistencia de la tabla t_serie en la variable Serie
 * @author Renato Modificado 10/01/2018
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var QueryDocMasivoDet = conexion.define('QueryDocMasivoDet',
  {
    id:{
      type: sequelize.INTEGER,
      field: "se_idocmasivdet",
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    docMasivo: {
      type: sequelize.INTEGER(32),
      field: "se_idocmasivo",
      allowNull:false
    },
    fila: {
      type: sequelize.INTEGER(32),
      field: "in_fila",
    },
    columna: {
      type: sequelize.TEXT,
      field: "in_columna",
      allowNull:false
    },
    serie: {
      type: sequelize.TEXT(4),
      field: "vc_serie",
      allowNull:false
    },
    numero: {
      type: sequelize.INTEGER(32),
      field: "vc_numero",
      allowNull:false
    },
    descripcionError: {
      type: sequelize.TEXT,
      field: "vc_descerror",
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
    tableName: 'fe_query_t_docmasivo_det',
    timestamps: false,
  }
);


QueryDocMasivoDet.sync();

module.exports = QueryDocMasivoDet;