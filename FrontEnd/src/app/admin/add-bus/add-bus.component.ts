import { Component } from '@angular/core';
import { BusService } from '../bus.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addbus',
  templateUrl: './add-bus.component.html',
  standalone: true,
  imports:[FormsModule,RouterLink],
  styleUrls: ['./add-bus.component.css']
})
export class AddbusComponent {
  constructor(private busService: BusService,private router: Router) {}

  onSubmit(busForm: any) {
    if (busForm.valid) {
      this.busService.addBus(busForm.value).subscribe(
        (response) => {
          console.log('Bus added successfully:', response);
          alert('Bus added successfully!');
          // window.location.reload();
          this.router.navigate(['/bus-management']); 

        },
        (error) => {
          console.error('Error adding bus:', error);
          alert('Failed to add bus. Please try again.');
        }
      );
    }
  }
}
