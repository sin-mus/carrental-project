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
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule,
    FormsModule
  ],
  exports:[
  ]
})
export class ComponentsModule { }
