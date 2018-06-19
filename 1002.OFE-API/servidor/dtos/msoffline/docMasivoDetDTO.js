/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var DocMasivoDet = require('../../modelos/msoffline/docEvento');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

DocMasivoDet.guardar = function guardarDocEntidad(data){
    console.log(data);
    return DocEvento.create({
        id: data.id,
        docMasivo: data.docMasivo ,
        fila: data.fila ,
        columna: data.columna ,
        serie: data.serie ,
        numero: data.numero ,
        descripcionError: data.descripcionError ,
        usuarioCreacion: data.usuarioCreacion ,
        usuarioModificacion: data.usuarioModificacion ,
        fechaCreacion: data.fechaCreacion ,
        fechaModificacion: data.fechaModificacion ,
        estado: data.estado ,
        fechaSincronizado: data.fechaSincronizado,
        estadoSincronizado: data.estadoSincronizado 
    });
}

module.exports = DocMasivoDet;