/**
 * persistencia de la tabla t_parametro_doc en la variable ParametroDoc
 * @author Renato Modificado 10/01/2018
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var QueryProducto = conexion.define('QueryProducto', {
    id: {
      type: sequelize.INTEGER,
      field: "se_iproducto",
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    entidad: {
      type: sequelize.INTEGER(32),
      allowNull: false,
      field: "se_ientidad",
    },
    tipoCalc: {
      type: sequelize.INTEGER(32),
      field: "se_itipo_calc",
    },
    codigo: {
      type: sequelize.TEXT,
      allowNull: false,
      field: "vc_codigo",
    },
    descripcion: {
      type: sequelize.TEXT,
      allowNull: false,
      field: "vc_desc",
    },
    precioUnitario: {
      type: sequelize.TEXT,
      allowNull: false,
      field: "nu_precio_unit",
    },
    montoIsc: {
      type: sequelize.TEXT(6),
      allowNull: false,
      field: "nu_monto_isc",
    },
    UnidadMedida: {
      type: sequelize.TEXT(6),
      allowNull: false,
      field: "ch_uni_medida",
    },
    afectaDetra: {
      type: sequelize.TEXT,
      field: "ch_afecta_detra"
    },
    tipoProducto: {
      type : sequelize.TEXT,
      field: 'ch_tipo_prod' 
    },
    usuarioCreacion: {
      type: sequelize.TEXT,
      allowNull: false,
      field: "vc_usu_creacion",
    },
    
    estado: {
      type: sequelize.TEXT,
      allowNull: false,
      field: "in_estado"
    },
    usuarioModificacion: {
      type: sequelize.TEXT,
      allowNull: false,
      field: "vc_usu_modifica",
    },
    fechaCreacion: {
      type: sequelize.TEXT(6),
      allowNull: false,
      field: "ts_fec_creacion",
    },
    fechaModificacion: {
      type: sequelize.TEXT(6),
      allowNull: false,
      field: "ts_fec_modifica",
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
      tableName: 'fe_query_t_producto',
      timestamps: false
    });
    QueryProducto.sync();
  module.exports = QueryProducto;