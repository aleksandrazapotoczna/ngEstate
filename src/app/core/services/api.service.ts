import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Apartment } from '../models/apartments.model';
import { Investment } from '../models/investments.model';
import { Solutions } from '../models/solutions.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getInvestments(): Observable<Investment[]> {
    return this.http
      .get<{ results: Investment[] }>(
        'https://parseapi.back4app.com/classes/investments'
      )
      .pipe(map((res) => res.results));
  }

  getApartments(): Observable<Apartment[]> {
    return this.http
      .get<{ results: Apartment[] }>(
        'https://parseapi.back4app.com/classes/apartments'
      )
      .pipe(map((res) => res.results));
  }

  getSelectedApartment(id: string): Observable<Apartment> {
    return this.http.get<Apartment>(
      'https://parseapi.back4app.com/classes/apartments/' + id
    );
  }

  getSolutions(apartmentId: string): Observable<Solutions> {
    return this.http
      .get<{ results: Solutions[] }>(
        `https://parseapi.back4app.com/classes/Solutions?where={"ApartmentId": "${apartmentId}"}`
      )
      .pipe(map((res) => res.results[0]));
  }

  getSelectedInvesment(id: string): Observable<Investment> {
    return this.http.get<Investment>(
      'https://parseapi.back4app.com/classes/investments/' + id
    );
  }
}
