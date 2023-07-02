import { Directive, HostListener, Input } from '@angular/core';
import { PageTitleService } from '../services/page-title.service';

@Directive({
  selector: '[pageTitle]'
})
export class PageTitleDirective {
  @Input('pageTitle') title: string;

  constructor(private pageTitleService: PageTitleService) { }

  ngOnInit() {
    if (this.title) {
      this.pageTitleService.setPageTitle(this.title);
    }
  }
}
