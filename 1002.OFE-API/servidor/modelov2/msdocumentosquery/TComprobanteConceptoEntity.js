/**
 * persistencia de la tabla t_comprobante_concepto en la variable ComprobantePago
 * Modificado --- creado --/--/----
 * @author Renato creado 09/01/2018
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 */
var TComprobanteConceptoEntity = conexion.define(
    'TComprobanteConceptoEntity',{
        id:{//inIdcomprobante
            type: sequelize.INTEGER,
            field: "in_idcomprobante",
            autoIncrement: true,
            unique: true,
            primaryKey: true,
            allowNull:false   
        },
        inIdconcepto: {
            type: sequelize.TEXT,
            field: "in_idconcepto",     
        },
        inIdidioma: {
            type: sequelize.TEXT,
            field: "in_ididioma",     
        },
        inCodigoconcepto: {
            type: sequelize.TEXT,
            field: "in_codigoconcepto",     
        },
        vc_descconcepto: {
            type: sequelize.TEXT,
            field: "vcDescconcepto",     
        },
        nuImporteconcepto: {
            type: sequelize.TEXT,
            field: "nu_importeconcepto",     
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
      tableName: 't_comprobante_concepto',
      timestamps: false
    }
);

module.exports = DocReferencia;
