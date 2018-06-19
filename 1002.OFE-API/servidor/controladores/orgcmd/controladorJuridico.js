//var EntidadDTO = require("../../dtos/organizaciones/entidadDTO");
//var EntParametrosDTO = require("../../dtos/comprobantes/entParametrosDTO");
//var DominioEntDTO = require("../../dtos/organizaciones/dominioEntDTO");

var controladorJuridico = function (ruta, rutaEsp) {
    var nombreHateo = "hJuridico";
    var hateoas = require('./../../utilitarios/hateoas')({ baseUrl: "http://localhost:3000/v1" });
    var hateoasObj = require('./../../utilitarios/hateoasObj');

    hateoas.registerLinkHandler(nombreHateo, function (objecto) {
        var links = {
            "self": rutaEsp.concat('/') + objecto.id
        };
        return links;
    });

    hateoas.registerCollectionLinkHandler(nombreHateo, function (objectoCollection) {
        var links = {
            "self": rutaEsp
        };
        return links;
    });

    router.get(ruta.concat('/'), function (req, res, next) {
        var regxpag = 10
        pagina = 0;

        if (req.query.pagina) {
            pagina = req.query.pagina;
        }
        if (req.query.limite) {
            regxpag = req.query.limite;
        }
        // EntidadDTO.buscarEntidades(pagina, regxpag).then(function (resDTO) {
        //     var hateoasObj_entidad = Object.assign({}, hateoasObj);
        //     hateoasObj_entidad.type = nombreHateo;
        //     hateoasObj_entidad.data = resDTO.entidades;
        //     hateoasObj_entidad.nombreColeccion = "entidades";
        //     hateoasObj_entidad.ruta = rutaEsp;
        //     hateoasObj_entidad.paginacion.activo = true;
        //     hateoasObj_entidad.paginacion.totalreg = resDTO.cantidadReg;
        //     hateoasObj_entidad.paginacion.regxpag = regxpag;
        //     hateoasObj_entidad.paginacion.pagina = pagina;
        //     hateoasObj_entidad.busqueda.activo = false;
        //     res.json(hateoas.link(hateoasObj_entidad));
        // });
    });

    router.get(ruta.concat('/:id'), function (req, res, next) {
        // EntidadDTO.buscarEntidad(req.params.id).then(function (resDTO) {
        //     var hateoasObj_entidad = Object.assign({}, hateoasObj);
        //     hateoasObj_entidad.type = nombreHateo;
        //     hateoasObj_entidad.data = resDTO;
        //     hateoasObj_entidad.paginacion.activo = false;
        //     hateoasObj_entidad.busqueda.activo = false;
        //     res.json(hateoas.link(hateoasObj_entidad));
        // });
    });

    router.post(ruta.concat('/'), function (req, res) {
        // EntidadDTO.registrarEntidad(req.body).then(function (entidad) {
        //     DominioEntDTO.buscarPorIDyTipo(req.body.idDocumento, req.body.tipoDocumento).then(function (resDTO) {
        //         if (resDTO != null) {
        //             registrarEntParametro(entidad.id, req.body, resDTO);
        //         }
        //     });            
        // });
    });

    function registrarEntParametro(idEntidad, req, dominioEntResDTO) {
        var jsonDominioEnt = "{ tipo:" + dominioEntResDTO.descCorta + ", valor:" + dominioEntResDTO.codigo + "}";
        // var entParametrosDTO = {
        //     id: idEntidad,
        //     iParamEnt: req.tipoDocumento,
        //     json: jsonDominioEnt,
        //     usuarioCreacion: req.usuarioCreacion,
        //     usuarioModificacion: req.usuarioModifica,
        //     fechaCreacion: req.fechaCreacion,
        //     fechaModificacion: req.fechaModificacion,
        //     estado: req.estado,
        //     fechaSincronizado: req.fechaSincronizacion,
        //     estadoSincronizado: req.estadoSincronizado
        // };
        console.log(entParametrosDTO);
        EntParametrosDTO.registrarParametro(entParametrosDTO).then(function () {
            console.log("se realizo commit");
        }).catch(function (err) {
            console.log("error" + err);
        });
    }
};

module.exports = controladorJuridico;