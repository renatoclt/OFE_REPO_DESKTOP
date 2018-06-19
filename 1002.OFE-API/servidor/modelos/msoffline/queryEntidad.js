/**
 * persistencia de la tabla t_serie en la variable Serie
 * @author Renato Modificado 10/01/2018
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var SerieQuery =require('../msdocumentosquery/SerieQuery');
var EntParametrosQuery =require('../msdocumentosquery/EntParametrosQuery');
var QueryEntidad = conexion.define('QueryEntidad',
  {
    id:{
      type: sequelize.INTEGER,
      field: "se_ientidad",
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    documento: {
      type: sequelize.INTEGER(32),
      field: "vc_documento",
    },
    denominacion: {
      type: sequelize.INTEGER(32),
      field: "vc_denominacion",
    },
    nombreComercial: {
      type: sequelize.TEXT,
      field: "vc_nom_comercia",
    },
    direccion: {
      type: sequelize.TEXT(4),
      field: "vc_dir_fiscal",
    },
    correo: {
      type: sequelize.INTEGER(32),
      field: "vc_correo",
    },
    logo: {
      type: sequelize.TEXT,
      field: "vc_logo",
    },
    pais: {
        type: sequelize.TEXT,
        field: "vc_pais",
    },
    ubigeo: {
      type: sequelize.TEXT,
      field: "vc_ubigeo",
    },
    tipoDocumento: {
      type: sequelize.TEXT,
      field: "vc_tipo_documento",
    },
    idTipoDocumento: {
      type: sequelize.TEXT,
      field: "in_tipo_documento",
    },
    idEbiz: {
      type: sequelize.TEXT,
      field: "vc_idebiz",
    },
    usuarioCreacion: {
      type: sequelize.TEXT,
      field: "vc_usu_creacion",
    },
    usuarioModificacion: {
      type: sequelize.TEXT,
      field: "vc_usu_modifica",
    },
    fechaCreacion: {
      type: sequelize.TEXT(6),
      field: "ts_fec_creacion",
    },
    fechaModificacion: {
      type: sequelize.TEXT(6),
      field: "ts_fec_modifica",
    },
    estado: {
      type: sequelize.INTEGER(32),
      field: "in_estado",
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
    tableName: 'fe_query_t_entidad',
    timestamps: false,
  }
);

QueryEntidad.hasMany(SerieQuery,
  {
      as: 'series',
      foreignKey: 'inIentidad'
  });
  QueryEntidad.hasMany(EntParametrosQuery,
  {
      as: 'parametros',
      foreignKey: 'inIentidad'
  });  

QueryEntidad.sync();

module.exports = QueryEntidad;