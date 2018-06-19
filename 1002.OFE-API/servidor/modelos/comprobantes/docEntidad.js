var ComprobantePago = require('./comprobantePago');
//var Entidad = require('../organizaciones/entidad');
var TipoEnt = require('../configuracion/tipoEnt');
/**
 * persistencia de la tabla t_doc_entidad en la variable DocEntidad
 * Modificado --- creado --/--/----
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var DocEntidad = conexion.define('DocEntidad',
  {
    id:{
      type: sequelize.INTEGER,
      field: "se_ientidad",
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    idTipoEntidad: {
      type: sequelize.INTEGER,
      field: "se_itipo_ent",
      allowNull:false
    },
    idEntidad: {
      type:sequelize.INTEGER ,
      field: "se_ientidad",
      allowNull:false
    },
    idcomprobantepago: {
      type: sequelize.INTEGER,
      field: "in_idcomprobantepago",
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
      type: sequelize.TEXT,
      field: "in_estado_sincronizado"
    }        
  },
  {
    tableName: 't_doc_entidad',
    timestamps: false
  }
);


DocEntidad.belongsTo(TipoEnt, {foreignKey: 'idTipoEntidad'});


module.exports = DocEntidad;