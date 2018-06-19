var ComprobanteEventoQuery = conexion.define('ComprobanteEventoQuery',
  {
      seIdocevento:{
      type: sequelize.INTEGER,
      field: "se_idocevento",
      unique: true,
      primaryKey: true,
      allowNull:false            
    },
      inIdcomprobante: {
      type: sequelize.TEXT,
      field: "in_idcomprobante",
    },
      inIdevento: {
      type: sequelize.INTEGER,
      field: "in_idevento"
    },
      inIidioma: {
      type: sequelize.INTEGER,
      field: "in_iidioma",
    },
      vcDescripcionEvento: {
      type: sequelize.TEXT,
      field: "vc_descripcion_evento"
    },
      vcObservacionEvento: {
      type: sequelize.TEXT,
      field: "vc_observacion_evento"
    },
      inEstadoEvento: {
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

module.exports = ComprobanteEventoQuery;