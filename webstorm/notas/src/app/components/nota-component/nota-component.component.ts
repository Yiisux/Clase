import {Component, Input, OnInit} from '@angular/core';
import {Nota} from '../../models/nota';
import {NotaService} from '../../services/nota.service';

@Component({
  selector: 'app-nota-component',
  templateUrl: './nota-component.component.html',
  styleUrls: ['./nota-component.component.css']
})
export class NotaComponentComponent implements OnInit {
  @Input() nota: Nota;
  constructor(private notaService: NotaService) { }



  borrar(nota: Nota) {
  this.notaService.deleteNota(nota.id).subscribe(
    resp => {alert('nota eliminada');,
      error => {
        alert('error al eliminar la nota');,
      }
    });
  }


  ngOnInit() {
  }

}
