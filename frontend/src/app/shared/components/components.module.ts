import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import { PageTitleDirective } from '../directives/page-title.directive';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    PageTitleDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    FormsModule
  ]
})
export class ComponentsModule { }
