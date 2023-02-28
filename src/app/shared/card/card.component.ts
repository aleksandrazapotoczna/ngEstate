import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Card } from './card.model';

@Component({
  selector: 'shared-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class CardComponent {
  @Input() data: Card | undefined;
  @Input() fullscreenImage = true;
}
