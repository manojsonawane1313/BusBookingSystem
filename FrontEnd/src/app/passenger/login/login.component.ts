import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  onLoginSubmit(loginForm: any) {
    if (loginForm.valid) {
      this.loginService.login(loginForm.value).subscribe(
        (response) => {
          this.router.navigate(['/homepage']); 
        },
        (error) => {
          // console.error('Login error:');
          alert('Invalid username or password');
        }
      );
    }
  }
}
