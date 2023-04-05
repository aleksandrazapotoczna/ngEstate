import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from 'src/app/core/models/apartments.model';
import { ApartmentsService } from 'src/app/core/services/apartments.service';
import { ApiService } from 'src/app/core/services/api.service';
import { PopupService } from 'src/app/core/services/popup.service';

@Component({
  selector: 'app-apartment-plan',
  templateUrl: './apartment-plan.component.html',
  styleUrls: ['./apartment-plan.component.scss'],
})
export class ApartmentPlanComponent implements OnInit {
  selectedApartment: Apartment | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private apartmentsService: ApartmentsService,
    private api: ApiService,
    public popupService: PopupService
  ) {}

  ngOnInit(): void {
    this.apartmentsService
      .getSelectedApartment(this.route.snapshot.params['id'])
      .subscribe((apartment) => {
        console.log(apartment);
        this.selectedApartment = apartment;

        // this.api
        //   .getSelectedInvesment(apartment.investmentId)
        //   .subscribe((investment) => {
        //     console.log(investment);
        //     this.selectedInvestment = investment;
        //   });

        // this.api
        //   .getSolutions(this.route.snapshot.params['id'])
        //   .subscribe((solutions) => {
        //     this.solutions = solutions;
        //     // console.log(solutions);
        //   });
      });
  }
  costForMeter(): number {
    const price = Number(this.selectedApartment?.price) || 0;
    const area = Number(this.selectedApartment?.area.replace(',', '.')) || 0;
    let cost = Math.floor(price / area);
    return cost;
  }
}
