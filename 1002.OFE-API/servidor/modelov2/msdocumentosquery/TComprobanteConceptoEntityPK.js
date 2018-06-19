/**
 * persistencia de la tabla  en la variable ComprobantePago
 * Modificado --- creado --/--/----
 * @author Renato creado 09/01/2018
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 */
var TComprobanteConceptoEntityPK = conexion.define(
    'TComprobanteConceptoEntityPK',{
        id:{//inIdcomprobante
            type: sequelize.INTEGER,
            field: "in_idcomprobante",
            autoIncrement: true,
            unique: true,
            primaryKey: true,
            allowNull:false   
        },
        inIdconcepto : {
            type: sequelize.TEXT,
            field: "in_idconcepto",     
        },
        inIdidioma: {
            type: sequelize.TEXT,
            field: "in_ididioma",     
        },       
    },
);

module.exports = DocReferencia;
