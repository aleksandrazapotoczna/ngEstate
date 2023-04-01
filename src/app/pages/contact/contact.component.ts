import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Message } from 'src/app/core/models/message..model';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm = this.fb.group({
    topic: [''],
    description: [''],
    city: [''],
    name: ['', Validators.required],
    surname: ['', Validators.required],
    phone: ['', Validators.required],
    email: [''],
  });

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  onSubmit() {
    console.log(this.contactForm.value);
    const message: any = this.contactForm.value;
    this.apiService.addMessage(message).subscribe((data) => console.log(data));
  }
}
