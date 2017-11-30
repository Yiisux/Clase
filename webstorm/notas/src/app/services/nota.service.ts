import { Injectable } from '@angular/core';
import {Nota} from '../models/nota';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};

@Injectable()
export class NotaService {
    key = '8o4w0w0k8o8go48gcocw0kwwwwkoocokkoco8s4w';
  urlNotas = 'http://miguelcamposrivera.com/keeper/api/nota';
  listadoNotas: Array<Nota> = [
    {
      id: 1,
      titulo: 'Lista de la compra',
      descripcion: 'Huevos, leche y pan',
      categoria: {id: 1, nombre: 'Familia', color: '#3C93FC'}
    },
    {
      id: 2,
      titulo: 'Deberes',
      descripcion: 'Diseño app Keeper de desarrollo de interfazes',
      categoria: {id: 2, nombre: 'Colegio', color: '#A786C9'}
    }
  ];

  constructor(private http: HttpClient) { }

  getNotas(): Observable<Nota[]> {

    return this.http.get<Nota[]>(this.urlNotas + '/lista?X-API-KEY=' + this.key);
  }

  addNota (titulo: string, descripcion: string, idcategoria: number): Observable<Nota> {
    return this.http.post<Nota>(`${this.urlNotas}/nueva`, `titulo=${titulo}&descripcion=${descripcion}&idcategoria=${idcategoria}
    &X-API-KEY=${this.key}`, requestOptions);

  }

}
