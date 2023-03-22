import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PopupComponent } from '../components/popup/popup.component';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  public popupState = new BehaviorSubject<boolean>(false);
  public popupTemplate: TemplateRef<any> | null = null;

  popupOpen(template?: TemplateRef<any>) {
    this.popupState.next(true);
    this.popupTemplate = template || null;
  }

  popupClose() {
    this.popupState.next(false);
    this.popupTemplate = null;
  }
}
