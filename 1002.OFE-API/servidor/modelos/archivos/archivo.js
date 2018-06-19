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
            type: sequelize.INTEGER,
            field: "se_iarchivo",
            autoIncrement: true,
            unique: true,
            primaryKey: true,
            allowNull:false            
        },
        idComprobantePago: {
            type: sequelize.INTEGER(32),
            field: "in_idComprobantePago",
            allowNull:false
        },
        ubicacion: {
            type: sequelize.TEXT,
            field: "vc_ubicacion",
            allowNull:false
        },
        tipo: {
            type: sequelize.INTEGER(32),
            field: "in_tipo",
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
        tableName: 't_archivo',
        timestamps: false
    }
);