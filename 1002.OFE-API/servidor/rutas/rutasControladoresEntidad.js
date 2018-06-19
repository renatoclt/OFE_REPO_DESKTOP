var navC = nav.hijos['entidades'];

var controladoresEntidad = function (ruta) {

    juridico = require('../controladores/orgcmd/controladorJuridico')(ruta.concat(navC.hijos['juridico'].ruta),navC.hijos['juridico'].ruta);
    //juridico = require('../controladores/juridico/controladorJuridico')(ruta.concat(navC.hijos['juridico'].ruta), navC.hijos['juridico'].ruta);
    //juridico = require('../controladores/juridico/controladorJuridico')('/entidad/juridico', '/juridico');

}

module.exports = controladoresEntidad;