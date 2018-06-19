/**
 * persistencia de la tabla t_docmasivo_det schema = "fe_query" en la variable DetalleMasivo
 * Modificado --- creado --/--/----
 * @author Renato creado 09/01/2018
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 */
var DetalleMasivo = conexion.define(
    '',{
        id:{//idDetalleMasivo
            type: sequelize.INTEGER,
            field: "se_idocmasivdet",
            autoIncrement: true,
            unique: true,
            primaryKey: true,
            allowNull:false   
        },
        idDocumentoMasivo: {
            type: sequelize.TEXT,
            field: "se_idocmasivo",     
        },
        fila: {
            type: sequelize.TEXT,
            field: "in_fila",     
        },
        in_columna: {
            type: sequelize.TEXT,
            field: "columna",     
        },
        serie: {
            type: sequelize.TEXT,
            field: "vc_serie",     
        },
        correlativo: {
            type: sequelize.TEXT,
            field: "vc_numero",     
        },
        error: {
            type: sequelize.TEXT,
            field: "vc_descerror",     
        },
        estado: {
            type: sequelize.TEXT,
            field: "in_estado",     
        }
    },
    {
      tableName: '',
      timestamps: false
    }
);

module.exports = DocReferencia;
