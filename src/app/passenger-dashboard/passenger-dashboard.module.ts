import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PassengerDashboardComponent} from './containers/passenger-dashboard/passenger-dashboard.component';
import {PassngerDetailComponent} from './components/passenger-detail/passnger-detail.component';
import {PassengerCountComponent} from './components/passenger-count/passenger-count.component';
import {PassengerViewerComponent} from './containers/passenger-viewer/passenger-viewer.component';
import {PassengerFormComponent} from './components/passenger-form/passenger-form.component';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RouterModule, Routes} from '@angular/router';
import {PassengerDashboardRoutingModule} from './passenger-dashboard-routing.module';
import {PageHeaderComponent} from './components/page-header/page.header.component';
import {QuickNotificationsComponent} from './components/quick/quick-notifications.component';
import {QuickStatsCheckInComponent} from './components/quick/quick-stats-check-in.component';

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassngerDetailComponent,
    PassengerCountComponent,
    PassengerViewerComponent,
    PassengerFormComponent,
    PageHeaderComponent,
    QuickNotificationsComponent,
    QuickStatsCheckInComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule,
    PassengerDashboardRoutingModule
  ],
  exports: [
    PassengerDashboardComponent,
    PassengerViewerComponent,
    PageHeaderComponent,
    QuickNotificationsComponent,
    QuickStatsCheckInComponent
  ]
})
export class PassengerDashboardModule {}
