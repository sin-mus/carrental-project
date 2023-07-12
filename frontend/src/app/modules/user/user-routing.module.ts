import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/shared/components/layout/layout.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserSecurityComponent } from './components/user-security/user-security.component';
import { UserBillingComponent } from './components/user-billing/user-billing.component';
import { UserNotificationsComponent } from './components/user-notifications/user-notifications.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: ':id',
                component: UserComponent,
                children : [
                    {
                        path: 'details',
                        component: UserDetailsComponent
                    },
                    {
                        path: 'security',
                        component: UserSecurityComponent
                    },
                    {
                        path: 'billing',
                        component: UserBillingComponent
                    },
                    {
                        path: 'notifications',
                        component: UserNotificationsComponent
        
                    }
                ]
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
