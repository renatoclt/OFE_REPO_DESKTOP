/**
 * persistencia de la tabla t_entidad en la variable Entidad
 * Modificado --- creado --/--/----
 * @author Renato creado 23/01/2018
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var EmpresaOffline = conexion.define('EmpresaOffline', 
    {
        id: {
            type: sequelize.INTEGER,
            field: "se_iempresaoffline",
            autoIncrement: true,
            unique: true,
            primaryKey: true
        },
        ruc: {
            type: sequelize.TEXT,
            field: "vc_ruc",
            allowNull:false
        },
    }, 
    {
        tableName: 'fe_offline_t_empresaoffline',
        timestamps: false
});

EmpresaOffline.sync();

module.exports = EmpresaOffline;