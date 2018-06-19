
/**
 * @author --- Modificado **-**-****
 * @author renato creado 18-12-2017 
 */
var Maestra = require('../../dtos/msparametrosquery/maestraDTO');

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
        let valor = 0; 
        for(var propiedad in data[0]){
            if(propiedad[0].hasOwnProperty(tabla))
                valor = propiedad[0].tabla;
        }
        let codigo = 0;
        for(var propiedad in data[0]){
            if(propiedad[0].hasOwnProperty(codigo))
                codigo = propiedad[0].codigo;
        }
        var links = {
            "self": {
                "href": "http://localhost:3000/v1"+rutaEsp.concat('/',valor,codigo)
            },
            "maestraRedis":{
                "href":  "http://localhost:3000/v1"+rutaEsp.concat('/',valor, codigo) 
            }
        };
        return links;
    });
    
    hateoas.registerCollectionLinkHandler(nombreHateo, function (data) {
        let valor = 0; 
        for(var propiedad in data[0]){
            if(propiedad == 'tabla')
                valor = data[0].tabla;
        }
        var links = {
            "self": {
                "href": "http://localhost:3000/v1"+ rutaEsp.concat('/','search/filtros?tabla=', valor)
            }
        };
        return links;
    });


    /**
     * Enviamos la ruta 
     * y declaramos una funcion asincrona q espera los datos de la tabla
     */
    router.get(ruta.concat('/search/filtros'), async function (req, res) {
        if (req.query.tabla){
            let tabla = req.query.tabla;
            var data = await Maestra.filtro(tabla);  
            var hateoasObj_n = Object.assign({},hateoasObj);
            hateoasObj_n.type = nombreHateo;
            hateoasObj_n.data =  data.map(function (maestra) {
                return maestra.dataValues;
            });            
            hateoasObj_n.nombreColeccion = "maestraRedises";
            hateoasObj_n.ruta = rutaEsp;
            hateoasObj_n.paginacion.activo = false;
            hateoasObj_n.busqueda.activo = false;
            res.json(hateoas.link(hateoasObj_n));
        }
        else{
            res.send('error');
        }
    });
};

module.exports = contoladorMaestras;