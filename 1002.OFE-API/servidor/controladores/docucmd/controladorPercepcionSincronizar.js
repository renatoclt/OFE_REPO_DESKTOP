var PercepcionDTO = require("../../dtos/comprobante/percepcionDTO");

var controladorPercepciones = function (ruta, rutaEsp) {
    var nombreHateo = "hComprobante";
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
        PercepcionDTO.buscarComprobantes(pagina, regxpag).then(function (resDTO) {

            var hateoasObj_comprobante = Object.assign({}, hateoasObj);
            hateoasObj_comprobante.type = nombreHateo;
            hateoasObj_comprobante.data = resDTO.comprobantes;
            hateoasObj_comprobante.nombreColeccion = "percepciones";
            hateoasObj_comprobante.ruta = rutaEsp;
            hateoasObj_comprobante.paginacion.activo = true;
            hateoasObj_comprobante.paginacion.totalreg = resDTO.cantidadReg;
            hateoasObj_comprobante.paginacion.regxpag = regxpag;
            hateoasObj_comprobante.paginacion.pagina = pagina;
            hateoasObj_comprobante.busqueda.activo = false;         
            res.json(hateoas.link(hateoasObj_comprobante));
        });
    });

    router.get(ruta.concat('/:id'), function (req, res, next) {
        PercepcionDTO.buscarComprobante(req.params.id).then(function (resDTO) {
            var hateoasObj_comprobante = Object.assign({}, hateoasObj);
            hateoasObj_comprobante.type = nombreHateo;
            hateoasObj_comprobante.data = resDTO;
            hateoasObj_comprobante.paginacion.activo = false;
            hateoasObj_comprobante.busqueda.activo = false;
            res.json(hateoas.link(hateoasObj_comprobante));
        });
    });

    router.get(ruta.concat('/search/buscar'), async function (req, res, next) {
        var numeroComprobante="",
            generado="",
            estado="",
            fechaInicio=new Date(),
            fechaFin=new Date(),
            estadoSincronizado="",
            pagina=10,
            limite=0,
            ordenar=0;
            console.log('/////////////////***********************************//////////////////////////////////');
        if (req.query.numeroComprobante && req.query.numeroComprobante!=""){
            numeroComprobante = req.query.numeroComprobante;
        }
        if (req.query.generado && req.query.generado!=""){
            generado = req.query.generado;
        }
        if (req.query.estado && req.query.estado!=""){
            estado = req.query.estado;
        }
        if (req.query.fechaInicio && req.query.fechaInicio!=""){
            fechaInicio = req.query.fechaInicio;
        }
        if (req.query.fechaFin && req.query.fechaFin!=""){
            fechaFin = req.query.fechaFin;
        }
        if (req.query.estadoSincronizado && req.query.estadoSincronizado<2){
            estadoSincronizado = req.query.estadoSincronizado;
        }
        if (req.query.pagina && req.query.pagina>0){
            pagina = req.query.pagina;
        }
        if (req.query.size && req.query.size>0){
            limite = req.query.size;
        }
        
        await PercepcionDTO.buscarComprobanteDinamico(pagina, limite, numeroComprobante,generado,estado,fechaInicio,fechaFin,estadoSincronizado)
        .then(function (resDTO) {
            var hateoasObj_comprobante = Object.assign({}, hateoasObj);
            hateoasObj_comprobante.type = nombreHateo;
            hateoasObj_comprobante.data = resDTO.comprobantes;
            hateoasObj_comprobante.nombreColeccion = "retenciones";
            hateoasObj_comprobante.ruta = rutaEsp;
            hateoasObj_comprobante.paginacion.activo = true;
            hateoasObj_comprobante.paginacion.totalreg = resDTO.cantidadReg;
            hateoasObj_comprobante.paginacion.regxpag = limite;
            hateoasObj_comprobante.paginacion.pagina = pagina;
            hateoasObj_comprobante.busqueda.activo = true; 
            hateoasObj_comprobante.busqueda.parametros = {numeroComprobante:numeroComprobante,generado:generado,estado:estado,estadoSincronizado:estadoSincronizado,fechaInicio:fechaInicio,fechaFin:fechaFin};
            hateoasObj_comprobante.busqueda.ruta = "/search/buscar";        
            res.json(hateoas.link(hateoasObj_comprobante));
        });
    });

};

module.exports = controladorPercepciones;