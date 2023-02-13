import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'question',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  data:any = {};
  cont:number = 1;
  allvalidatos!:FormGroup;

  envioFomr(d1:string,d2:string, d3:string){
    alert('Formulario enviado '+ this.cont+'\n\n'+'Dato1 =>'+d1+'\n\n'+'Dato2 =>'+d2+'\n\n'+'Dato3 =>'+d3 );
    this.cont++;
    this.allvalidatos.reset();
  }

  ejecutado(){
    alert('operacion ejecutada exitosamente');
  }

  constructor(private fb:FormBuilder ){
    this.allvalidatos = fb.group({
      dato1: ['',[Validators.required,Validators.minLength(2)]],
      dato2: ['',[Validators.required,Validators.minLength(2)]],
      dato3: ['',[Validators.required,Validators.minLength(2)]]
    })
  }

}
