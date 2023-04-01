import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import { List } from './list.model';

@Component({
  selector: 'shared-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class ListComponent {
  @Input() data: List | undefined;
  @Input() fullscreenImage: boolean;
  @Input() showBinIcon: boolean | undefined;
  @Output() emitDeleteClick = new EventEmitter<string>();

  constructor(private apiService: ApiService) { }

  delete() {
    const id = this.data?.id as string;
    this.emitDeleteClick.emit(id);
  }
}
