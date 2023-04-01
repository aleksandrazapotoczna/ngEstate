import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Apartment } from 'src/app/core/models/apartments.model';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-edit-apartment',
  templateUrl: './edit-apartment.component.html',
  styleUrls: ['./edit-apartment.component.scss'],
})
export class EditApartmentComponent implements OnInit {
  isSaving: boolean;

  apartmentForm = this.fb.group({
    objectId: [''],
    image: [''],
    number: ['', Validators.required],
    location: ['', Validators.required],
    area: ['', Validators.required],
    bedrooms: [''],
    floor: [''],
    garage: [''],
    terrace: [''],
    price: ['', Validators.required],
    investmentId: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onSubmit() {
    this.isSaving = true;
    console.log(this.apartmentForm);
    this.apiService
      .updateApartment(this.apartmentForm.value)
      .subscribe((data) => {
        console.log(data);
        this.isSaving = false;
        this.router.navigate(['admin', 'apartments']);
      });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.apiService.getSelectedApartment(id).subscribe((data) => {
      this.apartmentForm.patchValue({
        ...data,
      });
      console.log(data);
    });
  }

  // private fetch() {
  //   this.apiService.getApartments().subscribe((apartments) => {
  //     this.apartments = apartments;
  //   });
  // }
}
