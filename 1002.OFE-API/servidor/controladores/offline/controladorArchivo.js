var archivo = require('../../dtos/msoffline/archivoDTO');

var controladorArchivo = async function (ruta, rutaEsp) {
    router.get(ruta.concat('/search'), async function (req, res) {
        try{
            var data = await archivo.mostrar(req.query.id_comprobante);
            console.log('ARCHIVO PARA MOSTRAR');
            console.log(data.archivo);
            res.send(data.archivo);
            // res.json(data);
        }catch (e){
            console.log(e);
            res.json({count: 0});
        }
    });
}
module.exports = controladorArchivo;