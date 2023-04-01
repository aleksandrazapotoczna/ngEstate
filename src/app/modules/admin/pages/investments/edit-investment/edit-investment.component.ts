import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Investment } from 'src/app/core/models/investments.model';
import { ApiService } from 'src/app/core/services/api.service';
import { InvestmentsService } from 'src/app/core/services/investments.service';
import { List } from 'src/app/shared/list/list.model';

@Component({
  selector: 'app-edit-investment',
  templateUrl: './edit-investment.component.html',
  styleUrls: ['./edit-investment.component.scss'],
})
export class EditInvestmentComponent implements OnInit {
  investmentForm = this.fb.group({
    objectId: [''],
    image: [''],
    name: ['', Validators.required],
    location: ['', Validators.required],
    apartments: ['', Validators.required],
    parking: [0],
    garage: [0],
    reserved: [''],
    price: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  onSubmit() {
    // zapisac inwestycje po save
    console.log(this.investmentForm);
    this.apiService
      .updateInvestment(this.investmentForm.value)
      .subscribe((data) => console.log(data));
  }

  ngOnInit() {
    // pobrac pojedyncza inwestycje
    const id = this.route.snapshot.params['id'];
    this.apiService.getSelectedInvesment(id).subscribe((data) => {
      this.investmentForm.patchValue({
        ...data,
        // image: data.image,
        // name: data.name,
        // location: data.location,
        // apartments: data.apartments,
        // parking: data.parking,
        // garage: data.garage,
        // reserved: data.reserved,
        // price: data.price,
      });
      console.log(data);
    });
    // wyswietlic inwestycje i uzupelnic formularz
    // this.investmentForm.patchValue({
  }
}
