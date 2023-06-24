import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  getTotalNumberOfCars():number {
    return 30;
  }

  constructor() { }

  getCarsInOperation(): number{
    return 25;
  }
}
