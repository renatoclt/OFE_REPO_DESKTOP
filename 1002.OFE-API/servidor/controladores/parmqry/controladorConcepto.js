/**
 * @author
 */

var ConceptoDTO = require("../../dtos/configuracion/conceptoDTO");

var controladorConcepto = function (ruta, rutaEsp) {
    var nombreHateo = "hConcepto";
    var hateoas = require('./../../utilitarios/hateoas')({ baseUrl: "http://localhost:3000/v1" });
    var hateoasObj = require('./../../utilitarios/hateoasObj');

    hateoas.registerLinkHandler(nombreHateo, function (data) {
        var links = {
            "self": {
                "href": "http://localhost:3000/v1" + rutaEsp.concat('/') + data.idConcepto
            },
            "conceptoRedis": {
                "href": "http://localhost:3000/v1" + rutaEsp.concat('/') + data.idConcepto
            }
        };
        return links;
    });

    hateoas.registerCollectionLinkHandler(nombreHateo, function (objectoCollection) {
        var links = {
            "self": rutaEsp
        };
        return links;
    });

    router.get(ruta.concat("/"), async function (req, res) {
        var regxpag = 10
        pagina = 0;

        if (req.query.pagina) {
            pagina = req.query.pagina;
        }
        if (req.query.limite) {
            regxpag = req.query.limite;
        }

        var data = await ConceptoDTO.listar();
        var hateoasObj_concepto = Object.assign({}, hateoasObj);
        hateoasObj_concepto.type = nombreHateo;
        hateoasObj_concepto.data = data.map(function(controlador){
            return controlador.dataValues;
        });
        hateoasObj_concepto.nombreColeccion = "conceptoRedises";
        hateoasObj_concepto.ruta = rutaEsp;
        hateoasObj_concepto.paginacion.activo = false;

        res.json(hateoas.link(hateoasObj_concepto));
    });
}

module.exports = controladorConcepto;