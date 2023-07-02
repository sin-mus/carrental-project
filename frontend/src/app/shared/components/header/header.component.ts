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

  // this property will be dynamically changed using page-title directive
  title: string;

  constructor(private pageTitleService: PageTitleService) {
    this.title = "Default title";
   }

  ngOnInit() {
    this.pageTitleService.getPageTitle().subscribe(title => {
      this.title = title;
    });
  }

}
