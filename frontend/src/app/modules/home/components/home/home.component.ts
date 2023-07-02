import { Component } from '@angular/core';
import { PageTitleService } from 'src/app/shared/services/page-title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title: string = "Home";

  constructor(
    private pageTitleService: PageTitleService
  ) {}

  ngOnInit(): void {
    this.pageTitleService.setTitle(this.title);
  }

}
