import { Component } from '@angular/core';
import { Compartidointerfaz } from '../interfaces/compartidointerfaz';

@Component({
  selector: 'app-piedepagina',
  templateUrl: './piedepagina.component.html',
  styleUrls: ['./piedepagina.component.css']
})
export class PiedepaginaComponent {
  menu:Compartidointerfaz[]=[
    {ruta:'',texto:'Sobre Nosotros'},
    {ruta:'',texto:'Articulos'},
    {ruta:'./Elviaje/Suscribirse',texto:'Suscribirse'},
   
  ]
}
