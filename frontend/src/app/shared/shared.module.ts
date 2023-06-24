import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutComponent } from './layout/layout.component';
import { CustomMaterialModule } from '../custom-material/custom-material/custom-material.module';
import { ComponentsModule } from '../components/components.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        RouterModule,
        CustomMaterialModule,
        ComponentsModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        CustomMaterialModule,
        ComponentsModule
    ]
})
export class SharedModule { }