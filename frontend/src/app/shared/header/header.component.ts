import { AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/header/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Input("sidenav") sidenav;
  toggleSearch: boolean = false;
  searchTerm: string;

  today: number = Date.now();
  title: string;

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.subject.subscribe((newTitle: string) => {
      this.title = newTitle;
    })
  }
}
