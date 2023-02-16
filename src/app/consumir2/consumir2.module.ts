import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogesComponent } from './doges/doges.component';
import { PerrosService } from '../services/perros.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DogesComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    DogesComponent
  ],
  providers:[PerrosService]
})
export class Consumir2Module { }
