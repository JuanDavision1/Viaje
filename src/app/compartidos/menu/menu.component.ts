import { Component } from '@angular/core';
import { Compartidointerfaz } from '../interfaces/compartidointerfaz';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
menu:Compartidointerfaz[]=[
  {ruta:'',texto:'Sobre Nosotros'},
  {ruta:'',texto:'Articulos'},
  {ruta:'./Elviaje/Suscribirse',texto:'Suscribirse'},
 
]
}
