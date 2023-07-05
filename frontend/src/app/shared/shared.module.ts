import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { FooterComponent } from './components/footer/footer.component';





@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    FooterComponent
  ]
})
export class SharedModule { }
