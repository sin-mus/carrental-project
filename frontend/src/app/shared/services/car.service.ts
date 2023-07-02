import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  getTotalNumberOfCars(): number {
    return 23;
  }
  getCarsInOperation(): number {
    return 12;
  }

  constructor() { }
}
