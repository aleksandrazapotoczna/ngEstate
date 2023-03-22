import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Investment } from '../models/investments.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class InvestmentsService {
  investments: Observable<Investment[]>;
  selectedInvestment: Investment | undefined = undefined;

  constructor(private api: ApiService) {
    this.investments = this.api.getInvestments();
  }
}
