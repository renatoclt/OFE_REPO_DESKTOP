/**
 * @author jose felix ccopacondori
 */
var DocReferenciQuery = conexion.define('DocReferenciQuery',
  {
    seIdocreferencia:{
      type: sequelize.INTEGER,
      field: "se_idocreferencia",
      unique: true,
      primaryKey: true,
      allowNull:false            
    },
    inIdocOrigen: {
      type: sequelize.TEXT,
      field: "in_idoc_origen",
      
    },
    seIdocDestino: {
      type: sequelize.TEXT,
      field: "se_idoc_destino"
    },
    chTipoDocOri: {
      type: sequelize.TEXT,
      field: "ch_tipo_doc_ori",
    
    },
    chTipoDocDes: {
      type: sequelize.TEXT,
      field: "ch_tipo_doc_des"
    },
    chSerieDest: {
      type: sequelize.TEXT,
      field: "ch_serie_dest"
    },
    chCorrDest: {
      type: sequelize.TEXT,
      field: "ch_corr_dest"
    },
    daFecEmiDest: {
      type: sequelize.TEXT,
      field: "da_fec_emi_dest"
    },
    nuTotImpDest: {
      type: sequelize.REAL,
      field: "nu_tot_imp_dest"
    },
    nuTotImpAux: {
      type: sequelize.REAL,
      field: "nu_tot_imp_aux"
    },
    nuTotPorAux: {
      type: sequelize.REAL,
      field: "nu_tot_por_aux"
    },
    vcTdocOriDesc: {
      type: sequelize.TEXT,
      field: "vc_tdocori_desc"
    },
    vcTdocDesDesc: {
      type: sequelize.TEXT,
      field: "vc_tdocdes_desc"
    },
    deTipoCambio: {           /// actualizar la base de datos con este campo
      type: sequelize.REAL,
      field: "de_tipocambio"
    },
    vcMonedaDestino: {
      type: sequelize.TEXT,
      field: "vc_mone_des"
    },
    deTotMoneDes: {
      type: sequelize.REAL,
      field: "de_tot_mone_des"
    },
    vcPolizaFactura: {
      type: sequelize.TEXT,
      field: "vc_poliza_factura"
    },
    deAnticipo: {
      type: sequelize.REAL,
      field: "de_anticipo"
    },
    vcAuxiliar1: {
      type: sequelize.TEXT,
      field: "vc_aux_1"
    },
    vcAuxiliar2: {
      type: sequelize.TEXT,
      field: "vc_aux_2"
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
    tableName: 'fe_query_t_doc_referenci',
    timestamps: false
  }
);

module.exports = DocReferenciQuery;