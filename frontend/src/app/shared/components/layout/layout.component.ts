import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, delay, filter } from 'rxjs';
import { BreakpointObserver} from '@angular/cdk/layout';
import { AuthService } from 'src/app/core/services/auth.service';

@UntilDestroy()
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  @ViewChild('sidenav', {static: true}) sidenav: MatSidenav;

  loginStatus$: Observable<boolean>;
  fullName$: Observable<String>;
  role$: Observable<String>;
  id$: Observable<number>;

  constructor(
    private observer: BreakpointObserver,
    private router: Router,
    private authService: AuthService) { 

      this.loginStatus$ = this.authService.isLoggedIn();
      this.fullName$ = this.authService.getFullName();
      this.role$ = this.authService.getCurrentUserRole();
    }

  ngAfterViewInit(): void {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }


  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  logout(){
    this.authService.logout();
  }

}
