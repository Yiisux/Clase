import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaListadoComponentComponent } from './nota-listado-component.component';

describe('NotaListadoComponentComponent', () => {
  let component: NotaListadoComponentComponent;
  let fixture: ComponentFixture<NotaListadoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaListadoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaListadoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
