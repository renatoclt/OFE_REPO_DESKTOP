var TipoPrecVenDTO = require("../../dtos/configuracion/tipoPrecVenDTO");

var controladorTipoprecioventa = function(ruta, rutaEsp){
    var nombreHateo = "hTipoprecioventa";
    var hateoas = require('./../../utilitarios/hateoas')({ baseUrl: "http://localhost:3000/v1" });
    var hateoasObj = require('./../../utilitarios/hateoasObj');

    hateoas.registerLinkHandler(nombreHateo, function (objecto) {
        var links = {
            "self": {
                "href": "http://localhost:3000/v1"+rutaEsp.concat('/') + objecto.idTipoPrecioVenta
            }
        };
        return links;
    });
    
    hateoas.registerCollectionLinkHandler(nombreHateo, function (objectoCollection) {
        var links = {
            "self": {
                "href": "http://localhost:3000/v1"+rutaEsp
            }
        };
        return links;
    });
    
    router.get(ruta.concat('/'), function (req, res, next) {
        TipoPrecVenDTO.todos().then(function (resDTO) {
            var hateoasObj_n = Object.assign({},hateoasObj);
            hateoasObj_n.type = nombreHateo;
            hateoasObj_n.data = resDTO;
            hateoasObj_n.nombreColeccion = "tipoPrecioVentaRedises";
            hateoasObj_n.ruta = rutaEsp;
            hateoasObj_n.paginacion.activo = false; 
            hateoasObj_n.busqueda.activo = false;
            res.json(hateoas.link(hateoasObj_n));
        });
    });

    router.get(ruta.concat('/:id'), function (req, res, next) {
        TipoPrecVenDTO.buscarId(req.params.id).then(function (resDTO) {
            var hateoasObj_n = Object.assign({},hateoasObj);
            hateoasObj_n.type = nombreHateo;
            hateoasObj_n.data = resDTO;
            hateoasObj_n.paginacion.activo = false;
            hateoasObj_n.busqueda.activo = false;
            res.json(hateoas.link(hateoasObj_n));
        });
    });
}

module.exports = controladorTipoprecioventa;