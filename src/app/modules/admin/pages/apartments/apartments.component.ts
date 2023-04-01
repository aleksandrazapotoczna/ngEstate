import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { Apartment } from 'src/app/core/models/apartments.model';
import { ApartmentsService } from 'src/app/core/services/apartments.service';
import { ApiService } from 'src/app/core/services/api.service';
import { PopupService } from 'src/app/core/services/popup.service';
import { List } from 'src/app/shared/list/list.model';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss'],
})
export class ApartmentsComponent {
  @ViewChild('popupTemplate') popupTemplate: TemplateRef<any>;

  clickedItem: string = '';

  apartments: Apartment[] = [];

  constructor(
    private apartmentService: ApartmentsService,
    private apiService: ApiService,
    public popupService: PopupService
  ) {}

  ngOnInit(): void {
    this.fetch();
  }

  mapToList(apartment: Apartment): List | undefined {
    const list: List = {
      id: apartment.objectId,
      image: apartment.image,
      title: apartment.number,
      subtitle: apartment.location,
      actionText: 'Edit',
      actionUrl: '../edit-apartment/',
    };
    return list;
  }

  showPopup(event: string) {
    this.clickedItem = event;
    this.popupService.popupOpen(this.popupTemplate);
  }

  deleteApartment() {
    this.apiService.deleteApartment(this.clickedItem).subscribe((data) => {
      this.fetch();
    });
    this.popupService.popupClose();
  }

  private fetch() {
    this.apiService.getApartments().subscribe((apartments) => {
      this.apartments = apartments;
    });
  }
}
