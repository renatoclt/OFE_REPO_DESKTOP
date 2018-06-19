    var nuevoComprobante=require('../../modelos/msdocucmd/nuevoComprobanteDTO');
    var EntidadQueryDTO = require("../../dtos/msdocucmd/EntidadQueryDTO");
    var baseUrl_ = "http://localhost:3000/v1";
    LocalDateTime = require('js-joda').LocalDateTime;
    excepcion = require('../../utilitarios/excepcion');
    var controladorQueryEntidades = function (ruta, rutaEsp) {
            var nombreHateo = "hOrganizaciones";
            var hateoas = require('./../../utilitarios/hateoas')({ baseUrl:baseUrl_});
            var hateoasObj = require('./../../utilitarios/hateoasObj');
        
        hateoas.registerLinkHandler(nombreHateo, function (objecto) {
            var links = {
            "self":{
                        "href":baseUrl_+ rutaEsp.concat('/') + objecto.documento
            }
            };
            return links;
        });

        hateoas.registerCollectionLinkHandler(nombreHateo, function (objectoCollection) {
            var links = {
                        "self": { 
                            "href": baseUrl_+ rutaEsp+'/'
                        }
            };
            return links;
        });

        router.get(ruta.concat('//?'), function (req, res, next) {
            var nuevo=nuevoComprobante;
            if (req.query.denominacion == undefined) {
                res.status(400).send({"message":'Solicitud incorrecta: Revisar parametros error de peticion'});
            } else {
                var denominacion = "",
                    idTipoDocumento = "-1",
                    page = 0,
                    size = 5;

                if (req.query.denominacion && req.query.denominacion != "") {
                    denominacion = req.query.denominacion;
                }
                if (req.query.idTipoDocumento && req.query.idTipoDocumento != "") {
                    idTipoDocumento = req.query.idTipoDocumento;
                }
                if (req.query.page && req.query.page > 0) {
                    page = req.query.page;
                }
                if (req.query.size && req.query.size > 0) {
                    size = req.query.size;
                }

                EntidadQueryDTO.buscarEntidades(idTipoDocumento, denominacion
                    , page, size)
                    .then(function (resDTO) {
                    /*  if (resDTO.cantidadReg == 0){
                            res.status(404).send(excepcion.NOT_FOUND);
                        }else{*/
                            var hateoasObj_organizaciones = Object.assign({}, hateoasObj);
                            hateoasObj_organizaciones.type = nombreHateo;
                            hateoasObj_organizaciones.data = resDTO.entidades;
                            hateoasObj_organizaciones.nombreColeccion = "organizacionQueries";
                            hateoasObj_organizaciones.ruta = rutaEsp;
                            hateoasObj_organizaciones.paginacion.activo = true;
                            hateoasObj_organizaciones.paginacion.totalreg = resDTO.cantidadReg;
                            hateoasObj_organizaciones.paginacion.regxpag = size;
                            hateoasObj_organizaciones.paginacion.pagina = page;
                            hateoasObj_organizaciones.busqueda.activo = false;
                            
                            // parametros modificados para hateo
                            var org =hateoas.link(hateoasObj_organizaciones);
                            var hrefcoleccion= org['_links']['self']['href'];   
                            org['_links']['self']['href']=hrefcoleccion+'?denominacion='+denominacion+'&idTipoDocumento='+idTipoDocumento+'&page='+page+'&size='+size;
                            
                            var first=  org['_links']['first'];
                            var last=   org['_links']['last'];
                            var next=   org['_links']['next'];
                            var prev=   org['_links']['prev'];

                            if(first!=undefined){
                                splitRuta= first.href.split('?');
                                org['_links']['first']['href']=splitRuta[0]+'/?denominacion='+denominacion+'&idTipoDocumento='+idTipoDocumento+'&page='+0+'&size='+size;
                            }
                            if(last!=undefined){
                                splitRuta= last.href.split('?');
                                var pagina= org['page']['totalPages']-1;
                                org['_links']['last']['href']=splitRuta[0]+'/?denominacion='+denominacion+'&idTipoDocumento='+idTipoDocumento+'&page='+pagina+'&size='+size;
                            }
                            if(next!=undefined){
                                splitRuta= next.href.split('?');
                                var pagina= org['page']['number']+1;
                                org['_links']['next']['href']=splitRuta[0]+'/?denominacion='+denominacion+'&idTipoDocumento='+idTipoDocumento+'&page='+pagina+'&size='+size;
                            }
                            if(prev!=undefined){
                                splitRuta= prev.href.split('?');
                                var pagina= org['page']['number']-1;
                                org['_links']['prev']['href']=splitRuta[0]+'/?denominacion='+denominacion+'&idTipoDocumento='+idTipoDocumento+'&page='+pagina+'&size='+size;
                            }    

                            res.status(200).json(org);
                    // }
                    });
            }
        });

        router.get(ruta.concat('/:id'), function (req, res, next) {

            var numDocumento=req.params.id;
            var idTipoDocumento= '-1';

            if(req.query.idTipoDocumento&&req.query.idTipoDocumento!=''){
                idTipoDocumento= req.query.idTipoDocumento
            }else{
                if(numDocumento.length==11) idTipoDocumento=6;
                else if(numDocumento.length==8) idTipoDocumento=1;
                else idTipoDocumento=9;
            
            }
            
        

            EntidadQueryDTO.buscarEntidadById(numDocumento,idTipoDocumento).then(function (resDTO) {
                
                if (Object.keys(resDTO).length === 0){
                    res.status(404).send(excepcion.NOT_FOUND);
                }else{
                    var hateoasObj_entidad = Object.assign({}, hateoasObj);
                    hateoasObj_entidad.type = nombreHateo;
                    hateoasObj_entidad.data = resDTO;
                    hateoasObj_entidad.paginacion.activo = false;
                    hateoasObj_entidad.busqueda.activo = false;

                    var org =hateoas.link(hateoasObj_entidad);
                    var hrefEntidad= org['_links']['self']['href'];   
                    org['_links']['self']['href']=hrefEntidad+'?idTipoDocumento='+idTipoDocumento;
                    
                    res.status(200).json(org);
                }
            })
        });
    };

    module.exports = controladorQueryEntidades;