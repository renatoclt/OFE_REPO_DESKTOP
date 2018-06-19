/**
 * persistencia de la tabla t_comprobantepago en la variable ComprobantePago
 * Modificado --- creado --/--/----
 * @author Renato creado 09/01/2018
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 */
var Documento = conexion.define(
    't_comprobantepago',{
        id:{//in_idcomprobantepago
            type: sequelize.INTEGER,
            field: "",
            autoIncrement: true,
            unique: true,
            primaryKey: true,
            allowNull:false   
        },
        numeroComprobante: {
            type: sequelize.TEXT,
            field: "ch_numerocomprobantepago",     
        },
        idProveedor: {
            type: sequelize.TEXT,
            field: "in_idusuarioproveedor",     
        },
        idOrgCompradora: {
            type: sequelize.TEXT,
            field: "in_idorganizacioncompradora",     
        },
        rucProveedor: {
            type: sequelize.TEXT,
            field: "ch_rucproveedor",     
        },
        rucComprador: {
            type: sequelize.TEXT,
            field: "ch_ruccomprador",     
        },
        estadoComprobante: {
            type: sequelize.TEXT,
            field: "ch_estadocomprobantepago",     
        },
        fplazoPago: {
            type: sequelize.TEXT,
            field: "ch_flagplazopago",     
        },
        fregistroEliminado: {
            type: sequelize.TEXT,
            field: "ch_flagregistroeliminado",     
        },
        idTablaTipoComprobante: {
            type: sequelize.TEXT,
            field: "vc_idtablatipocomprobante",     
        },
        idRegistroTipoComprobante: {
            type: sequelize.TEXT,
            field: "vc_idregistrotipocomprobante",     
        },
        idTipoComprobante: {
            type: sequelize.TEXT,
            field: "ch_idtipocomprobante",     
        },

        // FIN PENDIENTES

        idGuia: {
            type: sequelize.TEXT,
            field: "in_idguia",     
        },
        idUsuarioCreacion: {
            type: sequelize.TEXT,
            field: "in_idusuariocreacion",     
        },
        idUsuarioModificacion: {
            type: sequelize.TEXT,
            field: "in_idusuariomodificacion",     
        },
        razonSoProveedor: {
            type: sequelize.TEXT,
            field: "vc_razonsocialproveedora",     
        },
        razonSoComprador: {
            type: sequelize.TEXT,
            field: "vc_razonsocialcompradora",     
        },
        moneda: {
            type: sequelize.TEXT,
            field: "ch_monedacomprobantepago_",     
        },
        fecCreacion: {
            type: sequelize.TEXT,
            field: "ts_fechacreacion",     
        },
        fecRegistro: {
            type: sequelize.TEXT,
            field: "ts_fecharegistro",     
        },
        ts_fechaemision: {
            type: sequelize.TEXT,
            field: "fecEmision",     
        },
        fecVencimiento: {
            type: sequelize.TEXT,
            field: "ts_fechavencimiento",     
        },
        fecEnvio: {
            type: sequelize.TEXT,
            field: "ts_fechaenvio",     
        },
        fecCambioEstado: {
            type: sequelize.TEXT,
            field: "ts_fechacambioestado",     
        },
        obsComprobante: {
            type: sequelize.TEXT,
            field: "vc_obscomprobantepago",     
        },
        de_impuestogvr: {
            type: sequelize.TEXT,
            field: "impuestoGvr",     
        },
        tipoComprobante: {
            type: sequelize.TEXT,
            field: "vc_tipocomprobante",     
        },
        estado: {
            type: sequelize.TEXT,
            field: "ch_estadocomprobantepagocomp",     
        },
        version: {
            type: sequelize.TEXT,
            field: "in_version",     
        },
        numGuia: {
            type: sequelize.TEXT,
            field: "vc_numguia",     
        },
        montoComprobante: {
            type: sequelize.TEXT,
            field: "vc_montocomprobantepago",     
        },
        logo: {
            type: sequelize.TEXT,
            field: "vc_logo",     
        },
        firma: {
            type: sequelize.TEXT,
            field: "vc_firma",     
        },
        montoPagado: {
            type: sequelize.TEXT,
            field: "de_pagomontopagado",     
        },
        tipoDocumento: {
            type: sequelize.TEXT,
            field: "vc_dctotipodocumento",     
        },
        numDescDocumento: {
            type: sequelize.TEXT,
            field: "vc_dctonrodocumento",     
        },
        dctoMoneda: {
            type: sequelize.TEXT,
            field: "vc_dctomoneda",     
        },
        dctoMonto: {
            type: sequelize.TEXT,
            field: "de_dctomonto",     
        },
        tipoFactura: {
            type: sequelize.TEXT,
            field: "vc_tipofactura",     
        },
        igv: {
            type: sequelize.TEXT,
            field: "de_impuesto1",     
        },
        isc: {
            type: sequelize.TEXT,
            field: "de_impuesto2",     
        },
        otrosTributos: {
            type: sequelize.TEXT,
            field: "de_impuesto3",     
        },
        deDescuento: {
            type: sequelize.TEXT,
            field: "de_descuento",     
        },
        deImporteRef: {
            type: sequelize.TEXT,
            field: "de_importereferencial",     
        },
        deSubtotal: {
            type: sequelize.TEXT,
            field: "de_subtotalcomprobantepago",     
        },
        deTotal: {
            type: sequelize.TEXT,
            field: "de_totalcomprobantepago",     
        },
        idImpuesto: {
            type: sequelize.TEXT,
            field: "in_idindicadorimpuesto",     
        },
        descImpuesto: {
            type: sequelize.TEXT,
            field: "vc_indicadorimpuesto",     
        },
        tipoItem: {
            type: sequelize.TEXT,
            field: "ch_opregfac",     
        },
        fecRetencion: {
            type: sequelize.TEXT,
            field: "ts_fechadocumentoret",     
        },
        tipoEmision: {
            type: sequelize.TEXT,
            field: "ch_tipoemision",     
        },
        porcentDetracction: {
            type: sequelize.TEXT,
            field: "vc_porcentajedetraccion",     
        },
        idEstado: {
            type: sequelize.TEXT,
            field: "vc_idtablaestado",     
        },
        idEstadoProv: {
            type: sequelize.TEXT,
            field: "vc_idregistroestadoprov",     
        },
        idEstadoComp: {
            type: sequelize.TEXT,
            field: "vc_idregistroestadocomp",     
        },
        idMoneda: {
            type: sequelize.TEXT,
            field: "vc_idtablamoneda",     
        },
        idRegMoneda: {
            type: sequelize.TEXT,
            field: "vc_idregistromoneda",     
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
      tableName: '',
      timestamps: false
    }
);

module.exports = DocReferencia;
