var referenciasQueryDTO = require("../../dtos/msdocuqry/referenciasQueryDTO");

var baseUrl_="http://localhost:3000/v1";

var controladorReferenciasQuery = function (ruta, rutaEsp) {
    var nombreHateo = "hReferenciaQuery";
    var hateoas = require('./../../utilitarios/hateoas')({ baseUrl: baseUrl_ });
    var hateoasObj = require('./../../utilitarios/hateoasObj');
    hateoas.registerLinkHandler(nombreHateo, function (objecto) {
        var links = {
            "self":{  
                        "href":baseUrl_+ rutaEsp.concat('/') + objecto.seIdocreferencia
                    },
            "tDocReferenciEntity":{
                        "href":baseUrl_+ rutaEsp.concat('/') + objecto.seIdocreferencia
                    },
            "comprobante":{
                        "href":baseUrl_+ rutaEsp.concat('/') + objecto.seIdocreferencia+'/comprobante'
                    }
        };
        return links;
    });

    hateoas.registerCollectionLinkHandler(nombreHateo, function (objectoCollection) {
        var links = {
            "self": rutaEsp+'/search/comprobanteID'
        };
        return links;
    });

    router.get(ruta.concat('/search/comprobanteID'), function (req, res, next) {
        var comprobanteID="",
            pagina=0,
            limite=0,
            ordenar=0;

        if (req.query.comprobanteID && req.query.comprobanteID!=""){
            comprobanteID = req.query.comprobanteID;
        }
        if (req.query.page && req.query.page>0){
            pagina = req.query.page;
        }
        if (req.query.size && req.query.size>0){
            limite = req.query.size;
        }
        if (req.query.sort && req.query.sort!=''){
            ordenar = req.query.sort;
        }
 
        referenciasQueryDTO.buscarReferenciasByComprobante(pagina, limite, comprobanteID,ordenar)
        .then(function (resDTO) {

            var hateoasObj_comprobante = Object.assign({}, hateoasObj);
            hateoasObj_comprobante.type = nombreHateo;
            hateoasObj_comprobante.data = resDTO.referencias;
            hateoasObj_comprobante.nombreColeccion = "tDocReferenciEntities";   
            hateoasObj_comprobante.ruta = rutaEsp;                              // ruta para la siguiente pagina
            hateoasObj_comprobante.paginacion.activo = true;
            hateoasObj_comprobante.paginacion.totalreg = resDTO.cantidadReg;
            hateoasObj_comprobante.paginacion.regxpag = limite;
            hateoasObj_comprobante.paginacion.pagina = pagina;
            hateoasObj_comprobante.busqueda.activo = true;                  /// desde aqui son para las paginas prev, next, last, first
            hateoasObj_comprobante.busqueda.parametros = {comprobanteID:comprobanteID, felix:'jeje'};        /// parametros de las paginas            
            hateoasObj_comprobante.busqueda.ruta = "/search/comprobanteID";            /// cadena que concatena la ruta basica para las paginas     
            
            var hateoas_link=hateoas.link(hateoasObj_comprobante);
            var sort_='';
            if(ordenar!=0) sort_='&sort='+ordenar;

            hateoas_link._links.self=hateoas_link._links.self+'?comprobanteID='+comprobanteID+'&page='+pagina+'&size='+limite + sort_;
            if(hateoas_link._links.next!=undefined)
            hateoas_link._links.next.href= hateoas_link._links.next.href.replace(/pagina|limite/g,function(x){
                    if(x=='pagina') return 'page';
                    if(x=='limite') return 'size';
            })+sort_;
            if(hateoas_link._links.last!=undefined)
            hateoas_link._links.last.href= hateoas_link._links.last.href.replace(/pagina|limite/g,function(x){
                if(x=='pagina') return 'page';
                if(x=='limite') return 'size';
            })+sort_; 
            
            if(hateoas_link._links.first!=undefined)
            hateoas_link._links.first.href= hateoas_link._links.first.href.replace(/pagina|limite/g,function(x){
                if(x=='pagina') return 'page';
                if(x=='limite') return 'size';
            })+sort_;
            
            if(hateoas_link._links.prev!=undefined)
            hateoas_link._links.prev.href= hateoas_link._links.prev.href.replace(/pagina|limite/g,function(x){
                if(x=='pagina') return 'page';
                if(x=='limite') return 'size';
            })+sort_;

            res.json(hateoas_link);
        });
    });

    router.get(ruta.concat('/:id'), function (req, res, next) {
        console.log('//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////');
        referenciasQueryDTO.buscarReferencia(req.params.id).then(function (resDTO) {
            var hateoasObj_comprobante = Object.assign({}, hateoasObj);
            hateoasObj_comprobante.type = nombreHateo;
            hateoasObj_comprobante.data = resDTO;
            hateoasObj_comprobante.paginacion.activo = false;
            hateoasObj_comprobante.busqueda.activo = false;
            res.json(hateoas.link(hateoasObj_comprobante));
        });
    });

};

module.exports = controladorReferenciasQuery;