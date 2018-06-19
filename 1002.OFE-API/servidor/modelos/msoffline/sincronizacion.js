/**
 * persistencia de la tabla t_parametro_doc en la variable ParametroDoc
 * @author Renato Modificado 10/01/2018
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var Sincronizacion = conexion.define('Sincronizacion',
  {
    id:{
      type: sequelize.INTEGER,
      field: "se_idSincronizacion",
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    descripcion:{
      type: sequelize.TEXT,
      field: "vc_descripcion"
    },
    idioma:{
      type: sequelize.TEXT,
      field: "se_iidioma"
    },
    usuarioCreacion: {
      type: sequelize.TEXT,
      field: "vc_usu_creacion",
      allowNull: true
    },
    usuarioModificacion: {
      type: sequelize.TEXT,
      field: "vc_usu_modifica",
      allowNull: true
    },
    fechaCreacion: {
      type: sequelize.TEXT(6),
      field: "ts_fec_creacion",
      allowNull: true
    },
    fechaModificacion: {
      type: sequelize.TEXT(6),
      field: "ts_fec_modifica",
      allowNull: true
    },
    estado: {
      type: sequelize.INTEGER(32),
      field: "in_estado",
      allowNull:false,
    },
    fechaSincronizacion: {
      type: sequelize.TEXT,
      field: "ts_fec_sincronizado"
    },
    estadoSincronizado: {
      type: sequelize.INTEGER,
      field: "in_estado_sincronizado"
    },
    tipoComprobante: {
      type: sequelize.TEXT,
      field: "ts_tipo_comprobante"
    }       
  },
  {
    tableName: 'fe_offline_t_sincronizacion',
    timestamps: false
  }
);

Sincronizacion.sync().then(() => {
  Sincronizacion.create({
    id: 1,
    descripcion: 'Factura' ,
    idioma: 1,
    usuarioCreacion: constantes.usuarioOffline,
    usuarioModificacion:constantes.usuarioOffline,
    fechaCreacion:dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
    fechaModificacion:dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
    estado:constantes.estadoActivo,
    fechaSincronizacion: dateFormat(new Date(constantes.fechaSincronizacionInicio), "yyyy-mm-dd HH:MM:ss"),
    estadoSincronizado: constantes.estadoActivo,
    tipoComprobante: '01',
  }).catch(function (err){
    console.log("El estado ya existe");
  }),
  Sincronizacion.create({
    id: 2,
    descripcion: 'Boleta' ,
    idioma: 1,
    usuarioCreacion: constantes.usuarioOffline,
    usuarioModificacion:constantes.usuarioOffline,
    fechaCreacion:dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
    fechaModificacion:dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
    estado:constantes.estadoActivo,
    fechaSincronizacion: dateFormat(new Date(constantes.fechaSincronizacionInicio), "yyyy-mm-dd HH:MM:ss"),
    estadoSincronizado: constantes.estadoActivo,
    tipoComprobante: '03',
  }).catch(function (err){
    console.log("El estado ya existe");
  }),
  Sincronizacion.create({
    id: 3,
    descripcion: 'Retencion' ,
    idioma: 1,
    usuarioCreacion: constantes.usuarioOffline,
    usuarioModificacion:constantes.usuarioOffline,
    fechaCreacion:dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
    fechaModificacion:dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
    estado:constantes.estadoActivo,
    fechaSincronizacion: dateFormat(new Date(constantes.fechaSincronizacionInicio), "yyyy-mm-dd HH:MM:ss"),
    estadoSincronizado: constantes.estadoActivo,
    tipoComprobante: '20',
  }).catch(function (err){
    console.log("El estado ya existe");
  }),
  Sincronizacion.create({
    id: 4,
    descripcion: 'Percepción' ,
    idioma: 1,
    usuarioCreacion: constantes.usuarioOffline,
    usuarioModificacion:constantes.usuarioOffline,
    fechaCreacion:dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
    fechaModificacion:dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
    estado:constantes.estadoActivo,
    fechaSincronizacion: dateFormat(new Date(constantes.fechaSincronizacionInicio), "yyyy-mm-dd HH:MM:ss"),
    estadoSincronizado: constantes.estadoActivo,
    tipoComprobante: '40',
  }).catch(function (err){
    console.log("El estado ya existe");
  }),
  Sincronizacion.create({
    id: 5,
    descripcion: 'Parametros' ,
    idioma: 1,
    usuarioCreacion: constantes.usuarioOffline,
    usuarioModificacion:constantes.usuarioOffline,
    fechaCreacion:dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
    fechaModificacion:dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
    estado:constantes.estadoActivo,
    fechaSincronizacion: dateFormat(new Date(constantes.fechaSincronizacionInicio), "yyyy-mm-dd HH:MM:ss"),
    estadoSincronizado: constantes.estadoActivo,
    tipoComprobante: '05',
  }).catch(function (err){
    console.log("El estado ya existe");
  }),
  Sincronizacion.create({
    id: 6,
    descripcion: 'Clientes' ,
    idioma: 1,
    usuarioCreacion: constantes.usuarioOffline,
    usuarioModificacion:constantes.usuarioOffline,
    fechaCreacion:dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
    fechaModificacion:dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
    estado:constantes.estadoActivo,
    fechaSincronizacion: dateFormat(new Date(constantes.fechaSincronizacionInicio), "yyyy-mm-dd HH:MM:ss"),
    estadoSincronizado: constantes.estadoActivo,
    tipoComprobante: '06',
  }).catch(function (err){
    console.log("El estado ya existe");
  })
});

module.exports = Sincronizacion;