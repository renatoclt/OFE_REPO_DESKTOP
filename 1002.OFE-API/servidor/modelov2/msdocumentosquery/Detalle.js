/**
 * persistencia de la tabla t_detalle_doc schema="fe_query" en la variable Detalle
 * Modificado --- creado --/--/----
 * @author Renato creado 09/01/2018
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 */
var Detalle = conexion.define(
    '',{
        id:{//idDetalle
            type: sequelize.INTEGER,
            field: "in_idcomprobantepagodetalle",
            autoIncrement: true,
            unique: true,
            primaryKey: true,
            allowNull:false,
        },
        idComprobante: {
            type: sequelize.INTEGER,
            field: "in_idcomprobantepago",     
        },
        idTipoIsc: {
            type: sequelize.TEXT,
            field: "se_itipo_calc",     
        },
        idTipoPrecio: {
            type: sequelize.TEXT,
            field: "se_itipo_prec",     
        },
        idProducto: {
            type: sequelize.TEXT,
            field: "se_iproducto",     
        },
        numeroItem: {
            type: sequelize.TEXT,
            field: "in_numero_item",     
        },
        unidadMedida: {
            type: sequelize.TEXT,
            field: "vc_unidadmedida",     
        },
        subtotalVenta: {
            type: sequelize.TEXT,
            field: "nu_subtotalven",     
        },
        subtotalIgv: {
            type: sequelize.TEXT,
            field: "nu_subtotal_igv",     
        },
        subtotalIsc: {
            type: sequelize.TEXT,
            field: "nu_subtotal_isc",     
        },
        pesoBruto: {
            type: sequelize.TEXT,
            field: "nu_peso_bruto",     
        },
        pesoNeto: {
            type: sequelize.TEXT,
            field: "nu_peso_neto",     
        },
        pesoTotal: {
            type: sequelize.TEXT,
            field: "nu_peso_total",     
        },
        descuento: {
            type: sequelize.TEXT,
            field: "nu_descuento",     
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
          type: sequelize.INTEGER,
          field: "in_estado_sincronizado"
        }        
    },
    {
      tableName: 't_detalle_doc',
      timestamps: false
    }
);

module.exports = Detalle;
