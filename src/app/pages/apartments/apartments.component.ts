import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from 'src/app/core/models/apartments.model';
import { Investment } from 'src/app/core/models/investments.model';
import { ApartmentsService } from 'src/app/core/services/apartments.service';
import { InvestmentsService } from 'src/app/core/services/investments.service';
import { Card } from 'src/app/shared/card/card.model';
import { List } from 'src/app/shared/list/list.model';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss'],
})
export class ApartmentsComponent implements OnInit {
  apartments: Apartment[] = [];
  selectedInvestment: Investment | undefined = undefined;

  constructor(
    private apartmentsService: ApartmentsService,
    private route: ActivatedRoute,
    private investmentsService: InvestmentsService
  ) {}

  ngOnInit(): void {
    const investmentId = Number(this.route.snapshot.params['id']);
    this.apartments = this.apartmentsService.apartments.filter((apartment) => {
      return apartment.investmentId === investmentId;
    });
    this.selectedInvestment = this.investmentsService.investments.find(
      (investment) => {
        return investment.id === investmentId;
      }
    );
  }

  mapToCard(apartment: Apartment): Card | undefined {
    const card: any = {
      id: apartment.id,
      image: apartment.image,
      title: apartment.number.toString(),
      subtitle: apartment.location,
      properties: [
        {
          key: 'living area',
          value: apartment.area.toString(),
        },
        {
          key: 'Bedrooms:',
          value: apartment.bedrooms.toString(),
        },
        {
          key: 'Floor:',
          value: apartment.floor.toString(),
        },
        {
          key: 'Garage:',
          value: apartment.garage.toString(),
        },
        {
          key: 'Price:',
          value: apartment.price.toString(),
        },
        {
          key: 'Terrace:',
          value: apartment.terrace.toString(),
        },
      ],
      actionText: 'Show apartment',
      actionUrl: '',
    };
    console.log(apartment);
    return card;
  }

  mapToList(apartment: Apartment): List | undefined {
    const list: List = {
      id: apartment.id,
      image: apartment.image,
      title: apartment.number.toString(),
      subtitle: apartment.location,
      properties: [
        {
          key: 'living area',
          value: apartment.area.toString(),
        },
        {
          key: 'Bedrooms:',
          value: apartment.bedrooms.toString(),
        },
        {
          key: 'Floor:',
          value: apartment.floor.toString(),
        },
        {
          key: 'Garage:',
          value: apartment.garage.toString(),
        },
        {
          key: 'Price:',
          value: apartment.price.toString(),
        },
        {
          key: 'Terrace:',
          value: apartment.terrace.toString(),
        },
      ],
      actionText: 'Show apartment',
      actionUrl: '',
    };
    console.log(apartment);
    return list;
  }
}
