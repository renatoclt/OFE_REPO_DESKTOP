import {Directive, ElementRef, forwardRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

declare var $: any;

@Directive({
  selector: '[datepicker]',
  providers: [{
    provide: NG_VALUE_ACCESSOR, useExisting:
    forwardRef(() => DatePickerDirective),
    multi: true
  }]
})
export class DatePickerDirective implements OnInit, OnChanges, ControlValueAccessor {
  value: string;
  @Input('disabled') disabled;
  constructor(protected el: ElementRef) {
    this.disabled = false;
  }
  ngOnChanges(cambios: SimpleChanges) {
    this.el.nativeElement.disabled = cambios.disabled.currentValue;
  }

  ngOnInit() {
    this.el.nativeElement.disabled = this.disabled;
    $(this.el.nativeElement).datetimepicker({
      format: 'DD/MM/YYYY',
      showTodayButton: true,
      showClear: true,
      showClose: true,
      widgetPositioning: {
        horizontal: 'auto',
        vertical: 'bottom'
      },
      date:this.value,
      locale: 'es',
      icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-chevron-up",
        down: "fa fa-chevron-down",
        previous: 'fa fa-chevron-left',
        next: 'fa fa-chevron-right',
        today: 'fa fa-home',
        clear: 'fa fa-trash',
        close: 'fa fa-remove',
        inline: true
      },
      tooltips: {
        today: 'Hoy',
        clear: 'Limpiar',
        close: 'Cerrar',
        selectMonth: 'Seleccionar Mes',
        prevMonth: 'Mes Anterior',
        nextMonth: 'Mes Siguiente',
        selectYear: 'Select Year',
        prevYear: 'Previous Year',
        nextYear: 'Next Year',
        selectDecade: 'Select Decade',
        prevDecade: 'Previous Decade',
        nextDecade: 'Next Decade',
        prevCentury: 'Previous Century',
        nextCentury: 'Next Century',
        pickHour: 'Pick Hour',
        incrementHour: 'Increment Hour',
        decrementHour: 'Decrement Hour',
        pickMinute: 'Pick Minute',
        incrementMinute: 'Increment Minute',
        decrementMinute: 'Decrement Minute',
        pickSecond: 'Pick Second',
        incrementSecond: 'Increment Second',
        decrementSecond: 'Decrement Second',
        togglePeriod: 'Toggle Period',
        selectTime: 'Seleccionar Hora'
      }
    }).on("dp.change",

    e => {
      this.onModelChange(e.target.value);
      $(e.target).keydown();

      if (!(e.date))
        $(e.target.parentElement).addClass( "is-empty" )
    }
  );
  }

  onModelChange: Function = () => {

  };

  onModelTouched: Function = () => { };

  writeValue(val: string): void {
    if ($(this.el.nativeElement).data("DateTimePicker") && $(this.el.nativeElement).data("DateTimePicker").date)
      $(this.el.nativeElement).data("DateTimePicker").date(val);
    this.value = val;
  }

  registerOnChange(fn: Function): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onModelTouched = fn;
  }
}
