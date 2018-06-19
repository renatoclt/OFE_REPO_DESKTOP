var ProductoDTO = require("../../dtos/organizaciones/productoDTO");
var QueryProductoDTO = require('../../dtos/msoffline/queryProductoDTO');

var controladorProductos = function (ruta, rutaEsp){ 
    var nombreHateo = "hProductos";
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
    
        ProductoDTO.todos(pagina, regxpag).then(function (resDTO) {
            var hateoasObj_producto = Object.assign({},hateoasObj);
            hateoasObj_producto.type = nombreHateo;
            hateoasObj_producto.data = resDTO.productos;
            hateoasObj_producto.nombreColeccion = "productos";
            hateoasObj_producto.ruta = rutaEsp;
            hateoasObj_producto.paginacion.activo = true;
            hateoasObj_producto.paginacion.totalreg = resDTO.cantidadReg;
            hateoasObj_producto.paginacion.regxpag = regxpag;
            hateoasObj_producto.paginacion.pagina = pagina;
            hateoasObj_producto.busqueda.activo = false;
            res.json(hateoas.link(hateoasObj_producto));
        });
    });
    
    router.get(ruta.concat('/:id'), function (req, res, next) {
        ProductoDTO.buscarProductoId(req.params.id).then(function(producto){
            var hateoasObj_producto = Object.assign({},hateoasObj);
            hateoasObj_producto.type = nombreHateo;
            hateoasObj_producto.data = producto;
            hateoasObj_producto.paginacion.activo = false;
            hateoasObj_producto.busqueda.activo = false;
            res.json(hateoas.link(hateoasObj_producto));
        });
    });

    router.get(ruta.concat('/search/codigos'), function (req, res, next) {
        console.log('ingrese');
        var codigo=0,
            descripcion="",
            pagina=0,
            limite=0,
            ordenar=0;

        if (req.query.codigo && req.query.codigo>0){
            codigo = req.query.codigo;
        }
        if (req.query.pagina && req.query.pagina>0){
            pagina = req.query.pagina;
        }
        if (req.query.limite && req.query.limite>0){
            limite = req.query.limite;
        }
        if (req.query.ordenar && req.query.ordenar>0){
            ordenar = req.query.ordenar;
        }
        
        QueryProductoDTO.buscarPorCodigo(pagina,limite,codigo,ordenar).then(function(resDTO){
            console.log(resDTO);
            var hateoasObj_producto = Object.assign({},hateoasObj);
            hateoasObj_producto.type = nombreHateo;
            hateoasObj_producto.data = resDTO.productos ;
            hateoasObj_producto.nombreColeccion = "productos";
            hateoasObj_producto.ruta = rutaEsp;
            hateoasObj_producto.paginacion.activo = true;
            hateoasObj_producto.paginacion.totalreg = resDTO.cantidadReg;
            hateoasObj_producto.paginacion.regxpag = limite;
            hateoasObj_producto.paginacion.pagina = pagina;
            hateoasObj_producto.busqueda.activo = true;
            hateoasObj_producto.busqueda.parametros = {codigo:codigo,descripcion:descripcion,ordenar:ordenar};
            hateoasObj_producto.busqueda.ruta = "/search/buscar";
            res.json(hateoas.link(hateoasObj_producto));           
        });
    });

    router.get(ruta.concat('/search/buscar'), function (req, res, next) {
        var codigo=0,
            descripcion="",
            pagina=0,
            limite=0,
            ordenar=0;

        if (req.query.codigo && req.query.codigo>0){
            codigo = req.query.codigo;
        }
        if (req.query.descripcion && req.query.descripcion!=""){
            descripcion = req.query.descripcion;
        }
        if (req.query.pagina && req.query.pagina>0){
            pagina = req.query.pagina;
        }
        if (req.query.limite && req.query.limite>0){
            limite = req.query.limite;
        }
        if (req.query.ordenar && req.query.ordenar>0){
            ordenar = req.query.ordenar;
        }
        
        ProductoDTO.buscarProductoEspecifico(pagina,limite,codigo,descripcion,ordenar).then(function(resDTO){
            var hateoasObj_producto = Object.assign({},hateoasObj);
            hateoasObj_producto.type = nombreHateo;
            hateoasObj_producto.data = resDTO.productos;
            hateoasObj_producto.nombreColeccion = "productoes";
            hateoasObj_producto.ruta = rutaEsp;
            hateoasObj_producto.paginacion.activo = true;
            hateoasObj_producto.paginacion.totalreg = resDTO.cantidadReg;
            hateoasObj_producto.paginacion.regxpag = limite;
            hateoasObj_producto.paginacion.pagina = pagina;
            hateoasObj_producto.busqueda.activo = true;
            hateoasObj_producto.busqueda.parametros = {codigo:codigo,descripcion:descripcion,ordenar:ordenar};
            hateoasObj_producto.busqueda.ruta = "/search/buscar";
            res.json(hateoas.link(hateoasObj_producto));           
        });
    });
};

module.exports = controladorProductos;