import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../passenger/signup.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: SignupService, private router:Router) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.error('Error fetching users', err);
      }
    });
  }
  
  deleteUser(userId: number): void {
     (confirm('Are you sure you want to delete this user?'))

    this.userService.deleteUser(userId).subscribe({
      next: () => {
        this.users = this.users.filter(user => user.id !== userId);
      },
      error: (err) => {
        console.error('Error deleting user', err);
      }
    });
    window.location.reload();
  }
}
