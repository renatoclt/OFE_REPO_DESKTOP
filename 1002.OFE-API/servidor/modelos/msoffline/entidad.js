/**
 * persistencia de la tabla t_entidad en la variable Entidad
 * Modificado --- creado --/--/----
 * @author Renato creado 23/01/2018
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var Entidad = conexion.define('Entidad', 
    {
        id: {
            type: sequelize.TEXT,
            field: "se_ientidad",
            unique: true,
            primaryKey: true
        },
        documento: {
            type: sequelize.TEXT,
            field: "vc_documento",
        },
        denominacion : {
            type: sequelize.TEXT,
            field: "vc_denominacion"
        },
        nombreComercial: {
            type: sequelize.TEXT,
            field: "vc_nom_comercia"
        },
        direccion: {
            type: sequelize.TEXT,
            field: "vc_dir_fiscal"
        },
        correo: {
            type: sequelize.TEXT,
            field: "vc_correo"
        },
        idebiz:{
            type: sequelize.TEXT,
            field: "vc_idebiz"
        },
        usuarioCreacion: {
            type: sequelize.TEXT,
            field: "vc_usu_creacion"
        },
        usuarioModificacion: {
            type: sequelize.TEXT,
            field: "vc_usu_modifica"
        },
        fechaCreacion: {
            type: sequelize.TEXT(6),
            field: "ts_fec_creacion"
        },
        fechaModificacion: {
            type: sequelize.TEXT(6),
            field: "ts_fec_modifica"
        },
        estado: {
            type: sequelize.INTEGER(32),
            field: "in_estado"
        },
        fechaSincronizado: {
            type: sequelize.TEXT,
            field: "ts_fec_sincronizado"
        },
        estadoSincronizado: {
            type: sequelize.INTEGER,
            field: "in_estado_sincronizado"
        }
    }, 
    {
        tableName: 'fe_organizacion_t_entidad',
        timestamps: false
});
Entidad.sync();
module.exports = Entidad;