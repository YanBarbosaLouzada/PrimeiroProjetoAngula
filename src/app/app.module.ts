import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';

@NgModule({

  /**
   * 
   * declarations serve para registrar 
   * componentes, pipes, diretivas e outra estruturas
   */

  declarations: [
    AppComponent,
    ProdutoComponent
  ],

  /**
   * imports serve para registra módulos dentro de outros módulos
   * 
   * SERVE EXCLUSIVAMNETE PARA OUTROS MÓDULOS
   */

  imports: [
    BrowserModule
  ],
  /**
   * providers serve para registrar serviços e interceptadores 
   * HTTP
   */

  providers: [],

  bootstrap: [AppComponent]

})
export class AppModule { }
