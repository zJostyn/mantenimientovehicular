import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import axios from 'axios';
import { MatDialog } from '@angular/material/dialog';
import { VehiculoComponent } from '../component/vehiculo/vehiculo.component';
import { MantenimientoComponent } from '../component/mantenimiento/mantenimiento.component';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private apiUrl = 'https://apimantenimientovehicular.onrender.com/api/usuarios';
  private apiUrl1 = 'https://apimantenimientovehicular.onrender.com/api/vehiculos';
  private apiUrl2 = 'https://apimantenimientovehicular.onrender.com/api/mantenimientos';
  private apiUrl3 = 'https://apimantenimientovehicular.onrender.com/api/vehiculoID';
  private apiUrl4 = 'https://apimantenimientovehicular.onrender.com/api/mantenimientoID';
  private apiUrl5 = 'https://apimantenimientovehicular.onrender.com/api/vehiculosIDs';
  private apiUrl6 = 'https://apimantenimientovehicular.onrender.com/api/deleteMantenimiento';
  private apiUrl7 = 'https://apimantenimientovehicular.onrender.com/api/registro';
  private apiUrl8 = 'https://apimantenimientovehicular.onrender.com/api/updateMantenimiento';
  private apiUrl9 = 'https://apimantenimientovehicular.onrender.com/api/habilitarUsuario';
  private apiUrl10 = 'https://apimantenimientovehicular.onrender.com/api/bloquearUsuario';
  private apiUrl11 = 'https://apimantenimientovehicular.onrender.com/api/deleteContacto';

  constructor(private dialog: MatDialog) { }

  abrirModal(): void {
    const dialogRef = this.dialog.open(VehiculoComponent, {
      width: '700px', height: '600px',
      panelClass: 'custom-dialog-class'
    });

    dialogRef.afterOpened().subscribe(() => {
      const container = document.querySelector('.mat-dialog-container');
      if (container) {
        container.classList.add('open');
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      const container = document.querySelector('.mat-dialog-container');
      if (container) {
        container.classList.remove('open');
      }
    });
  }

  abrirModal1(): void {
    const dialogRef = this.dialog.open(MantenimientoComponent, {
      width: '800px', height: '550px',
      panelClass: 'custom-dialog-class'
    });

    dialogRef.afterOpened().subscribe(() => {
      const container = document.querySelector('.mat-dialog-container');
      if (container) {
        container.classList.add('open');
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      const container = document.querySelector('.mat-dialog-container');
      if (container) {
        container.classList.remove('open');
      }
    });
  }

  getUsuarios(): Observable<any[]> {
    return new Observable<any[]>((observer) => {
      axios
        .get(this.apiUrl, {})
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  getVehiculos(): Observable<any[]> {
    return new Observable<any[]>((observer) => {
      axios
        .get(this.apiUrl1, {})
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  getMantenimientos(): Observable<any[]> {
    return new Observable<any[]>((observer) => {
      axios
        .get(this.apiUrl2, {})
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  postVehiculo(val: number): Observable<any[]> {
    return new Observable<any[]>((observer) => {
      axios
        .post(this.apiUrl3, { usuario_id: val })
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  postMantenimiento(val: number): Observable<any[]> {
    return new Observable<any[]>((observer) => {
      axios
        .post(this.apiUrl4, { vehiculo_id: val })
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  postMantenimiento1(val: number): Observable<any[]> {
    return new Observable<any[]>((observer) => {
      axios
        .post(this.apiUrl5, { usuario_id: val })
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  deleteMantenimiento(val: number): Observable<any[]> {
    return new Observable<any[]>((observer) => {
      axios
        .delete(this.apiUrl6, {
          data: { id: val },
        })
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  getRegistros(): Observable<any[]> {
    return new Observable<any[]>((observer) => {
      axios
        .get(this.apiUrl7, {})
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  updateMantenimiento(val: number): Observable<any[]> {
    return new Observable<any[]>((observer) => {
      axios
        .put(this.apiUrl8, {
          id: val,
        })
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  habilitarUsuario(val: number): Observable<any[]> {
    return new Observable<any[]>((observer) => {
      axios
        .put(this.apiUrl9, {
          id: val,
        })
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  bloquearUsuario(val: number): Observable<any[]> {
    return new Observable<any[]>((observer) => {
      axios
        .put(this.apiUrl10, {
          id: val,
        })
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  deleteContacto(val: number): Observable<any[]> {
    return new Observable<any[]>((observer) => {
      axios
        .delete(this.apiUrl11, {
          data: { id: val },
        })
        .then((response) => {
          observer.next(response.data);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }
}
