import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './auth-routing.module';


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports  : [
        CommonModule,
        FormsModule,
        HomeRoutingModule,
        ReactiveFormsModule
    ]
})

export class AuthModule {}