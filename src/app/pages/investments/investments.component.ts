import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Investment } from 'src/app/core/models/investments.model';
import { InvestmentsService } from 'src/app/core/services/investments.service';
import { Card } from 'src/app/shared/card/card.model';
import { List } from 'src/app/shared/list/list.model';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.scss'],
})
export class InvestmentsComponent implements OnInit {
  investments: Investment[] = [];

  viewType: string = 'grid';

  constructor(private investmentsService: InvestmentsService) { }

  ngOnInit(): void {
    this.investmentsService.investments.subscribe((investments) => {
      this.investments = investments;
      console.log(investments)
    });
  }

  changeView(view: string) {
    this.viewType = view;
  }

  mapToCard(investment: Investment): Card {
    const card: Card = {
      id: investment?.objectId,
      image: investment?.image,
      title: investment?.name,
      subtitle: investment?.location,
      properties: [
        {
          key: 'Total apartments:',
          value: investment?.apartments?.toString(),
        },
        {
          key: 'Reserved:',
          value: investment?.reserved?.toString(),
        },
        {
          key: 'Average m2 price:',
          value: investment?.price?.toString() + ' PLN',
        },
        {
          key: 'Number of parkings:',
          value: investment?.parking?.toString(),
        },
        {
          key: 'Number of garage:',
          value: investment?.garage?.toString(),
        },
      ],
      actionText: 'Show list',
      actionUrl: '/apartments/',
    };
    return card;
  }

  mapToList(investment: Investment): List {
    const list: List = {
      id: investment?.objectId,
      image: investment?.image,
      title: investment?.name,
      subtitle: investment?.location,
      properties: [
        {
          key: 'Total apartments:',
          value: investment?.apartments?.toString(),
        },
        {
          key: 'Reserved:',
          value: investment?.reserved?.toString(),
        },
        {
          key: 'Average m2 price:',
          value: investment?.price?.toString() + ' PLN',
        },
      ],
      actionText: 'Show list',
      actionUrl: '/apartments/',
    };
    return list;
  }
}
