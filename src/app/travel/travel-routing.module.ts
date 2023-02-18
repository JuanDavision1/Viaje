import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'Suscribirse',component:PrincipalComponent},
      {path:'**', redirectTo:'Suscribirse'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelRoutingModule { }
