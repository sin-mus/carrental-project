import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { TaskEditDialogComponent } from './task-edit-dialog/task-edit-dialog.component';
import { FormsModule } from '@angular/forms';
import { TaskTabComponent } from './task-tab/task-tab.component';
import { CustomMaterialModule } from '../custom-material/custom-material/custom-material.module';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CustomMaterialModule
  ],
  declarations: [
    FooterComponent,
    TaskEditDialogComponent,
    TaskTabComponent
  ],
  exports: [
    FooterComponent, 
    TaskTabComponent
  ]
})
export class ComponentsModule { }