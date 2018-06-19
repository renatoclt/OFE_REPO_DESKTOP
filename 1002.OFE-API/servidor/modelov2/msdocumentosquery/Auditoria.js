/**
 * persistencia de la tabla t_comprobantepago en la variable ComprobantePago
 * Modificado --- creado --/--/----
 * @author Renato creado 09/01/2018
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 */
var Auditoria = conexion.define(
    'Auditoria',{
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
    }
);