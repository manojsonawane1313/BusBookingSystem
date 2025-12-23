import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookticketService } from '../../passenger/book-ticket.service';
import { BusService } from '../bus.service';
import { RouterLink } from '@angular/router';
import { SignupService } from '../../passenger/signup.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports:[FormsModule,CommonModule,RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  totalTickets: number = 0;
  totalBuses:number=0;
  totalUsers:number=0;

  constructor(private bookingService: BookticketService, private busservice: BusService, private userService:SignupService) {}

  ngOnInit(): void {
    this.fetchTotalTickets(), this.fetchTatalBuses(), this.fetchTotalUser();
  }

  fetchTotalTickets(): void {
    this.bookingService.getTotalTickets().subscribe({
      next: (data) => {
        this.totalTickets = data;
      },
      error: (err) => {
        console.error('Error fetching total bookings', err);
      },
    });
  }

  fetchTatalBuses(): void {
    this.busservice.getTotalBuses().subscribe({
      next: (data) => {
        this.totalBuses = data;
      },
      error: (err) => {
        console.error('Error fetching total bookings', err);
      },
    });
  }

  fetchTotalUser(): void {
    this.userService.getTotalUsers().subscribe({
      next: (data) => {
        this.totalUsers = data; // Ensure this is 'totalUsers'
      },
      error: (err) => {
        console.error('Error fetching total users', err);
      },
    });
  }
  


}