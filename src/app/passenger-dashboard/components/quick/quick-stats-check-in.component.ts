import {Component, Input} from '@angular/core';

@Component({
  selector: 'quick-stats-check-in',
  template: `
    <div class="card mb-5">
      <header class="card-header"><div class="card-header-title">Flight #567489fXJ</div></header>
      <div class="card-content">
        <div class="content">
          <h1 class="is-size-4">Check In Progress</h1>
          <progress class="progress is-primary" value="30" max="100">
            30%
          </progress>
          <span class="tag is-warning">incomplete</span>
        </div>
      </div>
      <footer class="card-footer">
        <a routerLink="passengers" class="is-family-secondary card-footer-item">View Passenger Details</a>
      </footer>
    </div>
  `
})

export class QuickStatsCheckInComponent {
  @Input() passengers = 0;

}
