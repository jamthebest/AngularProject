import { Component, Input } from '@angular/core';

export interface CardItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss',
  standalone: false
})
export class CardItemComponent {
  @Input() title!: string;
  @Input() description!: string;
}
