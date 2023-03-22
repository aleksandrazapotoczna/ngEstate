import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apartment } from '../models/apartments.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ApartmentsService {
  apartments: Observable<Apartment[]>;
  selectedApartment: Apartment | undefined = undefined;

  constructor(private api: ApiService) {
    this.apartments = this.api.getApartments();
    // this.selectedApartment = this.api.getSelectedApartment();
  }

  getSelectedApartment(id: string): Observable<Apartment> {
    return this.api.getSelectedApartment(id);
  }
}
