import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BusService {
  private apiUrl = 'http://localhost:8080/api/buses'; // Spring Boot API URL

  constructor(private http: HttpClient) {}

  addBus(bus: any): Observable<any> {
    return this.http.post(this.apiUrl, bus);
  }

  updateBus(id: number, bus: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, bus);
  }   

  deleteBus(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getTotalBuses(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/total`);
  } 

  getAllBuses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/listbuses`);
  }

  getBusById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  
}
