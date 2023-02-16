import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

//services
import { DigimonesService } from './services/digimones.service';
import { PerrosService } from './services/perros.service';

//modules
import { AppRoutingModule } from './app-routing.module';
import { Seccion1Module } from './seccion1/seccion1.module';
import { HttpClientModule } from '@angular/common/http';
import { Consumir2Module } from './consumir2/consumir2.module';
import { ConsumoAPI1Module } from './consumo-api1/consumo-api1.module';
import { ConsumoAPI2Module } from './consumo-api2/consumo-api2.module';
import { ConsumoAPI3Module } from './consumo-api3/consumo-api3.module';
import { MenuComponent } from './shared/menu/menu.component';
import { ChuckNorrisService } from './services/chuck-norris.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Seccion1Module,
    HttpClientModule,
    Consumir2Module,
    ConsumoAPI1Module,
    ConsumoAPI2Module,
    ConsumoAPI3Module
  ],
  providers: [
    DigimonesService,
    PerrosService,
    ChuckNorrisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
