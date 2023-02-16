import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigimonesComponent } from './consumo-api1/digimones/digimones.component';
import { PerrosComponent } from './consumo-api2/perros/perros.component';
import { ChucknorrisComponent } from './consumo-api3/chucknorris/chucknorris.component';

const routes: Routes = [
  {path:'digimones', component: DigimonesComponent},
  {path:'perros', component: PerrosComponent},
  {path:'chuck',component: ChucknorrisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
