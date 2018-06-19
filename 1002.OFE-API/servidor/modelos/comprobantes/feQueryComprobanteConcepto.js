/**
 * @author jose felix ccopacondori
 */
var ComprobanteConceptoQuery = conexion.define('ComprobanteConceptoQuery',
  {
      seIConcepto:{
      type: sequelize.INTEGER,
      field: "se_idconcepto",
      unique: true,
      primaryKey: true,
      allowNull:false            
    },
    inIdcomprobante: {
      type: sequelize.TEXT,
      field: "in_idcomprobante",
      
    },
    inIdconcepto: {
      type: sequelize.INTEGER,
      field: "in_idconcepto"
    },
    inIdidioma: {
      type: sequelize.INTEGER,
      field: "in_ididioma",
    
    },
    inCodigoconcepto: {
      type: sequelize.INTEGER,
      field: "in_codigoconcepto"
    },
    vcDescconcepto: {
      type: sequelize.TEXT,
      field: "vc_descconcepto"
    },
    nuImporteconcepto: {
      type: sequelize.INTEGER,
      field: "nu_importeconcepto"
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
    tableName: 'fe_query_t_comprobante_concepto',
    timestamps: false
  }
);

module.exports = ComprobanteConceptoQuery;