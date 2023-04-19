import { Component, OnInit, inject } from '@angular/core';
import {
  Storage,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from '@angular/fire/storage';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  private storage: Storage = inject(Storage);

  isSaving: boolean;
  editMode: boolean;
  image: string;

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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    if (id) {
      this.editMode = true;
      this.apiService.getSelectedInvesment(id).subscribe((data) => {
        this.image = data.image;
        this.investmentForm.patchValue({
          ...data,
        });
      });
    } else {
      this.editMode = false;
    }
  }

  onSubmit() {
    if (this.isSaving === true) return;
    this.isSaving = true;
    if (this.editMode) {
      this.updateInvestment();
    } else {
      this.AddInvestment();
    }
  }

  uploadFile(input: HTMLInputElement): void {
    if (!input.files) return;

    const files: FileList = input.files;

    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      if (file) {
        const storageRef = ref(this.storage, file.name);
        uploadBytesResumable(storageRef, file);
        getDownloadURL(storageRef).then((url) => {
          this.image = url;
          this.investmentForm.patchValue({
            image: url,
          });
        });
      }
    }
  }

  private AddInvestment() {
    this.apiService
      .addInvestment(this.investmentForm.value)
      .subscribe((data) => console.log(data));
  }

  private updateInvestment() {
    this.apiService
      .updateInvestment(this.investmentForm.value)
      .subscribe((data) => {
        this.isSaving = false;
        this.router.navigate(['admin', 'investments']);
      });
  }
}
