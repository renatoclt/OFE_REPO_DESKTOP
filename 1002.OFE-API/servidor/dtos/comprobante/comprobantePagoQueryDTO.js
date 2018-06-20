/**
 * @author jose felix ccopacondori
 */

var ComprobantePagoQuery= require('../../modelos/comprobantes/comprobantePagoQuery');
var DocParametroQuery=require('../../modelos/comprobantes/feQuerydocParametro');
var EntidadQuery =require('../../modelos/comprobantes/feQuerydocEntidad');
var ComprobanteEventoQuery =require('../../modelos/comprobantes/feQueryComprobanteEvento');
var ComprobanteConcepto =require('../../modelos/comprobantes/feQueryComprobanteConcepto');
var ComprobanteDocReferenci =require('../../modelos/comprobantes/feQueryComprobanteDocReferenci');
var ProductoxComprobantePago =require('../../modelos/comprobantes/feQueryProductoxComprobantePago');
var SerieQuery =require('../../modelos/msdocumentosquery/SerieQuery');
var EntParametrosQuery =require('../../modelos/msdocumentosquery/EntParametrosQuery');

var dateFormat = require('dateformat');
contantes = require("../../utilitarios/constantes");
sequelize = require("sequelize");


const Op = conexion.Op;

ComprobantePagoQuery.buscarComprobanteById = function (id) {
    console.log('**********************************************************************************************');
    var promise = new Promise(function (resolve, reject) {
            ComprobantePagoQuery.findById(id,{
                    include:[
                        {
                            model: DocParametroQuery,
                            as: 'parametros'
                        },
                        {
                            model: EntidadQuery,
                            as: 'entidadproveedora',
                            include:[
                                {
                                    model: SerieQuery,
                                    as: 'series'
                                },
                                {
                                    model: EntParametrosQuery,
                                    as: 'parametros'
                                }
                            ]
                        },
                        {
                            model: EntidadQuery,
                            as: 'entidadcompradora',
                            include:[ 
                                {
                                    model: SerieQuery,
                                    as: 'series'
                                },
                                {
                                    model: EntParametrosQuery,
                                    as: 'parametros'
                                }
                            ]
                        },
                        {
                            model: ComprobanteConcepto,
                            as: 'conceptos'
                        },
                       {
                            model: ComprobanteDocReferenci,
                            as: 'referencias'
                       },
                        {
                            model: ProductoxComprobantePago,
                            as: 'detalle'
                        },
                        {
                            model: ComprobanteEventoQuery,
                            as: 'eventos'
                        }
                    ]
            }
            ).then(function (comprobante) {
                if(comprobante!=null)
                    resolve(comprobante.dataValues);
                else
                    resolve({});
            });
        }, function (err) {
            console.log(err);
            resolve({});
        });
    return promise;
};


ComprobantePagoQuery.buscarComprobante = function (id) {
    var promise = new Promise(function (resolve, reject) {
        conexion.sync().then(function () {
            ComprobantePagoQuery.findById(id,{
                    include:[
                        {
                            model: DocParametroQuery,
                            as: 'parametros'
                        },
                        {
                            model: EntidadQuery,
                            as: 'entidadproveedora'
                        },
                        {
                            model: EntidadQuery,
                            as: 'entidadcompradora'
                        },
                        {
                            model: ComprobanteEventoQuery,
                            as: 'eventos'
                        }
                    ]
            }
            ).then(function (comprobante) {
                if(comprobante!=null)
                    resolve(comprobante.dataValues);
                else
                    resolve({});
            });
        }, function (err) {
            console.log(err);
            resolve({});
        });
    });
    return promise;
};

ComprobantePagoQuery.buscarComprobanteConFiltros = function (
            pagina, 
            limite,
            idEntidadEmisora,               // inIdentidademisor
            tipoComprobanteTabla,           // vcIdtablatipocomprobante
            tipoComprobanteRegistro,        // vcIdregistrotipocomprobante
            fechaEmisionDel,                // tsFechaemision
            fechaEmisionAl,                 // tsFechaemision
            tipoDocumento,                  // tabla entidad
            nroDocumento,                   // tabla entidad
            ticket,                         // vcTicketRetencion
            estado,                         // chEstadocomprobantepago
            nroSerie,                       // vcSerie
            correlativoInicial,             // vcCorrelativo
            correlativoFinal,               // vcCorrelativo
            ordenar,
            fechaBajaDel,
            fechaBajaAl,
            ticketBaja
){
    var promise = new Promise(function (resolve, reject) {
        conexion.sync().then(function () {
            var objetoEntidadCompradora={
                model: EntidadQuery,
                as: 'entidadcompradora',
                where:{
                    vcDocumento:nroDocumento,        
                    inTipoDocumento: parseInt(tipoDocumento),
                  },
                required: true
            };
            
            if(tipoDocumento===''||nroDocumento===''){
                delete objetoEntidadCompradora['where'];
                delete objetoEntidadCompradora['required'];
            }
            console.log(fechaEmisionDel);
            ComprobantePagoQuery.findAndCountAll(
                {   
                    //attributes: ['vcSerie','tsFechacreacion','inIdentidademisor','inIdentidadreceptor'],
                    //attributes:['fullName'],
                    where:filtrosDinamicos(idEntidadEmisora,tipoComprobanteTabla,tipoComprobanteRegistro,fechaEmisionDel,fechaEmisionAl,tipoDocumento,nroDocumento,ticket,estado,nroSerie,correlativoInicial,correlativoFinal,ordenar,fechaBajaDel,fechaBajaAl,ticketBaja), 
                    include:[
                        {
                            model: DocParametroQuery,
                            as: 'parametros'
                        },
                        {
                            model: EntidadQuery,
                            as: 'entidadproveedora'
                        },
                        objetoEntidadCompradora,         
                        {
                            model: ComprobanteEventoQuery,
                            as: 'eventos'
                        }
                    ],
                    order:[ [ordenar, 'DESC']],
                    group: 'in_idcomprobantepago',
                    offset:(pagina*limite),
                    limit: limite
                }
            ).then(function (comprobantes) {

                var cantidadReg = comprobantes.count.length;
                console.log('********************************************************************************entre');
                console.log(comprobantes);
                console.log('********************************************************************************');
                comprobantes = comprobantes.rows.map(function (data) {
                  
                    delete data.dataValues['inIdentidademisor'];
                    delete data.dataValues['inIdentidadreceptor'];

                    var tsFechacreacion=new Date(data.dataValues['tsFechacreacion']);
                    data.dataValues['tsFechacreacion']=tsFechacreacion.getTime();

                    var tsFecharegistro=new Date(data.dataValues['tsFecharegistro']);
                    data.dataValues['tsFecharegistro']=tsFecharegistro.getTime();
                    
                    var tsFechaemision=new Date(data.dataValues['tsFechaemision']);
                    data.dataValues['tsFechaemision']=tsFechaemision.getTime();
                    return data.dataValues;
                });
                resolve({ 'comprobantes': comprobantes, 'cantidadReg': cantidadReg });
            });
        }, function (err) {
            console.log('fasdfjasldkfjalskñdjfñlk');
            console.log(err);
            resolve({});
        });
    });
    return promise;
};

function filtrosDinamicos(
            idEntidadEmisora,               // inIdentidademisor
            tipoComprobanteTabla,           // vcIdtablatipocomprobante
            tipoComprobanteRegistro,        // vcIdregistrotipocomprobante
            fechaEmisionDel,                // tsFechaemision
            fechaEmisionAl,                 // tsFechaemision
            tipoDocumento,                  // tabla entidad
            nroDocumento,                   // tabla entidad
            ticket,                         // vcTicketRetencion
            estado,                         // chEstadocomprobantepago
            nroSerie,                       // vcSerie
            correlativoInicial,             // vcCorrelativo
            correlativoFinal,               // vcCorrelativo
            ordenar,
            fechaBajaDel,
            fechaBajaAl,
            ticketBaja
){
    var whereClause={}
    if (nroSerie!='' && correlativoInicial!=''&&correlativoFinal=='' && tipoComprobanteRegistro!='') {
        whereClause['vcSerie'] =nroSerie; 
        whereClause['vcCorrelativo'] = correlativoInicial;
        whereClause['vcIdregistrotipocomprobante'] =tipoComprobanteRegistro; 
        return whereClause;
    }
    if (idEntidadEmisora!='') {
        whereClause['inIdentidademisor'] =idEntidadEmisora; 
    }
    if (tipoComprobanteTabla!='') {
        whereClause['vcIdtablatipocomprobante'] =tipoComprobanteTabla; 
    }
    if (tipoComprobanteRegistro!='') {
        whereClause['vcIdregistrotipocomprobante'] =tipoComprobanteRegistro; 
    }
    if (ticket!='') {
        whereClause['vcTicketRetencion'] =ticket; 
    }
    if (estado!='') {
        whereClause['chEstadocomprobantepago'] =estado; 
    }
    if (nroSerie!='') {
        whereClause['vcSerie'] =nroSerie; 
    }
    if (ticketBaja!='') {
        whereClause['vcParamTicket'] =ticketBaja; 
    }    
    if (correlativoInicial!=''&&correlativoFinal=='') {
        whereClause['vcCorrelativo'] ={
            [Op.gte]:correlativoInicial
            
        };
    }
    if (correlativoInicial==''&&correlativoFinal!='') {
        whereClause['vcCorrelativo'] ={
            [Op.lte]:correlativoFinal
        }; 
    }
    if (correlativoInicial!=''&&correlativoFinal!='') {
        whereClause['vcCorrelativo'] ={
            [Op.between]:[correlativoInicial,correlativoFinal]
        }; 
    }

    var splitemisionInicio= fechaEmisionDel.split('/');
    var splitemisionFin = fechaEmisionAl.split('/');
    var fechaemision_inicio    =    new Date(parseInt(splitemisionInicio[2]),parseInt(splitemisionInicio[1])-1,parseInt(splitemisionInicio[0]));
    var fechaemision_fin       =    new Date(parseInt(splitemisionFin[2]),parseInt(splitemisionFin[1])-1,parseInt(splitemisionFin[0]),23,59,59,999);
    if(isNaN(fechaemision_inicio)){
        fechaemision_inicio = parseJsonDate(fechaEmisionDel);
    }
    if(isNaN(fechaemision_fin)){
        fechaemision_fin = parseJsonDate(fechaEmisionAl);
    }
    var formatInicio=dateFormat(fechaemision_inicio, "yyyy-mm-dd HH:MM:ss");
    var formatFin=dateFormat(fechaemision_fin, "yyyy-mm-dd HH:MM:ss");
    

    whereClause['tsFechaemision'] ={
        [Op.between]: 
                    [ formatInicio , formatFin]
    };

    if(fechaBajaDel!=''&&fechaBajaAl!=''){
        var spliteBajaInicio=fechaBajaDel.split('/');
        var spliteBajaFin=fechaBajaAl.split('/');
        var fechaBaja_inicio    =    new Date(parseInt(spliteBajaInicio[2]),parseInt(spliteBajaInicio[1])-1,parseInt(spliteBajaInicio[0]));
        var fechaBaja_fin       =    new Date(parseInt(spliteBajaFin[2]),parseInt(spliteBajaFin[1])-1,parseInt(spliteBajaFin[0]),23,59,59,999);
        
        var formatBajaInicio=dateFormat(fechaBaja_inicio, "yyyy-mm-dd HH:MM:ss");
        var formatBajaFin=dateFormat(fechaBaja_fin, "yyyy-mm-dd HH:MM:ss");
        
        whereClause['tsParamFechabaja'] ={
            [Op.between]: 
                        [ formatBajaInicio , formatBajaFin]
        };
    }
    return whereClause;
} 


function parseJsonDate(jsonDateString){
    jsonDateString = jsonDateString.toString();
    return dateFormat(new Date(parseInt(jsonDateString.replace('/Date(', ''))), "yyyy-mm-dd HH:MM:ss");
}

module.exports = ComprobantePagoQuery;
