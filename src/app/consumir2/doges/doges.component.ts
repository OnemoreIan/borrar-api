import { Component } from '@angular/core';
import { PerrosService } from 'src/app/services/perros.service';

@Component({
  selector: 'doges',
  templateUrl: './doges.component.html',
  styleUrls: ['./doges.component.scss']
})
export class DogesComponent {

  fotosPerros:any;

  constructor(public imgperros:PerrosService){}

  ngOnInit(){
    
    this.imgperros.getImgDogs().subscribe(
      (r) => {this.fotosPerros = r; console.log(r)},
      (e) => {console.log(e)}
    )

  }

}
