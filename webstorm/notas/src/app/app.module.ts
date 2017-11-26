import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NotaComponentComponent } from './nota-component/nota-component.component';
import { NotaListadoComponentComponent } from './nota-listado-component/nota-listado-component.component';
import { CategoriaComponent } from './categoria/categoria.component';


@NgModule({
  declarations: [
    AppComponent,
    NotaComponentComponent,
    NotaListadoComponentComponent,
    CategoriaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
