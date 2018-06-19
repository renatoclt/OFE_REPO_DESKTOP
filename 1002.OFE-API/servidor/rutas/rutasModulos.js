router = require('express').Router();
nav = require('./rutas_const')['nav'];
/**
 * @author jose felix ccopacondori Modifico 23/01/2018
 * @author Roycer Cordova
 * @description Importamos las rutas de los diferentes archivos
 */

/**
 * modulos
 */
inveqry = require('./rutasControladoresInveqry')(nav.ruta);
parmqry = require('./rutasControladoresParmqry')(nav.ruta);
entidad = require('./rutasControladoresEntidad')(nav.ruta);
docucmd = require('./rutasControladoresDocucmd')(nav.ruta);
docuqry = require('./rutasControladoresDocuqry')(nav.ruta);
orgacmd = require('./rutasControladoresOrgacmd')(nav.ruta);
offline = require('./rutasControladoresOffline')(nav.ruta);

module.exports = router;