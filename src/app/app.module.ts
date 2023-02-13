import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsumirModule } from './consumir/consumir.module';
import { Seccion1Module } from './seccion1/seccion1.module';
import { DigimonesService } from './consumir/consumo/digimones.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Seccion1Module,
    ConsumirModule,
    HttpClientModule
  ],
  providers: [
    DigimonesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
