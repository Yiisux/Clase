import { Component, OnInit } from '@angular/core';
import {Nota} from '../models/nota';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NotaService} from '../services/nota.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-nota-listado-component',
  templateUrl: './nota-listado-component.component.html',
  styleUrls: ['./nota-listado-component.component.css']
})
export class NotaListadoComponentComponent implements OnInit {

  listadoNotas: Observable<Nota[]>;
  constructor(private modalService: NgbModal, private notaService: NotaService) {
  }


  borrar(nota: Nota) {
  }


  editar(nota: Nota) {
  }

  ngOnInit() {
    this.listadoNotas = this.notaService.getNotas();
  }

  abrirModal(modalNuevaNota: any) {
    this.modalService.open(modalNuevaNota, {size: 'lg'});
  }
}
