var DocumentoAzure = require('../../modelos/configuracion/documentoAzure');

DocumentoAzure.obtnerPlantillas = function (id) {
    var promise = new Promise(function (resolve, reject) {
        conexion.sync().then(function () {
            DocumentoAzure.findByAll(id,{
                where: { idEntidad: id }
            }).then(function(documentoAzure){
                resolve(documentoAzure.dataValues);
            });
        },
            function (err){
                console.log(err);
                resolve({});
            });
    });
    return promise;
};