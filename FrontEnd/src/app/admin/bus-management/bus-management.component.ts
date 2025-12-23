import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BusService } from '../bus.service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bus-management',
  templateUrl: './bus-management.component.html',
  imports: [FormsModule, CommonModule,RouterLink],
  standalone: true,
  styleUrls: ['./bus-management.component.css'],
})
export class BusManagementComponent implements OnInit {
  buses: any[] = [];
  errorMessage: string | null = null;

  constructor(private busService: BusService, private router:Router) {}

  ngOnInit(): void {
    this.fetchBuses();
  }

  fetchBuses(): void {
    this.busService.getAllBuses().subscribe(
      (data) => {
        this.buses = data;
      },
      (error) => {
        this.errorMessage = 'Failed to load buses. Please try again later.';
        console.error('Error fetching buses:', error);
      }
    );
  }

  editBus(id: number,
     busNumber:string,
     driverName:string,
     source:string,
    destination:string,
    sourceTime:string,
    destinationTime:string,
    price:string,
  mobile:string,
route:string ): void {
    if (typeof id !== 'number') {
      console.error('Invalid bus ID provided for editing.');
      return;
    }
    
    console.log(`Editing bus with ID: ${id}  price ${busNumber}  name ${driverName}  source${source} \n  destination ${destination} sourcetime${sourceTime} detime${destinationTime}  price ${price}`);
    
    this.router.navigate(['/update'], { state: { id, busNumber, driverName, source, destination, sourceTime, destinationTime, price,mobile,route}})
      .then(success => {
        if (success) {
          console.log(`Navigation to /update successful for bus ID: ${id}`);
        } else {
          console.error(`Navigation to /update failed for bus ID: ${id}`);
        }
      });
  }
  


  deleteBus(id: number): void {
    if (!id) {
      console.error('Delete failed: ID is undefined.');
      alert('Cannot delete: Bus ID is missing.');
      return;
    }
    if (confirm('Are you sure you want to delete this bus?')) {
      this.busService.deleteBus(id).subscribe(
        () => {
          this.fetchBuses(); // Refresh the list
        },
        (error) => {
          console.error('Error deleting bus:', error);
          alert('Failed to delete bus. Please try again later.');
        }
      );
    }
  }
  
  
}