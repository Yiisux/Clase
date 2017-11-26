import {Component, Input, OnInit} from '@angular/core';
import {Nota} from '../models/nota';

@Component({
  selector: 'app-nota-component',
  templateUrl: './nota-component.component.html',
  styleUrls: ['./nota-component.component.css']
})
export class NotaComponentComponent implements OnInit {
  @Input() nota: Nota;
  constructor() { }

  ngOnInit() {
  }

}
