import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  private apiUrl = 'http://localhost:8080/api/buses';

  constructor(private http: HttpClient) {}

  getBuses(source: string, destination: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?source=${source}&destination=${destination}`);
  }

  bookTicket(passenger: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/book`, passenger); 
  }

  

}
