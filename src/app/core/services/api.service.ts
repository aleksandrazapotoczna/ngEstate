import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Apartment } from '../models/apartments.model';
import { Investment } from '../models/investments.model';
import { Message } from '../models/message..model';
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

  getSelectedInvesment(id: string): Observable<Investment> {
    return this.http.get<Investment>(
      'https://parseapi.back4app.com/classes/investments/' + id
    );
  }

  addInvestment(investment: any): Observable<any> {
    return this.http.post(
      'https://parseapi.back4app.com/classes/investments',
      investment
    );
  }

  updateInvestment(investment: any): Observable<any> {
    return this.http.put(
      'https://parseapi.back4app.com/classes/investments/' +
        investment.objectId,
      investment
    );
  }

  deleteInvestment(investmentId: string): Observable<any> {
    return this.http.delete(
      'https://parseapi.back4app.com/classes/investments/' + investmentId
    );
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

  addApartment(apartment: any): Observable<any> {
    return this.http.post(
      'https://parseapi.back4app.com/classes/apartments',
      apartment
    );
  }

  updateApartment(apartment: any): Observable<any> {
    return this.http.put(
      'https://parseapi.back4app.com/classes/apartments/' + apartment.objectId,
      apartment
    );
  }

  deleteApartment(apartmentId: string): Observable<any> {
    return this.http.delete(
      'https://parseapi.back4app.com/classes/apartments/' + apartmentId
    );
  }

  getSolutions(apartmentId: string): Observable<Solutions> {
    return this.http
      .get<{ results: Solutions[] }>(
        `https://parseapi.back4app.com/classes/Solutions?where={"ApartmentId": "${apartmentId}"}`
      )
      .pipe(map((res) => res.results[0]));
  }

  addMessage(message: any): Observable<any> {
    return this.http.post(
      'https://parseapi.back4app.com/classes/Contact',
      message
    );
  }
  getMessages(): Observable<Message[]> {
    return this.http
      .get<{ results: Message[] }>(
        'https://parseapi.back4app.com/classes/Contact'
      )
      .pipe(map((res) => res.results));
  }
  deleteMessage(messageId: string): Observable<any> {
    console.log('id', messageId);
    return this.http.delete(
      'https://parseapi.back4app.com/classes/Contact/' + messageId
    );
  }
}
