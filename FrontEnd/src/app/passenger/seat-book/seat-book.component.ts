import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seat-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './seat-book.component.html',
  styleUrls: ['./seat-book.component.css']
})
export class SeatBookComponent {
  seats: number[] = Array.from({ length: 40 }, (_, i) => i + 1); // Array of 40 seats
  
  // First column sections
  firstColumnSection1: number[] = Array.from({ length: 10 }, (_, i) => i + 1);   // 1 to 10
  firstColumnSection2: number[] = Array.from({ length: 10 }, (_, i) => i + 11); // 11 to 20
  
  // Second column sections
  secondColumnSection1: number[] = Array.from({ length: 10 }, (_, i) => i + 21);  // 21 to 30
  secondColumnSection2: number[] = Array.from({ length: 10 }, (_, i) => i + 31);  // 31 to 40

  selectedSeat: number | null = null;

  selectSeat(seatNumber: number): void {
    this.selectedSeat = seatNumber;
    console.log(`Seat ${seatNumber} clicked.`);
  }
}
