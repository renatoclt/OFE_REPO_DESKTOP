var ComprobantePagoQueryDTO = require("../../dtos/comprobante/comprobantePagoQueryDTO");

var controladorComprobanteQuery = function (ruta, rutaEsp) {
    var nombreHateo = "hComprobante";
    var hateoas = require('./../../utilitarios/hateoas')({ baseUrl: "http://localhost:3000/v1" });
    var hateoasObj = require('./../../utilitarios/hateoasObj');


        router.param('id', function( req, res, next, id ) {
            req.id_from_param = id;
            next();
        });
        
        router.get(ruta.concat('/'), function (req, res, next) {
            
            ComprobantePagoQueryDTO.buscarComprobanteById(req.query.id).then(function (resDTO) {
                var date = new Date(resDTO.tsFechaemision );
                resDTO.tsFechaemision = date.getTime();
                res.json(resDTO);
            });
        // next();
        });
        
        router.get(ruta.concat('/query'), function (req, res, next) {
            var
            pagina=0,
            limite=0,
            idEntidadEmisora=0,             // inIdentidademisor
            tipoComprobanteTabla='',     // vcIdtablatipocomprobante
            tipoComprobanteRegistro='',     // vcIdregistrotipocomprobante
            fechaEmisionDel='',     // tsFechaemision
            fechaEmisionAl='',        // tsFechaemision
            tipoDocumento='',                 // tabla entidad
            nroDocumento='',                  // tabla entidad
            ticket='',                        // vcTicketRetencion
            estado='',                        // chEstadocomprobantepago
            nroSerie='',                      // vcSerie
            correlativoInicial='',            // vcCorrelativo
            correlativoFinal='',              // vcCorrelativo
            ordenar='',
            fechaBajaDel='',
            fechaBajaAl='',
            ticketBaja='';                     // vcParamTicket

            if (req.query.nroPagina && req.query.nroPagina!=''){
                pagina = parseInt(req.query.nroPagina);
            }
            if (req.query.regXPagina && req.query.regXPagina!=''){
                limite = parseInt(req.query.regXPagina);
            }
            if (req.query.idEntidadEmisora && parseInt(req.query.idEntidadEmisora)>0){
                idEntidadEmisora = req.query.idEntidadEmisora;
            }
            if (req.query.tipoComprobanteTabla && req.query.tipoComprobanteTabla!=''){
                tipoComprobanteTabla = req.query.tipoComprobanteTabla;
            }
            if (req.query.tipoComprobanteRegistro && req.query.tipoComprobanteRegistro!=''){
                tipoComprobanteRegistro = req.query.tipoComprobanteRegistro;
            }
            if (req.query.fechaEmisionDel && req.query.fechaEmisionDel!=''){
                fechaEmisionDel = req.query.fechaEmisionDel;
            }
            if (req.query.fechaEmisionAl && req.query.fechaEmisionAl!=''){
                fechaEmisionAl = req.query.fechaEmisionAl;
            }
            if (!req.query.fechaEmisionDel||!req.query.fechaEmisionAl){
                if(!req.query.nroSerie && !req.query.correlativoInicial){
                    const err = new Error('Revisas parametros de Fechas de emision' );
                    console.log(req);
                    err.status = 404;
                    next(err);
                }else{
                    fechaEmisionDel = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
                    fechaEmisionAl = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
                }
            }    
            if (req.query.tipoDocumento && req.query.tipoDocumento!=''){
                tipoDocumento = req.query.tipoDocumento;
            } 
            if (req.query.nroDocumento && req.query.nroDocumento!=''){
                nroDocumento = req.query.nroDocumento;
            }    
            if (req.query.ticket && req.query.ticket!=''){
                ticket = req.query.ticket;
            }   
            if (req.query.estado && req.query.estado!=''){
                estado = req.query.estado;
            } 
            if (req.query.nroSerie && req.query.nroSerie!=''){
                nroSerie = req.query.nroSerie;
            }
            if (req.query.correlativoInicial && req.query.correlativoInicial!=''){
                correlativoInicial = req.query.correlativoInicial;
            }
            if (req.query.correlativoFinal && req.query.correlativoFinal!=''){
                correlativoFinal = req.query.correlativoFinal;
            }
            if (req.query.ordenar && req.query.ordenar!=''){
                ordenar = req.query.ordenar;
            }
            if (req.query.fechaBajaDel && req.query.fechaBajaDel!=''){
                fechaBajaDel = req.query.fechaBajaDel;
            }
            if (req.query.fechaBajaAl && req.query.fechaBajaAl!=''){
                fechaBajaAl = req.query.fechaBajaAl;
            }
            if (req.query.ticketBaja && req.query.ticketBaja!=''){
                ticketBaja = req.query.ticketBaja;
            }
            ComprobantePagoQueryDTO.buscarComprobanteConFiltros(
                pagina, 
                limite,
                idEntidadEmisora,               // inIdentidademisor
                tipoComprobanteTabla,           // vcIdtablatipocomprobante
                tipoComprobanteRegistro,        // vcIdregistrotipocomprobante
                fechaEmisionDel,                // tsFechaemision
                fechaEmisionAl,                 // tsFechaemision
                tipoDocumento,                  // tabla entidad
                nroDocumento,                   // tabla entidad
                ticket,                         // vcTicketRetencion
                estado,                         // chEstadocomprobantepago ?
                nroSerie,                       // vcSerie ?
                correlativoInicial,             // vcCorrelativo
                correlativoFinal,               // vcCorrelativo
                ordenar,
                fechaBajaDel,                   // tsParamFechabaja
                fechaBajaAl,                    // tsParamFechabaja
                ticketBaja  
            )
                .then(function (resDTO) {
                var ObjetoSalida = {};
                ObjetoSalida.content=resDTO.comprobantes;
                ObjetoSalida.last=(parseInt(pagina)==Math.ceil(resDTO.cantidadReg/limite)-1)?true:false;;
                ObjetoSalida.totalPages=Math.ceil(resDTO.cantidadReg/limite);
                ObjetoSalida.totalElements=resDTO.cantidadReg;
                ObjetoSalida.sort=null;                
                ObjetoSalida.numberOfElements=resDTO.comprobantes.length|0;
                ObjetoSalida.first=(pagina=='0')?true:false;
                ObjetoSalida.size= parseInt(limite);
                ObjetoSalida.number=parseInt(pagina);
                res.json(ObjetoSalida);
            });
        // next();
        });

        router.get(ruta.concat('/:id'), function (req, res, next) {
            ComprobantePagoQueryDTO.buscarComprobante(req.params.id).then(function (resDTO) {
                res.json(resDTO);
            });
        // next();
        });
        
};

module.exports = controladorComprobanteQuery;