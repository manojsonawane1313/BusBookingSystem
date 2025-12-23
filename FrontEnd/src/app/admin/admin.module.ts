import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';

import { AddbusComponent } from './add-bus/add-bus.component';
import { BusManagementComponent } from './bus-management/bus-management.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BusTicketComponent } from './bus-ticket/bus-ticket.component';

@NgModule({
  declarations: [AddbusComponent, BusManagementComponent, UpdateBusComponent, AdminloginComponent, BusTicketComponent], // Declare components here
  imports: [
    CommonModule, // Angular's common utilities
    FormsModule,  // Template-driven forms
    RouterModule, // Needed for routing in this module
    AdminRoutingModule,
  ],
  exports: [AddbusComponent], // Export if needed in other modules
})
export class AdminModule {}
