var User = require('../../modelos/prueba/User');

User.buscarProducto = function (id) {
    var promise = new Promise(function(resolve,reject){
        conexion.sync()
        .then(function () {
            User.findById(id).then(function (user) {
                resolve(user.dataValues);
            });
        }, function (err) {
            console.log(err);
            resolve({});
        });
    });
    return promise;
};

module.exports = User;