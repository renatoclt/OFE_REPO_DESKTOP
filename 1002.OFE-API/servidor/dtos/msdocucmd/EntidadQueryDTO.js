EntidadQueryCommand = require('../../modelos/msdocucmd/EntidadQueryCommand');
EntidadQueryOffline = require('../../modelos/msoffline/EntidadQueryOffline');
contantes = require("../../utilitarios/constantes");
RecursoOrganizacion = require("../../modelos/msdocucmd/RecursoOrganizacion");
EntParametrosQuery=require("../../modelos/msdocumentosquery/EntParametrosQuery");
sequelize = require("sequelize");
OP = sequelize.Op;
var EntidadQueryDTO = function () { };


async function buscarEntidades(idTipoDocumento, denominacion, pagina, regxpag) {

    var clauseWhere = {
        idTipoDocumento: idTipoDocumento,
        denominacion: { [OP.like]: ('%' + denominacion + '%') },
        estado: 1

    };
     if(idTipoDocumento=='-1')
     {
         delete clauseWhere['idTipoDocumento'];
     }

    var promise = new Promise(function (resolve, reject) {
        conexion.sync().then(function () {
            EntidadQueryCommand.findAndCountAll(
                {
                    where: clauseWhere,
                    offset: (pagina * regxpag), 
                    limit: regxpag 
                }
            ).then(function (entidades) {
              var cantidadTotalEntidades = entidades.count;
              var registros=entidades.rows;
              if(registros.length>0&&registros!=undefined){
                var cont=0;
                var entidades_ =[]; 
                  entidades.rows.map(function (data) {
                      return ConvertirOrganizacionesDTO(data.dataValues).then(function(DTO){
                          cont ++;
                          entidades_.push(DTO);
                          if(cont==registros.length) 
                              resolve({ 'entidades': entidades_, 'cantidadReg': cantidadTotalEntidades });
                      });
                      
                  });
              }else{
                    buscarEntidadesOffline(idTipoDocumento, denominacion, pagina, regxpag).then(function(data){
                        console.log(data);
                        resolve({ 'entidades':data.entidades, 'cantidadReg': data.cantidadReg});
                    });
              }
            }, function (err) {
                console.log(err);
                resolve({});
            });
        });
    });
    return promise;
};


EntidadQueryDTO.buscarEntidadById = function (numDocumento, tipoDocumento) {

    var clauseWhere = {
        documento: numDocumento,
        idTipoDocumento: tipoDocumento
    };

    if(tipoDocumento!=1&&tipoDocumento!=6){
        delete clauseWhere['idTipoDocumento'];
    }

    var promise = new Promise(function (resolve, reject) {
        conexion.sync().then(function () {
            EntidadQueryCommand.findOne({
                where: clauseWhere
            }).then(function (entidad) {
                if (entidad != null) {
                    ConvertirOrganizacionesDTO(entidad.dataValues).then(function(DTO){
                        resolve(DTO);
                    });
                   
                } else {
                    //si no encuntra busca tabla entidada offline
                    buscarEntidadByNumDocumentoOffline(numDocumento, tipoDocumento).then(function (DTO) {
                        resolve(DTO);
                    });
                }

            }, function (err) {
                console.log(err);
                resolve({});
            });
        });
    });
    return promise;
};


 function buscarEntidadesOffline (idTipoDocumento, denominacion, pagina, regxpag) {

    var clauseWhere = {
        idTipoDocumento: idTipoDocumento,
        denominacion: { [OP.like]: ('%' + denominacion + '%') },
        estado: 1

    };
     if(idTipoDocumento=='-1')
     {
         delete clauseWhere['idTipoDocumento'];
     }

    var promise = new Promise(function (resolve, reject) {
        conexion.sync().then(function () {
            EntidadQueryOffline.findAndCountAll(
                {
                    where: clauseWhere,
                    offset: (pagina * regxpag), 
                    limit: regxpag 
                }
            ).then(function (entidades) {


                var cantidadTotalEntidades = entidades.count;
                var cont=0;
                var entidades_ =[];
                var registros=entidades.rows;
                if(registros.length>0&&registros!=undefined){                  
                    entidades.rows.map(function (data) {
                        return ConvertirOrganizacionesDTO(data.dataValues).then(function(DTO){
                            cont ++;
                            entidades_.push(DTO);
                            if(cont==registros.length) 
                                resolve({ 'entidades': entidades_, 'cantidadReg': cantidadTotalEntidades });
                        });
                        
                    });
                }else{
                            resolve({ 'entidades': entidades_, 'cantidadReg': 0 });
                }

    
            }, function (err) {
                console.log(err);
                resolve({});
            });
        });
    });
    return promise;
};



function buscarEntidadByNumDocumentoOffline (numDocumento, idTipoDocumento) {
    var promise = new Promise(function (resolve, reject) {
        conexion.sync().then(function () {
            EntidadQueryOffline.findOne({
                where: { documento: numDocumento, idTipoDocumento: idTipoDocumento }
            }).then(function (entidad) {
                if (entidad != null) {
                    var DTO = ConvertirOrganizacionesDTO(entidad.dataValues);
                    resolve(DTO);
                } else {
                    resolve({});
                }
            }, function (err) {
                console.log(err);
                resolve({});
            });
        });
    });
    return promise;
};

async function ConvertirOrganizacionesDTO(data) {
    var salida = new RecursoOrganizacion();
    salida.id = data.id, //identificador
    salida.documento = data.documento,
    salida.denominacion = data.denominacion,
    salida.nombreComercial = data.nombreComercial,
    salida.direccionFiscal = data.direccionFiscal,
    salida.correoElectronico = data.correoElectronico,
    // salida.logo = data.logo,
    salida.certificadoDigitalClave = null,
    // salida.certificadoDigitalArchivo = null,
    salida.solUsuario = null,
    salida.solClave = null,
    salida.pais = data.pais,
    salida.ubigeo = data.ubigeo,
    salida.tipoDocumento = data.tipoDocumento,
    salida.idTipoDocumento = data.idTipoDocumento,
    salida.idEbiz = data.idEbiz,
    salida.usuarioCreacion = data.usuarioCreacion,
    salida.usuarioModificacion = data.usuarioModificacion,
    salida.fechaCreacion = data.fechaCreacion, //Timestamp
    salida.fechaModificacion = data.fechaModificacion,//Timestamp
    salida.estado = data.estado      // int
//      salida.estadoRegistro = 9,  // REGISTRO_EXISTE_BD //data.estadoRegistro,
//      salida.tipoFuente = 3               // BASE_DATOS_QUERY
    
   await buscarEntidadParametros(data.id).then(function(parametros){

        if(parametros.cantidadReg>0){
            var listaparametros= parametros.parametros;
            listaparametros.forEach(parametro => {
                var objeto=agregarParametrosaEntidad(parametro);
                Object.assign(salida, objeto);
            });
        }else{
                console.log(data.id +' : sin parametros');
        }
        
    });
           
    return salida;
    
}

 async function buscarEntidadParametros (idDocumento){

        var objeto={};
       return EntParametrosQuery.findAndCountAll({ 
                where: { inIentidad: idDocumento} 
            }).then(function (parametros) {
                            var cantidadRegistros = parametros.count;
                            parametros = parametros.rows.map(function (data) {
                                return data.dataValues;
                            });
                    //return{ 'parametros': parametros, 'cantidadReg': cantidadRegistros};
                    objeto.parametros=parametros;
                    objeto.cantidadReg=cantidadRegistros;
                    return objeto;
            },function (err) {
                    console.log(err);
                    return objeto;
            });
        //return objeto;
}

function agregarParametrosaEntidad(parametro){

    var objeto={};
    var TipoParametroEntidad=parametro.inIparamEnt;
    var Json=JSON.parse(parametro.vcJson);
    switch(TipoParametroEntidad) {
        case 1:
                objeto.pais=Json.auxiliarCaracter;
            break;
        case 2:
                objeto.tipoDocumento = Json.auxiliarCaracter;
                objeto.idTipoDocumento = Json.valor;
            break;
        case 3:
                objeto.ubigeo=Json.valor;
            break;
        case 4:
                objeto.solUsuario=Json.valor;
                objeto.solClave=Json.auxiliarCaracter;
            break;
        case 5: 
                objeto.certificadoDigitalClave=Json.auxiliarCaracter;
                objeto.certificadoDigitalCloud=Json.valor;
                objeto.certificadoDigitalTiempo=Json.auxiliarFecha;
            break;
        case 6:
                objeto.logoCloud=Json.valor;
                objeto.logoTiempo=Json.auxiliarFecha;
            break;
        case 7:
                objeto.plantillaFacturaInterfaz=Json.auxiliarCaracter;
                objeto.plantillaFacturaCloud=Json.valor;
                objeto.plantillaFacturaTiempo=Json.auxiliarFecha;
            break;
        case 8:
                objeto.plantillaBoletaInterfaz=Json.auxiliarCaracter;
                objeto.plantillaBoletaCloud=Json.valor;
                objeto.plantillaBoletaTiempo=Json.auxiliarFecha;
            break;
        case 9:
                objeto.plantillaNotaCreditoInterfaz=Json.auxiliarCaracter;
                objeto.plantillaNotaCreditoCloud=Json.valor;
                objeto.plantillaNotaCreditoTiempo=Json.auxiliarFecha;        
            break;
        case 10:
                objeto.plantillaNotaDebitoInterfaz=Json.auxiliarCaracter;
                objeto.plantillaNotaDebitoCloud=Json.valor;
                objeto.plantillaNotaDebitoTiempo=Json.auxiliarFecha; 
            break;
        case 11:
                objeto.plantillaGuiaRemisionInterfaz=Json.auxiliarCaracter;
                objeto.plantillaGuiaRemisionCloud=Json.valor;
                objeto.plantillaGuiaRemisionTiempo=Json.auxiliarFecha; 
            break;
        case 12:
                objeto.plantillaRetencionInterfaz=Json.auxiliarCaracter;
                objeto.plantillaRetencionCloud=Json.valor;
                objeto.plantillaRetencionTiempo=Json.auxiliarFecha; 
            break;
        case 13:
                objeto.plantillaPercepcionInterfaz=Json.auxiliarCaracter;
                objeto.plantillaPercepcionCloud=Json.valor;
                objeto.plantillaPercepcionTiempo=Json.auxiliarFecha; 
            break;
        case 14:
                objeto.recibirNotificaciones=parseInt(Json.valor);
            break;                        
        default:
                console.log('no existe el parametro');
    }
    return objeto;
}
EntidadQueryDTO.buscarEntidades=buscarEntidades;
module.exports = EntidadQueryDTO;