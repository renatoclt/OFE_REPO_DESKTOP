
/**
 * @author --- Modificado **-**-****
 * @author renato creado 18-12-2017 
 */
var ComprobantePago = require('../../dtos/msoffline/comprobantePagoDTO');
var ProductoXComprobantePago = require('../../dtos/msoffline/productoXComprobantePagoDTO');
var archivo = require ('../../dtos/msoffline/archivoDTO') //falta
var DetalleDoc = require('../../dtos/msoffline/detalleDocDTO');
var DocConcepto = require('../../dtos/msoffline/docConcepetoDTO');
var DocEntidad = require('../../dtos/msoffline/docEntidadDTO');
var DocEvento = require('../../dtos/msoffline/docEventoDTO');
var DocParametro = require('../../dtos/msoffline/docParametroDTO');//falta
var DocReferencia = require('../../dtos/msoffline/docReferenciaDTO');
var DocMasivo = require('../../dtos/msoffline/docMasivoDTO');//falta
var DocMasivoDet = require('../../dtos/msoffline/docMasivoDetDTO');//falta
var Concepto = require('../../dtos/msoffline/conceptoDTO')
var DominioDocumento = require('../../dtos/msoffline/dominioDocumentoDTO');
var Evento = require('../../dtos/msoffline/eventoDTO');
var Idioma = require('../../dtos/msoffline/idiomaDTO');
var ParametroDocumento = require('../../dtos/msoffline/parametroDocumentoDTO');
var TipoAfecIgv = require('../../dtos/msoffline/tipoAfecIgvDTO');
var TipoCalcIsc = require('../../dtos/msoffline/tipoCalcIscDTO');
var TipoEntidad = require('../../dtos/msoffline/tipoEntidadDTO');
var TipoPrecioVenta = require('../../dtos/msoffline/tipoPrecioVentaDTO');
var Sincronizacion = require('../../dtos/msoffline/sincronizacionDTO');
var Usuario = require('../../dtos/msoffline/usuarioDTO');//falta comprobar
var DominioEntidad = require('../../dtos/msoffline/dominioEntidadDTO');
var EntidadParametro = require('../../dtos/msoffline/entidadParametroDTO');
var Entidad = require ('../../dtos/msoffline/entidadDTO');
var ParametroEntidad = require('../../dtos/msoffline/parametroEntidadDTO');
var Producto = require('../../dtos/msoffline/productoDTO');
var Serie = require('../../dtos/msoffline/serieDTO');
var QueryComprobanteConcepto = require('../../dtos/msoffline/queryComprobanteConceptoDTO') ; //falta
var QueryComprobanteEvento = require('../../dtos/msoffline/queryComprobanteEventoDTO') ; //falta
var QueryComprobantePago = require('../../dtos/msoffline/queryComprobantePagoDTO') ; //falta
var QueryConcepto = require('../../dtos/msoffline/queryConceptoDTO') ; //falta
var QueryDocParametros = require('../../dtos/msoffline/queryDocParametroDTO') ; //falta
var QueryDocRefenci = require('../../dtos/msoffline/docReferenciaDTO') ; //falta
var QueryDocMasivo = require('../../dtos/msoffline/queryDocMasivoDTO') ; //falta
var QueryDocMasivoDet = require('../../dtos/msoffline/queryDocMasivoDetDTO') ; //falta
var QueryEntParametros = require('../../dtos/msoffline/queryEntParametrosDTO') ; //falta
var QueryEntidad = require('../../dtos/msoffline/queryEntidadDTO') ; //falta
var QueryEstComprobante = require('../../dtos/msoffline/queryEstComprobanteDTO') ; //falta
var QueryIdioma = require('../../dtos/msoffline/queryIdiomaDTO') ; //falta
var QueryParametroDominioDoc = require('../../dtos/msoffline/queryParametroDominioDocDTO') ; 
var QueryParametroDominioEnt = require('../../dtos/msoffline/queryParametroDominioEntDTO') ; //falta
var QueryProducto = require('../../dtos/msoffline/queryProductoDTO') ; //falta
var QueryProductoXComprobantePago = require('../../dtos/msoffline/queryProductoXComprobantePagoDTO') ;  //falta
var QuerySerie = require('../../dtos/msoffline/querySerieDTO') ;  //falta
var QueryTipoAfecIgv = require('../../dtos/msoffline/queryTipoAfecIgvDTO') ; //falta
var QueryTipoCalcIsc = require('../../dtos/msoffline/queryTipoCalcIscDTO') ; //falta
var QueryTipoPrecVen = require('../../dtos/msoffline/queryTipoPrecVenDTO') ;  //falta
var Maestra = require('../../dtos/msoffline/maestraDTO');
var DocumentoAzure = require('../../dtos/msoffline/documentoAzureDTO');
var QueryEntidadOffline = require('../../dtos/msoffline/queryEntidadOfflineDTO');
var EmpresaOffline = require('../../dtos/msoffline/empresaLocalDTO');
var UsuarioOffline = require('../../dtos/msoffline/usuarioDTO');
var Menu = require('../../dtos/msoffline/menuDTO');
var UsuarioMenu = require('../../dtos/msoffline/usuarioMenuDTO')
/**
 * Controlador de la tabla serie 
 * 
 * @param {*} ruta ruta del servicio
 * @param {*} rutaEsp ruta para el hateos 
 */
var contoladorSincronizacion =  function (ruta, rutaEsp){ 
    /**
     * Enviamos la ruta 
     * y declaramos una funcion asincrona q espera los datos de la tabla
     */
    router.get(ruta.concat('/filtros'), async function (req, res) {
        if (req.query.idioma){
            let idioma = req.query.idioma;
            let series = {};
            series._embedded = await Sincronizacion.filtro(idioma);  
            series._embedded.forEach(element => {
                let fecha =  element.fechaSincronizacion.split(' ')
                let parts = fecha[0].split('-');
                element.fechaSincronizacion =  parts[2].substr(0,2)+ '-'+ parts[1] +'-'+ parts[0];
            });            
            res.json(series);
        }
        else{
            res.send('error');
        }
    });

    router.post(ruta.concat('/usuario'), async function(req, res){  
        req.body.forEach(async element => {      
            await Usuario.registrarUsuario(element);
        })
        res.status(200).send('{}');
    });
       
    router.post(ruta.concat('/empresaLocal'), async function(req, res){  
        console.log(req.body);
        res.status(200).send(await EmpresaOffline.guardar(req.body));
    });


    
    router.post(ruta.concat('/guardarUsuarios'), async function(req, res){  
        req.body.usuarios.forEach(async element => {
            element.id = element.se_iusuario ;
            element.nombreusuario = element.vc_nom_usuario ;
            element.password = element.vc_password ;
            element.nombre = element.vc_nombre ;
            element.apellido =  element.vc_apellido ;
            element.docIdentidad = element.vc_docidentidad ;
            element.numDocIdentidad = element.vc_num_docidentidad ;
            element.correo = element.vc_correo ;
            element.identidad = element. se_identidad;
            element.usuarioCreacion = constantes.usuarioOffline ;
            element.organizaciones = [{ id:element.vc_org_id,
                                        nombre:'Empresa Offline',
                                        tipo_empresa:"P",
                                        keySuscripcion:constantes.keySuscripcion,
                                        ruc:req.body.ruc_emisor}];      
            await UsuarioOffline.registrarUsuario(element);
            let menus = await Menu.todos();
            
            element.modulos.forEach(async menu =>{
                menu.usuario = element.se_iusuario ;
                menu.menu = menu.IdModulo ;
                menus.forEach(async element => {
                    if(element.dataValues.id == menu.IdModulo){
                        await UsuarioMenu.guardar(menu);
                    }
                });       
                
            });
            let menuSincronizacion = {};
            menuSincronizacion.usuario = element.se_iusuario;
            menuSincronizacion.menu = constantes.menuOffline;
            await UsuarioMenu.guardar(menuSincronizacion);
        });
        res.status(200).send('{}');
    });

    router.get(ruta.concat('/mostrarMenu'), async function(req, res){  
        res.status(200).send(await UsuarioMenu.mostrar(req.query.idUsuario));
    });

    router.post(ruta.concat('/parametroEntidad'), async function(req, res){        
        req.body.forEach(async element => {
            element.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.estadoSincronizado =  constantes.estadoActivo;
            element.usuarioCreacion = constantes.usuarioOffline;
            element.usuarioModificacion = constantes.usuarioOffline;
            element.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.estado  = constantes.estadoActivo;
            await ParametroEntidad.guardar(element);
        });
        res.status(200).send('{}');
    });

    
    router.post(ruta.concat('/paremetroEntidadEliminar'), async function(req, res){
        await ParametroEntidad.eliminar();
        res.status(200).send('{}');
    });

    router.post(ruta.concat('/eliminarUsuarios'), async function(req, res){
        await UsuarioOffline.eliminar();
        res.status(200).send('{}');
    });

    //querySerie
    router.post(ruta.concat('/querySerie'), async function(req, res){
        let direccionMac = ''
        await require('getmac').getMac( function(err, macAddress){
            if (err) {
                console.log(err);
            } 
            direccionMac = macAddress;
            req.body.forEach(async element => {
                element.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
                element.estadoSincronizado =  constantes.estadoActivo;
                element.usuarioCreacion = constantes.usuarioOffline;
                element.usuarioModificacion = constantes.usuarioOffline;
                element.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
                element.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
                element.correlativo = element.correlativo - 1;
                if(element.mac == direccionMac ){
                    element.idTipoSerie = 0;
                }
                else{
                    element.idTipoSerie = 1
                }
                await QuerySerie.guardar(element);
                }
            );
            res.json('{direccionMac :' + direccionMac +'}');
        })
        
    });

    router.post(ruta.concat('/eventoEliminar'), async function(req, res){
        await Evento.eliminar();
        res.status(200).send('{}');
    });

    //fe_configuracion_t_evento
    router.post(ruta.concat('/evento'), async function(req, res){
        req.body.forEach(async element => {
            element.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.estadoSincronizado =  constantes.estadoActivo;
            element.usuarioCreacion = constantes.usuarioOffline;
            element.usuarioModificacion = constantes.usuarioOffline;
            element.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.estado  = constantes.estadoActivo;
            await Evento.guardar(element);
            }
        );
        res.status(200).send('{}');
    });

    //fe_configuracion_t_idioma
    router.post(ruta.concat('/idioma'), async function(req, res){
        req.body.forEach(async element => {
            element.usuarioCreacion = constantes.usuarioOffline;
            element.usuarioModificacion = constantes.usuarioOffline;
            element.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.estado  = constantes.estadoActivo;
            element.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.estadoSincronizado =  constantes.estadoActivo;
            await Idioma.guardar(element);
        }) 
        res.status(200).send('{}');
    });

    router.post(ruta.concat('/idiomaEliminar'), async function(req, res){
        await Idioma.eliminar();
        res.status(200).send('{}');
    });

    //QueryIdioma
    //fe_configuracion_t_idioma
    router.post(ruta.concat('/queryIdioma'), async function(req, res){
        req.body.forEach(async element => {
            element.usuarioCreacion = constantes.usuarioOffline;
            element.usuarioModificacion = constantes.usuarioOffline;
            element.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.estado  = constantes.estadoActivo;
            element.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.estadoSincronizado =  constantes.estadoActivo;
            await QueryIdioma.guardar(element);
        }) 
        res.status(200).send('{}');
    });

    router.post(ruta.concat('/idiomaEliminarQuery'), async function(req, res){
        await QueryIdioma.eliminar();
        res.status(200).send('{}');
    });
    

    //fe_query_t_idioma
    router.post(ruta.concat('/queryEntidad'), async function(req, res){
        req.body.forEach(async element => {
            element.usuarioCreacion = constantes.usuarioOffline;
            element.usuarioModificacion = constantes.usuarioOffline;
            await QueryEntidad.guardar(element);
        }) 
        res.status(200).send('{}');
    });

    //FALTA dominio entidad 
    router.post(ruta.concat('/dominioEntidad'), async function(req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        await DominioEntidad.guardar(req.body);
        res.status(200).send('{}');
    });

    
    router.post(ruta.concat('/maestraEliminar'), async function(req, res){
        await Maestra.eliminar();
        res.status(200).send('{}');
    });

    router.post(ruta.concat('/maestra'), async function(req, res){
        req.body.forEach(async (element) => {
            element.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.estadoSincronizado =  constantes.estadoActivo;
            element.tipo = constantes.vacio;
            element.equivalencia = constantes.vacio;
            element.orden = constantes.vacio;
            element.default = constantes.vacio;
            element.idTablaPadre = constantes.vacio;
            element.registroPadre = constantes.vacio;
            element.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");;
            element.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");;
            element.portal = constantes.vacio;
            element.perfil = constantes.vacio;
            await Maestra.guardar(element);
        });
        res.status(200).send('{}');
    });


    router.post(ruta.concat('/tipoEntidad'), async function(req, res){
        req.body.forEach(async element => {
            element.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.estadoSincronizado =  constantes.estadoActivo;
            await TipoEntidad.guardar(element);
        });
        res.status(200).send('{}');
    });

    router.post(ruta.concat('/eliminartipoEntidad'), async function(req, res){
        await TipoEntidad.eliminar();
        res.status(200).send('{}');
    });

    router.post(ruta.concat('/eliminarTipoPrecioVenta'), async function(req, res){
        await QueryTipoPrecVen.eliminar();
        res.status(200).send('{}');
    });

    router.post(ruta.concat('/eliminarTipoCalculoIsc'), async function(req, res){
        await QueryTipoCalcIsc.eliminar();
        res.status(200).send('{}');
    });

    router.post(ruta.concat('/tipoprecioventa'), async function(req, res){
        req.body.forEach(async element =>{
            element.catalogo = constantes.catalogoTipoPrecio;
            element.usuarioCreacion = constantes.usuarioOffline;
            element.usuarioModificacion = constantes.usuarioOffline;
            element.fechaCreacion =  dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.fechaModificacion =  dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.estadoSincronizado =  constantes.estadoActivo;
            await QueryTipoPrecVen.guardar(element);
        });
        res.status(200).send('{}');
    });

    router.post(ruta.concat('/parametros'), async function(req, res){
        req.body.forEach(async element =>{
            element.fechaSincronizacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.estadoSincronizado = constantes.estadoActivo;
            await QueryParametroDominioDoc.guardar(element);
        });
        res.status(200).send('{}');
    });

    router.post(ruta.concat('/queryTipoAfecacionIgv'), async function(req, res){
        req.body.forEach(async element =>{
            element.fechaSincronizacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.estadoSincronizado = constantes.estadoActivo;
            element.catalogo = constantes.catalogoTipoAfecIgv;
            element.usuarioCreacion = constantes.usuarioOffline;
            element.usuarioModificacion = constantes.usuarioOffline;
            element.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            await QueryTipoAfecIgv.guardar(element);
        });
        res.status(200).send('{}');
    });

    router.post(ruta.concat('/eliminarTipoAfectacionIgv'), async function(req, res){
        await QueryTipoAfecIgv.eliminar();
        res.status(200).send('{}');
    })


    

    router.post(ruta.concat('/queryTipoCalcIsc'), async function(req, res){
        req.body.forEach(async element =>{
            element.catalogo = constantes.catalogoTipoCalcIsc;
            element.usuarioCreacion = constantes.usuarioOffline;
            element.usuarioModificacion = constantes.usuarioOffline;
            element.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            await QueryTipoCalcIsc.guardar(element);
        });
        res.status(200).send('{}');
    })

    router.post(ruta.concat('/concepto'), async function(req, res){
        req.body.forEach(async element =>{
            element.usuarioCreacion = constantes.usuarioOffline;
            element.usuarioModificacion = constantes.usuarioOffline;
            element.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            await Concepto.guardar(element);
        });
        res.status(200).send('{}');
    })

    router.post(ruta.concat('/entidad'), async function(req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        req.body.usuarioCreacion = constantes.usuarioOffline;
        req.body.usuarioOffline = constantes.usuarioOffline;
        req.body.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        await QueryEntidadOffline.guardar(req.body);
        await Entidad.guardar(req.body);
        await QueryEntidad.guardar(req.body);
        res.status(200).send('{}');
    });
    
    

    router.post(ruta.concat('/entidadEliminar'), async function(req, res){
        await QueryEntidadOffline.eliminar();
        await Entidad.eliminar();
        await QueryEntidad.eliminar();      
        res.status(200).send('{}');
    });

    router.post(ruta.concat('/eliminarParametro'), async function(req, res){
        await QueryParametroDominioDoc.eliminar();      
        res.status(200).send('{}');
    });

    router.post(ruta.concat('/eliminarConcepto'), async function(req, res){
        await Concepto.eliminar();      
        res.status(200).send('{}');
    });
    

    router.post(ruta.concat('/queryEstado'), async function(req, res){
        req.body.forEach(async element => {
            element.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.estadoSincronizado =  constantes.estadoActivo;
            await QueryEstComprobante.guardar(element);            
        });
        res.status(200).send('{}');
    });


    router.post(ruta.concat('/eliminarQueryEstado'), async function(req, res){
        await QueryEstComprobante.eliminar();
        res.status(200).send('{}');
    });

    router.post(ruta.concat('/documentoAzure'), async function (req, res){
        req.body.usuarioCreacion = constantes.usuarioOffline;
        req.body.usuarioModificacion = constantes.usuarioOffline;
        req.body.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estado = constantes.estadoActivo;
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        await DocumentoAzure.guardar(req.body);
        res.status(200).send('{}');
    });

    router.post(ruta.concat('/eliminarDocumentosAzure'), async function(req, res){
        await DocumentoAzure.eliminar();
        res.status(200).send('{}');
    });


    router.post(ruta.concat('/eliminarSerie'), async function(req, res){
        await QuerySerie.eliminar();
        res.status(200).send('{}');
    });

    router.post(ruta.concat('/dominioDocumento'), async function(req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        await DominioDocumento.guardar(req.body);
        res.status(200).send('{}');
    }); 

    router.post(ruta.concat('/parametroDocumento'), async function(req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        await ParametroDocumento.guardar(req.body);
        res.status(200).send('{}');
    });
    router.post(ruta.concat('/tipoAfecIgv'), async function(req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        await TipoAfecIgv.guardar(req.body);
        res.status(200).send('{}');
    });
    router.post(ruta.concat('/tipoCalcIsc'), async function(req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        await TipoCalcIsc.guardar(req.body);
        res.status(200).send('{}');
    });
    
    router.post(ruta.concat('/tipoPrecioVenta'), async function(req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        await TipoPrecioVenta.guardar(req.body);
        res.status(200).send('{}');
    });
    
    router.post(ruta.concat('/entidadParametro'), async function(req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        await EntidadParametro.guardar(req.body);
        res.status(200).send('{}');
    });
    
    router.post(ruta.concat('/serie'), async function(req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        await Serie.guardar(req.body);
        res.status(200).send('{}');
    });
    
    router.post(ruta.concat('/comprobantePago'), async function (req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        req.body.estadoComprobantePago = 1;
        await ComprobantePago.guardar(req.body);
        res.status(200).send('{}');
    });   
    router.post(ruta.concat('/producto'), async function (req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        await Producto.guardar(req.body);
        res.status(200).send('{}');
    });   
    router.post(ruta.concat('/ProductoXComprobantePago'), async function (req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        await ProductoXComprobantePago.guardar(req.body);
        res.status(200).send('{}');
    });   
    router.post(ruta.concat('/detalleDoc'), async function (req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        await DetalleDoc.guardar(req.body);
        res.status(200).send('{}');
    });   
    router.post(ruta.concat('/docConcepto'), async function (req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        await DocConcepto.guardar(req.body);
        res.status(200).send('{}');
    }); 
    router.post(ruta.concat('/docEntidad'), async function (req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        await DocEntidad.guardar(req.body);
        res.status(200).send('{}');
    }); 
    router.post(ruta.concat('/docEvento'), async function (req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        await DocEvento.guardar(req.body);
        res.status(200).send('{}');
    });
    router.get(ruta.concat('/listarMac'), async function (req, res){
        await require('getmac').getMac(function(err, macAddress){
            if (err) {
                console.log(err);
            } 
            console.log(macAddress)
        })
        console.log(require('os').networkInterfaces());
        res.status(200).send('{}');
    });

    router.get(ruta.concat('/consultarMac'), async function (req, res){
        await require('getmac').getMac( function(err, macAddress){
            if (err) {
                console.log(err);
            } 
            return res.status(200).json({mac: macAddress});
        })
    });

    router.post(ruta.concat('/actualizarFecha'), async function (req, res){
        try{
            await Sincronizacion.actualizarFecha(constantes.FILECMD.tipos_documento.parametros, req.body.fecha);
            res.json({});
        }
        catch(e){
            res.json({ 'error': e})
        }
    });

    
};

module.exports = contoladorSincronizacion;

