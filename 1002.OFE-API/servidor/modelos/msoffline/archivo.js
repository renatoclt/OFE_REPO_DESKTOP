/**
 * persistencia de la tabla t_comprobantepago en la variable ComprobantePago
 * Modificado --- creado --/--/----
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var Archivo = conexion.define(
    'Archivo',{
        id:{
            type: sequelize.TEXT,
            field: "se_iarchivo",
            unique: true,
            primaryKey: true,
            allowNull:false             
        },
        archivo: {
            type: sequelize.STRING.BINARY,
            field: "bl_archivo",
            allowNull:false
        },
        usuarioCreacion: {
          type: sequelize.TEXT,
          field: "vc_usu_creacion",
          allowNull:false          
        },
        usuarioModificacion: {
          type: sequelize.TEXT,
          field: "vc_usu_modifica",
          allowNull:false          
        },
        fechaCreacion: {
          type: sequelize.TEXT(6),
          field: "ts_fec_creacion",
          allowNull:false          
        },
        fechaModificacion: {
          type: sequelize.TEXT(6),
          field: "ts_fec_modifica",
          allowNull:false
        },
        estado: {
          type: sequelize.INTEGER(32),
          field: "in_estado",
          allowNull:false
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
        tableName: 'fe_offline_t_archivo',
        timestamps: false
    }
);
Archivo.sync();
module.exports = Archivo;