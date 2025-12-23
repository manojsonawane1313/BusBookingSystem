import { Component } from '@angular/core';
import { BookticketService } from '../book-ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conformation',
  templateUrl: './conformation.component.html',
  styleUrl: './conformation.component.css'
})
export class ConformationComponent {
 passenger: any;
  selectedBus: any;
  seatNumber: string | undefined;

  constructor(private bookTicketService: BookticketService, private router: Router) {
    // Retrieve the state passed from the previous page
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { selectedBus: any, passenger:any, seatNumber: string };
    this.passenger = state?.passenger;
    this.selectedBus = state?.selectedBus; 
    this.seatNumber = state?.seatNumber;
  }
  redirectToHome(): void {
      this.router.navigate(['/homepage'])}

      redirectToBookMore(): void {
        this.router.navigate(['/search-bus'])}
  
  }

    
