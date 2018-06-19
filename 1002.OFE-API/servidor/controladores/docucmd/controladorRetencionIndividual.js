var ComprobantePago = require('../../dtos/comprobante/comprobantePago');
var DocReferencia = require('../../dtos/comprobante/docReferenciaDto')
var DocEntidad = require('../../dtos/comprobante/docEntidadDTO')
var sequelize = require('sequelize');
var uuid = require('../../utilitarios/uuid');
var nuevoComprobanteDTO=require('../../modelos/msdocucmd/nuevoComprobanteDTO');
var retencionIndividual =require('../../dtos/msdocucmd/retencionIndividualDTO');

var contoladorRetencionIndividual =  function (ruta, rutaEsp){ 
   
    router.post('/retencion', function(req, res){
        var transaccion;
        var data = req.body;
        data.id = uuid();
        var headers=req.headers;
        retencionIndividual.guardar(data,headers);     
        res.json('data');
    })

};

module.exports = contoladorRetencionIndividual;