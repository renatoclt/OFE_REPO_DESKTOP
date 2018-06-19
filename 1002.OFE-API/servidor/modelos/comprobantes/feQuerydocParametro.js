var DocParametroQuery = conexion.define('DocParametroQuery',
  {
    inIdocparametro:{
      type: sequelize.INTEGER,
      field: "in_idocparametro",
      unique: true,
      primaryKey: true,
      allowNull:false            
    },
    inIcomprobantepago: {
      type: sequelize.TEXT,
      field: "in_icomprobantepago",
      allowNull:false
    },
    inIparamDoc: {
      type: sequelize.INTEGER,
      field: "in_iparam_doc",
      allowNull:false
    },
    vcJson: {
      type: sequelize.TEXT,
      field: "vc_json",
      allowNull:false
    },
    inTipo: {
      type: sequelize.INTEGER,
      field: "in_tipo",
      allowNull:false
    },
    vcValor: {
      type: sequelize.TEXT,
      field: "vc_valor",
      allowNull:false
    },
    auxEntero: {
      type: sequelize.INTEGER,
      field: "aux_entero",
      allowNull:false
    },
    auxImporte: {
      type: sequelize.REAL(12,2),
      field: "aux_importe",
      allowNull:false
    },
    auxFecha: {
      type: sequelize.TEXT,
      field: "aux_fecha",
      allowNull:false
    },
    auxCaracter: {
      type: sequelize.TEXT,
      field: "aux_caracter"
    }
    /*,
    estadoSincronizado: {
      type: sequelize.INTEGER,
      field: "in_estado_sincronizado"
    }    */    
  },
  {
    tableName: 'fe_query_t_doc_parametros',
    timestamps: false
  }
);

module.exports = DocParametroQuery;