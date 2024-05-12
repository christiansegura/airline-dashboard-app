import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PassengerDashboardModule} from './passenger-dashboard/passenger-dashboard.module';
import {PassengerService} from './passenger-dashboard/services/passenger.service';
import {HttpClientModule} from '@angular/common/http';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HomeComponent} from './home.component';
import {NotFoundComponent} from './not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PassengerDashboardModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    PassengerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
