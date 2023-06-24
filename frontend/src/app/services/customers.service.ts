import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor() { }

  getNumberOfCustomersWithMissingData(): number{
    return 4;
  }
}
