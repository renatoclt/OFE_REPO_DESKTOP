var navC = nav.hijos['offline'];

var controladoresOffline = function (ruta) {

    /**
     * Controladores
     */
    sincronizacion = require('../controladores/offline/controladorSincronizacion')(ruta.concat(navC.hijos['sincronizacion'].ruta),navC.hijos['sincronizacion'].ruta);
    usuario = require('../controladores/offline/controladorUsuario')(ruta.concat(navC.hijos['usuario'].ruta),navC.hijos['usuario'].ruta);
    idioma  = require('../controladores/offline/controladorIdioma')(ruta.concat(navC.hijos['idioma'].ruta),navC.hijos['idioma'].ruta);
    archivos = require('../controladores/offline/controladorArchivo')(ruta.concat(navC.hijos['archivo'].ruta),navC.hijos['archivo'].ruta);
    sincronizacionRetencion = require('../controladores/offline/contoroladorSincronizacionRetencion')(ruta.concat(navC.hijos['sincronizacionRetencion'].ruta),navC.hijos['sincronizacionRetencion'].ruta);
    sincronizacionPercepcion = require('../controladores/offline/controladorSincronizacionPercepcion')(ruta.concat(navC.hijos['sincronizacionPercepcion'].ruta),navC.hijos['sincronizacionPercepcion'].ruta);
    sincronizacionFacturas = require('../controladores/offline/controladorSincronizacionFactura')(ruta.concat(navC.hijos['sincronizacionFacturas'].ruta),navC.hijos['sincronizacionFacturas'].ruta);
    sincronizacionBoletas = require('../controladores/offline/controladorSincronizacionBoleta')(ruta.concat(navC.hijos['sincronizacionBoletas'].ruta),navC.hijos['sincronizacionBoletas'].ruta);
    entidad = require('../controladores/offline/controladorEntidad')(ruta.concat(navC.hijos['entidad'].ruta),navC.hijos['entidad'].ruta);
    encriptacion = require('../controladores/offline/controladorEncriptacion')(ruta.concat(navC.hijos['encriptacion'].ruta),navC.hijos['encriptacion'].ruta);
    obtenerEmpresaOffline = require('../controladores/offline/controladorEmpresaOffline')(ruta.concat(navC.hijos['obtenerEmpresaOffline'].ruta),navC.hijos['obtenerEmpresaOffline'].ruta);
}
module.exports = controladoresOffline;