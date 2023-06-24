import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private _title: string = 'Default Header Name';
  subject = new Subject();

  changeHeaderTitle(newTitle: string) {
    this._title = newTitle;
    this.subject.next(this._title);
  }

  clear() {
    this._title = 'Default Header Name';
    this.subject.next(this._title);
  }
}
