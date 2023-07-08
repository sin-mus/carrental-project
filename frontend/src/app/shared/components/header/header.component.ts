import { Component, Input, OnInit } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';
import { AuthService } from 'src/app/core/services/auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Input("sidenav") sidenav: any;
  toggleSearch: boolean = false;
  searchTerm: string;

  today: number = Date.now();

  // this property will be dynamically changed 
  pageTitle: string;

  isLoggedIn: boolean;

  constructor(
    private pageTitleService: PageTitleService,
    private authService: AuthService) {

    this.pageTitleService.titleChanged.subscribe(title => {
      this.pageTitle = title;
    })

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isLoggedIn = this.authService.isLoggedIn();
  }


   logout(){
    this.authService.logout();
   }

}
