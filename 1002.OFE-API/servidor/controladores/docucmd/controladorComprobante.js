var ComprobantePago = require('../../dtos/comprobante/comprobantePago');
var DocReferencia = require('../../dtos/comprobante/docReferenciaDto')
var DocEntidad = require('../../dtos/comprobante/docEntidadDTO')
var sequelize = require('sequelize');
var uuid = require('../../utilitarios/uuid');
/**
 * Controlador del
 * 
 * @param {*} ruta ruta del servicio
 * @param {*} rutaEsp ruta para el hateos 
 */
var contoladorComprobante =  function (ruta, rutaEsp){ 
    /**
     * Hateo aun no se q hace
     * son 3 variables y 2 funciones
     */
    var nombreHateo = "hMaestras";
    var hateoas = require('./../../utilitarios/hateoas')({ baseUrl: "http://localhost:3000/v1" });
    var hateoasObj = require('./../../utilitarios/hateoasObj');
    hateoas.registerLinkHandler(nombreHateo, function (data) {
        var links = {
            "self": {
                "href": "http://localhost:3000/v1"+rutaEsp.concat('/',data.tabla,data.codigo)
            },
            "maestraRedis":{
                "href":  "http://localhost:3000/v1"+rutaEsp.concat('/',data.tabla, data.codigo) 
            }
        };
        return links;
    });
    
    hateoas.registerCollectionLinkHandler(nombreHateo, function (data) {
        var links = {
            "self": {
                "href": "http://localhost:3000/v1"+ rutaEsp.concat('/','search/filtros?tabla=',data[0].tabla)
            }
        };
        return links;
    });

    /**
     * Buscaremos los documentos 
     * 
     */
    router.get(ruta.concat('/query'), async function(req, res){
        
    });

    
    /**
     * Guardaremos documentos 
     * Actualmente solo guarda retenciones 
     * 
     * 1 await guarda en la tabla comprobante pago
     * 2 await guarda en la tabla docEntidad
     * 3 await guarda en la tabla docReferencia
     * y declaramos una funcion asincrona q espera los datos de la tabla
     */
    router.post(ruta.concat('/'), async function(req, res){
        let transaccion;
        data = req.body;
        data.id = uuid();
        try{
            await ComprobantePago.guardar(data);
            for (let documentoEntidad of req.body.documentoEntidad){
                documentoEntidad.idComprobantePago = data.id;
                await DocEntidad.guardar(documentoEntidad);
            }        
            for(let documentoReferencia of req.body.documentoReferencia ){
                documentoReferencia.idDocumentoOrigen = data.id;
                documentoReferencia.usuarioCreacion = data.usuarioCreacion;
                documentoReferencia.usuarioModificacion = data.usuarioModificacion;
                documentoReferencia.fechaCreacion = data.fechaCreacion;
                documentoReferencia.fechaModificacion = data.fechaCreacion;
                await DocReferencia.guardar(documentoReferencia);
            }
            await listarDocumento;
        }
        catch(err){
            console.log('error al ingresar');
        }
        //res.status(200).send(data);
        res.json(data);
    })

    router.get(ruta.concat('/sincronizarRetenciones'), async function(req, res){
        documentos = {};
        documentos.listaDocumento = await ComprobantePago.filtro();
        documentos.listaDocumento.forEach(documento => {
            documento.dataValues.documentoEntidad.forEach(documentoEntidad =>{
                documento.dataValues.usuarioCreacion = documentoEntidad.usuarioCreacion
                documento.dataValues.usuarioModificacion = documentoEntidad.usuarioModificacion;
                documentoEntidad.dataValues.descripcionTipoEntidad = documentoEntidad.dataValues.TipoEnt.descripcionTipoEntidad;
                documentoEntidad.dataValues.idEntidad = documentoEntidad.dataValues.Entidad.id;
                documentoEntidad.dataValues.tipoDocumento = "....... falta"; //json
                documentoEntidad.dataValues.documento =  documentoEntidad.dataValues.Entidad.documento;
                documentoEntidad.dataValues.denominacion = documentoEntidad.dataValues.Entidad.denominacion;
                documentoEntidad.dataValues.correo = documentoEntidad.dataValues.Entidad.correo;
                documentoEntidad.dataValues.ubigeo = "....... falta"; //json
                documentoEntidad.dataValues.departamento = "....... falta"; //json
                documentoEntidad.dataValues.provincia = "....... falta";    //json
                documentoEntidad.dataValues.distrito = "....... falta"; //json
                documentoEntidad.dataValues.direccionFiscal = "....... falta"; //json
                documentoEntidad.dataValues.idComprobante = documento.dataValues.id;
                delete documentoEntidad.dataValues.Entidad;
                delete documentoEntidad.dataValues.TipoEnt;
            });  
            documento.dataValues.documentoReferencia.forEach(documentoReferencia =>{
                documentoReferencia.dataValues.moneda = "....... falta";
                documentoReferencia.dataValues.observaciones = "....... falta";
                
            });             
        });
        res.json(documentos);
    })
};

module.exports = contoladorComprobante;