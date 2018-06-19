conf = require('./configuracion_const')['knex'];

var knex = require("knex")({
    client: conf.cliente,
    connection: {
        filename: conf.almacenamiento
    },
    useNullAsDefault: false
});

module.exports = knex;