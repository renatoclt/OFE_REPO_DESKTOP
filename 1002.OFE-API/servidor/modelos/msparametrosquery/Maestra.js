/**
 * persistencia de la tabla t_maestra en la variable Maestra
 * tabla creada de EBIZ
 * Modificado --- creado --/--/----
 * @author Renato creado 09/01/2018
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var Maestra = conexion.define('Maestra',
  {
    organizacion:{      
      type: sequelize.TEXT(255),
      field: "vc_org",
      allowNull:false   
    },
    tabla: {
      type: sequelize.TEXT(255),
      field: "vc_idtabla",
      allowNull:false  
    },
    codigo: {
      type: sequelize.TEXT(255),
      field: "vc_idregistro",
      allowNull:false  
    },
    descripcionCorta: {
      type: sequelize.TEXT(255),
      field: "vc_desc_corta", 
    },
    descripcionLarga: {
      type: sequelize.TEXT(255),
      field: "vc_desc_larga_es"  
    },
    descripcionLargaIngles: {
      type: sequelize.TEXT(255),
      field: "vc_desc_larga_en",
    },
    tipo: {
      type:  sequelize.TEXT(255),
      field: "vc_tipo",
    },
    iso: {
      type:  sequelize.TEXT(255),
      field: "vc_iso",
    },
    equivalencia: {
      type:  sequelize.TEXT(255),
      field: "vc_equivalencia",
    },
    equivalenciaSalida: {
      type:  sequelize.TEXT(255),
      field: "vc_equivalenciasalida"
    },
    habilitado: {
      type: sequelize.INTEGER(32),
      field: "in_habilitado"
    },
    orden: {
      type: sequelize.INTEGER(32),
      field: "in_orden"
    },
    default: {
      type:  sequelize.INTEGER(32),
      field: "in_default"
    },
    idTablaPadre: {
      type:  sequelize.TEXT(255),
      field: "vc_idtabla_padre"
    },
    registroPadre: {
      type:  sequelize.TEXT(255),
      field: "vc_idregistro_padre"
    },
    fechaCreacion: {
      type:  sequelize.TEXT(255),
      field: "ts_fecha_creacion",
      allowNull: false
    },
    fechaModificacion: {
      type: sequelize.TEXT(255),
      field: "ts_fecha_modificacion"
    },
    portal: {
      type: sequelize.TEXT(255),
      field: "vc_portal"
    },
    perfil: {
      type: sequelize.TEXT(255),
      field: "vc_perfil"
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
    tableName: 'master_t_maestra',
    timestamps: false
  }
);

Maestra.removeAttribute('id');

module.exports = Maestra;