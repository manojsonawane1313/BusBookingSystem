import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBusComponent } from './passenger/search-bus/search-bus.component';
import { BookTicketComponent } from './passenger/book-ticket/book-ticket.component';
import { AddbusComponent } from './admin/add-bus/add-bus.component';
import { MyBookingsComponent } from './passenger/my-bookings/my-bookings.component';
import { ConformationComponent } from './passenger/conformation/conformation.component';
import { BookingManagementComponent } from './admin/booking-management/booking-management.component';
import { BusManagementComponent } from './admin/bus-management/bus-management.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { HomepageComponent } from './passenger/homepage/homepage.component';
import { LoginComponent } from './passenger/login/login.component';
import { SignupComponent } from './passenger/signup/signup.component';
import { UpdateBusComponent } from './admin/update-bus/update-bus.component';
import { SeatBookComponent } from './passenger/seat-book/seat-book.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { BusTicketComponent } from './admin/bus-ticket/bus-ticket.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'search-bus', component: SearchBusComponent },
  { path: 'book-ticket', component: BookTicketComponent },
  { path: 'add-bus', component: AddbusComponent },
  { path: 'my-bookings', component: MyBookingsComponent },
  { path: 'conformation', component: ConformationComponent },
  { path: 'booking-management', component: BookingManagementComponent },
  { path: 'bus-management', component: BusManagementComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'update', component: UpdateBusComponent },
  { path: 'seat-book', component: SeatBookComponent },
  { path: 'admin-login', component: AdminloginComponent },
  { path: 'bus-ticket', component: BusTicketComponent },
  

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
