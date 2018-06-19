/**
 * persistencia de la tabla t_serie en la variable Serie
 * @author Renato Modificado 10/01/2018
 * @author Renato creado 14/12/2017
 * @argument 1 sobrenombre de la tabla
 * @argument 2 campos de la tabla
 * @argument 3 tabla sqlite
 */
var QueryEstComprobante = conexion.define('QueryEstComprobante',
  {
    id:{
      type: sequelize.INTEGER,
      field: "se_iestado",
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    idioma: {
      type: sequelize.INTEGER(32),
      field: "se_iidioma",
      allowNull:false
    },
    descripcion: {
      type: sequelize.INTEGER(32),
      field: "vc_desc",
    },
    abreviatura: {
      type: sequelize.TEXT,
      field: "vc_abrev",
      allowNull:false
    },
    fechaSincronizado: {
      type: sequelize.TEXT,
      field: "ts_fec_sincronizado"
    },  
    estado: {
      type: sequelize.INTEGER(32),
      field: "in_estado"
    },
    estadoSincronizado: {
      type: sequelize.INTEGER,
      field: "in_estado_sincronizado"
    }        
  },
  {
    tableName: 'fe_query_t_est_comprobante',
    timestamps: false,
  }
);

QueryEstComprobante.sync().then(() => {
  QueryEstComprobante.create({
    id: '-1',
    idioma: 1,
    descripcion:'Guardado Local',
    abreviatura: 'Guardado Local',
    fechaSincronizado: dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
    estadoSincronizado: constantes.estadoActivo
  }).catch(function (err){
    console.log("El estado ya existe");
  }),
  QueryEstComprobante.create({
    id: '-90',
    idioma: 1,
    descripcion:'Bloqueado Local',
    abreviatura: 'Bloqueado Local',
    fechaSincronizado: dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
    estadoSincronizado: constantes.estadoActivo
  }).catch(function (err){
    console.log("El estado ya existe");
  }),
  QueryEstComprobante.create({
    id: '-99',
    idioma: 1,
    descripcion:'Eliminado Local',
    abreviatura: 'Eliminado Local',
    fechaSincronizado: dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss"),
    estadoSincronizado: constantes.estadoActivo
  }).catch(function (err){
    console.log("El estado ya existe");
  });
});

module.exports = QueryEstComprobante;