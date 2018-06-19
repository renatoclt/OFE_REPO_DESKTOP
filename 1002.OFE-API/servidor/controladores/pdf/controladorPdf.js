var uuid = require('../../utilitarios/uuid');

var ControladorPdfRetenciones = require('./controladorPdfRetenciones');
var NuevoDocumentoCreado = require('../../dtos/comprobante/comprobantePago');

var controladorPdf = function (ruta, rutaEsp) {
    router.get(ruta.concat('/pdfretencion/:id'), async function (req, res) {
        console.log('entre');
        let data = req.body;
        data.id = uuid();
        try { 
            ControladorPdfRetenciones.test(req.params.id);
            res.send('ok'); 
            //res.json(ControladorPdfRetenciones.MapeoPDFRetenciones(data));
        } catch (error) {
            res.status(404).send('error');
            console.log('error al ingresar :'+ error)
        }
    })
}

module.exports = controladorPdf;