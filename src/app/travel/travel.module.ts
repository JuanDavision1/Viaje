import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelRoutingModule } from './travel-routing.module';

import { PrincipalComponent } from './pages/principal/principal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './componentes/carousel/carousel.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    TravelRoutingModule,
    ReactiveFormsModule,
    
  ]
})
export class TravelModule { }
