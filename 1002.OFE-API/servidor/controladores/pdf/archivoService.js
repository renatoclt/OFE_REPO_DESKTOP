var archivo = require('../../dtos/msoffline/archivoDTO');
var constantes = require('../../utilitarios/constantes');
var nuevoArchivoCreado = require('../../dtos/comprobante/comprobantePago');
var PDF_EXTENSION = '.pdf';
var fechaActual = new Date()

CreadorPdf.crearPdf() = function (nuevoDocumentoCreado, contenidoPdf) {
    try {
        /**
         * guardarDocumento en resources
         */
        let nombreArchivo = nuevoDocumentoCreado.id + '-' + constantes.FILECMD.tipos_archivo.pdf + PDF_EXTENSION;
        //Persistencia del modelo Archivo
        let archivoTemp;
        archivoTemp.IdComprobante = nuevoDocumentoCreado.id;
        archivoTemp.tipo = constantes.FILECMD.tipos_archivo.pdf;
        archivoTemp.ubicacion = nombreArchivo;
        archivoTemp.usuarioCreacion = nuevoDocumentoCreado.usuarioCreacion;
        archivoTemp.usuarioModificacion = nuevoDocumentoCreado.usuarioModificacion;
        archivoTemp.fechaCreacion = fechaActual;
        archivoTemp.fechaModificacion = fechaActual;
        archivoTemp.estado = constantes.estadoActivo;

        await archivo.guardar(archivoTemp);

        let pdfCreado;

        pdfCreado.idComprobante = nuevoDocumentoCreado.id;
        pdfCreado.idArchivo = archivoTemp.id;
        pdfCreado.idProveedor = nuevoDocumentoCreado.idProveedor;
        pdfCreado.idOrgCompradora = nuevoDocumentoCreado.idOrganizacionCompradora;
        pdfCreado.tipoComprobante = nuevoDocumentoCreado.tipoComprobante;
        pdfCreado.nombreArchivo = nombreArchivo;
        pdfCreado.tipoArchivo = constantes.FILECMD.tipos_archivo.pdf;
        pdfCreado.numeroComprobante = nuevoDocumentoCreado.numeroComprobante;
        pdfCreado.rucComprador = nuevoDocumentoCreado.rucComprador;
        pdfCreado.rucProveedor = nuevoDocumentoCreado.rucProveedor;
        pdfCreado.razonSoComprador = nuevoDocumentoCreado.razonSocialComprador;
        pdfCreado.razonSoProveedor = nuevoDocumentoCreado.razonSocialProveedor;
        pdfCreado.usuarioCreacion = nuevoDocumentoCreado.usuarioCreacion;

        for(let instancia of nuevoArchivoCreado.documentoCreado){
            if(instancia.idTipoEntidad === constantes.FILECMD.tipos_entidad.emisor){
                pdfCreado.correoProveedor = instancia.correo;
                pdfCreado.notificaProveedor = instancia.notifica;
            }
            else if(instancia.idTipoEntidad === constantes.FILECMD.tipos_entidad.receptor){
                pdfCreado.correoComprador = instancia.correo;
            }

        }

        return pdfCreado;

    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = CreadorPdf;