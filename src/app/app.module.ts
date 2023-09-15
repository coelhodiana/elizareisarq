import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ProjetoComponent } from './pages/projeto/projeto.component';

registerLocaleData(ptBr);

@NgModule({
  declarations: [AppComponent, ContatoComponent, ProjetoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
