import { Component } from '@angular/core';
import { PerrosService } from 'src/app/services/perros.service';

@Component({
  selector: 'app-perros',
  templateUrl: './perros.component.html',
  styleUrls: ['./perros.component.scss']
})
export class PerrosComponent {

  fotosPerros:any;

  constructor(private imgperros:PerrosService){

  }

  ngOnInit(){
    this.imgperros.getImgDogs().subscribe(
      (r) => {this.fotosPerros = r; console.log('Fotos de perros cargadas ',r)},
      (e) => {console.log(e)}
    )

  }

}
