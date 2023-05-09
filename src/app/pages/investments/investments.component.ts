import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Investment } from 'src/app/core/models/investments.model';
import { InvestmentsService } from 'src/app/core/services/investments.service';
import { MapperService } from 'src/app/core/services/mapper.service';
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

  constructor(private investmentsService: InvestmentsService, private mapper: MapperService) { }

  ngOnInit(): void {
    this.investmentsService.investments.subscribe((investments) => {
      this.investments = investments;
      console.log(investments);
    });
  }

  changeView(view: string) {
    this.viewType = view;
  }

  mapToCard(investment: Investment): Card {
    return this.mapper.mapInvestmentToCard(investment);
  }

  mapToList(investment: Investment): List {
    return this.mapper.mapInvestmentToList(investment);
  }
}
