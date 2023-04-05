import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from 'src/app/core/models/apartments.model';
import { Investment } from 'src/app/core/models/investments.model';
import { ApartmentsService } from 'src/app/core/services/apartments.service';
import { ApiService } from 'src/app/core/services/api.service';
import { PopupService } from 'src/app/core/services/popup.service';

@Component({
  selector: 'app-about-investment',
  templateUrl: './about-investment.component.html',
  styleUrls: ['./about-investment.component.scss'],
})
export class AboutInvestmentComponent {
  selectedApartment: Apartment | undefined = undefined;
  selectedInvestment: Investment | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private apartmentsService: ApartmentsService,
    private api: ApiService
  ) {}

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

        // this.api
        //   .getSolutions(this.route.snapshot.params['id'])
        //   .subscribe((solutions) => {
        //     this.solutions = solutions;
        //     // console.log(solutions);
        //   });
      });
  }
}
