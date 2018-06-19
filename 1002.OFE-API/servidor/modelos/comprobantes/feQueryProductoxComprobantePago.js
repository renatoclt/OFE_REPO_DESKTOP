/**
 * @author jose felix ccopacondori
 */
var ProductoxComprobantePagoQuery = conexion.define('ProductoxComprobantePagoQuery',
  {
    inIdcomprobantepagodetalle:{
      type: sequelize.TEXT,
      field: "in_idcomprobantepagodetalle",
      unique: true,
      primaryKey: true,
      allowNull:false            
    },
    inIdcomprobantepago: {
      type: sequelize.TEXT,
      field: "in_idcomprobantepago",
      
    },
    inItipoPrecioventa: {
      type: sequelize.INTEGER,
      field: "in_itipo_precioventa"
    },
    inCodigoPrecioventa: {
      type: sequelize.INTEGER,
      field: "in_codigo_precioventa",
    
    },
    vcDescPrecioventa: {
      type: sequelize.INTEGER,
      field: "vc_desc_precioventa"
    },
    inItipoCalculoisc: {
      type: sequelize.INTEGER,
      field: "in_itipo_calculoisc"
    },
    inCodigoCalculoisc: {
      type: sequelize.TEXT,
      field: "in_codigo_calculoisc"
    },
    vcDescCalculoisc: {
      type: sequelize.INTEGER,
      field: "vc_desc_calculoisc"
    },
    inItipoAfectacionigv: {
      type: sequelize.INTEGER,
      field: "in_itipo_afectacionigv"
    },
    inCodigoAfectacionigv: {
      type: sequelize.INTEGER,
      field: "in_codigo_afectacionigv"
    },
    vcDescAfectacionigv: {
      type: sequelize.TEXT,
      field: "vc_desc_afectacionigv"
    },
    chAfectaIgv: {
      type: sequelize.TEXT,
      field: "ch_afecta_igv"
    },
    inIdguia: {
      type: sequelize.TEXT,
      field: "in_idguia"
    },
    vcSpotimpuesto: {
      type: sequelize.TEXT,
      field: "vc_spotimpuesto"
    },
    chNumeroseguimiento: {
      type: sequelize.TEXT,
      field: "ch_numeroseguimiento"
    },
    chNumeroguia: {
      type: sequelize.TEXT,
      field: "ch_numeroguia"
    },
    vcDescripcionitem: {
      type: sequelize.TEXT,
      field: "vc_descripcionitem"
    },
    vcPosicionprodxguia: {
      type: sequelize.TEXT,
      field: "vc_posicionprodxguia"
    },
    vcNumeroparteitem: {
      type: sequelize.TEXT,
      field: "vc_numeroparteitem"
    },
    vcPosicionprodxoc: {
      type: sequelize.TEXT,
      field: "vc_posicionprodxoc"
    },
    inIdproductoconsignado: {
      type: sequelize.INTEGER,
      field: "in_idproductoconsignado"
    },
    dePreciounitarioitem: {
      type: sequelize.REAL,
      field: "de_preciounitarioitem"
    },
    deCantidaddespachada: {
      type: sequelize.REAL,
      field: "de_cantidaddespachada"
    },
    inIdmovimiento: {
      type: sequelize.TEXT,
      field: "in_idmovimiento"
    },
    vcCodigoguiaerp: {
      type: sequelize.TEXT,
      field: "vc_codigoguiaerp"
    },
    vcEjercicioguia: {
      type: sequelize.TEXT,
      field: "vc_ejercicioguia"
    },
    vcTipoguia: {
      type: sequelize.TEXT,
      field: "vc_tipoguia"
    },
    tsFechaemisionguia: {
      type: sequelize.TEXT,
      field: "ts_fechaemisionguia"
    },
    vcTipospot: {
      type: sequelize.TEXT,
      field: "vc_tipospot"
    },
    dePorcentajeimpuesto: {
      type: sequelize.REAL,
      field: "de_porcentajeimpuesto"
    },
    deMontoimpuesto: {
      type: sequelize.REAL,
      field: "de_montoimpuesto"
    },
    inIproducto: {
      type: sequelize.INTEGER,
      field: "in_iproducto"
    },
    vcCodigoProducto: {
      type: sequelize.TEXT,
      field: "vc_codigo_producto"
    },
    vcPosicion: {
      type: sequelize.TEXT,
      field: "vc_posicion"
    },
    vcUnidadmedida: {
      type: sequelize.TEXT,
      field: "vc_unidadmedida"
    },
    dePreciototalitem: {
      type: sequelize.REAL,
      field: "de_preciototalitem"
    },
    nuSubtotalIgv: {
      type: sequelize.REAL,
      field: "nu_subtotal_igv"
    },
    nuSubtotalIsc: {
      type: sequelize.REAL,
      field: "nu_subtotal_isc"
    },
    nuPesoBruto: {
      type: sequelize.REAL,
      field: "nu_peso_bruto"
    },
    nuPesoNeto: {
      type: sequelize.REAL,
      field: "nu_peso_neto"
    },
    nuPesoTotal: {
      type: sequelize.REAL,
      field: "nu_peso_total"
    },
    nuDescuento: {
      type: sequelize.REAL,
      field: "nu_descuento"
    },
    idRegistroUnidad: {
      type: sequelize.TEXT,
      field: "vc_idregistrounidad"
    },
    idTablaUnidad: {
      type: sequelize.TEXT,
      field: "vc_idtablaunidad"
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
    tableName: 'fe_query_t_productoxcomprobantepago',
    timestamps: false
  }
);

module.exports = ProductoxComprobantePagoQuery;