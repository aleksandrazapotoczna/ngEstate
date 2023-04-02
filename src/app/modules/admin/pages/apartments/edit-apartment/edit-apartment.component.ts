import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Apartment } from 'src/app/core/models/apartments.model';
import { Investment } from 'src/app/core/models/investments.model';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-edit-apartment',
  templateUrl: './edit-apartment.component.html',
  styleUrls: ['./edit-apartment.component.scss'],
})
export class EditApartmentComponent implements OnInit {
  isSaving: boolean;

  editMode: boolean;

  investments: Investment[] = [];

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
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    if (id) {
      this.editMode = true;
      this.apiService.getSelectedApartment(id).subscribe((data) => {
        this.apartmentForm.patchValue({
          ...data,
        });
      });
    } else {
      this.editMode = false;
      this.apiService
        .getInvestments()
        .subscribe((data) => (this.investments = data));
    }


  }

  onSubmit() {
    this.isSaving = true;
    if (this.editMode) {
      this.updateApartment();
    } else {
      this.addApartment();
    }
  }

  addApartment() {
    this.apiService
      .addApartment(this.apartmentForm.value)
      .subscribe((data) => console.log(data));
  }

  updateApartment() {
    this.apiService
      .updateApartment(this.apartmentForm.value)
      .subscribe((data) => {
        this.isSaving = false;
        this.router.navigate(['admin', 'apartments']);
      });
  }
}
