import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Investment } from 'src/app/core/models/investments.model';
import { ApiService } from 'src/app/core/services/api.service';
import { List } from 'src/app/shared/list/list.model';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.scss'],
})
export class AddApartmentComponent implements OnInit {
  apartmentForm = this.fb.group({
    image: [''],
    number: ['', Validators.required],
    location: ['', Validators.required],
    area: ['', Validators.required],
    bedrooms: [null],
    floor: [null],
    garage: [null],
    terrace: [null],
    price: ['', Validators.required],
    investmentId: ['', Validators.required],
  });
  investments: Investment[] = [];

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService
      .getInvestments()
      .subscribe((data) => (this.investments = data));
  }

  onSubmit() {
    console.log(this.apartmentForm);
    this.apiService
      .addApartment(this.apartmentForm.value)
      .subscribe((data) => console.log(data));
  }
}
