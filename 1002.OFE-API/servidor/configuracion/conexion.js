conf = require('./configuracion_const')['produccion'];

const sqlite = require('sqlite3');
const db = new sqlite.Database(conf.almacenamiento);


var conexion = new sequelize(conf.basedatos, null, null, {
  dialect: conf.dialecto,
  storage: conf.almacenamiento
});

conexion
  .authenticate()
  .then(function(err) {
    console.log('Conexion establecida con la base de datos.');
  }, function (err) {
    console.log('Error de conexion de base de datos:', err);
  });

module.exports = conexion;