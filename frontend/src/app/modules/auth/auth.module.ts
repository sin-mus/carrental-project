import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';


@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HomeRoutingModule,
        ComponentsModule
    ]
})

export class AuthModule {}