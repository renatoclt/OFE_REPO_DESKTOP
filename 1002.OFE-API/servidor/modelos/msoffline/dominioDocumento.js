/**
 * persistencia de la tabla t_dominio_doc en la variable DominioDoc
 * Modificado --- creado --/--/----
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var DominioDocumento = conexion.define('DominioDoc',
  {
    id:{
      type: sequelize.INTEGER,
      field: "se_idominio_doc",
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    parametroDocumento: {
      type: sequelize.INTEGER(32),
      field: "se_iparam_doc",
      allowNull:false
    },
    idioma: {
      type: sequelize.INTEGER(32),
      field: "se_iidioma",
      allowNull:false
    },
    codigo: {
      type: sequelize.TEXT,
      field: "vc_codigo",
    },
    descripcionCorta: {
      type: sequelize.TEXT,
      field: "vc_desc_corta",
      allowNull:false
    },
    descripcion: {
      type: sequelize.TEXT,
      field: "vc_desc",
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
      field: "vc_fec_creacion",
      allowNull:false
    },
    fechaModificacion: {
      type: sequelize.TEXT(6),
      field: "vc_fec_modifica",
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
    tableName: 'fe_configuracion_t_dominio_doc',
    timestamps: false
  }
);
DominioDocumento.sync();
module.exports = DominioDocumento;