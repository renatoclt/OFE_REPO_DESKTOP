var configuracion = {
  "prueba":{
    "basededatos": "dbPrueba",
    "almacenamiento":"./1002.OFE-DATABASE/dbPrueba.sqlite",
    "dialecto": "sqlite"
  },
  "desarrollo":{
    "basedatos":"dbFacturacion",
    "almacenamiento":"./1002.OFE-DATABASE/dbFacturacion.sqlite",
    "dialecto": "sqlite"
  },
  "produccion":{
    "basedatos":"dbFacturacion",
    "almacenamiento":"./resources/dbFacturacion.sqlite",
    "dialecto": "sqlite"
  },
  "knex":{
    "cliente":"sqlite3",
    "almacenamiento":"./1002.OFE-DATABASE/dbFacturacion.sqlite"
  }
};

module.exports = configuracion;