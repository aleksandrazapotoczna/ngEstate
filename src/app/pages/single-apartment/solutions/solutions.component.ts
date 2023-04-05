import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from 'src/app/core/models/apartments.model';
import { Investment } from 'src/app/core/models/investments.model';
import { Solutions } from 'src/app/core/models/solutions.model';
import { ApartmentsService } from 'src/app/core/services/apartments.service';
import { ApiService } from 'src/app/core/services/api.service';
import { PopupService } from 'src/app/core/services/popup.service';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss'],
})
export class SolutionsComponent implements OnInit {
  selectedApartment: Apartment | undefined = undefined;
  selectedInvestment: Investment | undefined = undefined;
  solutions: Solutions | undefined = undefined;

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
            // console.log(solutions);
          });
      });
  }
}
