/**
 * persistencia de la tabla t_doc_entidad en la variable DocEntidad
 * Modificado --- creado --/--/----
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var DocumentoEntidad = conexion.define('DocumentoEntidad',
  {
    id:{
      type: sequelize.INTEGER,
      primaryKey: true,
      field: "se_idocentidad",
      autoIncrement: true,
      unique: true,
      allowNull: false ,
    },
    tipoEntidad: {
      type: sequelize.INTEGER,
      field: "se_itipo_ent",
    },
    entidad: {
      type:sequelize.INTEGER ,
      field: "se_ientidad",
    },
    comprobantepago: {
      type: sequelize.INTEGER,
      field: "in_idcomprobantepago",
    },
    correo:{
      type: sequelize.TEXT,
      field: "vc_correo"
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
      type: sequelize.TEXT,
      field: "in_estado_sincronizado"
    },
    generado:{
      type: sequelize.INTEGER,
      field: "in_generado",
    }   
  },
  {
    tableName: 'fe_comprobante_t_doc_entidad',
    timestamps: false
  }
);

DocumentoEntidad.sync();

module.exports = DocumentoEntidad;