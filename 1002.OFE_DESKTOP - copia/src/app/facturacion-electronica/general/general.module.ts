import { NgModule } from '@angular/core';
import { TiposService } from './utils/tipos.service';
import { CatalogoDocumentoIdentidadService } from './utils/catalogo-documento-identidad.service';
import {Servidores} from './services/servidores';
import {EstadoDocumentoService} from './services/documento/estadoDocumento.service';
import {TablaMaestraService} from './services/documento/tablaMaestra.service';
import {TipoPrecioVentaService} from './services/configuracionDocumento/tipoPrecioVenta.service';
import {TipoAfectacionIgvService} from './services/configuracionDocumento/tipoAfectacionIgv.service';
import {ConceptoDocumentoService} from './services/documento/conceptoDocumento.service';
import { CorreoService } from './services/correo/correo.service';
import { SeriesService } from './services/configuracionDocumento/series.service';
import { DirectivasModule } from './directivas/directivas.module';
import {EntidadService} from './services/organizacion/entidad.service';
import {UtilsService} from './utils/utils.service';

@NgModule({
  imports: [
    DirectivasModule
  ],
  providers: [
    TiposService,
    CatalogoDocumentoIdentidadService,
    Servidores,
    EstadoDocumentoService,
    TablaMaestraService,
    TipoPrecioVentaService,
    TipoAfectacionIgvService,
    ConceptoDocumentoService,
    CorreoService,
    SeriesService,
    EntidadService,
    UtilsService
  ],
  declarations: []
})
export class GeneralModule { }
