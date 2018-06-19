import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SincronizacionService } from '../general/services/sincronizacion/sincronizacion.service';
import { ParametrosService } from '../general/services/sincronizacion/parametros.service';
import { Sincronizacion } from '../general/models/sincronizacion/sincronizacion';
import { DataTableComponent } from '../general/data-table/data-table.component';
import * as Idiomas from '../../facturacion-electronica/general/models/configuracionDocumento/idioma';
import { TiposService } from '../general/utils/tipos.service';
import { SincronizacionRetenciones } from '../general/services/sincronizacion/SincronizacionRetenciones';
import { SpinnerService } from '../../service/spinner.service';
import { resolve } from 'url';
import { reject } from 'q';
import { comprobanteSincronizarDTO } from '../general/models/sincronizacion/comprobanteSincronizarDTO';
import { Item } from '../comprobantes/modelos/item';
import { concat } from 'rxjs/operator/concat';
import { SincronizacionBoletas } from '../general/services/sincronizacion/sincronizacionBoleta';
import { SincronizacionFacturas } from '../general/services/sincronizacion/sincronizacionFactura';
import { SincronizacionPercepciones } from '../general/services/sincronizacion/sincronizacionPercepeciones';
import { retencionesService } from '../../service/retencionesservice';
import { SincronizacionParametros } from '../general/services/sincronizacion/sincronizacionParametros';
// import { TiposServicSe } from '../../../_src/app/facturacion-electronica/general/utils/tipos.service';

declare var swal: any;
@Component({
    selector: 'app-sincronizacion',
    templateUrl: './sincronizacion.component.html',
    //OFFLINE CAMBIO
    //providers: [SincronizacionService, TiposService],
    providers: [SincronizacionService, SincronizacionRetenciones, SincronizacionBoletas, SincronizacionFacturas, SincronizacionPercepciones,SincronizacionParametros],
    styleUrls: []
})
export class SincronizacionComponent implements OnInit {

    public listSincronizacion: Sincronizacion[] = [];
    @ViewChild('tablaNormal') tabla: DataTableComponent<Sincronizacion>;

    public cabecera: string[] = [];
    public atributos: string[] = [];

    constructor(public router: Router, public sincronizacionService: SincronizacionService, 
        public sincronizacionRetenciones: SincronizacionRetenciones,
        public sincronizacionPercepciones: SincronizacionPercepciones,
        public sincronizacionBoletas: SincronizacionBoletas,
        public sincronizacionFacturas: SincronizacionFacturas,
        public sincronizacionParametros: SincronizacionParametros,
        public parametrosService: ParametrosService, private tipos: TiposService,private spinner: SpinnerService) {
        this.cabecera = ['Documento', 'Ultima Fecha Sincronizacion', 'Acciones'];
        this.atributos = ['TipoComprobante', 'FechaSincronizacion', 'Acciones'];
    }

    ngOnInit() {
        this.obtenerSincronizaciones();
    }

    public verBitacora(tipoComprobante: string) {
        this.sincronizacionService.setBitacoraSincronizado(tipoComprobante);
        this.router.navigateByUrl('sincronizacion/bitacora');
    }

    public async sincronizar(item: Sincronizacion) {
        var mensaje : string = "";
        var urlParametro = "";
        switch(item.tipoComprobante){
            case this.tipos.TIPO_DOCUMENTO_BOLETA :
                await this.actualizarBoletas(item.fechaSincronizacion);
                this.obtenerSincronizaciones();
                break;
            case this.tipos.TIPO_DOCUMENTO_FACTURA:
                await this.actualizarFacturas(item.fechaSincronizacion);
                this.obtenerSincronizaciones();
                break;
            case this.tipos.TIPO_DOCUMENTO_RETENCION:
                //item.fechaSincronizacion = '20/04/2018';
                await this.actualizarRetenciones(item.fechaSincronizacion);
                this.obtenerSincronizaciones();
                break;
            case this.tipos.TIPO_DOCUMENTO_PERCEPCION:
                await this.actualizarPercepciones(item.fechaSincronizacion);
                this.obtenerSincronizaciones();
                break;
            case this.tipos.PARAMETRO_TIPO_PARAMETROS:
                await this.actualizarParametros();
                this.obtenerSincronizaciones();
                break;
            case this.tipos.PARAMETRO_TIPO_CLIENTES:
                this.obtenerSincronizaciones();
                console.log('Clientes');
                break;
        }
    }
    
    public obtenerSincronizaciones() {
        var idioma = Idiomas.IDIOMA_ES.idIdioma;
        this.sincronizacionService.buscarPorIdioma(idioma).subscribe((data) => {
            this.listSincronizacion = data;
        });
    }

    async actualizarParametros(){
        this.spinner.set(true);
        await this.sincronizacionParametros.tokenNuevo().toPromise().then(
            async resolve =>{
                this.sincronizacionParametros.actualizarToken(resolve);
                await this.sincronizacionParametros.eliminarIdioma().toPromise();
                await this.sincronizacionParametros.guardarIdioma().toPromise();
                await this.sincronizacionParametros.eliminarIdiomaQuery().toPromise();
                await this.sincronizacionParametros.guardarIdiomaQuery().toPromise();
                await this.sincronizacionParametros.eliminarEvento().toPromise();
                await this.sincronizacionParametros.guardarEvento().toPromise();
                await this.sincronizacionParametros.eliminarMaestra().toPromise();
                await this.sincronizacionParametros
                let dataMaestra = await this.sincronizacionParametros.obtenerMaestra().toPromise()
                await this.sincronizacionParametros.guardarMaestra(dataMaestra).toPromise();
                await this.sincronizacionParametros.eliminarParametrosEntidad().toPromise();
                await this.sincronizacionParametros.guardarParemetroEntidad().toPromise();
                await this.sincronizacionParametros.eliminarTipoEntidad().toPromise();
                await this.sincronizacionParametros.guardarTipoEntidad().toPromise();
                await this.sincronizacionParametros.eliminarQueryEstado().toPromise();
                await this.sincronizacionParametros.guardarQueryEstado().toPromise();
                try{
                    let dataEntidad = await this.sincronizacionParametros.obtenerEntidad().toPromise();
                    await this.sincronizacionParametros.eliminarEntidad().toPromise();
                    await this.sincronizacionParametros.guardarEntidad(dataEntidad).toPromise();
                    let imagenEbiz = await this.sincronizacionParametros.obtenerAzure('logo_ebiz.png').toPromise();
                    let imagenEmpresa = await this.sincronizacionParametros.obtenerAzure(dataEntidad.logoCloud).toPromise();
                    let plantillaRetenciones = await this.sincronizacionParametros.obtenerAzure('retenciones-final.xml').toPromise();
                    await this.sincronizacionParametros.eliminarDocumentoAzure().toPromise();
                    await this.sincronizacionParametros.guardarDocumentoAzure('1',dataEntidad.id, '20' , imagenEbiz, imagenEmpresa, plantillaRetenciones);
                    let plantillaBoletas = await this.sincronizacionParametros.obtenerAzure('facturas.xml').toPromise();
                    await this.sincronizacionParametros.guardarDocumentoAzure('2',dataEntidad.id, '01' , imagenEbiz, imagenEmpresa, plantillaBoletas);
                    let plantillaPercepcion = await this.sincronizacionParametros.obtenerAzure('percepcion.xml').toPromise();
                    await this.sincronizacionParametros.guardarDocumentoAzure('3',dataEntidad.id, '40' , imagenEbiz, imagenEmpresa, plantillaPercepcion);
                    let plantillaFacturas = await this.sincronizacionParametros.obtenerAzure('facturas.xml').toPromise();
                    await this.sincronizacionParametros.guardarDocumentoAzure('4',dataEntidad.id, '03' , imagenEbiz, imagenEmpresa, plantillaFacturas);
                    await this.sincronizacionParametros.eliminarSerie().toPromise();
                    await this.sincronizacionParametros.guardarSerie(await this.sincronizacionParametros.obtenerSerie().toPromise()).toPromise();
                }
                catch(e){
                    console.log(e);
                    this.spinner.set(false);
                    swal({
                        text: "No se pudo obtener informacion de la organización.",
                        type: 'error',
                        buttonsStyling: false,
                        confirmButtonClass: "btn btn-error",
                        confirmButtonText: 'CONTINUAR',
                    });
                    return;
                }
                try{
                    await this.sincronizacionParametros.eliminarParametro().toPromise();
                    await this.sincronizacionParametros.guardarParametro(await this.sincronizacionParametros.obtenerParametros().toPromise()).toPromise();
                    await this.sincronizacionParametros.eliminarTipoPrecioVenta().toPromise();
                    await this.sincronizacionParametros.guardarTipoPrecioVenta(await this.sincronizacionParametros.obtenerTipoPrecioVenta().toPromise()).toPromise();
                    await this.sincronizacionParametros.eliminarTipoAfectacionIgv();
                    await this.sincronizacionParametros.guardarTipoAfectacionIgv(await this.sincronizacionParametros.obtenerTipoAfectacionIgv().toPromise()).toPromise();   
                    await this.sincronizacionParametros.eliminarTipoCalculoIsc().toPromise();
                    await this.sincronizacionParametros.guardarTipoCalculoIsc(await this.sincronizacionParametros.obtenerTipoCalculoIsc().toPromise()).toPromise();
                    await this.sincronizacionParametros.eliminarConcepto().toPromise();
                    await this.sincronizacionParametros.guardarConcepto(await this.sincronizacionParametros.obtenerConceptos().toPromise()).toPromise();
                    await this.sincronizacionParametros.eliminarUsuarios().toPromise();
                    let ruc = localStorage.getItem('org_ruc');
                    await this.sincronizacionParametros.guardarUsuariosOffline(await this.sincronizacionParametros.obtenerUsuariosOffline(ruc).toPromise()).toPromise();
                    await this.sincronizacionParametros.actualizarFechaDescarga(Number(new Date())).toPromise();
                    this.spinner.set(false);
                    swal({
                        // text : "Sincronizacion Correcta",
                        html:
                        '<div class="text-center"> Sincronizacion Correcta. </div>',
                        type : 'success',
                        buttonsStyling: false,
                        confirmButtonClass: "btn btn-error",
                        confirmButtonText: 'CONTINUAR',
                    })
                }
                catch(e){
                    this.spinner.set(false);
                    swal({
                        text: "No se pudo obtener informacion de las tablas maestras.",
                        type: 'error',
                        buttonsStyling: false,
                        confirmButtonClass: "btn btn-error",
                        confirmButtonText: 'CONTINUAR',
                    });
                    return;
                }
                
                
            },
            reject => {
                this.spinner.set(false);
                swal({
                    text: "No esta conectado a internet.",
                    type: 'error',
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-error",
                    confirmButtonText: 'CONTINUAR',
                });
            }
        );
    }
    
    async actualizarRetenciones(fecha){
        var retencionEnviadaError = 0;
        var retencionEnviadaCorrecta = 0;
        var retencionDescargadasN = 0;
        var retencionBajaError = 0;
        var retencionBajaCorrectas = 0;
        this.spinner.set(true);
        this.spinner.set(true);
        await this.sincronizacionRetenciones.tokenNuevo().toPromise().then(
            async resolve =>{
                this.sincronizacionPercepciones.actualizarToken(resolve);
                for (let retencion of await this.sincronizacionRetenciones.obtenerRetencionesCreadas().toPromise()){
                    await this.sincronizacionRetenciones.enviarRetencionesCreadas(retencion).toPromise().then(
                        async resolve => {
                            retencionEnviadaCorrecta++;
                        await this.sincronizacionRetenciones.actualizarEstadoSincronizacionRetencion(retencion.idComprobanteOffline).toPromise().then( async resolve => { return resolve} , reject => {return null});
                    }, async reject =>
                        {
                            retencionEnviadaError++;
                            await this.sincronizacionRetenciones.actualizarErrorRetencion(retencion.idComprobanteOffline, reject).toPromise().then( async resolve => { return resolve} , reject => {return null});
                        });
                }
                for (let retencion of await this.sincronizacionRetenciones.obtenerRetencionesPendientes().toPromise().then( async resolve => { return resolve} , reject => {return null})){
                    await this.sincronizacionRetenciones.guardarRetencionDescargada(await this.sincronizacionRetenciones.obtenerRetencion(retencion.id).toPromise()).toPromise();
                }
        
                for (let retencion of await this.sincronizacionRetenciones.obtenerRetencionBajas().toPromise().then( async resolve => { return resolve} , reject => {return null})){
                    await this.sincronizacionRetenciones.enviarRetencionBaja(retencion).toPromise().then(
                    async resolve => {
                        retencionBajaCorrectas++;
                        await this.sincronizacionRetenciones.actualizarRetencionBaja(retencion.idComprobanteOffline, resolve.numeroComprobante).toPromise();
                    } , 
                    async reject => {
                        retencionBajaError++;
                        console.log(retencion);
                        await this.sincronizacionRetenciones.actualizarErrorRetencionBaja(retencion.idComprobanteOffline).toPromise();
                    });
                }
                let retencionesDescargadas = await this.sincronizacionRetenciones.descargarRetenciones(fecha).toPromise();
                console.log(fecha);
                if(retencionesDescargadas.totalElements){
                    for(let i=0; i * 10 < retencionesDescargadas.totalElements; i++){
                        let retenciones = await this.sincronizacionRetenciones.descargarRetencionesPagina(i, fecha).toPromise();
                        let fechaDescarga = '';
                        for (let retencion of  retenciones.content){
                            retencionDescargadasN++;
                            await this.sincronizacionRetenciones.guardarRetencionDescargada(retencion).toPromise();
                            fechaDescarga = retencion.tsFechaemision;
                        }
                        await this.sincronizacionRetenciones.actualizarFechaDescarga(fechaDescarga).toPromise();
                    }
                }
                await this.sincronizacionRetenciones.actualizarFechaDescarga(Number(new Date())).toPromise();
                swal({
                    text : "Sincronizacion Correcta",
                    html: '<p class="text-center">Retenciones enviadas Correctamente: '+ retencionEnviadaCorrecta + '</p>'+
                          '<p class="text-center">Retenciones con errores: '+ retencionEnviadaError + '</p> ' +
                          '<p class="text-center">Resumen de bajas Correctas:'+ retencionBajaCorrectas +'</p> ' +
                          '<p class="text-center">Resumen de bajas con Errores: '+ retencionBajaError +'</p> '  +
                          '<p class="text-center">Retenciones Actualizadas:' + retencionDescargadasN + '</p>',

                    type : 'success',
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-error",
                    confirmButtonText: 'CONTINUAR',
                })
                this.spinner.set(false);
            },
            reject => {
                this.spinner.set(false);
                swal({
                    text: "No esta conectado a internet.",
                    type: 'error',
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-error",
                    confirmButtonText: 'CONTINUAR',
                });
            }
        );
    }
    
    async actualizarPercepciones(fecha){
        var percepcionEnviadaError = 0;
        var percepcionEnviadaCorrecta = 0;
        var percepcionDescargadasN = 0;
        var percepcionBajaError = 0;
        var percepcionBajaCorrectas = 0;
        this.spinner.set(true);
       await this.sincronizacionPercepciones.tokenNuevo().toPromise().then(
            async resolve =>{
                this.sincronizacionPercepciones.actualizarToken(resolve);
                for (let percepcion of await this.sincronizacionPercepciones.obtenerPercepcionesCreadas().toPromise()){
                    await this.sincronizacionPercepciones.enviarPercepcionesCreadas(percepcion).toPromise().then(
                        async resolve => {
                        percepcionEnviadaCorrecta++;
                        await this.sincronizacionPercepciones.actualizarEstadoSincronizacionPercepcion(percepcion.idComprobanteOffline).toPromise().then( async resolve => { return resolve} , reject => {return null});
                        return resolve;
                    }, async reject =>
                    {
                        percepcionEnviadaError++;
                        await this.sincronizacionPercepciones.actualizarErrorPercepcion(percepcion.idComprobanteOffline, reject).toPromise().then( async resolve => { return resolve} , reject => {return null});
                        return reject;
                    });
                }
                for (let percepcion of await this.sincronizacionPercepciones.obtenerPercepcionesPendientes().toPromise().then( async resolve => { return resolve} , reject => {return null})){
                    await this.sincronizacionPercepciones.guardarPercepcionDescargada(await this.sincronizacionPercepciones.obtenerPercepcion(percepcion.id).toPromise().then(
                        async resolve =>{
                            return resolve;
                        },
                        async reject =>{
                            return null;
                        }
                    )).toPromise();
                }
        
                for (let percepcion of await this.sincronizacionPercepciones.obtenerPercepcionBajas().toPromise().then( async resolve => { return resolve} , reject => {return null})){
                    await this.sincronizacionPercepciones.enviarPercepcionBaja(percepcion).toPromise().then(
                    async resolve => {
                        percepcionBajaCorrectas++;
                        await this.sincronizacionPercepciones.actualizarPercepcionBaja(percepcion.idComprobanteOffline, resolve.numeroComprobante).toPromise();
                    } , 
                    async reject => {
                        percepcionBajaError++;
                        console.log(percepcion);
                        await this.sincronizacionPercepciones.actualizarErrorPercepcionBaja(percepcion.idComprobanteOffline).toPromise();
                    });
                }
                let percepcionesDescargadas = await this.sincronizacionPercepciones.descargarPercepciones(fecha).toPromise();
                if(percepcionesDescargadas.totalElements){
                    for(let i=0; i * 10 < percepcionesDescargadas.totalElements; i++){
                        let percepciones = await this.sincronizacionPercepciones.descargarPercepcionesPagina(i, fecha).toPromise();
                        let fechaDescarga = '';
                        for (let percepcion of  percepciones.content){
                            percepcionDescargadasN++;
                            await this.sincronizacionPercepciones.guardarPercepcionDescargada(percepcion).toPromise();
                            fechaDescarga = percepcion.tsFechaemision;
                        }
                        await this.sincronizacionRetenciones.actualizarFechaDescarga(fechaDescarga).toPromise();
                    }
                }
                await this.sincronizacionPercepciones.actualizarFechaDescarga(Number(new Date())).toPromise();
                this.spinner.set(false);
                swal({
                    text : "Sincronizacion Correcta",
                    html: '<p class="text-center">Percepcion enviadas Correctamente: '+ percepcionEnviadaCorrecta +'</p> '+
                          '<p class="text-center">Percepcion con errores: '+ percepcionEnviadaError + '</p> ' +
                          '<p class="text-center">Resumen de bajas Correctas: '+ percepcionBajaCorrectas +'</p> ' +
                          '<p class="text-center">Resumen de bajas con Errores: '+ percepcionBajaError +'</p> '  +
                          '<p class="text-center">Percepcion Actualizadas:' + percepcionDescargadasN + '</p>',

                    type : 'success',
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-error",
                    confirmButtonText: 'CONTINUAR',
                })
                return resolve;
            },
            reject => {
                this.spinner.set(false);
                swal({
                    text: "No esta conectado a internet.",
                    type: 'error',
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-error",
                    confirmButtonText: 'CONTINUAR',
                });
            }
        );
    }
    async actualizarBoletas(fecha){
        var boletaEnviadaError = 0;
        var boletaEnviadaCorrecta = 0;
        var boletaDescargadasN = 0;
        var boletaBajaError = 0;
        var boletaBajaCorrectas = 0;
        this.spinner.set(true);
        await this.sincronizacionBoletas.tokenNuevo().toPromise().then(
            async resolve =>{
                this.sincronizacionBoletas.actualizarToken(resolve);
                for (let boleta of await this.sincronizacionBoletas.obtenerBoletasCreadas().toPromise()){
                    console.log(boleta)
                    await this.sincronizacionBoletas.enviarBoletasCreadas(boleta).toPromise().then(
                        async resolve => {
                            boletaEnviadaCorrecta++;
                        await this.sincronizacionBoletas.actualizarEstadoSincronizacionBoleta(boleta.idComprobanteOffline).toPromise().then( async resolve => { return resolve} , reject => {return null});
                    }, async reject =>
                        {
                            boletaEnviadaError++;
                            await this.sincronizacionBoletas.actualizarErrorBoleta(boleta.idComprobanteOffline, reject).toPromise().then( async resolve => { return resolve} , reject => {return null});
                        });
                }
                for (let boleta of await this.sincronizacionBoletas.obtenerBoletasPendientes().toPromise().then( async resolve => { return resolve} , reject => {return null})){
                    await this.sincronizacionBoletas.guardarBoletaDescargada(await this.sincronizacionBoletas.obtenerBoleta(boleta.id).toPromise()).toPromise();
                }
        
                for (let boleta of await this.sincronizacionBoletas.obtenerBoletaBajas().toPromise().then( async resolve => { return resolve} , reject => {return null})){
                    await this.sincronizacionBoletas.enviarBoletaBaja(boleta).toPromise().then(
                    async resolve => {
                        boletaBajaCorrectas++;
                        await this.sincronizacionBoletas.actualizarBoletaBaja(boleta.idComprobanteOffline, resolve.numeroComprobante).toPromise();
                    } , 
                    async reject => {
                        boletaBajaError++;
                        await this.sincronizacionBoletas.actualizarErrorBoletaBaja(boleta.idComprobanteOffline).toPromise();
                    });
                }
                let boletasDescargadas = await this.sincronizacionBoletas.descargarBoletas(fecha).toPromise();
                if(boletasDescargadas.totalElements){
                    for(let i=0; i * 10 < boletasDescargadas.totalElements; i++){
                        let rercepciones = await this.sincronizacionBoletas.descargarBoletasPagina(i, fecha).toPromise();
                        let fechaDescarga = '';
                        for (let boleta of  rercepciones.content){
                            boletaDescargadasN++;
                            await this.sincronizacionBoletas.guardarBoletaDescargada(boleta).toPromise();
                            fechaDescarga = boleta.tsFechaemision;
                        }
                        await this.sincronizacionBoletas.actualizarFechaDescarga(fechaDescarga).toPromise();
                    }
                }
                await this.sincronizacionBoletas.actualizarFechaDescarga(Number(new Date())).toPromise();
                this.spinner.set(false);
                swal({
                    text : "Sincronizacion Correcta",
                    html: '<p class="text-center">Boletas enviadas Correctamente: '+ boletaEnviadaCorrecta +'</p> '+
                          '<p class="text-center">Boletas con errores: '+ boletaEnviadaError +'</p> ' +
                          '<p class="text-center">Resumen de bajas Correctas: '+ boletaBajaCorrectas +'</p> ' +
                          '<p class="text-center">Resumen de bajas con Errores: '+ boletaBajaError +'</p> '  +
                          '<p class="text-center">Boletas Actualizadas:' + boletaDescargadasN + '</p>',

                    type : 'success',
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-error",
                    confirmButtonText: 'CONTINUAR',
                })
            },
            reject => {
                this.spinner.set(false);
                swal({
                    text: "No esta conectado a internet.",
                    type: 'error',
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-error",
                    confirmButtonText: 'CONTINUAR',
                });
            }
        );
    }
    async actualizarFacturas(fecha){
        var facturaEnviadaError = 0;
        var facturaEnviadaCorrecta = 0;
        var facturasDescargadasN = 0;
        var facturasBajaError = 0;
        var facturaBajaCorrectas = 0;
        this.spinner.set(true);
        await this.sincronizacionFacturas.tokenNuevo().toPromise().then(
            async resolve =>{
                this.sincronizacionFacturas.actualizarToken(resolve);
                for (let factura of await this.sincronizacionFacturas.obtenerFacturasCreadas().toPromise()){
                    await this.sincronizacionFacturas.enviarFacturasCreadas(factura).toPromise().then(
                        async resolve => {
                        await this.sincronizacionFacturas.actualizarEstadoSincronizacionFactura(factura.idComprobanteOffline).toPromise().then( async resolve => { 
                            facturaEnviadaCorrecta++;
                            return resolve
                        } , reject => {
                            return null
                        });
                        return resolve;
                    }, async reject =>
                    {
                        await this.sincronizacionFacturas.actualizarErrorFactura(factura.idComprobanteOffline, reject).toPromise().then( async resolve => { return resolve} , reject => {return null});
                        return reject;
                    });
                }
                for (let factura of await this.sincronizacionFacturas.obtenerFacturasPendientes().toPromise().then( async resolve => { return resolve} , reject => {return null})){
                    await this.sincronizacionFacturas.guardarFacturaDescargada(await this.sincronizacionFacturas.obtenerFactura(factura.id).toPromise().then(
                        async resolve =>{
                            return resolve;
                        },
                        async reject =>{
                            return null;
                        }
                    )).toPromise();
                }
        
                for (let factura of await this.sincronizacionFacturas.obtenerFacturaBajas().toPromise().then( async resolve => { return resolve} , reject => {return null})){
                    await this.sincronizacionFacturas.enviarFacturaBaja(factura).toPromise().then(
                    async resolve => {
                        facturaBajaCorrectas++;
                        await this.sincronizacionFacturas.actualizarFacturaBaja(factura.idComprobanteOffline, resolve.numeroComprobante).toPromise();
                    } , 
                    async reject => {
                        console.log(factura);
                        facturasBajaError++;
                        await this.sincronizacionFacturas.actualizarErrorFacturaBaja(factura.idComprobanteOffline).toPromise();
                    });
                }
                let facturasDescargadas = await this.sincronizacionFacturas.descargarFacturas(fecha).toPromise();
                if(facturasDescargadas.totalElements){
                    for(let i=0; i * 10 < facturasDescargadas.totalElements; i++){
                        let facturas = await this.sincronizacionFacturas.descargarFacturasPagina(i, fecha).toPromise();
                        let fechaDescarga = '';
                        for (let factura of  facturas.content){
                            await this.sincronizacionFacturas.guardarFacturaDescargada(factura).toPromise();
                            facturasDescargadasN++;
                            fechaDescarga = factura.tsFechaemision;
                        }
                        await this.sincronizacionFacturas.actualizarFechaDescarga(fechaDescarga).toPromise();
                    }
                }
                await this.sincronizacionFacturas.actualizarFechaDescarga(Number(new Date())).toPromise();
                this.spinner.set(false);
                swal({
                    text : "Sincronizacion Correcta",
                    html: '<p class="text-center">Facturas enviadas Correctamente: '+ facturaEnviadaCorrecta +'</p> '+
                          '<p class="text-center">Facturas con errores: '+ facturaEnviadaError +'</p> ' +
                          '<p class="text-center">Resumen de bajas Correctas: '+ facturaBajaCorrectas +'</p> ' +
                          '<p class="text-center">Resumen de bajas con Error: '+ facturasBajaError +'</p> '  +
                          '<p class="text-center">Facturas Actualizadas:' + facturasDescargadasN + '</p>',

                    type : 'success',
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-error",
                    confirmButtonText: 'CONTINUAR',
                })
                return resolve;
            },
            reject => {
                this.spinner.set(false);
                swal({
                    text: "No esta conectado a internet.",
                    type: 'error',
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-error",
                    confirmButtonText: 'CONTINUAR',
                });
            }
        );
    }
}