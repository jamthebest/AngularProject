import { Component } from '@angular/core';
import { CardItem } from '../../components/card-item/card-item.component';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public items: CardItem[] = [{
    title: 'Card 1',
    description: 'This is the first card'
  }, {
    title: 'Card 2',
    description: 'This is the second card'
  }, {
    title: 'Card 3',
    description: 'This is the third card'
  }]
}
