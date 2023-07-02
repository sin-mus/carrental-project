import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { InformationItemsComponent } from './components/information-items/information-items.component';
import { TaskTabComponent } from './components/task-tab/task-tab.component';
import { TaskEditDialogComponent } from './components/task-edit-dialog/task-edit-dialog.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SharedModule } from "../../shared/shared.module";




@NgModule({
    declarations: [
        HomeComponent,
        InformationItemsComponent,
        TaskTabComponent,
        TaskEditDialogComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HomeRoutingModule,
        MatDialogModule,
        MatListModule,
        MatPaginatorModule,
        SharedModule
    ]
})
export class HomeModule { }
