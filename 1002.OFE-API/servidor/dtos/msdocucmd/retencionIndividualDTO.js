/**
 * @author jose felix ccopacondori 
 */
var Client = require('node-rest-client').Client;
var NumeroALetras = require('../../utilitarios/numerosALetras');
var DocumentoEntidad = require('../../modelos/msdocucmd/documentoEntidad');
var constantes= require('../../utilitarios/constantes');
var nuevoComprobanteDTO=require('../../modelos/msdocucmd/nuevoComprobanteDTO');
var DocParametro=require('../../modelos/comprobantes/docParametro');
var constDOCUCMD=constantes.DOCUCMD;

const CODIGO_MONTO_EN_LETRAS = "1000";
const PREFIX_PAIS="PE";
var RetencionIndividual=function(){};

RetencionIndividual.guardar = async function (DTO,headers){    
    
    var nuevoComprobante=  nuevoComprobanteDTO;
    if(DTO!=undefined){
        
        for(var item in DTO){
            nuevoComprobante[item]=DTO[item];
        }

        // agregar datos de la tabla maestra

        nuevoComprobante.idTablaTipoComprobante=constDOCUCMD['tabla-maestra'].tipoComprobante;
        nuevoComprobante.idRegistroTipoComprobante=nuevoComprobante.idTipoComprobante;
        
        // agregar datos de moneda
                            //traer servicio buscar moneda por 
        nuevoComprobante.idTablaMoneda='get tabla moneda ';
        nuevoComprobante.idRegistroMoneda='get cpdigo moneda';
        
        // agregar ParametroMontoLetras
        var constParaDocu=constDOCUCMD['parametros-documento'];
        var jsonMontoEnLetras=
                    {
                        "tipo":constDOCUCMD['tipo-dato'].texto,
                        "valor":NumeroALetras.numeroALetras(nuevoComprobante.montoDescuento),
                        "auxiliarEntero":0,
                        "auxiliarCaracter":CODIGO_MONTO_EN_LETRAS,
                        "auxiliarImporte":nuevoComprobante.montoDescuento,
                        "auxiliarFecha":null
                    }
                                                //var responseDocParametro= await guardarDocParametro(jsonMontoEnLetras);
        var documentoParametroTemp=new Object(DocParametro);        
        var documentoParametro=limpiarObjeto(documentoParametroTemp.tableAttributes,['descripcionParametro']);
            documentoParametro.idParametro          =constParaDocu['montoLetras'].id;
            documentoParametro.descripcionParametro =constParaDocu['montoLetras'].descripcion;
            documentoParametro.json                 =jsonMontoEnLetras;

        nuevoComprobante.montoComprobante=NumeroALetras.numeroALetras(nuevoComprobante.montoDescuento);
        nuevoComprobante.documentoParametro.push(documentoParametro);
             
        // agregar DatosUsuario	
        nuevoComprobante= agregarDatosUsuario(nuevoComprobante,headers);

        //agregarDatosEntidad

        nuevoComprobante= agregarDatosEntidad(nuevoComprobante,headers);

        console.log('demostracion');
    }
    
    console.log('termino');

}


 function guardarDocParametro(data){

    var constParaDocu=constDOCUCMD['parametros-documento'];

    return DocParametro.create({
         // id:                   0,
          iParamDoc:            constParaDocu['montoLetras'].id,
          idComprobantePago:    '',    
          json:                 JSON.stringify(data),
          usuarioCreacion:      'traer usuario creacion',
          usuarioModificacion:  'traer usuario creacion',
          fechaCreacion:        '2018-02-15',
          fechaModificacion:    '2018-02-15',
          estado:               1,
          //fechaSincronizado:    
          estadoSincronizado:   0
    });

}

function limpiarObjeto (objeto,listaParamNuevos)
{
    var objetoNuevo={};
    if(objeto!=undefined){
        
        for(var item in objeto){
            var itemAux=item;
            if(item=='idComprobantePago') itemAux='idComprobante';
            if(item=='iParamDoc') itemAux='idParametro';
            objetoNuevo[itemAux]=(itemAux=='estado')||(itemAux=='id')?0:'';
        }
        if(listaParamNuevos!=undefined)
            for(var item in listaParamNuevos){
                objetoNuevo[listaParamNuevos[item]]='';
            }
    }
    return objetoNuevo;
}

function agregarDatosUsuario (nuevoDocumento,headers){
    var objeto={};
    objeto.idOrganizacionEbizHeader=headers.org_id;
    // comprobar la organizacio  is existe con los headers casp contrario mostrar error

    var idOrganizacionUser='94e4e927-554d-418c-a770-e6cfe6235000'; // traer la lista de organizaciones del usurio y validar que exista
    var ruc ='20100015103' ;        // traer del json de usuario
    var idUsuario='5a94d1a3-0cd3-471e-a18c-9e4e2f71abc6';   // traer id de usuario
    var nombreUsuario= 'PLASALLE';                          // taer de nombre usuario

    nuevoDocumento.rucProveedor= ruc;
    nuevoDocumento.usuarioCreacion= nombreUsuario;
    nuevoDocumento.usuarioModificacion= nombreUsuario;
    nuevoDocumento.idUsuarioCreacion= idUsuario;
    nuevoDocumento.idUsuarioModificacion= idUsuario;  
    nuevoDocumento.idProveedor= idOrganizacionUser;
    nuevoDocumento.idOrganizacionProveedora= idOrganizacionUser;
    return nuevoDocumento;

}

async function agregarDatosEntidad (nuevoDocumento,headers){
    
    var rucComprador=   nuevoDocumento.rucComprador;//
    // agregar prefijo al ruc del proveedor
    if(nuevoDocumento.rucProveedor!=undefined&&nuevoDocumento.rucProveedor.length!=13)
    nuevoDocumento.rucProveedor= PREFIX_PAIS+rucComprador;
    // agregar las entidades
    var constTipoEntidad=constDOCUCMD['tipo-entidad'];
    let listaDocEntidad=nuevoDocumento.documentoEntidad;
    if(listaDocEntidad.length>0){
        for(var i=0;i<listaDocEntidad.length;i++){
           var DocEntidad=listaDocEntidad[i];
            if(DocEntidad.idTipoEntidad==constTipoEntidad.emisor){
                DocEntidad.documento=nuevoDocumento.rucProveedor;
                if(nuevoDocumento.rucProveedor.length!=13)
                    nuevoDocumento.rucProveedor= PREFIX_PAIS+nuevoDocumento.rucProveedor;
            }
            // consultar organizaciones
            var organizacion= await obtenerOrganizacion();


        }
    }
  
    console.log('salida jeje');            

}
function obtenerOrganizacion(){
    var client = new Client();  // consumir api rest
    var url='http://localhost:3000/v1/organizaciones/20100015103';
    var promise = new Promise(function(resolve,reject){
        client.get(url, function (data, response) {
            //console.log(data);
            //console.log(response);
            resolve({data:data,response:response});
        });
    });
     
    return promise; 
}
module.exports = RetencionIndividual;