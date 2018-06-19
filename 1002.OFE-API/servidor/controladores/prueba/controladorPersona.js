knex = require('./../../configuracion/conexionPrueba');

var controladorPersona = function (ruta) {

  router.get(ruta.concat('/'), function (req, res, next) {

    let result = knex.select("FirstName").from("User");

    result.then(function (rows) {
      res.json(rows);
    })
      .catch(function (reason) {
        res.json({ "mensaje": "error al conectar a la base de datos" });
      });
  });
  
};

module.exports = controladorPersona;