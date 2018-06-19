
var RecursoOrganizacion = function() {
    var organizacion = {
        id: '',  //  identificador
        documento:'',
        denominacion:'',
        nombreComercial:'',
        direccionFiscal:'',
        correoElectronico:'',
        logoCloud:null,
        logoTiempo:null,
       // logo:'',
        certificadoDigitalClave:null,
        certificadoDigitalCloud:'',
        certificadoDigitalTiempo:'',
        plantillaFacturaInterfaz:'',
        plantillaFacturaCloud:null,
        plantillaFacturaTiempo:null,
        plantillaBoletaInterfaz:null,
        plantillaBoletaCloud:null,
        plantillaBoletaTiempo:null,
        plantillaNotaCreditoInterfaz:null,
        plantillaNotaCreditoCloud:null,
        plantillaNotaCreditoTiempo:null,
        plantillaNotaDebitoInterfaz:null,
        plantillaNotaDebitoCloud:null,
        plantillaNotaDebitoTiempo:null,
        plantillaGuiaRemisionInterfaz:null,
        plantillaGuiaRemisionCloud:null,
        plantillaGuiaRemisionTiempo:null,
        plantillaRetencionInterfaz:null,
        plantillaRetencionCloud:null,
        plantillaRetencionTiempo:null,
        plantillaPercepcionInterfaz:null,
        plantillaPercepcionCloud:null,
        plantillaPercepcionTiempo:null,
       // certificadoDigitalArchivo:'',//
        solUsuario:'',
        solClave:'',
        pais:'',
        ubigeo:'',
        tipoDocumento:'',
        idTipoDocumento:'',
        idEbiz:null,
        usuarioCreacion:'',
        usuarioModificacion:'',
        recibirNotificaciones:null,
        fechaCreacion:'', //Timestamp
        fechaModificacion:'',//Timestamp
        estado:'',      // int
        estadoRegistro:'',
        tipoFuente:''
    }
    return organizacion;
};

module.exports = RecursoOrganizacion;