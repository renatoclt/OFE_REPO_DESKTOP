var DocumentoParametroDTO = require('../../modelos/comprobantes/docParametro');

DocumentoParametroDTO.guardar = function guardarParametro(data){
    return DocumentoParametroDTO.create({
        iParamDoc: data.iParamDoc,
        idComprobantePago: data.idComprobantePago,
        descripcionParametro: data.descripcionParametro,
        json: data.json,
        usuarioCreacion: data.usuarioCreacion,
        usuarioModificacion: data.usuarioModificacion,
        fechaCreacion: data.fechaCreacion,
        fechaModificacion: data.fechaModificacion,
        estado: data.estado,
        fechaSincronizado: data.fechaSincronizado,
        estadoSincronizado: data.estadoSincronizado,
    });
}

module.exports = DocumentoParametroDTO; 