import {Component, OnInit} from '@angular/core';
import {PassengerService} from '../../services/passenger.service';
import {Passenger} from '../../models/passenger.interface';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {switchMap} from 'rxjs';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.scss'],
  template: `
    <passenger-form
      [detail]="passenger"
      [loading]="loading"
      (update)="onUpdatePassenger($event)"
    ></passenger-form>
  `
})

export class PassengerViewerComponent implements OnInit {
  // this Partial utility type is pretty sweet because it constructs a type with all properties set as optional
  // then again if everything is optional then it bypasses all checks really
  passenger: Partial<Passenger> = {};
  loading: boolean = false;

  constructor(private passengerService: PassengerService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.pipe(switchMap((data: Params) => {
      return this.passengerService.getPassenger(data['id'])
    })).subscribe((data: Passenger) => this.passenger = data);
  }

  onUpdatePassenger(event: Passenger) {
    console.log(event);
    this.loading = true;
    // use new event passenger values for put update then locally update the passenger with same event data
    this.passengerService.updatePassengers(event)
      .subscribe({
        next: (data: Passenger) => {
          this.passenger = {...this.passenger, ...[event]}
        },
        complete: () => {
          // faking the time here since the local put call is pretty much instantaneous
          setTimeout(() => this.loading = false, 1000)
        }
      });
  }
}
