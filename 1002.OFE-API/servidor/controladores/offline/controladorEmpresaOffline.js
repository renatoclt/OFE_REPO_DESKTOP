var empresaOffline = require('../../dtos/msoffline/empresaLocalDTO');

var controladorEmpresaOffline = async function (ruta, rutaEsp) {
    router.get(ruta.concat('/'), async function (req, res) {
        try{
            let empresas = []
            empresas = await empresaOffline.listarTodo();
            if (empresas.length > 0){
                empresas[0].dataValues.inicio = 'true';
                console.log(empresas[0]);
                res.json(empresas[0]);
            }
            else{
                res.json({ inicio: 'false'});
            }
        }catch (e){
            console.log(e);
            res.json({inicio: 'false',error: e});
        }
    });
}
module.exports = controladorEmpresaOffline;