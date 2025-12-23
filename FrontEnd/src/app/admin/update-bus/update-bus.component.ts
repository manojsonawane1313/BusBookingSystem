import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BusService } from '../bus.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-update-bus',
  imports: [FormsModule, CommonModule,RouterLink],
  standalone: true,
  templateUrl: './update-bus.component.html',
  styleUrl: './update-bus.component.css'
})
export class UpdateBusComponent implements OnInit {
  busId!: '';
  busNumber!: '';
  driverName!: '';
  mobile!: '';
  source!: '';
  destination!: '';
  route!: '';
  sourceTime!: '';
  destinationTime!: '';
  price!: '';

  ngOnInit() {
    //get values from parent component
    this.busId = history.state.id;
    this.busNumber = history.state.busNumber;
    this.driverName = history.state.driverName;
    this.mobile = history.state.mobile;
    this.source = history.state.source;
    this.destination = history.state.destination;
    this.route = history.state.route;
    this.sourceTime = history.state.sourceTime;
    this.destinationTime = history.state.destinationTime;
    this.price = history.state.price;

    // Adding received values to busDetails
    this.busDetails.busNumber = this.busNumber;
    this.busDetails.driverName = this.driverName;
    this.busDetails.mobile = this.mobile;
    this.busDetails.source = this.source;
    this.busDetails.destination = this.destination;
    this.busDetails.route = this.route;
    this.busDetails.sourceTime = this.sourceTime;
    this.busDetails.destinationTime = this.destinationTime;
    this.busDetails.price = this.price;

    // printing for testing purpose
    console.log(`Received bus ID: ${this.busId}`);
    console.log(`Received bus Number: ${this.busNumber}`);
    console.log(`Received bus driverName: ${this.driverName}`);
    console.log(`Received bus mobile: ${this.mobile}`);
    console.log(`Received bus source: ${this.source}`);
    console.log(`Received bus destination: ${this.destination}`);
    console.log(`Received bus route: ${this.route}`);
    console.log(`Received bus sourceTime: ${this.sourceTime}`);
    console.log(`Received bus destinationTime: ${this.destinationTime}`);
    console.log(`Received bus price: ${this.price}`);
  }


  busDetails: any = {
    busNumber: '',
    driverName: '',
    mobile: '',
    source: '',
    destination: '',
    route: '',
    sourceTime: '',
    destinationTime: '',
    price: 0,
  };

  constructor(private busService: BusService, private router:Router) { }

  updateBus() {
    if (this.busId) {
      this.busService.updateBus(this.busId, this.busDetails).subscribe(
        (response) => {
          console.log('Bus updated successfully:', response);
          // Redirect to bus-management path
          this.router.navigate(['/bus-management']);
        },
        (error) => {
          console.error('Error updating bus:', error);
        }
      );
    } else {
      console.error('Invalid Bus ID');
    }
  }
}