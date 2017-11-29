import { Injectable } from '@angular/core';
import {Nota} from '../models/nota';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class NotaService {
  key = 'sg44wogg0occ0skkkokkwwo040w4ocwco4kg0cwo';
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
}
