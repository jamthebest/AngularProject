import { Component, Input } from '@angular/core';
import { CardItem, CardItemComponent } from '../card-item/card-item.component';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
  standalone: false
})
export class CardListComponent {
  @Input() items: CardItem[] = [];
}
