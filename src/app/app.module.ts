import { DadosService } from './services/dados.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  /* providers é onde vamos declarar os serviços da nossa aplicação
  ele rodam o tempo todo na aplicação */
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DadosService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
