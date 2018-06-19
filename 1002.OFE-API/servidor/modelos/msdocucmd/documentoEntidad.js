/**
 * persistencia de la tabla fe_comprobante_t_doc_entidad en la variable Entidad
 * Modificado --- creado --/--/----
 * @author Renato creado 19/01/2018
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
// var DocumentoEntidad = conexion.define('DocumentoEntidad',
//   {
//     id:{
//         type: sequelize.INTEGER,
//         field: "se_idocentidad",
//         autoIncrement: true,
//         unique: true,
//         primaryKey: true,
//         allowNull:false 
//     },

//     idTipoEntidad: {
//       type: sequelize.INTEGER,
//       field: "se_itipo_ent",
//     },

//     idEntidad: {
//         type: sequelize.TEXT(30),
//         field: "se_ientidad",
//     },

//     idComprobante: {
//         type: sequelize.TEXT(30),
//         field: "in_idcomprobantepago",
//     },

//     usuarioCreacion: {
//         type: sequelize.TEXT,
//         field: "vc_usu_creacion"
//     },

//     usuarioModifica: {
//         type: sequelize.TEXT,
//         field: "vc_usu_modifica"
//     },

//     fechaCreacion: {
//         type: sequelize.TEXT(6),
//         field: "ts_fec_creacion"
//     },
//     fechaModificacion: {
//         type: sequelize.TEXT(6),
//         field: "ts_fec_modifica"
//     },

//     estado: {
//         type: sequelize.INTEGER(32),
//         field: "in_estado"
//     },

//     fechaSincronizacion: {
//         type: sequelize.TEXT,
//         field: "ts_fec_sincronizado"
//     },

//     estadoSincronizado: {
//         type: sequelize.INTEGER,
//         field: "in_estado_sincronizado"
//     },
//     generado:{
//         type: sequelize.INTEGER,
//         field: "in_generado",
//     }
    
//   }, 
//   {
//     tableName: 'fe_comprobante_t_doc_entidad',
//     timestamps: false
//   }
// );

//module.exports = DocumentoEntidad;