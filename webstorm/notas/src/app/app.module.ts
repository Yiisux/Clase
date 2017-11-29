import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { NotaComponentComponent } from './nota-component/nota-component.component';
import { NotaListadoComponentComponent } from './nota-listado-component/nota-listado-component.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaListadoComponent } from './categoria-listado/categoria-listado.component';
import {Route, RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NotaService} from './services/nota.service';
import {CategoriaService} from './services/categoria.service';
import {HttpClientModule} from '@angular/common/http';

const rutas: Route[] = [
  {path: '', component: AppComponent},
  {path: 'notas', component: NotaListadoComponentComponent},
  {path: 'categorias', component: CategoriaListadoComponent},
  {path: '**', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NotaComponentComponent,
    NotaListadoComponentComponent,
    CategoriaComponent,
    CategoriaListadoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    [NotaService],
    [CategoriaService]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
