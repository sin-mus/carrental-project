import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor() { }

  getUpcomingReservations(): number{
    return 4;
  }
}
