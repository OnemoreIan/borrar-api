import { Component,OnInit } from '@angular/core';
import { DigimonesService } from './digimones.service';

@Component({
  selector: 'consumo',
  templateUrl: './consumo.component.html',
  styleUrls: ['./consumo.component.scss']
})
export class ConsumoComponent {

  digimones:any;

  constructor(public digimon:DigimonesService){

  }
  
  ngOnInit(){
    this.digimon.getDigimones().subscribe(
      (r) => {this.digimones = r; console.log(r)},
      (e) => {console.log(e)}
    )
  }

}
