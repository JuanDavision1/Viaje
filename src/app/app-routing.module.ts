import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'Elviaje',loadChildren: ()=> import('../app/travel/travel.module').then(m=> m.TravelModule)},
  {path:'**',redirectTo:'Elviaje'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
