import {Component} from '@angular/core';
import {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'not-found',
  styles: [`.active {
    text-decoration: underline;
  }`],
  template: `
  <div>
    <h1 class="is-size-2">Page Not Found</h1>
    <a routerLink="/" routerLinkActive="active" class="animate__animated animate__lightSpeedInRight"><fa-icon [icon]="fa.arrowLeftLong"></fa-icon> Go Back</a>
  </div>
  `
})

export class NotFoundComponent {
  fa = {
    arrowLeftLong: faArrowLeftLong
  }
}
