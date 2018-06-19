TipoAfecIgv = require('../../modelos/msoffline/queryTipoAfecIgv');
OP = sequelize.Op;

TipoAfecIgv.todos = function(){
    var promise = new Promise(function(resolve,reject){
        conexion.sync()
        .then(function () {
            TipoAfecIgv.findAll({
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

var atributos = {
    atributos: [
        ['se_itipo_afec', 'idTipoAfectacion'],
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

TipoAfecIgv.buscarId = function(id){
    
    var promise = new Promise(function(resolve,reject){
        conexion.sync()
        .then(function () {
            TipoAfecIgv.findById(id).then(function (tipoAfecIgv) {
                resolve(tipoAfecIgv.dataValues);
            });
        }, function (err) {
            console.log(err);
            resolve({});
        });
    });
     
    return promise;
 }

module.exports = TipoAfecIgv;