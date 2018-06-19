/**
 * persistencia de la tabla t_tipo_prec_ven en la variable TipoPrecVenta
 * @author Renato creado 14/12/2017
 * @author Roycer modificado 15/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var TipoPrecVenta = conexion.define('TipoPrecVenta',
  {
    idTipoPrecioVenta:{
      type: sequelize.INTEGER,
      field: "se_itipo_prec",
      autoIncrement: true,
      primaryKey: true
    },
    idIdioma: {
      type:sequelize.INTEGER(32),
      field: "se_iidioma",
      allowNull:false
    },
    codigo: {
      type:sequelize.INTEGER(32),
      field: "in_codigo",
      allowNull:false
    },
    descripcion: {
      type:sequelize.TEXT,
      field: "vc_desc",
      allowNull:false
    },
    catalogo: {
      type: sequelize.TEXT,
      field: "vc_catalogo",
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
    tableName: 'fe_configuracion_t_tipo_prec_ven',
    timestamps: false
  }
);

module.exports = TipoPrecVenta;