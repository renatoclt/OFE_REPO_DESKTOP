Sincronizacion = require('../../modelos/msoffline/sincronizacion');
ProductoXComprobantePago = require ('../../modelos/msoffline/productoXComprobantePago'); 

/**
 * Funcion que retorna la tabla T_Maestra segun el campo codigo
 * 
 * @param {*} codigoTabla Se envia el codigo del catalogo
 */
Sincronizacion.filtro = function sincronizacionFiltro(idioma){
    return Sincronizacion.findAll({ attributes: filtroAtributos.attributes ,
        where: {
            estado: constantes.estadoActivo,
            idioma: idioma
        }
      });
}

Sincronizacion.actualizarFecha = function actualizarFecha(tipoComprobante, fecha){
    fecha = new Date(fecha);
    console.log(fecha);
    return Sincronizacion.findOne({ where: {
        tipoComprobante: tipoComprobante 
    }}).then( data => {
        return Sincronizacion.update({
            fechaSincronizacion : dateFormat(fecha, "yyyy-mm-dd HH:MM:ss"),
        },{
            where: {id: data.id}
        });
    });
}

//atributos utilizados por function maestraFiltro
var filtroAtributos = {
    attributes: [
                'id',
                'descripcion',
                'tipoComprobante',
                'fechaSincronizacion'
            ],
}
module.exports = Sincronizacion;