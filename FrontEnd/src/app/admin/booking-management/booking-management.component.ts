import { Component, OnInit } from '@angular/core';
import { BookticketService } from '../../passenger/book-ticket.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-booking-management',
  standalone:true,
  imports:[FormsModule,CommonModule],
  templateUrl: './booking-management.component.html',
  styleUrl: './booking-management.component.css'
})
export class BookingManagementComponent implements OnInit {

  tickets: any[] = [];

  constructor(private bookticketService: BookticketService) { }

  ngOnInit(): void {
    this.getAllTickets();
  }

  getAllTickets(): void {
    this.bookticketService.getAllTickets().subscribe(
      data => this.tickets = data,
      error => console.error('Error fetching tickets', error)
    );
  }
}