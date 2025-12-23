import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BookticketService } from '../../passenger/book-ticket.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bus-ticket',
  standalone: true,
  imports: [FormsModule, CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './bus-ticket.component.html',
  styleUrls: ['./bus-ticket.component.css']
})
export class BusTicketComponent {

  busNumberForm: FormGroup;
  ticketDetails: any;

  constructor(private fb: FormBuilder, private ticketService: BookticketService) { 
    this.busNumberForm = this.fb.group({
      busNumber: ['']
    });
  }

  onSubmit(): void {
    const busNumber = this.busNumberForm.value.busNumber;
    if (busNumber) {
      this.ticketService.getDetailsByBusNumber(busNumber).subscribe(
        data => this.ticketDetails = data,
        error => console.error(error)
      );
    }
  }
}
