import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserBillingComponent } from './components/user-billing/user-billing.component';
import { UserSecurityComponent } from './components/user-security/user-security.component';
import { UserNotificationsComponent } from './components/user-notifications/user-notifications.component';
import { UserComponent } from './components/user/user.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserDetailsComponent,
    UserBillingComponent,
    UserSecurityComponent,
    UserNotificationsComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule
  ]
})
export class UserModule { }
