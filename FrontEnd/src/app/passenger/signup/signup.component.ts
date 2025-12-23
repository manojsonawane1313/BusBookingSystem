import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private loginService: SignupService, private router: Router) {}

  onSubmit(signupForm: NgForm) {
    if (signupForm.valid) {
      this.loginService.signup(signupForm.value).subscribe(
        (response) => {
          console.log('Signup successful:', response);
          alert('Signup successful');
          this.router.navigate(['/login']); // Navigate to the login page
        },
        (error) => {
          console.error('Signup error:', error);
          alert('email already registered.');
        }
      );
    } else {
      alert('Please fill out all required fields correctly.');
    }
  }
}
