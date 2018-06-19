/**
 * @author --- Modificado **-**-****
 * @author renato creado 16-04-2018 
 */
var UsuarioMenu = require('../../modelos/msoffline/usuarioMenu');
var Menu = require('../../dtos/msoffline/menuDTO');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

UsuarioMenu.guardar = function guardarUsuario(data){
    return UsuarioMenu.findOne({where: {usuario: data.usuario, menu: data.menu }}).then(function(obj){
        if(obj){
            return UsuarioMenu.update({
                usuario : data.usuario,
                menu: data.menu,
            }, {where: {usuario: data.usuario, menu: data.menu }});
        }
        else{
            return UsuarioMenu.create({
                usuario : data.usuario,
                menu: data.menu,
        });
    }
});
}
    
UsuarioMenu.mostrar = function MostrarMenu (idUsuario){
    return UsuarioMenu.findAll({
        include: [{
                model: Menu,
                //attributes: atributosMenu.attributes
                include: [{
                    model: Menu,
                    as: 'MenuPadre'
                }]
        }],
        where : {usuario: idUsuario}}).then( menu => {
            if(menu){
                let menuFinal = [];
                menu.forEach(usuarioMenu => {
                    let padreTem = usuarioMenu.dataValues.MenuOffline.dataValues.MenuPadre.dataValues;
                    let padre = {}
                    padre.front = padreTem.front;
                   
                    padre.title = padreTem.title; 
                    padre.mini = padreTem.mini;
                    padre.id = padreTem.id;
                    padre.modulos = [];
                    padre.orden = padreTem.orden
                    menuFinal.push(padre);
                });
                menuFinal.sort(function (a, b) {
                    return (a.orden - b.orden)
                })
                menuFinal = removeDuplicates(menuFinal,'id');
                menuFinal.forEach( menuPadre => {
                    menu.forEach(menuHijo =>{
                        
                        if(menuHijo.dataValues.MenuOffline.MenuPadre.dataValues.id == menuPadre.id)
                        {
                            console.log('ingrese');
                            let menuHijoTem = {};
                            menuHijoTem.idModulo = menuHijo.dataValues.MenuOffline.idModulo ;
                            menuHijoTem.moduloUri = menuHijo.dataValues.MenuOffline.moduloUri ;
                            menuHijoTem.moduloDesc = menuHijo.dataValues.MenuOffline.moduloDesc ;
                            menuHijoTem.mini = menuHijo.dataValues.MenuOffline.mini ;
                            menuHijoTem.default = menuHijo.dataValues.MenuOffline.default ;
                            menuHijoTem.orden = menuHijo.dataValues.MenuOffline.orden ;
                            menuHijoTem.id = menuHijo.dataValues.MenuOffline.id;
                            menuPadre.modulos.push(menuHijoTem)
                        }   
                        menuPadre.modulos.sort(function(a, b){
                            return (a.orden - b.orden);
                        })
                    })
                    
                }) 
                return menuFinal;
            }else{
                return ('[]');
            }
        });
}

function removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject  = {};
    for(var i in originalArray) {
       lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for(i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
     return newArray;
}


var atributosMenu = {
    attributes: [
        'id',
        'usuario',
        'menu'
    ]
} 

module.exports = UsuarioMenu;