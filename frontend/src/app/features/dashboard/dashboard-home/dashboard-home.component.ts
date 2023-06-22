import { Component, Output } from '@angular/core';
import { SlideInterface } from 'src/app/components/image-slider/types/slide.interface';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent {

  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

  currentUser: any = {
    name: "Mustafa"
  }

  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  slides: SlideInterface[] = [
    { url: this.images[0], title: 'Mustafa' },
    { url: this.images[1], title: 'Mustafa' },
    { url: this.images[2], title: 'Mustafa' },
    { url: this.images[3], title: 'Mustafa' },
    { url: this.images[4], title: 'Mustafa' }
  ]
}
