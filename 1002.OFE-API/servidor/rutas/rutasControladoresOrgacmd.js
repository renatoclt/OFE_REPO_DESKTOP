var navC = nav.hijos['orgacmd'];

var controladoresInveqry = function (ruta) {

    organizaciones = require('../controladores/docucmd/controladorOrganizaciones')(ruta.concat(navC.hijos['organizaciones'].ruta),navC.hijos['organizaciones'].ruta);

}

module.exports = controladoresInveqry;