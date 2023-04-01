import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Investment } from 'src/app/core/models/investments.model';
import { ApiService } from 'src/app/core/services/api.service';
import { InvestmentsService } from 'src/app/core/services/investments.service';
import { PopupService } from 'src/app/core/services/popup.service';
import { List } from 'src/app/shared/list/list.model';
import { AddInvestmentComponent } from './add-investment/add-investment.component';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.scss'],
})
export class InvestmentsComponent {
  @ViewChild('popupTemplate') popupTemplate: TemplateRef<any>;

  clickedItem: string = '';

  investments: Investment[] = [];

  constructor(
    private investmentsService: InvestmentsService,
    private apiService: ApiService,
    public popupService: PopupService
  ) {}

  ngOnInit(): void {
    this.fetch();
  }

  mapToList(investment: Investment): List | undefined {
    const list: List = {
      id: investment.objectId,
      image: investment.image,
      title: investment.name,
      subtitle: investment.location,
      actionText: 'Edit',
      actionUrl: '../edit-investment/',
    };
    return list;
  }

  showPopup(event: string) {
    this.clickedItem = event;
    this.popupService.popupOpen(this.popupTemplate);
  }

  deleteInvestment() {
    this.apiService.deleteInvestment(this.clickedItem).subscribe((data) => {
      this.fetch();
    });
    this.popupService.popupClose();
  }

  private fetch() {
    this.apiService.getInvestments().subscribe((investments) => {
      this.investments = investments;
    });
  }
}
