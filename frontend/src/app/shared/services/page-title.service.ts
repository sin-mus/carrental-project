import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {

  private pageTitleSubject: Subject<string> = new Subject<string>();

  constructor() { }

  setPageTitle(title: string) {
    this.pageTitleSubject.next(title);
  }
  getPageTitle() {
    return this.pageTitleSubject.asObservable();
  }
}
