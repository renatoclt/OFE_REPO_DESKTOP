/**
 * @author renato Modificado 10-01-2018
 * @author renato creado 18-12-2017 
 */
var EstadoComprobante = require('../../dtos/msparametrosquery/estadoComprobanteDTO');

/**
 * Controlador de la tabla maestra 
 * 
 * @param {*} ruta ruta del servicio
 * @param {*} rutaEsp ruta para el hateos 
 */
var contoladorMaestras =  function (ruta, rutaEsp){ 
    /**
     * Hateo aun no se q hace
     * son 3 variables y 2 funciones
     */
    var nombreHateo = "hMaestras";
    var hateoas = require('./../../utilitarios/hateoas')({ baseUrl: "http://localhost:3000/v1" });
    var hateoasObj = require('./../../utilitarios/hateoasObj');
    hateoas.registerLinkHandler(nombreHateo, function (data) {
        console.log(data);
        var links = {
            "self": {
                "href": "http://localhost:3000/v1"+rutaEsp.concat('/',data.idEstadoComprobante)
            },
            "estadosComprobanteRedis":{
                "href":  "http://localhost:3000/v1"+rutaEsp.concat('/',data.idEstadoComprobante) 
            }
        };
        return links;
    });
    
    hateoas.registerCollectionLinkHandler(nombreHateo, function (data) {
        var links = {
            "self": {
                "href": "http://localhost:3000/v1"+ rutaEsp.concat('/')
            }
        };
        return links;
    });

    /**
     * Enviamos la ruta En esta funcion se listara todas los estados de comprobantes 
     * y declaramos una funcion asincrona 
     */
    router.get(ruta.concat('/'), async function (req, res) {
        var data = await EstadoComprobante.listar();  
        var hateoasObj_n = Object.assign({},hateoasObj);
        hateoasObj_n.type = nombreHateo;
        hateoasObj_n.data =  data.map(function (estadoComprobante) {
            return estadoComprobante.dataValues;
        });
        hateoasObj_n.nombreColeccion = "estadosComprobanteRedises";
        hateoasObj_n.ruta = rutaEsp;
        hateoasObj_n.paginacion.activo = false;
        hateoasObj_n.busqueda.activo = false;
        res.json(hateoas.link(hateoasObj_n));
    });
};

module.exports = contoladorMaestras;