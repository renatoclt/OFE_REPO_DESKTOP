var UsuarioDTO = require("../../dtos/msoffline/usuarioDTO");
var bcrypt = require('bcrypt');
//var EntParametrosDTO = require("../../dtos/comprobantes/entParametrosDTO");
//var DominioEntDTO = require("../../dtos/organizaciones/dominioEntDTO");

var controladorUsuario = function (ruta, rutaEsp) {
    var nombreHateo = "hUsuario";
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
        UsuarioDTO.buscarUsuarios(pagina, regxpag).then(function (resDTO) {
            var hateoasObj_usuario = Object.assign({}, hateoasObj);
            hateoasObj_usuario.type = nombreHateo;
            hateoasObj_usuario.data = resDTO.usuarios;
            hateoasObj_usuario.nombreColeccion = "usuarios";
            hateoasObj_usuario.ruta = rutaEsp;
            hateoasObj_usuario.paginacion.activo = true;
            hateoasObj_usuario.paginacion.totalreg = resDTO.cantidadReg;
            hateoasObj_usuario.paginacion.regxpag = regxpag;
            hateoasObj_usuario.paginacion.pagina = pagina;
            hateoasObj_usuario.busqueda.activo = false;
            res.json(hateoas.link(hateoasObj_usuario));
        });
    });

    router.get(ruta.concat('/:id'), function (req, res, next) {
        UsuarioDTO.buscarUsuario(req.params.id).then(function (resDTO) {
            var hateoasObj_usuario = Object.assign({}, hateoasObj);
            hateoasObj_usuario.type = nombreHateo;
            hateoasObj_usuario.data = resDTO;
            hateoasObj_usuario.paginacion.activo = false;
            hateoasObj_usuario.busqueda.activo = false;
            res.json(hateoas.link(hateoasObj_usuario));
        });
    });

    router.get(ruta.concat('/search'), function (req, res, next) {
        UsuarioDTO.buscarUsuario(req.params.id).then(function(usuario){
            res.json(hateoas.link(nombreHateo,usuario));
        });
    });
    
    router.post(ruta.concat('/'),function(req,res){
        UsuarioDTO.registrarUsuario(req.body)
        .then(function(entidad){
            res.json(entidad);
        });

    });

    router.get(ruta.concat('/search/buscar'), function (req, res, next) {
        var nombreUsuario=null,
        password=null,
            pagina=0,
            limite=0,
            ordenar=0;

        if (req.query.nombreusuario){
            nombreUsuario = req.query.nombreusuario;
        }
        if (req.query.password && req.query.password!=""){
            password = req.query.password;
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
/*       
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
        res.setHeader('Access-Control-Allow-Credentials', true); // If needed
*/
        UsuarioDTO.buscarProductoEspecifico(pagina,limite,nombreUsuario,password,ordenar).then(function(resDTO){
            if(resDTO.hasOwnProperty('usuarios'))
            {
                console.log('//////////////');
                var usuarios = resDTO.usuarios;
                res.json(resDTO.usuarios);
            }     
            else{
                res.json({});
            } 
            
        });
    });

};

module.exports = controladorUsuario;