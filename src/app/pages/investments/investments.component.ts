import { Component, OnInit } from '@angular/core';
import { Investment } from 'src/app/core/models/investments.model';
import { InvestmentsService } from 'src/app/core/services/investments.service';
import { Card } from 'src/app/shared/card/card.model';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.scss'],
})
export class InvestmentsComponent implements OnInit {
  investments: Investment[] = [];

  constructor(private investmentsService: InvestmentsService) {}

  ngOnInit(): void {
    this.investments = this.investmentsService.investments;
  }

  mapToCard(investment: Investment): Card | undefined {
    const card: Card = {
      id: investment.id,
      image: investment.image,
      title: investment.name,
      subtitle: investment.location,
      properties: [
        {
          key: 'Total apartments:',
          value: investment.apartments.toString(),
        },
        {
          key: 'Reserved:',
          value: investment.reserved.toString(),
        },
        {
          key: 'Average m2 price:',
          value: investment.price.toString() + ' PLN/',
        },
      ],
      actionText: 'Show list',
      actionUrl: '/apartments/',
    };
    console.log(investment);
    return card;
  }
}
