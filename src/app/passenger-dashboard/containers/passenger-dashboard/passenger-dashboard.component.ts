import {Component, OnInit} from '@angular/core';
import {Passenger} from '../../models/passenger.interface';
import {PassengerService} from '../../services/passenger.service';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.scss'],
  template: `
    <page-header [headerText]="'Zero G Passenger Management'"></page-header>
    <div class="card mb-5">
      <div class="card-content">
        <div class="content">
          <div class="columns">
            <div class="column">
              <p class="has-text-danger">{{ requestError }}</p>
              <passenger-count
                [items]="passengers"
              ></passenger-count>
            </div>
            <div class="column">
              <h2 class="is-size-3">Passengers</h2>
              <passenger-detail
                *ngFor="let passenger of passengers"
                [detail]="passenger"
                (edit)="handleEdit($event)"
                (remove)="handleRemove($event)"
              ></passenger-detail>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})

export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[] = [];
  requestError = '';

  constructor(private passengerService: PassengerService) {
  }

  ngOnInit() {
    this.passengerService.getPassengers().subscribe({
      next: (res: Passenger[]) => {
        this.passengers = res;
      },
      error: (error) => {
        console.log(error)
        this.requestError = error;
      }
    });
  }

  handleRemove(event: any) {
    this.passengerService.removePassenger(event).subscribe((val: Passenger) => {
      this.passengers = this.passengers.filter((passenger: Passenger) => {
        return passenger.id !== event.id;
      });
    });
  }

  handleEdit(event: Passenger) {
    this.passengerService.updatePassengers(event).subscribe(val => {
      // after put (updatePassengers) runs it just returns the async value of what you told it to put
      // the rest of the below operations are for updating in memory vars like before adding the put
      // we are now just persisting the edits with a put for refresh
      this.passengers = this.passengers.map((passenger: Passenger) => {
        if (passenger.id === event.id) {
          // Object.assign does not work well with typed objects since it will expect Object as a property
          // passenger.Object.assign({}, passenger, event)
          // when spreading in multiple objects it's important to remember that order matters when overriding matching properties, if you switch the order of passenger and event, it's just going to use passenger values instead of any new event values
          passenger = {...passenger, ...event}
        }
        return passenger;
      });
    });
  }

}
