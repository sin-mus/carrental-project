import { Component, Input, OnInit } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Input("sidenav") sidenav: any;
  toggleSearch: boolean = false;
  searchTerm: string;

  loginStatus$: Observable<boolean>;
  fullName$: Observable<String>;
  role$: Observable<String>;

  today: number = Date.now();
  
  // this property will be dynamically changed 
  pageTitle: string;
  


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loginStatus$ = this.authService.isLoggedIn();
    this.fullName$ = this.authService.getFullName();
    this.role$ = this.authService.getCurrentUserRole();
  }

  constructor(
    private pageTitleService: PageTitleService,
    private authService: AuthService) {

    this.pageTitleService.titleChanged.subscribe(title => {
      this.pageTitle = title;
    })

  }

   logout(){
    this.authService.logout();
   }

}
