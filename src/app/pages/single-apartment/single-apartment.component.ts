import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopupComponent } from 'src/app/core/components/popup/popup.component';
import { Apartment } from 'src/app/core/models/apartments.model';
import { Investment } from 'src/app/core/models/investments.model';
import { Solutions } from 'src/app/core/models/solutions.model';
import { ApartmentsService } from 'src/app/core/services/apartments.service';
import { ApiService } from 'src/app/core/services/api.service';
import { PopupService } from 'src/app/core/services/popup.service';
import { Card } from 'src/app/shared/card/card.model';

@Component({
  selector: 'app-single-apartment',
  templateUrl: './single-apartment.component.html',
  styleUrls: ['./single-apartment.component.scss'],
})
export class SingleApartmentComponent implements OnInit {
  selectedApartment: Apartment;
  selectedInvestment: Investment;
  solutions: Solutions;
  costAmount: number = 0;
  yearsAmount: number = 0;
  rateResult: number = 0;

  constructor(
    private route: ActivatedRoute,
    private apartmentsService: ApartmentsService,
    private api: ApiService,
    public popupService: PopupService
  ) { }

  ngOnInit(): void {
    this.apartmentsService
      .getSelectedApartment(this.route.snapshot.params['id'])
      .subscribe((apartment) => {
        console.log(apartment);
        this.selectedApartment = apartment;

        this.api
          .getSelectedInvesment(apartment.investmentId)
          .subscribe((investment) => {
            console.log(investment);
            this.selectedInvestment = investment;
          });

        this.api
          .getSolutions(this.route.snapshot.params['id'])
          .subscribe((solutions) => {
            this.solutions = solutions;
          });
      });
  }

  costForMeter(): number {
    const price = Number(this.selectedApartment?.price) || 0;
    const area = Number(this.selectedApartment?.area.replace(',', '.')) || 0;
    let cost = Math.floor(price / area);
    return cost;
  }

  costSelected(value: string) {
    this.costAmount = Number(value);
    this.rateCalc();
  }

  yearsSelected(value: string) {
    this.yearsAmount = Number(value);
    this.rateCalc();
  }

  rateCalc() {
    let result = (this.costAmount / this.yearsAmount) * 0.1;
    this.rateResult = Math.ceil(result);
  }

}
