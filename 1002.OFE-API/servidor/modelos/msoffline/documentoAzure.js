/**
 *  * persistencia de la tabla t_dominio_doc en la variable DocumentosAzure
 * Modificado --- creado --/--/----
 * @author Ricardo Gamero creado 15/02/2018
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */

var DocumentosAzure = conexion.define(
    'DocumentosAzure',
    {
        id: {
            type: sequelize.INTEGER,
            field: "se_iddocazure",
            autoIncrement: true,
            unique: true,
            primaryKey: true,
            allowNull: false
        },
        idEntidad: {
            type: sequelize.INTEGER,
            field: "se_identidad",
            allowNull: false
        },
        tipoComprobante:{
            type: sequelize.INTEGER,
            field: "se_idTipoComprobante",
            allowNull: false,
        },
        logoEntidad: {
            // type: sequelize.BLOB,
            type: sequelize.STRING.BINARY,
            field: "bb_logoentidad",
            allowNull: false
        },
        logoEbiz: {
            // type: sequelize.BLOB,
            type: sequelize.STRING.BINARY,
            field: "bb_logoebiz",
            allowNull: false
        },
        plantillaPdf: {
            // type: sequelize.BLOB,
            type: sequelize.STRING.BINARY,
            field: "bb_plantillaPdf",
            allowNull: false
        },
        usuarioCreacion: {
            type: sequelize.TEXT,
            field: "vc_usu_creacion",
            allowNull: false
        },
        usuarioModificacion: {
            type: sequelize.TEXT,
            field: "vc_usu_modifica",
            allowNull: false
        },
        fechaCreacion: {
            type: sequelize.TEXT(6),
            field: "ts_fec_creacion",
            allowNull: false
        },
        fechaModificacion: {
            type: sequelize.TEXT(6),
            field: "ts_fec_modifica",
            allowNull: false
        },
        estado: {
            type: sequelize.INTEGER(32),
            field: "in_estado",
            allowNull: false
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
        tableName: 'fe_offline_t_documentos_azure',
        timestamps: false
    }
);

DocumentosAzure.sync();

module.exports = DocumentosAzure;