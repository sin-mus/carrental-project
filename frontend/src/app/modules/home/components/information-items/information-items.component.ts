import { Component } from '@angular/core';
import { CarService } from 'src/app/shared/services/car.service';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { PageTitleService } from 'src/app/shared/services/page-title.service';
import { ReservationService } from 'src/app/shared/services/reservation.service';
import { TaskService } from 'src/app/shared/services/task.service';


@Component({
  selector: 'app-information-items',
  templateUrl: './information-items.component.html',
  styleUrls: ['./information-items.component.css']
})
export class InformationItemsComponent {
  smallGridLayout: SmallGrid[];

  constructor(
    private carService: CarService,
    private customerService: CustomerService,
    private reservationService: ReservationService
  ) 
  {
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

  getCarsInOperation(): number {
    return this.carService.getCarsInOperation();
  }
  getTotalNumberOfCars(): number {
    return this.carService.getTotalNumberOfCars();
  }
  getNumberOfCustomersWithMissingData(): number {
    return this.customerService.getNumberOfCustomersWithMissingData();
  }
  getUpcomingReservations() {
    return this.reservationService.getUpcomingReservations();
  }
  getNumberOfNotifications() {
    return 15;
  }
}
interface SmallGrid{
  icon: string;
  category: string;
  title: string;
  warningIcon: string;
  link: string;
  linkText: string;
  color: string
}