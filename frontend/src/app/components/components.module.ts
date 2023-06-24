import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgChartsModule
  ],
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent
  ]
})
export class ComponentsModule { }