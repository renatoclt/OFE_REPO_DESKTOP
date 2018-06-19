/**
 * @description persistencia de la tabla t_doc_referenci en la variable DocReferencia
 * author --- Modificado --/--/----
 * @author Renato creado 07/02/2018
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var DocReferencia = conexion.define('DocReferencia',
  {
    id:{
      type: sequelize.INTEGER,
      primaryKey: true,
      field: "se_idocreferencia",
      autoIncrement: true,
      //defaultValue:1,
      unique: true,
      allowNull: false ,
    },
    idDocumentoOrigen: {
      type: sequelize.TEXT,
      field: "in_idoc_origen",
    },
    idDocumentoDestino: {
      type: sequelize.TEXT,
      field: "se_idoc_destino"
    },
    tipoDocumentoOrigen: {
      type: sequelize.TEXT(3),
      field: "ch_tipo_doc_ori",
    },
    tipoDocumentoDestino: {
      type: sequelize.TEXT(3),
      field: "ch_tipo_doc_des"
    },
    serieDocumentoDestino: {
      type: sequelize.TEXT(4),
      field: "ch_serie_dest",
    },
    correlativoDocumentoDestino: {
      type: sequelize.TEXT(8),
      field: "ch_corr_dest",
    },
    fechaEmisionDestino: {
      type: sequelize.TEXT,
      field: "da_fec_emi_dest",
    },
    totalImporteDestino: {
      type: sequelize.REAL(12,2),
      field: "nu_tot_imp_dest",
    },
    totalImporteAuxiliarDestino: {
      type: sequelize.REAL(12,2) ,
      field: "nu_tot_imp_aux",
    },
    totalPorcentajeAuxiliarDestino: {
      type: sequelize.REAL(12,2) ,
      field: "nu_tot_por_aux",
    },
    tipoDocumentoOrigenDescripcion: {
      type: sequelize.TEXT,
      field: "vc_tdocori_desc",
    }, 
    tipoDocumentoDestinoDescripcion: {
      type: sequelize.TEXT ,
      field: "vc_tdocdes_desc",
    }, 
    monedaDestino: {
      type: sequelize.TEXT (3) ,
      field: "vc_mone_des",
    }, 
    totalMonedaDestino: {
      type: sequelize.REAL(12,2) ,
      field: "de_tot_mone_des",
    }, 
    polizaFactura: {
      type: sequelize.TEXT,
      field: "vc_poliza_factura",
    }, 
    anticipo: {
      type: sequelize.REAL(12,2) ,
      field: "de_anticipo",
    }, 
    auxiliar1: {
      type: sequelize.TEXT ,
      field: "vc_aux_1",
    }, 
    auxiliar2: {
      type: sequelize.TEXT ,
      field: "vc_aux_2",
    }, 
    estadoSincronizado: {
      type: sequelize.INTEGER,
      field: "in_estado_sincronizado"
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
DocReferencia.sync();
module.exports = DocReferencia;

