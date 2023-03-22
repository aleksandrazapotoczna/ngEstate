import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PopupService } from '../../services/popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  popupState: Observable<boolean> | undefined = undefined;

  constructor(public popupService: PopupService) {}

  ngOnInit(): void {
    this.popupState = this.popupService.popupState;
  }
}
