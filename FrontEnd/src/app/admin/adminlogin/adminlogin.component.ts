import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  adminEmail: string = 'pratiksavant2004@gmail.com';
  adminPassword: string = 'pratik9595';

  email: string = ' ';
  password: string =' ';

  constructor(private router: Router) {}

  onLoginSubmit(): void {
    if (this.email === this.adminEmail && this.password === this.adminPassword) {
      console.log('Login successful!');
      this.router.navigate(['/dashboard']); // Replace '/dashboard' with your actual dashboard route
    } else{
      alert('Invalid credentials. Please try again.');
    }
  }
}
