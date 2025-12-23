import { Component, OnInit } from '@angular/core';
import { BookticketService } from '../book-ticket.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css'],
})
export class MyBookingsComponent implements OnInit {
  tickets: any[] = [];
  userEmail: string = ''; // Email will be entered by the user.

  constructor(private ticketService: BookticketService) {}

  ngOnInit(): void {
    // Optionally load tickets for a default email, if required.
  }

  loadTickets(): void {
    if (this.userEmail.trim() === '') {
      console.error('Email is required to fetch tickets.');
      return;
    }
  
    this.ticketService.getTicketsByEmail(this.userEmail).subscribe(
      (data) => {
        this.tickets = data || []; // Ensure tickets is always an array (fallback to empty array if null)
        if (this.tickets.length === 0) {
          console.log('No tickets found, reloading the page.');
          window.location.reload();  // Reload the page if no tickets are found
        }
      },
      (error) => {
        console.error('Error fetching tickets:', error);
        window.location.reload(); // Optionally reload the page in case of an error
      }
    );
  }
  
  deleteTicket(ticketId: number): void {

    if (confirm('Are you sure you want to delete this bus?')) {
    this.ticketService.deleteTicketById(ticketId).subscribe(
      () => {
        // Find the index of the ticket in the array and remove it
        const index = this.tickets.findIndex(ticket => ticket.id === ticketId);
        if (index !== -1) {
          this.tickets.splice(index, 1);
        }
        console.log(`Ticket with ID ${ticketId} deleted successfully.`);
      },
      (error) => {
        console.error('Error deleting ticket:', error);
      }
    );
  }
  
  }
}
