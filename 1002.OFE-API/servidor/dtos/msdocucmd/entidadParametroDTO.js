var EntidadParametro = require('../../modelos/msoffline/entidadParametro');

// EntidadParametro.findFirstByIdEntidadAndIdParametro = function (_idEntidad, _idParametro) {
//     console.log('FIND FIRST BY ENTIDAD ID PARAMETRO');
//     console.log(_idEntidad, _idParametro);
//     var promise = new Promise(function (resolve, reject) {
//         conexion.sync()
//             .then(function () {
//                 console.log('FUNCION ENTIDAD PARAMETRO');
//                 EntidadParametro.findAll({
//                     where: {
//                         id: _idParametro,
//                         entidad: _idEntidad
//                     }
//                 }).then(function (entidadParametro) {
//                     console.log('ENTIDA DATA VALUES');
//                     console.log(entidadParametro.dataValues);
//                     resolve(entidadParametro.dataValues);
//                 });
//             });
//     });
//     return promise;
// };

EntidadParametro.findFirstByIdEntidadAndIdParametro = function (_idEntidad, _idParametro) {
    console.log('FIND FIRST BY ENTIDAD ID PARAMETRO');
    console.log(_idEntidad, _idParametro);
    var promise = new Promise(function (resolve, reject) {
        // conexion.sync()
        //     .then(function () {
                console.log('FUNCION ENTIDAD PARAMETRO');
                EntidadParametro.findAll({
                    where: {
                        id: _idParametro,
                        entidad: _idEntidad
                    }
                }).then(function (entidadParametro) {
                    console.log('ENTIDA DATA VALUES');
                    console.log(entidadParametro.dataValues);
                    resolve(entidadParametro.dataValues);
                });
            // });
    });
    return promise;
};

module.exports = EntidadParametro;