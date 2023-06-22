import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

import { ImageSliderComponent } from './image-slider/image-slider.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
    ImageSliderComponent
  ],
  exports: [
    FooterComponent,
    ImageSliderComponent
  ]
})
export class ComponentsModule { }