import { Component, Input } from '@angular/core';
import { CardItem, CardItemComponent } from '../card-item/card-item.component';

/**
 * CardListComponent
 * This component is used to display a list of card items. 
 * Each card item is represented by the `CardItemComponent` and is passed as an input to this component.
 */
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
  standalone: false,
})
export class CardListComponent {
  /**
   * Input property to receive an array of card items to display.
   * Each item must follow the structure defined by the `CardItem` interface.
   */
  @Input() items: CardItem[] = [];
}
