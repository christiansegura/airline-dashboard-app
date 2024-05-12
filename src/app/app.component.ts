import { Component } from '@angular/core';
interface Nav {
  link: string;
  name: string;
  exact: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'component-architecture-feature-modules';
  nav:Nav[] = [{
    link: '/',
    name: 'Home',
    exact: true
  },
    {
      link: '/passengers',
      name: 'Passengers',
      exact: true
    }]
}
