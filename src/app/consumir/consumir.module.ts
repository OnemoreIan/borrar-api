import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsumoComponent } from './consumo/consumo.component';
import { DigimonesService } from './consumo/digimones.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ConsumoComponent
  ],
  exports:[
    ConsumoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[DigimonesService]
})
export class ConsumirModule { }
