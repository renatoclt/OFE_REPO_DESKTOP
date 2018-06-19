import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, OnChanges, AfterViewInit, SimpleChanges } from '@angular/core';


import { Articulo } from 'app/model/articulo';

import { RFQCompradorService } from 'app/service/rfqcompradorservice';
import { RFQCompradorInsert, Archivo, ProveedorInvitado, Proveedor, Producto } from 'app/model/rfqcomprador';


import { ResponseError } from 'app/model/responseerror';
import { AppUtils } from "app/utils/app.utils";
import { MasterService } from 'app/service/masterservice';
import { ComboItem } from "app/model/comboitem";

declare var moment: any;
declare var swal: any;
declare var DatatableFunctions: any;

declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}
declare var $: any;
var oRequerimientoCompradorFormularioComponent;
var dtArchivos, dtProveedoresInvitados, dtProveedores, dtArticulos;
var row_id;
@Component({
  moduleId: module.id,
  selector: 'requerimientocompradorformulario-cmp',
  templateUrl: 'requerimientocompradorformulario.component.html',
  providers: [RFQCompradorService, MasterService]
})

export class RequerimientoCompradorFormularioComponent implements OnInit, OnChanges, AfterViewInit {

  //public dtArticulos: DataTable;
  public dtDetalleAtributos: DataTable;
  public toggleButton: boolean = true;


  public listArticuloModel: Articulo[];
  public iArticulo: number = 0;


  public id: number = 0;
  public item: RFQCompradorInsert;
  public producto: Producto;
  public proveedores: Proveedor[];

  public proveedorInvitado: ProveedorInvitado;
  public archivo: Archivo;
  errorMessage: string = '';
  messagePost: string = '';
  isLoading: boolean = true;
  util: AppUtils;
  public listPrioridadCombo: ComboItem[];
  public listMonedaCombo: ComboItem[];
  public listUnidadCombo: ComboItem[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private _dataService: RFQCompradorService, private _masterService: MasterService, ) {

    this.listArticuloModel = [];

    this.item = new RFQCompradorInsert();
    this.item.fechainiciod = moment().format("MM/DD/YYYY");
    this.item.fechainiciot = moment().format("hh:mm a");
    this.item.fechafind = moment().format("MM/DD/YYYY");
    this.item.fechafint = moment().format("hh:mm a");
    this.item.productos = [];
    this.item.proveedoresinvitados = [];
    this.item.proveedores = [
      {
        id: 1,
        razonsocial: 'Tailoy',
        ruc: '123456789',
        usuario: 'Miguel A.',
      },
      {
        id: 2,
        razonsocial: 'Nissan Maquinarias',
        ruc: '123456789',
        usuario: 'Johnny L.',
      },
      {
        id: 3,
        razonsocial: 'Hidrostal',
        ruc: '123456789',
        usuario: 'Carlos R.',
      },

    ];
    this.proveedores = [
      {
        id: 4,
        razonsocial: 'Sodimac',
        ruc: '123456789',
        usuario: 'Luis Angulo',
      },
      {
        id: 5,
        razonsocial: 'Toyota Maquinarias',
        ruc: '123456789',
        usuario: 'Juan Lopez',
      },
      {
        id: 6,
        razonsocial: 'Gloria',
        ruc: '123456789',
        usuario: 'Eduardo Robles',
      },

    ];


    this.producto = new Producto();

    this.proveedorInvitado = new ProveedorInvitado();
    this.util = new AppUtils(this.router, this._masterService);
    this.archivo = new Archivo();

  }
  grabarAgregarProveedor(event) {
    for (var xI = 0; xI < this.proveedores.length; xI++) {
      this.item.proveedores.push(this.proveedores[xI]);
    }
    setTimeout(function () {
      dtProveedores.ajax.reload();

    }, 500);
    $("#mdlProveedor").modal('toggle');
    event.preventDefault();

  }
  agregarArchivo(event) {
    this.archivo = new Archivo();
    event.preventDefault();
  }
  agregarProveedorInvitado(event) {
    this.proveedorInvitado = new ProveedorInvitado();
    event.preventDefault();
  }
  obtener(id: number) {

    this._dataService
      .obtener(id)
      .subscribe(
      p => {
        this.item = p.data[0];
        console.log(this.item.productos);

        if(!this.item.proveedores)          this.item.proveedores=[];
        if(!this.item.docadjuntos)          this.item.docadjuntos=[];
        if(!this.item.proveedoresinvitados)          this.item.proveedoresinvitados=[];
        if(!this.item.productos)          this.item.productos=[];
        

  
        /*for (var xI = 0; xI < this.item.productos.length; xI++) {
          this.dtArticulos.dataRows.push([this.item.productos[xI].codigoproducto + "", this.item.productos[xI].nombreproducto,
          this.item.productos[xI].description, this.item.productos[xI].cantidad, this.item.productos[xI].unidad, '']);
        }*/


        setTimeout(function () {
          $("input").each(function () {
            $(this).keydown();
          });

          $("textarea").each(function () {
            $(this).keydown();
          });
        }, 100);

        setTimeout(function () {
          dtArticulos.ajax.reload();
        }, 100);
      },
      e => this.errorMessage = e,
      () => this.isLoading = false);
  }

  validar() {
    if (this.item.nroreq == null || this.item.nroreq == 0) {
      swal({
        text: "N° Req. es un campo requerido. Por favor completar y volver a intentar!",
        type: 'warning',
        buttonsStyling: false,
        confirmButtonClass: "btn btn-warning"
      });

      return false;
    }

    if (this.item.prioridad == null || this.item.prioridad == "") {
      swal({
        text: "Prioridad es un campo requerido. Por favor completar y volver a intentar!",
        type: 'warning',
        buttonsStyling: false,
        confirmButtonClass: "btn btn-warning"
      });

      return false;
    }

    return true;
  }

  validarDocumentos() {
    if ($("#txtArchivo").get(0).files.length == 0) {
      swal({
        text: "Un archivo es requerido. Por favor completar y volver a intentar!",
        type: 'warning',
        buttonsStyling: false,
        confirmButtonClass: "btn btn-warning"
      });

      return false;
    }

    return true;
  }

  validarDetalleArticulo() {
    if (this.producto.codigoproducto == null || this.producto.codigoproducto == 0) {
      swal({
        text: "Código de Producto es un campo requerido. Por favor completar y volver a intentar!",
        type: 'warning',
        buttonsStyling: false,
        confirmButtonClass: "btn btn-warning"
      });

      return false;
    }

    if (this.producto.nombreproducto == null || this.producto.nombreproducto == "") {
      swal({
        text: "Nombre de Producto es un campo requerido. Por favor completar y volver a intentar!",
        type: 'warning',
        buttonsStyling: false,
        confirmButtonClass: "btn btn-warning"
      });

      return false;
    }

    if (this.producto.cantidad == null || this.producto.cantidad == "") {
      swal({
        text: "Cantidad es un campo requerido. Por favor completar y volver a intentar!",
        type: 'warning',
        buttonsStyling: false,
        confirmButtonClass: "btn btn-warning"
      });

      return false;
    }

    if (this.producto.unidad == null || this.producto.unidad == "") {
      swal({
        text: "Unidad es un campo requerido. Por favor completar y volver a intentar!",
        type: 'warning',
        buttonsStyling: false,
        confirmButtonClass: "btn btn-warning"
      });

      return false;
    }

    return true;
  }

  grabar(event) {
    if (!this.validar()) {
      return false;
    }

    if (this.id == 0) {
      this.create();
    } else {
      let $this = this;
      swal({
        text: "Editado!",
        type: 'success',
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success"
      }).then(function () {
        $this.router.navigate(["/requerimiento/comprador/buscar"], { relativeTo: $this.activatedRoute });
      });
    }
  }

  private create(): void {
    this.item.fechainicio = moment(moment(this.item.fechainiciod + " " + this.item.fechainiciot, "MM/DD/YYYY hh:mm a").toDate()).format("MM-DD-YYYY H:mm:ss");
    this.item.fechafin = moment(moment(this.item.fechafind + " " + this.item.fechafint, "MM/DD/YYYY hh:mm a").toDate()).format("MM-DD-YYYY H:mm:ss");
    let $this = this;

    this._dataService.add(this.item).subscribe(resp => {
      console.log("resp", resp);
      if (resp.status == 200) {
        swal({
          text: "Registro satisfactorio!",
          type: 'success',
          buttonsStyling: false,
          confirmButtonClass: "btn btn-warning"
        }).then(function () {
          $this.router.navigate(["/requerimiento/comprador/buscar"], { relativeTo: $this.activatedRoute });
        });
      } else {
        swal({
          text: "Ocurrió un error!",
          type: 'error',
          buttonsStyling: false,
          confirmButtonClass: "btn btn-error"
        }).then(function () {
          $this.router.navigate(["/requerimiento/comprador/buscar"], { relativeTo: $this.activatedRoute });
        });
      }

    },
      error => {
        swal({
          text: "Ocurrió un error!",
          type: 'error',
          buttonsStyling: false,
          confirmButtonClass: "btn btn-error"
        }).then(function () {
          $this.router.navigate(["/requerimiento/comprador/buscar"], { relativeTo: $this.activatedRoute });
        });
      });
  }

  validarProveedorInvitado() {
    if (this.proveedorInvitado.razonsocial == null || this.proveedorInvitado.razonsocial == "") {
      swal({
        text: "Razón social es un campo requerido. Por favor completar y volver a intentar!",
        type: 'warning',
        buttonsStyling: false,
        confirmButtonClass: "btn btn-warning"
      });

      return false;
    }

    return true;
  }

  grabarProveedorInvitado() {

    if (!this.validarProveedorInvitado()) {
      return false;
    }


    let lista_ordenado = this.item.proveedoresinvitados.sort((n, n1): number => {
      if (n.id < n1.id) return -1;
      if (n.id > n1.id) return 1;
      return 0;
    });
    if (lista_ordenado.length > 0)
      this.proveedorInvitado.id = lista_ordenado[lista_ordenado.length - 1].id + 1;
    else
      this.proveedorInvitado.id = 1;
    this.item.proveedoresinvitados.push(this.proveedorInvitado);


    setTimeout(function () {
      dtProveedoresInvitados.ajax.reload();

    }, 500);

    $("#mdlProveedorInvitado").modal('toggle');
  }

  grabarArchivoAdjunto() {
    if (!this.validarDocumentos()) {
      return false;
    }


    let docs_ordenado = this.item.docadjuntos.sort((n, n1): number => {
      if (n.id < n1.id) return -1;
      if (n.id > n1.id) return 1;
      return 0;
    });
    if (docs_ordenado.length > 0)
      this.archivo.id = docs_ordenado[docs_ordenado.length - 1].id + 1;
    else
      this.archivo.id = 1;
    this.item.docadjuntos.push(this.archivo);

    
        setTimeout(function () {
          dtArchivos.ajax.reload();
    
        }, 500);
    
    $("#mdlArchivosAdjuntos").modal('toggle');
  }



  grabarArticulo() {
    if (!this.validarDetalleArticulo()) {
      return false;
    }

    this.iArticulo++;

    this.item.productos.push(<Producto>{
      in_codigoproductoxrfq: this.iArticulo, in_idrfq: this.item.nroreq, id_rfq: this.item.nroreq, cantidad: this.producto.cantidad,
      nombreproducto: this.producto.nombreproducto, codigoproducto: this.producto.codigoproducto, description: "", descripcionproducto: "", nroparte: "", unidad: this.producto.unidad
    });

    /*this.dtArticulos.dataRows = [];

    for (var xI = 0; xI < this.item.productos.length; xI++) {
      this.dtArticulos.dataRows.push([this.item.productos[xI].codigoproducto + "", this.item.productos[xI].nombreproducto,
      this.item.productos[xI].description, this.item.productos[xI].cantidad, this.item.productos[xI].unidad, '']);
    }*/

    $("#mdlArticulo").modal('toggle');
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
    });

    if (this.id > 0) {
      this.toggleButton = true;

    } else {
      this.toggleButton = false;
    }












    this.dtDetalleAtributos = {
      headerRow: ['Nombre', 'Operador', 'Valor', 'Unidad', 'Obligatorio', 'Acciones'],
      footerRow: ['Nombre', 'Operador', 'Valor', 'Unidad', 'Obligatorio', 'Acciones'],

      dataRows: [
        ['F. Entrega', '=', '', '', 'Si', ''],
        ['Equivalencia', '=', '', '', 'No', ''],
      ]
    };

    oRequerimientoCompradorFormularioComponent = this;

    this.util.listPrioridades(function (data: ComboItem[]) {
      oRequerimientoCompradorFormularioComponent.listPrioridadCombo = data;
    });

    this.util.listMonedas(function (data: ComboItem[]) {
      oRequerimientoCompradorFormularioComponent.listMonedaCombo = data;
    });

    this.util.listUnidadMedida(function (data: ComboItem[]) {
      oRequerimientoCompradorFormularioComponent.listUnidadCombo = data;
    });

  }


  ngOnChanges(changes: SimpleChanges) {

  }

  ngAfterViewInit() {
    $('#mdlProveedorInvitado').on('shown.bs.modal', function () {
      oRequerimientoCompradorFormularioComponent.proveedoresInvitado = new ProveedorInvitado();
    });

    $('#mdlArticulo').on('shown.bs.modal', function () {
      oRequerimientoCompradorFormularioComponent.producto = new Producto();
      $("#cmbObjetoContratacion").val("");
    });

    $('#mdlArchivosAdjuntos').on('shown.bs.modal', function () {
      $('#btnEliminarAA').click();

    });

    dtArchivos = $('#dtArchivos').on('init.dt', function (e, settings, json) {
      DatatableFunctions.initDatatable(e, settings, json, dtArchivos);
    }).DataTable({
      ajax: function (data, callback, settings) {

        let result = {
          data: oRequerimientoCompradorFormularioComponent.item.docadjuntos

        };
        callback(
          result
        );
      },
      columns: [

        { data: 'id' },
        { data: 'descripcion' },
        { data: 'id' },
      ],
      columnDefs: [
        {

          render: function (data, type, row) {
            return '<div class="text-right" height="100%"><div class="checkbox text-right"><label><input type="checkbox" name="optionsCheckboxes"></label></div></div>';
          },
          targets: 0
        },
        {

          render: function (data, type, row) {


            return '<div class="text-center"><a class="editar" href="javascript:void(0);" row-id="' + row.id + '">' +
              '<button class="btn btn-simple btn-info btn-icon download" rel="tooltip" title="Bajar Archivo" data-placement="left">' +
              '<i class="material-icons">get_app</i></button></a>' +
              '<button class="btn btn-simple btn-danger btn-icon remove" rel="tooltip" title="Eliminar" data-placement="left">' +
              '<i class="material-icons">delete</i>' +
              '</button></div>';
          },
          targets: 2
        }
      ]
    });


    // Edit record
    dtArchivos.on('click', '.download', function (event) {
      var $tr = $(this).closest('tr');

      let row_id = $tr.find("a.editar").attr('row-id');

      event.preventDefault();

    });

    // Delete a record
    dtArchivos.on('click', '.remove', function (e) {
      var $tr = $(this).closest('tr');
      row_id = $tr.find("a.editar").attr('row-id') as number;

      swal({
        text: "¿Desea eliminar el registro seleccionado?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Si",
        cancelButtonText: "No",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-default",
        cancelButtonClass: "btn btn-warning",
      }).then(function () {
        var lista = oRequerimientoCompradorFormularioComponent.item.docadjuntos as Archivo[];
        var listafiltrada = lista.filter(a => a.id != row_id);
        oRequerimientoCompradorFormularioComponent.item.docadjuntos = JSON.parse(JSON.stringify(listafiltrada));
        setTimeout(function () {
          dtArchivos.ajax.reload();

        }, 500);
      }, function (dismiss) {
      // dismiss can be 'cancel', 'overlay',
      // 'close', and 'timer'

    });



      e.preventDefault();
    });




    /* var dtArticulos = $('#dtArticulos').DataTable({
       columnDefs: [
         { targets: 'disabled-sorting', orderable: false }
       ],
 
 
     });*/


    dtArticulos = $('#dtArticulos').on('init.dt', function (e, settings, json) {
      DatatableFunctions.initDatatable(e, settings, json, dtArticulos);
    }).DataTable({
      ajax: function (data, callback, settings) {

        let result = {
          data: oRequerimientoCompradorFormularioComponent.item.productos

        };
        callback(
          result
        );
      },
      columns: [
        { data: 'codigoproducto' },

        { data: 'codigoproducto' },
        { data: 'nombreproducto' },
        { data: 'descripcionproducto' },
        { data: 'cantidad' },
        { data: 'unidad' },
        { data: 'codigoproducto' },
      ],
      columnDefs: [
        {




          render: function (data, type, row) {
            return '<div class="text-right" height="100%"><div class="checkbox text-right"><label><input type="checkbox" name="optionsCheckboxes"></label></div></div>';
          },
          targets: 0
        },
        {

          render: function (data, type, row) {


            return '<div class="text-center"><a href="javascript:void(0);" row-id="' + row.id + '">' +
              '<button class="btn btn-simple btn-info btn-icon edit" data-toggle="modal" data-target="#mdlArticulo" rel="tooltip" title="Atributos" data-placement="left">' +
              ' <i class="material-icons">visibility</i></button></a>' +
              ' <button class="btn btn-simple btn-danger btn-icon remove" rel="tooltip" title="Eliminar" data-placement="left">' +
              '<i class="material-icons">delete</i></button>' +
              '</div>';
          },
          targets: 6
        }
      ]

    });






    dtArticulos.on('click', '.edit', function (event) {
      var $tr = $(this).closest('tr');
      let id = $tr.find("a").attr('row-id');

      event.preventDefault();
    });
    dtArticulos.on('click', '.remove', function (e) {

      var $tr = $(this).closest('tr');
      row_id = $tr.find("a").attr('row-id') as number;

      swal({
        text: "¿Desea eliminar el registro seleccionado?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Si",
        cancelButtonText: "No",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-default",
        cancelButtonClass: "btn btn-warning",
      }).then(function () {
        var lista = oRequerimientoCompradorFormularioComponent.item.productos as ProveedorInvitado[];
        var listafiltrada = lista.filter(a => a.id != row_id);
        oRequerimientoCompradorFormularioComponent.item.proveedores = JSON.parse(JSON.stringify(listafiltrada));
        setTimeout(function () {
          dtProveedores.ajax.reload();

        }, 500);
      }, function (dismiss) {
      // dismiss can be 'cancel', 'overlay',
      // 'close', and 'timer'

    }
    
    );


      e.preventDefault();
    });


    var dtProveedoresBuscar = $('#dtProveedoresBuscar').DataTable({

      ajax: function (data, callback, settings) {

        let result = {
          data: oRequerimientoCompradorFormularioComponent.proveedores

        };
        callback(
          result
        );
      },
      columns: [
        { data: 'usuario' },

        { data: 'id' },
      ],
      columnDefs: [

        {

          render: function (data, type, row) {


            return '<div class="text-center"><a class="editar" href="javascript:void(0);" row-id="' + row.id + '">' +
              '<button class="btn btn-simple btn-info btn-icon add" rel="tooltip" title="Agregar" data-placement="left">' +
              '<i class="material-icons">add</i>' +
              '</button></a></div>';
          },
          targets: 1
        }
      ]

    });





    dtProveedores = $('#dtProveedores').on('init.dt', function (e, settings, json) {
      DatatableFunctions.initDatatable(e, settings, json, dtProveedores);
    }).DataTable({

      ajax: function (data, callback, settings) {

        let result = {
          data: oRequerimientoCompradorFormularioComponent.item.proveedores

        };
        callback(
          result
        );
      },
      columns: [
        { data: 'id' },
        { data: 'usuario' },
        { data: 'razonsocial' },
        { data: 'ruc' },
        { data: 'id' },
      ],
      columnDefs: [
        {

          render: function (data, type, row) {
            return '<div class="text-right" height="100%"><div class="checkbox text-right"><label><input type="checkbox" name="optionsCheckboxes"></label></div></div>';
          },
          targets: 0
        },
        {

          render: function (data, type, row) {


            return '<div class="text-center"><a class="editar" href="javascript:void(0);" row-id="' + row.id + '">' +
              '<button class="btn btn-simple btn-danger btn-icon remove" rel="tooltip" title="Eliminar" data-placement="left">' +
              '<i class="material-icons">delete</i>' +
              '</button></a></div>';
          },
          targets: 4
        }
      ]

    });

    dtProveedores.on('click', '.remove', function (e) {

      var $tr = $(this).closest('tr');
      row_id = $tr.find("a.editar").attr('row-id') as number;

      swal({
        text: "¿Desea eliminar el registro seleccionado?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Si",
        cancelButtonText: "No",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-default",
        cancelButtonClass: "btn btn-warning",
      }).then(function () {
        var lista = oRequerimientoCompradorFormularioComponent.item.proveedores as ProveedorInvitado[];
        var listafiltrada = lista.filter(a => a.id != row_id);
        oRequerimientoCompradorFormularioComponent.item.proveedores = JSON.parse(JSON.stringify(listafiltrada));
        setTimeout(function () {
          dtProveedores.ajax.reload();

        }, 500);
      }, function (dismiss) {
      // dismiss can be 'cancel', 'overlay',
      // 'close', and 'timer'

    });


      e.preventDefault();
    });

    dtProveedoresInvitados = $('#dtProveedoresInvitados').on('init.dt', function (e, settings, json) {
      DatatableFunctions.initDatatable(e, settings, json, dtProveedoresInvitados);
    }).DataTable({

      ajax: function (data, callback, settings) {

        let result = {
          data: oRequerimientoCompradorFormularioComponent.item.proveedoresinvitados

        };
        callback(
          result
        );
      },
      columns: [
        { data: 'razonsocial' },
        { data: 'ruc' },
        { data: 'email' },
        { data: 'id' },
      ],
      columnDefs: [
        {

          render: function (data, type, row) {
            return '<div class="text-right" height="100%"><div class="checkbox text-right"><label><input type="checkbox" name="optionsCheckboxes"></label></div></div>';
          },

          targets: 0
        },
        {

          render: function (data, type, row) {


            return '<div class="text-center"><a class="editar" href="javascript:void(0);" row-id="' + row.id + '">' +
              '<button class="btn btn-simple btn-danger btn-icon remove" rel="tooltip" title="Eliminar" data-placement="left">' +
              '<i class="material-icons">delete</i>' +
              '</button></a></div>';
          },
          targets: 4
        }
      ]
    });

    dtProveedoresInvitados.on('click', '.remove', function (e) {

      var $tr = $(this).closest('tr');
      row_id = $tr.find("a.editar").attr('row-id') as number;

      swal({
        text: "¿Desea eliminar el registro seleccionado?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Si",
        cancelButtonText: "No",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-default",
        cancelButtonClass: "btn btn-warning",
      }).then(function () {
        var lista = oRequerimientoCompradorFormularioComponent.item.proveedoresinvitados as ProveedorInvitado[];
        var listafiltrada = lista.filter(a => a.id != row_id);
        oRequerimientoCompradorFormularioComponent.item.proveedoresinvitados = JSON.parse(JSON.stringify(listafiltrada));
        setTimeout(function () {
          dtProveedoresInvitados.ajax.reload();

        }, 500);
      }, function (dismiss) {
      // dismiss can be 'cancel', 'overlay',
      // 'close', and 'timer'

    });


      e.preventDefault();
    });


    var tblDetalleAtributos = $('#dtDetalleAtributos').on('init.dt', function (e, settings, json) {
      DatatableFunctions.initDatatable(e, settings, json, tblDetalleAtributos);
    }).DataTable({
      columnDefs: [
        { targets: 'disabled-sorting', orderable: false }
      ],

    });



    if (this.id > 0) {
      this.obtener(this.id);
    }

    //  Activate the tooltips
    $('[rel="tooltip"]').tooltip();

    DatatableFunctions.registerCheckAll();


  }

  eliminarDetArticulo() {
    alert("borrarlo");
  }
}
