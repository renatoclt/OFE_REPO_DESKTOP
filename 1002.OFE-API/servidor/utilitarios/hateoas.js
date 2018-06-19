var extend = require('extend');
/**
 * @author Roycer Cordova
 * @description Generacion de Hatoas para servicios rest
 */
var defectoPropiedades = {
    propLinks: "_links",
    propEmbedded: "_embedded",
    propPage: "page"
};

function hateoas(Propiedades) {
    Propiedades = extend({}, defectoPropiedades, Propiedades);
    if (!Propiedades.baseUrl) {
        throw Error("Falta de argementos requeridos 'baseUrl'");
    }

    if (Propiedades.baseUrl[Propiedades.baseUrl.length-1] == "/") {
        Propiedades.baseUrl = Propiedades.baseUrl.substring(0, Propiedades.baseUrl.length-1);
    }

    var linkHandlers = {};
    var collectionLinkHandlers = {};

    function registerLinkHandler(type, handler) {
        if (!linkHandlers[type]) {
            linkHandlers[type] = [];
        }
        linkHandlers[type].push(handler);
    }

    function registerCollectionLinkHandler(type, handler) {
        
        if (!collectionLinkHandlers[type]) {
            collectionLinkHandlers[type] = [];
        }
        collectionLinkHandlers[type].push(handler);
    }

    function prefix(link) {
        if (!link.length || link[0] !== "/") {
            return link;
        }

        return Propiedades.baseUrl + link;
    }

    function getLinksGeneric(handlers, type, data) {
        if (handlers[type]) {
            var links = handlers[type].reduce(function(links, handler) {
                return extend({}, links, handler(data, type, links));
            }, {});
            
            return Object.keys(links).reduce(function(prefixedLinks, linkName) {
                prefixedLinks[linkName] = prefix(links[linkName]);
                return prefixedLinks;
            }, {});
        } else {
            return [];
        }
    }

    var getLinks = getLinksGeneric.bind(null, linkHandlers);
    var getCollectionLinks = getLinksGeneric.bind(null, collectionLinkHandlers);

    function linkCollection(hateoasObj) {

        var result = {};

        result[Propiedades.propEmbedded] = extend({},{[hateoasObj.nombreColeccion]: (hateoasObj.data).map(link_data.bind(null, hateoasObj.type))});        
        result[Propiedades.propLinks] = getCollectionLinks(hateoasObj.type, hateoasObj.data);
        
        if(hateoasObj.paginacion.activo){

            var totalreg = hateoasObj.paginacion.totalreg | 0;
            var regxpag = hateoasObj.paginacion.regxpag | 0;
            var pagina = hateoasObj.paginacion.pagina | 0;
            var ruta = hateoasObj.ruta;
            var totalPaginas = Math.ceil(totalreg/regxpag);
            var pageLinks = {};
            var rutaBus = "";
            
            if(hateoasObj.busqueda.activo){
                if(!(hateoasObj.busqueda.ruta == null || hateoasObj.busqueda.ruta == undefined)) 
                    rutaBus = hateoasObj.busqueda.ruta;
            }
            
            /**
             * Paginacion
             */
            var hrefPrev = Propiedades.baseUrl+ruta+rutaBus+"?pagina="+(pagina-1)+"&limite="+regxpag;
            var hrefFirst = Propiedades.baseUrl+ruta+rutaBus+"?pagina=0&limite="+regxpag;
            var hrefNext = Propiedades.baseUrl+ruta+rutaBus+"?pagina="+(pagina+1)+"&limite="+regxpag;
            var hrefLast = Propiedades.baseUrl+ruta+rutaBus+"?pagina="+(totalPaginas-1)+"&limite="+regxpag;

            if(hateoasObj.busqueda.activo && hateoasObj.busqueda.parametros!=null){
                Object.keys(hateoasObj.busqueda.parametros).forEach(function(key){
                    hrefPrev+="&"+key+"="+hateoasObj.busqueda.parametros[key];
                    hrefFirst+="&"+key+"="+hateoasObj.busqueda.parametros[key];
                    hrefNext+="&"+key+"="+hateoasObj.busqueda.parametros[key];
                    hrefLast+="&"+key+"="+hateoasObj.busqueda.parametros[key];
                });
            }

            if(pagina>0){
                pageLinks = extend({},pageLinks,{
                    "prev" : {
                        "href" : hrefPrev
                    },
                    "first" : {
                        "href" : hrefFirst
                    }
                });
            }
    
            if((pagina+1)<totalPaginas && totalPaginas>1){
                pageLinks = extend({},pageLinks,{
                    "next" : {
                        "href" : hrefNext
                    },
                    "last": {
                        "href" : hrefLast
                    }
                });
            }

            if(regxpag<totalreg){
                result[Propiedades.propLinks] = extend({},result[Propiedades.propLinks],pageLinks);
            }
            
            result[Propiedades.propPage] = {
                'size' : regxpag,
                'totalElements' : totalreg,
                'totalPages' : totalPaginas,
                'number' : pagina
            }
        }
        
        return result;
    }

    /**
     * 
     * @param {json} hateoasObj objeto estandar de hateo
     */
    function link(hateoasObj) {
        
        if (Array.isArray(hateoasObj.data)) {
            return linkCollection(hateoasObj);
        }
        else{
            return link_data(hateoasObj.type,hateoasObj.data);
        }
    }

    function link_data(type,data){

        if (linkHandlers[type]) {
            data[Propiedades.propLinks] = getLinks(type, data);
            return data;
        } else {
            return data;
        }
    }

    return {
        registerLinkHandler: registerLinkHandler,
        registerCollectionLinkHandler: registerCollectionLinkHandler,
        getLinks: getLinks,
        link: link
    };
}

module.exports = hateoas;
