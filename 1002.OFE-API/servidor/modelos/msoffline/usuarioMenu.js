/**
 * persistencia de la tabla t_entidad en la variable Entidad
 * Modificado --- creado --/--/----
 * @author Renato creado 23/01/2018
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var Menu = require('../../dtos/msoffline/menuDTO');
var UsuarioMenu = conexion.define('UsuarioMenu', 
    {
        id: {
            type: sequelize.INTEGER,
            field: "se_EmpresaOffline",
            autoIncrement: true,
            unique: true,
            primaryKey: true
        },
        usuario: {
            type: sequelize.TEXT,
            field: "vc_usuario",
        },
        menu: {
            type: sequelize.TEXT,
            field: "vc_menu",
        }
    }, 
    {
        tableName: 'fe_offline_t_usuarioMenu',
        timestamps: false
});

UsuarioMenu.belongsTo(Menu, {foreignKey: 'menu'});


UsuarioMenu.sync();

module.exports = UsuarioMenu;