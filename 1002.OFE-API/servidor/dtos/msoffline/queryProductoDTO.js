/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryProductoDTO = require('../../modelos/msoffline/queryProducto');
var QueryTipoCalcIsc = require ('../../dtos/configuracion/tipoCalculoIsc')
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */
OP = sequelize.Op;
QueryProductoDTO.guardar = function guardarQueryProducto(data){
    return QueryProductoDTO.create({
        id: data.id,
        entidad: data.entidad ,
        tipoCalc: data.tipoCalc ,
        codigo: data.codigo ,
        descripcion: data.descripcion ,
        precioUnitario: data.precioUnitario ,
        montoIsc: data.montoIsc ,
        UnidadMedida: data.UnidadMedida ,
        afectaDetra: data.afectaDetra,
        usuarioCreacion: data.usuarioCreacion ,
        usuarioModificacion: data.usuarioModificacion ,
        fechaCreacion: data.fechaCreacion ,
        fechaModificacion: data.fechaModificacion ,
        fechaSincronizado: data.fechaSincronizado ,
        estadoSincronizado: data.estadoSincronizado
    });
}

QueryProductoDTO.buscarPorCodigo = function buscarPorCodigo(pagina,limite,codigo,ordenar){
    console.log('ingrese');
    var clauseWhere = {
        codigo: { [OP.like]: ('%' + codigo + '%') },
        estado: constantes.estadoActivo
    };
    
    var promise = new Promise(function (resolve, reject) {
        QueryProductoDTO.findAndCountAll(
            {   attributes: filtroAtributosProducto.attributes ,
                where: clauseWhere,
                offset: (pagina * limite), 
                limit: limite 
            }
        ).then(function (productos){
            var cantidadTotalProductos = productos.count;
            var registros = productos.rows;
            var productos_ =[]; 
            if(registros.length>0&&registros!=undefined){
                var cont=0;
                
                productos.rows.map(function (data) {
                    return ConvertirProductoDTO(data.dataValues).then(function(DTO){
                        cont ++;
                        productos_.push(DTO);
                        if(cont==registros.length) {
                            resolve ({ 'productos': productos_, 'cantidadReg': cantidadTotalProductos });
                        }
                    });     
                });
            }
            else{
                resolve({ 'productos': productos_, 'cantidadReg': 0 });
            }
        }, function (err){
            console.log(err);
            resolve({});
        });
    });
    return promise;
}
async function ConvertirProductoDTO (data){
    let salida = data;
    var objeto = await QueryTipoCalcIsc.buscarId(salida.idTipoCalc);
    salida.calculoISC = {};
    Object.assign(salida.calculoISC, objeto)
    return salida;
}

var filtroAtributosProducto = {
    attributes: [
                'id', 
                ['se_ientidad','idEntidad'],
                ['se_itipo_calc','idTipoCalc'], 
                'codigo',
                'descripcion',
                'precioUnitario',
                'montoIsc',
                ['ch_uni_medida','unidadMedida'],
                ['ch_afecta_detra','afectaDetra'],
                'usuarioCreacion',
                'usuarioModificacion',
                'fechaCreacion',
                'fechaModificacion',
                'estado',
                'tipoProducto'],
}
module.exports = QueryProductoDTO;
