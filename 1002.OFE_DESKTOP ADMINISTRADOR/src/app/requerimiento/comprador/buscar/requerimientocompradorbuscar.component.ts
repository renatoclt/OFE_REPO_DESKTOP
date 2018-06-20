import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RFQCompradorService } from 'app/service/rfqcompradorservice';
import { RFQCompradoBuscar } from 'app/model/rfqcomprador';
import { AppUtils } from "app/utils/app.utils";
import { MasterService } from 'app/service/masterservice';
import { ComboItem } from "app/model/comboitem";
import {BASE_URL} from 'app/utils/app.constants';

declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}
declare var $: any;
declare var DatatableFunctions: any;
var oRequerimientoCompradorBuscarComponent, datatable;

@Component({
  moduleId: module.id,
  selector: 'requerimientocompradorbuscar-cmp',
  templateUrl: 'requerimientocompradorbuscar.component.html',
  providers: [MasterService]
})

export class RequerimientoCompradorBuscarComponent implements OnInit, AfterViewInit {
  util: AppUtils;
  public listEstadoCombo: ComboItem[];
  public resultados: any[];

  public navigate(nav) {

    this.router.navigate(nav, { relativeTo: this.route });
  }

  constructor(private router: Router, private route: ActivatedRoute, private _masterService: MasterService) {
    this.util = new AppUtils(this.router, this._masterService);
  }

  clicked(event) {
    event.preventDefault();
    datatable.ajax.reload();
  }

  ngOnInit() {
    // Code for the Validator
    //this.buscar();
    $('.datepicker').datetimepicker({
      format: 'MM/DD/YYYY',
      icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-chevron-up",
        down: "fa fa-chevron-down",
        previous: 'fa fa-chevron-left',
        next: 'fa fa-chevron-right',
        today: 'fa fa-screenshot',
        clear: 'fa fa-trash',
        close: 'fa fa-remove',
        inline: true
      }
    });
    oRequerimientoCompradorBuscarComponent = this;

    this.util.listEstadoRFQ(function (data: ComboItem[]) {
      oRequerimientoCompradorBuscarComponent.listEstadoCombo = data;
    });


    this.resultados = [
      {

        nroreq: "2",
        descripcion: "EQUIPO DE SONIDO (RADIO GRABADOR)<br/>EQUIPO DE SONIDO (RADIO GRABADOR)",
        estado: "Activa",
        fechacreacion: "07/06/2017",
        usuariocomprador: "Gabriela Mendez",
        version: "1",
        cotizaciones: "2",

      },
      {

        nroreq: "3",
        descripcion: "EQUIPO DE SONIDO (RADIO GRABADOR)<br/>EQUIPO DE SONIDO (RADIO GRABADOR)",
        estado: "Activa",
        fechacreacion: "07/06/2017",
        usuariocomprador: "Gabriela Mendez",
        version: "1",
        cotizaciones: "2",

      },
    ];
  }

  ngAfterViewInit() {
    cargarDataTable();
    DatatableFunctions.registerCheckAll();
  }


}

function cargarDataTable() {
  //$.fn.dataTable.ext.errMode = 'throw';

  /*
  .on('init.dt', function (e, settings, json) {
      DatatableFunctions.initDatatable(e, settings, json, datatable);
  })
   */
  datatable = $('#dtResultados').DataTable({
    order: [[0, "asc"]],
    searching: false,
    serverSide: true,
    
    /*ajax: {
      "url": "http://b2miningdata.com/rfqc/v1/rfqcomprador/v1/listvm/1",
      "dataSrc": ""
    },*/
    ajax: function (data, callback, settings) {
      let result = {  data: oRequerimientoCompradorBuscarComponent.resultados  };
      callback(result);
    },
    columns: [
      { data: 'nroreq' },
      { data: 'nroreq' },
      { data: 'descripcion' },
      { data: 'estado' },
      { data: 'fechacreacion' },
      { data: 'usuariocomprador' },
      { data: 'version' },
      { data: 'cotizaciones' },
      { data: 'nroreq' }
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
              return '<div class="text-center"><a class="buscar-propuesta" href="/cotizacion/comprador/buscar" row-id="' + row.nroreq + '">' +
                row.cotizaciones + '</a></div>';
          },
          targets: 6
      },
      {
          render: function (data, type, row) {
            return '<div class="text-center"><a class="editar" href="/requerimiento/comprador/formulario/' + row.nroreq + '" row-id="' + row.nroreq + '">' +
              '<button class="btn btn-simple btn-info btn-icon edit" rel="tooltip" title="Ver/Editar" data-placement="left">' +
              '<i class="material-icons">visibility</i></button></a>' +
              '<button class="btn btn-simple btn-danger btn-icon remove" rel="tooltip" title="Eliminar" data-placement="left">' +
              '<i class="material-icons">delete</i>' +
              '</button></div>';
          },
          targets: 7
      }
    ]
  });

  datatable.on('click', '.edit', function (event) {
    var $tr = $(this).closest('tr');
    let row_id = $tr.find("a.editar").attr('row-id');
    let nav = ['/requerimiento/comprador/formulario', row_id];
    oRequerimientoCompradorBuscarComponent.navigate(nav);
    event.preventDefault();
  });

  datatable.on('click', '.buscar-propuesta', function (event) {
    var $tr = $(this).closest('tr');
    let row_id = $tr.find("a.buscar-propuesta").attr('row-id');
    let nav = ['/cotizacion/comprador/buscar'];
    oRequerimientoCompradorBuscarComponent.navigate(nav);
    event.preventDefault();
  });

}