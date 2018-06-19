/**
 * Persistencia de la tabla t_productoxcomprobantepago en la variable ComprobantePagoDetalle
 * Modificado -- Creado 23/01/2018
 * @author Ricardo Gamero 23/01/2018
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */

 var ComprobantePagoDetalle = conexion.define(
     {
         id:{
             type: sequelize.TEXT,
             field: "in_idcomprobantepagodetalle",
             unique: true,
             primaryKey: true,
             allowNull:false
         },
         idComprobantePago:{
             type: sequelize.TEXT,
             field: "in_idcomprobantepago",
             allowNull: false
         },
         idoc:{
            type: sequelize.TEXT(38),
            field: "in_idoc"
         },
         idguia:{
             type: sequelize.TEXT(38),
             field: "in_idguia"
         },
         idProductoxGuia:{
             type: sequelize.TEXT(38),
             field: "in_idproductoxguia"
         },
         idProductoxOc:{
             type:sequelize.TEXT(38),
             field: "in_idproductoxoc"
         },
         numeroSeguimiento:{
             type: sequelize.TEXT(30),
             field: "ch_numeroseguimiento"
         },
         numeroGuia:{
             type: sequelize.TEXT(30),
             field: "ch_numeroguia"
         },
         descripcionItem:{
             type: sequelize.TEXT,
             field: "vc_descripcionitem"
         },
         posicionProdxGuia:{
             type: sequelize.TEXT(20),
             field: "vc_posicionprodxguia"
         },
         idRegistroUnidad:{
             type: sequelize.TEXT(8),
             field: "vc_idregistrounidad"
         },
         idTablaUnidad:{
             type: sequelize.TEXT(8),
             field: "vc_idtablaunidad"
         },
         unidadMedida:{
             type: sequelize.TEXT(30),
             field: "vc_unidadmedida"
         },
         posicion:{
             type:sequelize.TEXT(30),
             field: "vc_posicion"
         },
         numeroParteItem:{
             type:sequelize.TEXT(30),
             field: "vc_numeroparteirem"
         },
         posicionProdxOc:{
             type: sequelize.TEXT(20),
             field: "vc_posicionprodxoc"
         },
         idProductoConsignado:{
             type: sequelize.INTEGER(32),
             field: "in_idproductoconsignado"
         },
         precioUnitarioItem:{
            type: sequelize.REAL(12,2),
            field: "de_preciounitarioitem"
         },
         precioTotalItem:{
             type: sequelize.REAL(12,2),
             field: "de_preciototalitem"
         },
         cantidadDespachada:{
             type: sequelize.REAL(12,2),
             field: "de_cantidaddespachada"
         },
         idMovimiento:{
            type: sequelize.TEXT(38),
            field: "in_idmovimiento"
         },
         codigoGuiaErp:{
             type: sequelize.TEXT(20),
             field: "vc_codigoguiaerp"
         },
         ejercicioGuia:{
             type: sequelize.TEXT(4),
             field: "vc_ejercicioguia"
         },
         tipoGuia:{
             type: sequelize.TEXT(5),
             field: "vc_tipoguia"
         },
         fechaEmisionGuia:{
             type: sequelize.TEXT,
             field: "ts_fechaemisionguia"
         },
         tipoSpot:{
             type: sequelize.TEXT(20),
             field: "vc_tipospot"
         },
         porcentajeImpuesto:{
             type: sequelize.REAL(12,2),
             field: "de_porcentajeimpuesto"
         },
         montoImpuesto:{
             type: sequelize.REAL(12,2),
             field: "de_montoimpuesto"
         },
         spotImpuesto:{
             type: sequelize.TEXT(20),
             field: "vc_spotimpuesto"
         },
         fechaSincronizado:{
             type: sequelize.TEXT,
             field: "ts_fec_sincronizado"
         },
         in_estado_sincronizado:{
             type: sequelize.INTEGER,
             field: "in_estado_sincronizado"
         }
        },
         {
             tableName: 't_productoxcomprobantepago',
             timestamps: false
         }
);
module.exports = ComprobantePagoDetalle;