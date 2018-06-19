var navC = nav.hijos['docucmd'];

var controladoresInveqry = function (ruta) {

    /**
     * Controladores
     */
    //documentos = require('../controladores/docucmd/controladorComprobante')(ruta.concat(navC.hijos['documento'].ruta),navC.hijos['documento'].ruta);

    documentos = require('../controladores/docucmd/controladorComprobante')(ruta.concat(navC.hijos['documento'].ruta),navC.hijos['documento'].ruta);
    retenciones = require('../controladores/docucmd/controladorRetencionSincronizar')(ruta.concat(navC.hijos['retenciones'].ruta),navC.hijos['retenciones'].ruta);
    facturas = require('../controladores/docucmd/controladorFacturaSincronizar')(ruta.concat(navC.hijos['facturas'].ruta),navC.hijos['facturas'].ruta);
    boletas = require('../controladores/docucmd/controladorBoletaSincronizar')(ruta.concat(navC.hijos['boletas'].ruta),navC.hijos['boletas'].ruta);
    percepcion = require('../controladores/docucmd/controladorPercepcion')(ruta.concat(navC.hijos['percepcion'].ruta),navC.hijos['percepcion'].ruta);
    documento = require('../controladores/docucmd/controladorDocumentoCmd')(ruta.concat(navC.hijos['documento'].ruta),navC.hijos['documento'].ruta);
    comprobantesquery = require('../controladores/docucmd/controladorComprobanteQuery')(ruta.concat(navC.hijos['documentoquery'].ruta),navC.hijos['documentoquery'].ruta);
    baja = require('../controladores/docucmd/controladorBaja')(ruta.concat(navC.hijos['baja'].ruta),navC.hijos['baja'].ruta);
    pdfretencion = require('../controladores/pdf/controladorPdf')(ruta.concat(navC.hijos['pdfretencion'].ruta),navC.hijos['pdfretencion'].ruta);
    retencionesIndividuales= require('../controladores/docucmd/controladorRetencionIndividual')(ruta.concat(navC.hijos['retencion'].ruta),navC.hijos['retencion'].ruta);
}

module.exports = controladoresInveqry;
