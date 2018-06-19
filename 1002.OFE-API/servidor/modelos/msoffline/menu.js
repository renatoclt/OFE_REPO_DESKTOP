/**
 * persistencia de la tabla t_entidad en la variable Entidad
 * Modificado --- creado --/--/----
 * @author Renato creado 23/01/2018
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var MenuOffline = conexion.define('MenuOffline', 
    {
        id: {
            type: sequelize.TEXT,
            field: "se_iempresaoffline",
            unique: true,
            primaryKey: true
        },
        front: {
            type: sequelize.TEXT,
            field: "vc_front",
            allowNull:false
        },
        logoFront:{
            type: sequelize.BLOB,
            field: "bl_logofront",
        },
        icon:{
            type: sequelize.BLOB,
            field: "bl_icon",
        },
        title:{
            type: sequelize.TEXT,
            field: "vc_title"
        },
        mini:{
            type: sequelize.TEXT,
            field: "vc_mini"
        },
        padre:{
            type: sequelize.TEXT,
            field: "vc_padre"
        },
        moduloUri:{
            type: sequelize.TEXT,
            field: "vc_moduloUri"
        },
        moduloDesc:{
            type: sequelize.TEXT,
            field: "vc_moduloDesc"
        },
        mini:{
            type: sequelize.TEXT,
            field: "vc_mini"
        },
        default:{
            type: sequelize.TEXT,
            field: "bl_default"
        },
        orden:{
            type: sequelize.INTEGER,
            field: "in_orden"
        }
    }, 
    {
        tableName: 'fe_offline_t_menu',
        timestamps: false
});

MenuOffline.sync().then(() => {
    MenuOffline.create({
        id: '0',
        front: '',
        logoFront: '',
        icon: '',
        title: '',
        mini: 'CC',
        padre: '0',
        moduloUri: 'padre',
        moduloDesc: 'padre',
        default: 'false',
        orden:'0'
    }).catch(function (err){
        console.log(err);
        console.log("El menu ya existe");
    });
    MenuOffline.create({
        id: '1',
        front: 'PEB2M',
        logoFront: 'https://sab2md.blob.core.windows.net/public-dev/org/logos/b2mining-ico.png',
        icon: '',
        title: 'Comprador',
        mini: 'CC',
        padre: '0',
        moduloUri: '',
        moduloDesc: '',
        default: 'false',
        orden:'1'
    }).catch(function (err){
        console.log("El menu ya existe");
    }),
    MenuOffline.create({
        id: 'af31777d-22b4-4a9a-aca1-b5f4454ded26',
        front: '',
        logoFront: '',
        icon: '',
        title: '',
        mini: 'CP',
        padre: '1',
        moduloUri: '//comprobantes/factura/crear',
        moduloDesc: 'Comp. de Pago - Crear',
        default: 'false',
        orden:'1'
    }).catch(function (err){
        console.log("El menu ya existe");
    }),
    MenuOffline.create({
        id: '1c3bf1e3-8371-4777-a692-1b0be76b8aaa',
        front: '',
        logoFront: '',
        icon: '',
        title: '',
        mini: 'CL',
        padre: '1',
        moduloUri: '//comprobantes/consultar',
        moduloDesc: 'Comp. de Pago - Consult',
        default: 'false',
        orden:'2'
    }).catch(function (err){
        console.log("El menu ya existe");
    }),
    MenuOffline.create({
        id: '2',
        front: 'PEB2M',
        logoFront: 'https://sab2md.blob.core.windows.net/public-dev/org/logos/b2mining-ico.png',
        icon: '',
        title: 'Percepcion/Retencion',
        mini: '',
        padre: '0',
        moduloUri: '',
        moduloDesc: '',
        default: 'false',
        orden:'2'
    }).catch(function (err){
        console.log("El menu ya existe");
    }),
    MenuOffline.create({
        id: '03797780-2568-4da6-92a1-0ef545bf8290',
        front: '',
        logoFront: '',
        icon: '',
        title: '',
        mini: 'RE',
        padre: '1',
        moduloUri: '//percepcion-retencion/retencion/crear/individual',
        moduloDesc: 'Percepción/Ret. - Crear',
        default: 'true',
        orden:'1'
    }).catch(function (err){
        console.log("El menu ya existe");
    }),
    MenuOffline.create({
        id: '03797780-2568-4da7-92a1-0ef545bf8290',
        front: '',
        logoFront: '',
        icon: '',
        title: '',
        mini: 'RL',
        padre: '1',
        moduloUri: '//percepcion-retencion/consultar',
        moduloDesc: 'Percepción/Ret. - Consult',
        default: 'false',
        orden:'2'
    }).catch(function (err){
        console.log("El menu ya existe");
    }),
    MenuOffline.create({
        id: '3',
        front: 'PEB2M',
        logoFront: 'https://sab2md.blob.core.windows.net/public-dev/org/logos/b2mining-ico.png',
        icon: '',
        title: 'Comunicacion de bajas',
        mini: '',
        padre: '0',
        moduloUri: '',
        moduloDesc: '',
        default: 'false',
        orden:'3'
    }).catch(function (err){
        console.log("El menu ya existe");
    }),
    MenuOffline.create({
        id: '03797780-2568-4da8-92a1-0ef545bf8290',
        front: '',
        logoFront: '',
        icon: '',
        title: '',
        mini: 'BE',
        padre: '1',
        moduloUri: '//resumen-bajas/crear',
        moduloDesc: 'Resumen Bajas - Crear',
        default: 'false',
        orden:'4'
    }).catch(function (err){
        console.log("El menu ya existe");
    }),
    MenuOffline.create({
        id: '03797780-2568-4da9-92a1-0ef545bf8290',
        front: '',
        logoFront: '',
        icon: '',
        title: '',
        mini: 'BL',
        padre: '1',
        moduloUri: '//resumen-bajas/consultar',
        moduloDesc: 'Resumen Bajas - Consult',
        default: 'false',
        orden:'2'
    }).catch(function (err){
        console.log("El menu ya existe");
    }),
    MenuOffline.create({
        id: '4',
        front: 'PEB2M',
        logoFront: 'https://sab2md.blob.core.windows.net/public-dev/org/logos/b2mining-ico.png',
        icon: '',
        title: 'Sincronización',
        mini: '',
        padre: '0',
        moduloUri: '',
        moduloDesc: '',
        default: 'false',
        orden:'4'
    }).catch(function (err){
        console.log("El menu ya existe");
    }),
    MenuOffline.create({
        id: '12345678-1234-1234-1234-1234567890ab',
        front: '',
        logoFront: '',
        icon: '',
        title: 'Sincronización',
        mini: 'CC',
        padre: '1',
        moduloUri: '//sincronizacion/sincronizar',
        moduloDesc: 'Sincronización',
        default: 'false',
        orden:'5'
    }).catch(function (err){
        console.log("El menu ya existe");
    });
});

module.exports = MenuOffline;