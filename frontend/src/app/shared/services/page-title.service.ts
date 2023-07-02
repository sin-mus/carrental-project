import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {

  private defaultTitle: string = "My App";
  titleChanged: EventEmitter<string> = new EventEmitter<string>();

  setTitle(title: string) {
    const fullTitle = title ? `${title} | ${this.defaultTitle}` : this.defaultTitle;
    document.title = fullTitle;
    this.titleChanged.emit(title);
  }

}
