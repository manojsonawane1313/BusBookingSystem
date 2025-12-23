import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/api/login';

  constructor(private http: HttpClient) {}

  login(userData: any): Observable<string> {
    return this.http.post(this.apiUrl, userData, { responseType: 'text' })
  }
}
