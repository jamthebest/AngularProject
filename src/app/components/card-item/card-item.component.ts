import { Component, Input } from '@angular/core';

/**
 * Interface `CardItem`
 * Defines the structure of a card item, with a title and description.
 */
export interface CardItem {
  title: string;
  description: string;
}

/**
 * CardItemComponent
 * This component represents a single card item. 
 * It displays a title and a description, passed as input properties.
 */
@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss',
  standalone: false,
})
export class CardItemComponent {
  /**
   * Title of the card, displayed prominently on the card.
   * This property is bound via the `@Input()` decorator and must be provided.
   */
  @Input() title!: string;

  /**
   * Description of the card, providing additional details.
   * This property is bound via the `@Input()` decorator and must be provided.
   */
  @Input() description!: string;
}
