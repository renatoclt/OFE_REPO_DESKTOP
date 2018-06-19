/**
 * persistencia de la tabla t_serie en la variable Serie
 * @author Renato Modificado 10/01/2018
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var QueryConcepto = conexion.define('QueryConcepto',
  {
    id:{
      type: sequelize.INTEGER,
      field: "se_iconcepto",
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    idioma: {
      type: sequelize.INTEGER(32),
      field: "se_iidioma",
      allowNull:false
    },
    codigo: {
      type: sequelize.INTEGER(32),
      field: "in_codigo",
    },
    descripcion: {
      type: sequelize.TEXT,
      field: "vc_desc",
      allowNull:false
    },
    concepto: {
      type: sequelize.TEXT(4),
      field: "t_concepto",
      allowNull:false
    },
    catalogo: {
      type: sequelize.INTEGER(32),
      field: "vc_catalogo",
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
    tableName: 'fe_query_t_concepto',
    timestamps: false,
  }
);

QueryConcepto.sync();
module.exports = QueryConcepto;