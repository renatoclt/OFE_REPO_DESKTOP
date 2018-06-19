var navC = nav.hijos['productos'];

var controladoresInveqry = function (ruta) {

    /**
     * Controladores
     */
    productos = require('../controladores/inveqry/controladorProductos')(ruta.concat(navC.hijos['productos'].ruta),navC.hijos['productos'].ruta);

}

module.exports = controladoresInveqry;