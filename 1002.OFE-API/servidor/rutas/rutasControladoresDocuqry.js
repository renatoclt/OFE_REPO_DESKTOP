var navC = nav.hijos['docuqry'];

var controladoresDocuqry = function (ruta) {


    comprobantesquery = require('../controladores/docuqry/controladorReferenciasQuery')(ruta.concat(navC.hijos['referencias'].ruta),navC.hijos['referencias'].ruta);

}

module.exports = controladoresDocuqry;