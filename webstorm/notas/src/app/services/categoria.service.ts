import { Injectable } from '@angular/core';
import {Categoria} from '../models/categoria';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};

@Injectable()
export class CategoriaService {
  key = 'sg44wogg0occ0skkkokkwwo040w4ocwco4kg0cwo';
  urlCategoria = 'http://miguelcamposrivera.com/keeper/api/categoria';
  listaCategoria: Array<Categoria> = [
    {id: 1, nombre: 'Familia', color: '#3C93FC'},
    {id: 2, nombre: 'Colegio', color: '#A786C9'}
  ];
  constructor(private http: HttpClient) { }


  getCategoria(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.urlCategoria + '/lista?X-API-KEY=' + this.key);
  }
}
