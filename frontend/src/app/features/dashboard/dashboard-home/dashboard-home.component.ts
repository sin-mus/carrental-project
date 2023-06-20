import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent {

  currentUser: any = {
    name : "Mustafa"
  }
  

  // constructor(private notificationService: NotificationService,
  //   private authService: AuthenticationService,
  //   private titleService: Title,
  //   private logger: NGXLogger) {
  // }

  // ngOnInit() {
  //   this.currentUser = this.authService.getCurrentUser();
  //   this.titleService.setTitle('angular-material-template - Dashboard');
  //   this.logger.log('Dashboard loaded');

  //   setTimeout(() => {
  //     this.notificationService.openSnackBar('Welcome!');
  //   });
  // }
}
