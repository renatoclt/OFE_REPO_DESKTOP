/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var MenuOffline = require('../../modelos/msoffline/menu');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

MenuOffline.guardar = function guardarEmpresaLocal(data){
    return MenuOffline.create({
        id: data.id,
        front: data.front,
        logoFront: data.logoFront,
        icon: data.icon,
        title: data.title,
        mini: data.mini,
        padre: data.padre,
        moduloUri: data.moduloUri,
        moduloDesc: data.moduloDesc,
        default: data.default,
        orden: data.orden,
    });
}

MenuOffline.todos = function todos(){
    return MenuOffline.findAll({
        attributes: [
            'id'
        ]
    });
}

MenuOffline.belongsTo(MenuOffline, {as:'MenuPadre', foreignKey: 'padre'});

module.exports = MenuOffline;