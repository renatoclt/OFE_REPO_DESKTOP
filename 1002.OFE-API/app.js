sequelize = require("sequelize");
conexion = require('./servidor/configuracion/conexion');
express = require('express');
path = require('path');
logger = require('morgan');
cookieParser = require('cookie-parser');
bodyParser = require('body-parser');
routes = require('./servidor/rutas/rutasModulos');
hateoasLinker = require('express-hateoas-links');
constantes = require('./servidor/utilitarios/constantes');
servicios = require('./servidor/utilitarios/servicios')
dateFormat = require('dateformat');
var cors = require('cors')
LocalDateTime = require('js-joda').LocalDateTime;
var Client = require('node-rest-client').Client;
//excepcion = require('./servidor/utilitarios/excepcion');
app = express();
app.use(cors())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser({limit: '50mb'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//TODO app.use(require('express-jquery')('/jquery.js'));
app.use(hateoasLinker);
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  if (req.headers.origin) {
    res.set({
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Headers': 'Authorization, If-None-Match, If-Match, Accept, If-Modified-Since, Accept-Encoding, Accept-Language, Content-Type, If-Unmodified-Since',
        'Access-Control-Allow-Origin': req.headers.origin,
        'Access-Control-Expose-Headers': 'ETag,Content-Encoding,Vary,Last-Modified,Content-Language,Link,Content-Type'
    });
}
  next();
});

app.use('/', routes);

app.use(function (req, res, next) {
  const err = new Error('No Encontrado' );
  console.log(req);
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function (err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.use(function (err, req, res) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.get('/', (req, res) => {
  res.end('<h1>hola mundo desde express</h1>');
});

module.exports = app;