/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryDocParametro = require('../../modelos/msoffline/queryDocParametro');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

QueryDocParametro.guardar = function guardarQueryDocParametro(data, id){
    return QueryDocParametro.findOne({where: {id: id}}).then(function(obj){
        if(obj){
            QueryDocParametro.update({
                id: data.id,
                comprobantePago: data.inIcomprobantepago ,
                parametroDoc: data.inIparamDoc ,
                json: data.vcJson ,
                tipo: data.inTipo ,
                valor: data.vcValor ,
                auxEntero: data.auxEntero ,
                auxImporte: data.auxImporte ,
                auxFecha: data.auxFecha ,
                auxCaracter: data.auxCaracter ,    
                fechaSincronizado: data.fechaSincronizado ,    
                estadoSincronizado: data.estadoSincronizado ,                    
            }, {where: {id: id}});
        }
        else{
            QueryDocParametro.create({
                id: data.id,
                comprobantePago: data.inIcomprobantepago ,
                parametroDoc: data.inIparamDoc ,
                json: data.vcJson ,
                tipo: data.inTipo ,
                valor: data.vcValor ,
                auxEntero: data.auxEntero ,
                auxImporte: data.auxImporte ,
                auxFecha: data.auxFecha ,
                auxCaracter: data.auxCaracter ,    
                fechaSincronizado: data.fechaSincronizado ,    
                estadoSincronizado: data.estadoSincronizado ,                      
            });
        }
    })
}

module.exports = QueryDocParametro;
