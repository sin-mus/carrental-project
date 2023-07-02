import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  getNumberOfCustomersWithMissingData(): number {
    return 6;
  }

  constructor() { }
}
