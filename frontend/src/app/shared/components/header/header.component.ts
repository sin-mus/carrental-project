import { Component, Input } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input("sidenav") sidenav: any;
  toggleSearch: boolean = false;
  searchTerm: string;

  today: number = Date.now();

  // this property will be dynamically changed 
  pageTitle: string;

  constructor(private pageTitleService: PageTitleService) {
    this.pageTitleService.titleChanged.subscribe(title => {
      this.pageTitle = title;
    })
   }

}
