var TipoAfecIgv = conexion.define('TipoAfecIgv', {
  idTipoAfectacion: {
    type: sequelize.INTEGER,
    field: "se_itipo_afec",
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  idIdioma: {
    type: sequelize.INTEGER(32),
    allowNull: false,
    field: "se_iidioma",
  },
  codigo: {
    type: sequelize.INTEGER(32),
    field: "in_codigo",
  },
  descripcion: {
    type: sequelize.TEXT,
    allowNull: false,
    field: "vc_desc",
  },
  afectaIgv: {
    type: sequelize.TEXT(1),
    allowNull: false,
    field: "ch_afecta_igv",
  },
  estado: {
    type: sequelize.INTEGER(32),
    allowNull: false,
    field: "in_estado"
  },
  usuarioCreacion: {
    type: sequelize.TEXT,
    allowNull: false,
    field: "vc_usu_creacion",
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
    tableName: 'fe_configuracion_t_tipo_afec_igv',
    timestamps: false
  });

module.exports = TipoAfecIgv;