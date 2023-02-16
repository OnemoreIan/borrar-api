import { Component } from '@angular/core';
import { DigimonesService } from 'src/app/services/digimones.service';

@Component({
  selector: 'digimones',
  templateUrl: './digimones.component.html',
  styleUrls: ['./digimones.component.scss']
})
export class DigimonesComponent {

  digimones:any;
  
  largo_pagina = 2;
  paginaActual = 1;
  largoPagineo = [];

  constructor(public digimon:DigimonesService){

  }
  
  ngOnInit(){
    this.largoPagineo = this.digimones;

    this.digimon.getDigimones().subscribe(
      (r) => {this.digimones = r; console.log(r)},
      (e) => {console.log(e)}
    )
  }

}
