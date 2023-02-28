import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
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
  @Input() fullscreenImage = true;
}
