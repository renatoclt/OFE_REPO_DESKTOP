/**
 * persistencia de la tabla t_doc_parametro en la variable DocParametro
 * Modificado --- creado --/--/----
 * @author Renato creado 07/02/2018
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var DocMasivoDet = conexion.define('DocMasivoDet',
  {
    id:{
      type: sequelize.INTEGER,
      field: "se_idocmasivdet",
      autoIncrement: true,
      unique: true,
      primaryKey: true,
      allowNull:false            
    },
    docMasivo: {
      type: sequelize.INTEGER(32),
      field: "se_idocmasivo",
      allowNull:false
    },
    fila: {
      type: sequelize.INTEGER(32),
      field: "in_fila",
      allowNull:false
    },
    columna: {
      type: sequelize.TEXT,
      field: "in_columna",
      allowNull:false
    },
    serie: {
        type: sequelize.TEXT,
        field: "vc_serie",
    },
    numero: {
        type: sequelize.TEXT,
        field: "vc_numero",
    },
    descripcionError: {
        type: sequelize.TEXT,
        field: "vc_descerror",
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
    tableName: 'fe_comprobante_t_docmasivo_det',
    timestamps: false
  }
);

DocMasivoDet.sync();
module.exports = DocMasivoDet;