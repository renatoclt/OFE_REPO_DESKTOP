import {Injectable} from '@angular/core';
import {BASE_URL} from 'app/utils/app.constants';


@Injectable()
export class Servidores {
  public server1 = BASE_URL +'fe';
  public server2 = BASE_URL +'fe';
  public server6 = BASE_URL +'fe';
  public server3 = BASE_URL +'fe';
  public server4 = BASE_URL +'fe';
  public server5 = BASE_URL +'fe';

  // // **** SERVER 1 **** //
  // public AFEDOCUQRY = this.server5 + ':8085/api/fe/ms-parametro-query/v1';
  // public PARMQRY    = this.server5 + ':8085/api/fe/ms-parametro-query/v1';


  // // **** SERVER 2 **** //
  // public NOTIFIC    = this.server2 + ':8084/api/fe/ms-notificaciones/v1';

  // // **** SERVER 3 **** //
  // public FILEQRY    = this.server3 + ':8083/api/fe/ms-archivos-query/v1';

  // // **** SERVER 4 **** //
  // public DOCUQRY    = this.server2 + ':8081/api/fe/ms-documentos-query/v1';
  // public DOCUCMD    = this.server4 + ':8086/api/fe/ms-documentos-command/v1';

  // // **** SERVER 5 **** //
  // public ORGAQRY    = this.server5 + ':8082/api/fe/ms-organizaciones-query/v1';
  // public ORGACMD    = this.server5 + ':8082/api/fe/ms-organizaciones-query/v1';

  // // **** SERVER 5 **** //
  // public INVEQRY    = this.server1 + ':8087/api/fe/ms-inveqry/v1';

  /**
   * Cambios 06-01-2018
   */
  // public server1 = 'http://35.196.243.220';
  // public server2 = 'http://104.196.1.181';
  // public server1 = 'http://35.196.243.220';
  // public server2 = 'http://104.196.1.181';
  
  // public serverorganizacionprueba = 'http://104.196.1.181';
  // public serverlocal = 'http://192.168.70.29';
  // public serverlocal2 = 'http://192.168.70.21';
  public ebiz = BASE_URL + 'usuarios/msusuario/v1/seguridad/fe';

  //  SERVER 1
  public NOTIFIC    = this.server1 + '/ms-notificaciones/v1';
  public FILEQRY    = this.server1 + '/ms-archivos-query/v1';
  public INVEQRY    = this.server1 + '/ms-inveqry/v1';
  public DOCUCMD    = this.server1 + '/ms-documentos-command/v1';
  // public DOCUCMD    = 'http://192.168.70.29:8083/api/fe/ms-documentos-command/v1';

  //  SERVER 2
  public AFEDOCUQRY = this.server2 + '/ms-parametro-query/v1';
  public PARMQRY    = this.server2 + '/ms-parametro-query/v1';
  public DOCUQRY    = this.server2 + '/ms-documentos-query/v1';
  public ORGAQRY    = this.server2 + '/ms-organizaciones-command/v1';
  public ORGACMD    = this.server2 + '/ms-organizaciones-query/v1';
  public INVECMD    = this.server2 + '/ms-inventarios-command/v1';

  // LOCAL

  public DOCUQRY_LOCAL    = 'http://localhost:3000/v1';
  public HOSTLOCAL    = 'http://localhost:3000/v1';

}
