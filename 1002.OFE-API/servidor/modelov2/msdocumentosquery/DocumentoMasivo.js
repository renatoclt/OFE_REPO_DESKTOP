/**
 * persistencia de la tabla t_docmasivo  schema = "fe_query" en la variable DocumentoMasivo
 * Modificado --- creado --/--/----
 * @author Renato creado 09/01/2018
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 */
var DocumentoMasivo = conexion.define(
    '',{
        id:{
            type: sequelize.INTEGER,
            field: "se_idocmasivo",
            autoIncrement: true,
            unique: true,
            primaryKey: true,
            allowNull:false   
        },
        idEntidad: {
            type: sequelize.TEXT,
            field: "se_ientidad",     
        },
        idTipoDocumento: {
            type: sequelize.TEXT,
            field: "in_tipodoc",     
        },
        usuario: {
            type: sequelize.TEXT,
            field: "vc_usuario",     
        },
        fecha: {
            type: sequelize.TEXT,
            field: "ts_fecha",     
        },
        nombreArchivo: {
            type: sequelize.TEXT,
            field: "vc_nomarchivo",     
        },
        tamanhoArchivo: {
            type: sequelize.TEXT,
            field: "vc_tamarchivo",     
        },
        ticket: {
            type: sequelize.TEXT,
            field: "vc_ticket",     
        },
        totalRegistros: {
            type: sequelize.TEXT,
            field: "in_total_lineas",     
        },
        totalRegistrosErroneos: {
            type: sequelize.TEXT,
            field: "estado",     
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
      tableName: '',
      timestamps: false
    }
);

module.exports = DocReferencia;
