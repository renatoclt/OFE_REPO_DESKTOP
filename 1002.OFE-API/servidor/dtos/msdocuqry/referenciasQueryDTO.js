DocReferenciQuery = require('../../modelos/msdocumentosquery/DocReferenciQuery');
contantes = require("../../utilitarios/constantes");
sequelize = require("sequelize");
var ReferenciasQuery=function(){};
ReferenciasQuery.buscarReferencia = function (id) {
    var promise = new Promise(function (resolve, reject) {
        conexion.sync().then(function () {
            DocReferenciQuery.findById(id
                /*,{
                attributes: ['id','idUsuarioCreacion','fechaCreacion','numeroComprobante','generado','estado','estadoSincronizado']
                }*/
        ).then(function (referencia) {
                resolve(referencia.dataValues);
            });
        }, function (err) {
            console.log(err);
            resolve({});
        });
    });
    return promise;
};

ReferenciasQuery.buscarReferenciasByComprobante = function (pagina,limite,comprobanteID,ordenar) {
    var promise = new Promise(function (resolve, reject) {
        conexion.sync().then(function () {
            DocReferenciQuery.findAndCountAll(
                {
                    where:{
                        inIdocOrigen:comprobanteID
                    },
                    order:[ ['vcTdocDesDesc', 'DESC']],
                    offset: (pagina*limite), 
                    limit: limite
                }
        ).then(function (referencias) {


            var cantidadReg = referencias.count;

            referencias = referencias.rows.map(function(referencia){ 
                referencia.dataValues.chSerieDest = zfill(referencia.dataValues.chSerieDest , 4)
                referencia.dataValues.chCorrDest = zfill(referencia.dataValues.chCorrDest, 8)
                return referencia.dataValues;
            });
            resolve({'referencias': referencias, 'cantidadReg': cantidadReg});
            });
        }, function (err) {
            console.log(err);
            resolve({});
        });
    });
    return promise;
};
/*
ReferenciasQuery.buscarComprobantes = function (pagina, regxpag) {
    if (pagina == null) {
        throw Error("Falta de argementos requeridos 'pagina'");
    }
    if (regxpag == null) {
        throw Error("Falta de argementos requeridos 'regxpag'");
    }
    var promise = new Promise(function (resolve, reject) {
        conexion.sync().then(function () {
            Comprobante.findAndCountAll({  
                attributes: ['id','idUsuarioCreacion','fechaCreacion','numeroComprobante','generado','estado','estadoSincronizado'],
                where: { idTipoComprobante: contantes.idTipocomprobanteRetencion}, 
                offset: (pagina * regxpag), 
                limit: regxpag 
                }).then(function (comprobantes) {

                    var cantidadReg = comprobantes.count;
                    comprobantes = comprobantes.rows.map(function (data) {
                    return data.dataValues;
                });
                resolve({ 'comprobantes': comprobantes, 'cantidadReg': cantidadReg });
            });
        }, function (err) {
            console.log(err);
            resolve({});
        });
    });
    return promise;
};

ReferenciasQuery.buscarRetencionEspecifico=function(pagina, regxpag, numeroComprobante_,generado_,estado_,fechaInicio,fechaFin,estadoSincronizado_){


    if (pagina==null){
        throw Error("Falta de argumentos requeridos 'pagina'");
    }
    if (regxpag==null){
        throw Error("Falta de argumentos requeridos 'regxpag'");
    }
    if (numeroComprobante_==null){
        throw Error("Falta de argumentos requeridos 'Numero del comprobante'");
    }
    if (generado_==null){
        throw Error("Falta de argumentos requeridos 'Generado'");
    }
    if (estado_==null){
        throw Error("Falta de argumentos requeridos 'estado del documento'");
    }
    if (fechaInicio==null){
        throw Error("Falta de argumentos requeridos 'Fecha de Inicio'");
    }
    if (fechaFin==null){
        throw Error("Falta de argumentos requeridos 'Fecha de Fin'");
    }
    if (estadoSincronizado_==null){
        throw Error("Falta de argumentos requeridos 'estado sincronización'");
    }

    const Op = sequelize.Op;
    var promise = new Promise(function(resolve, reject){
        conexion.sync()
        .then(function () {
            Comprobante.findAndCountAll(
                { 
//pagina, regxpag, numeroComprobante_,generado_,estado_,fechaInicio,fechaFin,estadoSincronizado_, ordenar){
                    
                    attributes: ['id','idUsuarioCreacion','fechaCreacion','numeroComprobante','generado','estado','estadoSincronizado'],
                    where: { 
                            numeroComprobante:numeroComprobante_ ,
                            generado:generado_,                         // 0: offline , 1: online
                            estado:estado_,                             // Bloqueado, Inactivo,..
                            estadoSincronizado:estadoSincronizado_,     // 0: no sincronizado, 1: sincronizado
                            idTipoComprobante: contantes.idTipocomprobanteRetencion,
                            fechaCreacion: { 
                                [Op.between]: [fechaInicio,fechaFin+'23:59:59.999999999'] 
                               // [Op.between]: ['2018-01-02','2018-01-04'+'23:59:59.999999999'] 
                            }    

                            },                       
                    
                    offset: (pagina*regxpag), 
                    limit: regxpag
                })
                .then(function (comprobantes) {
                    var cantidadReg = comprobantes.count;

                    comprobantes = comprobantes.rows.map(function(comprobante){ 
                        return comprobante.dataValues;
                    });
                
                    resolve({'comprobantes': comprobantes, 'cantidadReg': cantidadReg});
                });
        }, function (err) {
            console.log(err);
            resolve({});
        });
    });
    
    return promise;



};*/

function zfill(number, width) {
    var numberOutput = Math.abs(number); /* Valor absoluto del número */
    var length = number.toString().length; /* Largo del número */ 
    var zero = "0"; /* String de cero */  
    
    if (width <= length) {
        if (number < 0) {
             return ("-" + numberOutput.toString()); 
        } else {
             return numberOutput.toString(); 
        }
    } else {
        if (number < 0) {
            return ("-" + (zero.repeat(width - length)) + numberOutput.toString()); 
        } else {
            return ((zero.repeat(width - length)) + numberOutput.toString()); 
        }
    }
}

module.exports = ReferenciasQuery;