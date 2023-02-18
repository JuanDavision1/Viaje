import { Component } from '@angular/core';
import { Travelinterface } from '../../interfaces/travelinterface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  imagencarousel:Travelinterface[]=[
    {img:'../../../../assets/imagenes/PlayaCatedrales.jpg',titulo:'Viaja a la Playa de las Catedrales ',ruta:'#',info:'Apuntarme',alt:'PlayaCatedrales'},
    {img:'../../../../assets/imagenes/PlayaConcha.jpg',titulo:'Viaja a la playa de la Concha',ruta:'#',info:'Apuntarme',alt:'PlayaConcha'},
    {img:'../../../../assets/imagenes/PlayaEagle.jpg',titulo:'Viaja a Eagle Beach',ruta:'#',info:'Apuntarme',alt:'PlayaEagle'},
    {img:'../../../../assets/imagenes/PlayaBaiadoSoncho.jpg',titulo:'Viaja a Baia do Sancho',ruta:'#',info:'Apuntarme',alt:'PlayaBaiadoSoncho'},
    {img:'../../../../assets/imagenes/PlayaBayBeach.jpg',titulo:'Viaja a Trunk Bay Beach',ruta:'#',info:'Apuntarme',alt:'PlayaBayBeach'}
  ]
}
