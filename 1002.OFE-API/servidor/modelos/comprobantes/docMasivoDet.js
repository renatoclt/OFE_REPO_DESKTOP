/**
 * persistencia de la tabla t_docmasivo_det en la variable DocMasivoDet
 * Modificado --- creado --/--/----
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var DocMasivoDet = conexion.define('DocMasivoDet',
  {
    id:{
      type: sequelize.INTEGER,
      field: "se_idocmasivodet",
      autoIncrement: true,
      unique: true,
      primaryKey: true,
      allowNull:false
    },
    iDocMasivo: {
      type: sequelize.INTEGER,
      field: "se_idocmasivo",
    },
    fila: {
      type: sequelize.INTEGER,
      field: "in_fila",
    },
    columna: {
      type: sequelize.INTEGER,
      field: "in_columna",
    },
    serie: {
      type: sequelize.TEXT,
      field: "vc_serie",
    },
    numero: {
      type: sequelize.TEXT,
      field: "vc_numero",
    },
    descError: {
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
      field: "ts_fec_sincronizado",
    },
    estadoSincronizado: {
      type: sequelize.INTEGER,
      field: "in_estado_sincronizado"
    }        
  },
  {
    tableName: 't_docmasivo_det',
    timestamps: false
  }
);