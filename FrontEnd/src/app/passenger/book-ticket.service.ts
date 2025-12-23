import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookticketService {
  private apiUrl = 'http://localhost:8080/api/tickets';

  constructor(private http: HttpClient) {}

  bookTicket(bookingDetails: any): Observable<any> {
    return this.http.post(this.apiUrl, bookingDetails);
  }

  // getTicketsByEmail(email: string): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.baseUrl}/${email}`);
  // }

  getTicketsByEmail(email: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${email}`); // Construct the URL correctly
  }

  getAllTickets(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getTotalTickets(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/total`);
  } 

// Fetch booked seats by bus number
getSeatByBusNumber(busNumber: string): Observable<string[]> {
  return this.http.get<string[]>(`${this.apiUrl}/bus/${busNumber}`);
}

// Delete ticket by ID
  deleteTicketById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

    // Get ticket details by bus number
    getDetailsByBusNumber(busNumber: string): Observable<any> {
      return this.http.get<any>(`http://localhost:8080/api/tickets/bus/ticket/${busNumber}`);
    }
    
}
 