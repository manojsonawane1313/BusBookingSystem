import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
 private apiUrl = 'http://localhost:8080/api/signup';

  constructor(private http: HttpClient) {}

  signup(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }

  getTotalUsers(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/total`);
  } 

  getAllUsers(): Observable<any[]> {  
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteUser(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/${id}`);
  }
}
