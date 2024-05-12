import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="container app">
    <page-header [headerText]="'Zero G Employee Dashboard'"></page-header>
  </div>
  <div class="card mb-5">
    <div class="card-content">
      <div class="content">
        <h1 class="is-italic is-size-5">{{date | date:'short'}}</h1>
        <div class="columns">
          <div class="column">
            <quick-stats-check-in></quick-stats-check-in>
          </div>
          <div class="column">
            <quick-notifications></quick-notifications>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
})

export class HomeComponent{
  date = new Date();
}
