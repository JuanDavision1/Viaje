import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PiedepaginaComponent } from './piedepagina/piedepagina.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MenuComponent,
    PiedepaginaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MenuComponent,
    PiedepaginaComponent
  ]
})
export class CompartidosModule { }
