import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PassengerRoutingModule } from './passenger-routing.module';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { SearchBusComponent } from './search-bus/search-bus.component';
import { RouterModule } from '@angular/router';
import { ConformationComponent } from './conformation/conformation.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SeatBookComponent } from './seat-book/seat-book.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BookTicketComponent,
    MyBookingsComponent,
    SearchBusComponent,
    ConformationComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    SeatBookComponent
  ],
  imports: [
    CommonModule,
    PassengerRoutingModule,
    FormsModule,
    RouterModule
  ]
})
export class PassengerModule { }
