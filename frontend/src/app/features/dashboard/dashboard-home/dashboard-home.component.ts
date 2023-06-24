import { AfterViewInit, Component } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';
import { HeaderService } from 'src/app/shared/header/header.service';
import { SmallGrid } from '../types/small-grid.interface';
import { CustomersService } from 'src/app/services/customers.service';
import { ReservationsService } from 'src/app/services/reservations.service';

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
export class DashboardHomeComponent implements AfterViewInit {

  title: string = "Home";
  smallGridLayout: SmallGrid[];

  constructor(
    private headerService: HeaderService,
    private carService: CarsService,
    private customersService: CustomersService,
    private reservationsService: ReservationsService
  ) {
    this.smallGridLayout = [
      {
        icon: "fa-solid fa-car",
        category: "Cars In Operation",
        title: `${this.getCarsInOperation()}/${this.getTotalNumberOfCars()}`,
        warningIcon: "fa-sharp fa-solid fa-thumbtack",
        link: "cars/running",
        linkText: "Check running cars...",
        color: "#FFA41B"
      },
      {
        icon: "fa-sharp fa-solid fa-note-sticky",
        category: "Upcoming Reservations",
        title: `${this.getUpcomingReservations()}`,
        warningIcon: "fa-sharp fa-solid fa-thumbtack",
        link: "reservations/upcoming",
        linkText: "Check upcoming reservations..."
        ,
        color: "#F86F03"
      },
      {
        icon: "fa-solid fa-person-circle-xmark",
        category: "Customers With Missing Data",
        title: `${this.getNumberOfCustomersWithMissingData()}`,
        warningIcon: "fa-sharp fa-solid fa-thumbtack",
        link: "customers/missing",
        linkText: "Check customers with missing data...",
        color: "#FF0060"
      },
      {
        icon: "fa-sharp fa-solid fa-flag",
        category: "Notifications",
        title: `${this.getNumberOfNotifications()}`,
        warningIcon: "fa-sharp fa-solid fa-thumbtack",
        link: "notifications",
        linkText: "Check notifications...",
        color: "#00DFA2"
      }
    ]
  }
  
  ngAfterViewInit(): void {
    this.headerService.changeHeaderTitle(this.title);
  }
 
  getCarsInOperation(): number {
    return this.carService.getCarsInOperation();
  }
  getTotalNumberOfCars(): number {
    return this.carService.getTotalNumberOfCars();
  }
  getNumberOfCustomersWithMissingData(): number {
    return this.customersService.getNumberOfCustomersWithMissingData();
  }
  getUpcomingReservations() {
    return this.reservationsService.getUpcomingReservations();
  }
  getNumberOfNotifications() {
    return 15;
  }
}
