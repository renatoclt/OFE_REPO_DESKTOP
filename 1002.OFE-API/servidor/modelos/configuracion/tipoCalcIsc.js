/**
 * persistencia de la tabla t_tipo_calc_isc en la variable TipoCalcIsc
 * Modificado --- creado --/--/----
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var TipoCalcIsc = conexion.define('TipoCalcIsc',
  {
    id:{
      type: sequelize.INTEGER,
      field: "se_itipo_calc",
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    iIdioma:{
      type: sequelize.INTEGER(32),
      field: "se_iidioma",
      allowNull: false
    },
    codigo:{
      type: sequelize.INTEGER(32),
      field: "in_codigo",
      allowNull: false
    },
    desc:{
      type: sequelize.TEXT,
      field: "vc_desc",
      allowNull: false
    },
    catalogo:{
      type: sequelize.TEXT,
      field: "vc_catalogo",
      allowNull: false
    },
    usuarioCreacion: {
      type: sequelize.TEXT,
      field: "vc_usu_creacion",
    },
    usuarioModificacion: {
      type: sequelize.TEXT,
      field: "vc_usu_modifica",
    },
    fechaCreacion: {
      type: sequelize.TEXT(6),
      field: "ts_fec_creacion",
    },
    fechaModificacion: {
      type: sequelize.TEXT(6),
      field: "ts_fec_modifica",
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
    tableName: 'fe_configuracion_t_tipo_calc_isc',
    timestamps: false
  }
);