import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-add-investment',
  templateUrl: './add-investment.component.html',
  styleUrls: ['./add-investment.component.scss'],
})
export class AddInvestmentComponent {
  investmentForm = this.fb.group({
    image: [''],
    name: ['', Validators.required],
    location: ['', Validators.required],
    apartments: ['', Validators.required],
    parking: [null],
    garage: [null],
    reserved: [null],
    price: ['', Validators.required],
  });

  // investmentForm = new FormGroup({
  //   image: new FormControl(''),
  //   name: new FormControl(''),
  //   location: new FormControl(''),
  //   apartments: new FormControl(''),
  //   parking: new FormControl(''),
  //   garage: new FormControl(''),
  //   reserved: new FormControl(''),
  //   price: new FormControl(''),
  // });

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  onSubmit() {
    console.log(this.investmentForm);
    this.apiService
      .addInvestment(this.investmentForm.value)
      .subscribe((data) => console.log(data));
  }
}
