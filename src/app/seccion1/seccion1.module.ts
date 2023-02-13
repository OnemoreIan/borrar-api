import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormularioComponent
  ],
  exports: [
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class Seccion1Module { }
