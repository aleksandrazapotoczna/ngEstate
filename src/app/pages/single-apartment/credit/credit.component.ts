import { Component } from '@angular/core';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss'],
})
export class CreditComponent {
  costAmount: number = 0;
  yearsAmount: number = 0;
  rateResult: number = 0;

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
