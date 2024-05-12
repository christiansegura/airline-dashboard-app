import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Passenger} from '../../models/passenger.interface';
import {Baggage} from '../../models/baggage.interface';
import {faUser, faCheck, faExclamationTriangle, faHashtag, faAddressCard} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.scss'],
  template: `
    <!--    novalidate instructs it to use Angular's form validation only-->
    <div class="card">
      <header class="card-header">
        <h1 class="card-header-title is-size-3 animate__animated animate__lightSpeedInRight animate__faster">
          <fa-icon class="regular mr-2" [icon]="fa.addressCard"></fa-icon>
          Passenger Information
        </h1>
      </header>

      <form #form="ngForm" (ngSubmit)="handleSubmit(form.value, form.valid)" novalidate>
        <div class="card-content">

          <div class="field"><label class="label">Name</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input" type="text" name="fullname" [class.is-danger]="fullname.errors && fullname.touched"
                     [value]="detail.fullname" [ngModel]="detail.fullname"
                     #fullname="ngModel"
                     required>
              <span class="icon is-small is-left"><fa-icon [icon]="fa.user"></fa-icon></span>

              <span class="icon is-small is-right"><fa-icon *ngIf="!(fullname.errors && fullname.touched)"
                                                            [icon]="fa.check"></fa-icon><fa-icon
                *ngIf="fullname.errors && fullname.touched" [icon]="fa.exclamationTriangle"></fa-icon></span>

              <div *ngIf="fullname.errors && fullname.touched" class="help is-danger">
                Passenger name required
              </div>
            </div>
          </div>

          <div class="field"><label class="label">Id</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input" type="text" name="id" [class.is-danger]="fullname.errors && id.touched"
                     [value]="detail.id" [ngModel]="detail.id" #id="ngModel" required>
              <span class="icon is-small is-left"><fa-icon [icon]="fa.idNumber"></fa-icon></span>
              <div *ngIf="id.errors && id.touched" class="has-background-danger-light">
                Passenger id required
              </div>
            </div>
          </div>

          <div class="control">
            <label class="label">Checked in</label>
            <input class="checkbox" type="checkbox" [ngModel]="detail.checkedIn" name="checkedIn"
                   (ngModelChange)="toggleCheckIn($event)">
          </div>

          <div class="control" *ngIf="form.value.checkedIn">
            <label class="label">Check in date</label>
            <input class="input" type="number" name="checkInDate" [ngModel]="detail.checkInDate">
          </div>

          <div class="control">
            <label class="label">Luggage</label>
            <div class="select"><select name="baggage" [ngModel]="detail.baggage">
              <option *ngFor="let item of baggage" [value]="item.key"
                      [selected]="item.key === detail.baggage">{{ item.value }}
              </option>
            </select></div>
          </div>

        </div>

        <footer class="card-footer" [class.has-background-primary-85]="form.invalid">
          <button class="button is-family-secondary card-footer-item" (click)="goBack()">Cancel</button>
          <button type="submit" [disabled]="form.invalid" [class.is-loading]="loading" class="button is-primary has-text-white card-footer-item">
            Update
          </button>
        </footer>

      </form>

    </div>
  `
})

export class PassengerFormComponent {
  fa = {
    user: faUser,
    check: faCheck,
    exclamationTriangle: faExclamationTriangle,
    idNumber: faHashtag,
    addressCard: faAddressCard
  };
  @Output() update: EventEmitter<Passenger> = new EventEmitter<Passenger>();
  @Input() detail: Partial<Passenger> = {};
  @Input() loading: boolean = false;
  baggage: Baggage[] = [{
    key: 'none',
    value: 'No baggage'
  }
    , {
      key: 'checked-bags',
      value: 'Checked bag'
    }];

  constructor(private router: Router) {
  }

  toggleCheckIn(checkedIn: boolean) {
    if (checkedIn) {
      this.detail.checkInDate = Date.now();
    }
  }

  handleSubmit(passenger: Passenger, isValid: boolean | null) {
    if (isValid) {
      this.update.emit(passenger);
    }
  }

  goBack() {
    this.router.navigate(['/passengers']);
  }

}
