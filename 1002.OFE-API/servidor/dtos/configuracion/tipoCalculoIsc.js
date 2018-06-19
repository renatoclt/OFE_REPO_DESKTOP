QueryTipoCalcIsc = require('../../modelos/msoffline/queryTipoCalcIsc');
OP = sequelize.Op;

QueryTipoCalcIsc.todos = function(){
    var promise = new Promise(function(resolve,reject){
        conexion.sync()
        .then(function () {
            QueryTipoCalcIsc.findAll({
                attributes: atributos.atributos
            }).then(function (tipoAfectacionIgvRedises) {
                tipoAfectacionIgvRedises = tipoAfectacionIgvRedises.map(function(tipoAfectacionIgv){ 
                    return tipoAfectacionIgv.dataValues;
                });
                resolve(tipoAfectacionIgvRedises);
            });
        }, function (err) {
            console.log(err);
            resolve({});
        });
    });
    
    return promise;
}

QueryTipoCalcIsc.buscarId = function(id){
    
    var promise = new Promise(function(resolve,reject){
        conexion.sync()
        .then(function () {
            QueryTipoCalcIsc.findById(id).then(function (QueryTipoCalcIsc) {
                resolve(QueryTipoCalcIsc.dataValues);
            });
        }, function (err) {
            console.log(err);
            resolve({});
        });
    });
     
    return promise;
 }


 var atributos = {
    atributos: [
        ['se_itipo_afec', 'idTipoCalculo'],
        'idioma',
        'codigo',
        'descripcion',
        'afectaIgv',
        'catalogo',
        'usuarioCreacion',
        'usuarioModificacion',
        'fechaCreacion',
        'fechaModificacion',
    ]
}

module.exports = QueryTipoCalcIsc;