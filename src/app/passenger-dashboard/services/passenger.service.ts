import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Passenger} from '../models/passenger.interface';
import {catchError, Observable, throwError} from 'rxjs';

const httpOptions =  {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}
@Injectable({
  providedIn: 'root',
})
export class PassengerService {
  PASSENGER_API = 'http://localhost:3000/passengers';
  constructor(private http: HttpClient) {
  }

  handleError(error: HttpErrorResponse){
    console.error(error.status);
    let errorMessage = `${error.status} - ${error.message} - Serve the db.json bro.`;
    // passing the message into a new Error starts the string with 'Error: ...'
    return throwError(() => new Error(errorMessage));
  }
  getPassenger(id: number):Observable<Passenger> {
    // <Passenger[]> represents the expected data type of the response which in this case is an array containing objects of the Passenger type
    return this.http.get<Passenger>(`${this.PASSENGER_API}/${id}`).pipe(catchError(this.handleError));
  }
  getPassengers():Observable<Passenger[]> {
    // <Passenger[]> represents the expected data type of the response which in this case is an array containing objects of the Passenger type
    return this.http.get<Passenger[]>(this.PASSENGER_API).pipe(catchError(this.handleError));
  }

  updatePassengers(passenger: Passenger):Observable<Passenger> {
    // <Passenger> represents the expected data type of the response which in this case is a single passenger type
    return this.http.put<Passenger>(`${this.PASSENGER_API}/${passenger.id}`, passenger, httpOptions);
  }

  removePassenger(passenger: Passenger): Observable<Passenger>{
    return this.http.delete<Passenger>(`${this.PASSENGER_API}/${passenger.id}`);
  }
}
