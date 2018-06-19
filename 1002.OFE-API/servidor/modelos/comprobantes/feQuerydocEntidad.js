var SerieQuery =require('../msdocumentosquery/SerieQuery');
var EntParametrosQuery =require('../msdocumentosquery/EntParametrosQuery');
var EntidadQuery = conexion.define('EntidadQuery',
  {
      seIentidad:{
      type: sequelize.INTEGER,
      field: "se_ientidad",
      unique: true,
      primaryKey: true,
      allowNull:false            
    },
      vcDocumento: {
      type: sequelize.TEXT,
      field: "vc_documento",
      allowNull:false
    },
      vcDenominacion: {
      type: sequelize.TEXT,
      field: "vc_denominacion"
    },
      vcNomComercia: {
      type: sequelize.TEXT,
      field: "vc_nom_comercia",
      allowNull:false
    },
      vcDirFiscal: {
      type: sequelize.TEXT,
      field: "vc_dir_fiscal"
    },
      vcCorreo: {
      type: sequelize.TEXT,
      field: "vc_correo"
    },
      vcLogo: {
      type: sequelize.TEXT,
      field: "vc_logo"
    },
      vcPais: {
      type: sequelize.TEXT,
      field: "vc_pais"
    },
      vcUbigeo: {
      type: sequelize.TEXT,
      field: "vc_ubigeo"
    },
      vcTipoDocumento: {
      type: sequelize.TEXT,
      field: "vc_tipo_documento"
    },
      inTipoDocumento: {
      type: sequelize.INTEGER,
      field: "in_tipo_documento"
    },
      vcIdebiz: {
      type: sequelize.TEXT,
      field: "vc_idebiz"
    },
      vcUsuCreacion: {
      type: sequelize.TEXT,
      field: "vc_usu_creacion"
    },
      vcUsuModifica: {
      type: sequelize.TEXT,
      field: "vc_usu_modifica"
    },
      tsFecCreacion: {
      type: sequelize.TEXT,
      field: "ts_fec_creacion"
    },
      tsFecModifica: {
      type: sequelize.TEXT,
      field: "ts_fec_modifica"
    },
      inEstado: {
      type: sequelize.INTEGER,
      field: "in_estado"
      }
    /*,
    estadoSincronizado: {
      type: sequelize.INTEGER,
      field: "in_estado_sincronizado"
    }    */    
  },
  {
    tableName: 'fe_query_t_entidad',
    timestamps: false
  }
);
EntidadQuery.hasMany(SerieQuery,
  {
      as: 'series',
      foreignKey: 'inIentidad'
  });
EntidadQuery.hasMany(EntParametrosQuery,
  {
      as: 'parametros',
      foreignKey: 'inIentidad'
  });  

module.exports = EntidadQuery;