/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var EmpresaOffline = require('../../modelos/msoffline/empresaLocal');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

EmpresaOffline.guardar = function guardarEmpresaLocal(data){
    return EmpresaOffline.findOne({
        where: { ruc: data.ruc }
    }).then( rpta => {
        if(!rpta){
            return EmpresaOffline.create({
                ruc : data.ruc
            });
        }
        else{
            return rpta;
        }
    });
}
EmpresaOffline.listarTodo = function EmpresaLocal(data){
    return EmpresaOffline.findAll();
}

module.exports = EmpresaOffline;