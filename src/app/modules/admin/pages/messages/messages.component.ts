import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Message } from 'src/app/core/models/message..model';
import { ApiService } from 'src/app/core/services/api.service';
import { List } from 'src/app/shared/list/list.model';
import { PopupService } from 'src/app/core/services/popup.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent {
  // @ViewChild('popupTemplate') popupTemplate: TemplateRef<any>;

  messages: Message[];
  selectedMessageId: string;

  constructor(
    private apiService: ApiService,
    public popupService: PopupService
  ) {}

  ngOnInit() {
    this.apiService.getMessages().subscribe((messages) => {
      this.messages = messages;
    });
  }

  deleteMessage() {
    console.log(this.selectedMessageId);
    this.apiService.deleteMessage(this.selectedMessageId).subscribe((data) => {
      this.apiService.getMessages().subscribe((messages) => {
        this.messages = messages;
      });
    });
  }

  showPopup(template: any, id: string) {
    this.selectedMessageId = id;
    this.popupService.popupOpen(template);
    // this.deleteMessage(message.objectId)
  }

  // mapToList(message: Message): List | undefined {
  //   const list: List = {
  //     id: message.objectId,
  //     title: investment.name,
  //     subtitle: investment.location,
  //     actionText: 'Edit',
  //     actionUrl: '../edit-investment/',
  //   };
  //   return list;
  // }
}
