/**
 * @description persistencia de la tabla t_doc_referenci en la variable DocReferencia
 * author --- Modificado --/--/----
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var DocReferencia = conexion.define('DocReferencia',
  {
    id:{
      type: sequelize.INTEGER,
      field: "se_idocreferencia",
      autoIncrement: true,
      unique: true,
      primaryKey: true,
      allowNull:false   
    },
    idDocumentoOrigen: {
      type: sequelize.TEXT,
      field: "in_idoc_origen",
      allowNull:false 
    },
    idDocumentoDestino: {
      type: sequelize.TEXT,
      field: "se_idoc_destino"
    },
    tipoDocumentoOrigen: {
      type: sequelize.TEXT(3),
      field: "ch_tipo_doc_ori",
      allowNull:false 
    },
    tipoDocumentoDestino: {
      type: sequelize.TEXT(3),
      field: "ch_tipo_doc_des"
    },
    serieDocumentoDestino: {
      type: sequelize.TEXT(4),
      field: "ch_serie_dest",
      allowNull:false 
    },
    correlativoDocumentoDestino: {
      type: sequelize.TEXT(8),
      field: "ch_corr_dest",
      allowNull:false 
    },
    fechaEmisionDestino: {
      type: sequelize.TEXT,
      field: "da_fec_emi_dest",
      allowNull:false 
    },
    totalImporteDestino: {
      type: sequelize.REAL(12,2),
      field: "nu_tot_imp_dest",
      allowNull:false 
    },
    totalImporteAuxiliarDestino: {
      type: sequelize.REAL(12,2) ,
      field: "nu_tot_imp_aux",
    },
    totalPorcentajeAuxiliarDestino: {
      type: sequelize.REAL(12,2) ,
      field: "nu_tot_por_aux",
      allowNull:false 
    },
    tipoDocumentoOrigenDescripcion: {
      type: sequelize.TEXT,
      field: "vc_tdocori_desc",
      allowNull:false 
    }, 
    tipoDocumentoDestinoDescripcion: {
      type: sequelize.TEXT ,
      field: "vc_tdocdes_desc",
      allowNull:false 
    }, 
    monedaDestino: {
      type: sequelize.TEXT (3) ,
      field: "vc_mone_des",
      allowNull:false 
    }, 
    totalMonedaDestino: {
      type: sequelize.REAL(12,2) ,
      field: "de_tot_mone_des",
      allowNull:false 
    }, 
      polizaFactura: {
      type: sequelize.TEXT,
      field: "vc_poliza_factura",
      allowNull:false 
    }, 
    anticipo: {
      type: sequelize.REAL(12,2) ,
      field: "de_anticipo",
      allowNull:false 
    }, 
    auxiliar1: {
      type: sequelize.TEXT ,
      field: "vc_aux_1",
      allowNull:false 
    }, 
    auxiliar2: {
      type: sequelize.TEXT ,
      field: "vc_aux_2",
      allowNull:false 
    }, 
    estadoSincronizado: {
      type: sequelize.INTEGER,
      field: "in_estado_sincronizado"
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
    }       
  },
  {
    tableName: 'fe_comprobante_t_doc_referenci',
    timestamps: false
  }
);

module.exports = DocReferencia;

