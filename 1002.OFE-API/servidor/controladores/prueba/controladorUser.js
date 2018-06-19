var controladorUser = function(ruta){

  var UserDTO = require("../../dtos/prueba/UserDTO");

  router.get('/', function(req, res, next) {
    res.end('<h1>hola mundo desde express</h1>');
  });
}


module.exports = controladorUser;
