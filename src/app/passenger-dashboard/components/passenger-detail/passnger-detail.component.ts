import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Passenger} from '../../models/passenger.interface';
import {Router} from '@angular/router';
import {faPenToSquare, faRemove, faFloppyDisk, faBolt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger.detail.component.scss'],
  template: `
    <div class="card mb-5">
      <div class="card-content">
        <div class="content">
          <figure class="image is-96x96">
            <img class="is-rounded" src="https://bulma.io/assets/images/placeholders/96x96.png"/>
          </figure>
          <div>
            <div>
              <input *ngIf="editing" #name (input)="onNameChange(name.value)" [value]="detail.fullname">
              <div>
                <div *ngIf="!editing" class="status" [class.checked-in]="detail.checkedIn"></div>
                {{ detail.fullname }}
              </div>
            </div>
            <div>Checked In: {{ detail.checkedIn ? 'yes' : 'no' }}</div>
            <div>Check In Date: {{ detail.checkInDate ? (detail.checkInDate | date | uppercase) : 'Not checked in' }}
            </div>


          </div>
        </div>
      </div>
      <footer class="card-footer">
        <button (click)="onEdit()" class="button is-primary card-footer-item"><fa-icon [icon]="fa.penToSquare" class="mr-1"></fa-icon> Edit Details</button>
        <button (click)="toggleQuickEdit()"
                class="button is-family-secondary card-footer-item"><fa-icon [icon]="fa.bolt" class="mr-1" *ngIf="!editing"></fa-icon><fa-icon [icon]="fa.floppyDisk" class="mr-1" *ngIf="editing"></fa-icon>{{ editing ? 'Save Changes' : 'Quick Edit' }}
        </button>
        <button (click)="onRemove()" class="button is-family-secondary is-secondary card-footer-item">
          <fa-icon [icon]="fa.remove" class="mr-1"></fa-icon> Delete
        </button>
      </footer>
    </div>
  `
})

export class PassngerDetailComponent implements OnChanges {
  @Output() remove = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Input() detail: Partial<Passenger> = {};
  editing = false;
  fa = {
    remove: faRemove,
    penToSquare: faPenToSquare,
    floppyDisk: faFloppyDisk,
    bolt: faBolt
  }

  constructor(private router: Router) {
  }

  ngOnChanges(changes: SimpleChanges) {
    // if this condition doesn't exist, two-way binding on this passengers detail is not broken
    if (changes['detail']) {
      this.detail = Object.assign({}, changes['detail'].currentValue);
    }
  }

  onRemove() {
    this.remove.emit(this.detail);
  }

  onNameChange(value: string) {
    this.detail.fullname = value;
  }

  toggleQuickEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onEdit(){
    this.router.navigate(['passengers', this.detail.id])
  }

}
