var controladorSaludo = function(ruta){

    router.get(ruta.concat('/'), function(req, res, next) {
        res.json({ mensaje: 'Bienvenido a nuestra api de Offline!' });    
    });
}

module.exports = controladorSaludo;
