var ComprobanteEventoQuery = conexion.define('ComprobanteEventoQuery',
  {
      id:{
      type: sequelize.INTEGER,
      field: "se_idocevento",
      autoIncrement: true,
      unique: true,
      primaryKey: true,
      allowNull:false            
    },
      comprobante: {
      type: sequelize.TEXT,
      field: "in_idcomprobante",
    },
      evento: {
      type: sequelize.INTEGER,
      field: "in_idevento"
    },
      idioma: {
      type: sequelize.INTEGER,
      field: "in_iidioma",
    },
      descripcionEvento: {
      type: sequelize.TEXT,
      field: "vc_descripcion_evento"
    },
      observacionEvento: {
      type: sequelize.TEXT,
      field: "vc_observacion_evento"
    },
      estadoEvento: {
      type: sequelize.TEXT,
      field: "in_estado_evento"
    },
      fechaCreacion: {
      type: sequelize.TEXT,
      field: "ts_fec_creacion"
    },
      usuarioCreacion: {
      type: sequelize.TEXT,
      field: "vc_usuariocreacion"
    }
  },
  {
    tableName: 'fe_query_t_comprobante_evento',
    timestamps: false
  }
);

ComprobanteEventoQuery.sync();

module.exports = ComprobanteEventoQuery;