import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Passenger} from '../../models/passenger.interface';

@Component({
  selector: 'passenger-count',
  styles: [''],
  template: `
    <h2 class="is-size-3">Checked In: {{ checkedInPassengers + '/' + totalPassengers }}</h2>
    <div *ngFor="let passenger of items">
      <div *ngIf="passenger.checkedIn">{{ passenger.fullname }}</div>
    </div>

    <h2 class="is-size-3">Not Checked In: {{ (totalPassengers - checkedInPassengers) + '/' + totalPassengers }}</h2>
    <div *ngFor="let passenger of items">
      <div *ngIf="!passenger.checkedIn">{{ passenger.fullname }}</div>
    </div>
  `
})

export class PassengerCountComponent implements OnChanges {
  @Input() items: Passenger[] = [];
  checkedInPassengers = 0;
  totalPassengers = 0;

  ngOnChanges(changes: SimpleChanges) {
    this.checkedInPassengers = this.checkedInCount();
    this.totalPassengers = this.getTotalPassengers();
  }

  checkedInCount(): number {
    return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
  }

  getTotalPassengers() {
    return this.items.length;
  }
}
