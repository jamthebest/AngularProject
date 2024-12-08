import { Component } from '@angular/core';
import { CardItem } from '../../components/card-item/card-item.component';
import { DataService } from '../../services/data.service';

/**
 * HomeComponent
 * This component serves as the main entry point for the home view.
 * It retrieves and displays a list of card items fetched from the DataService.
 */
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  /**
   * Array of card items to be displayed in the home view.
   * Each item contains a title and description.
   */
  public items: CardItem[] = [];

  /**
   * Constructor that injects the DataService.
   * @param dataService - The service used to fetch data for the component.
   */
  constructor(private dataService: DataService) {}

  /**
   * Lifecycle hook that is called after Angular has initialized all data-bound properties.
   * This method fetches data from the DataService and maps it to the `items` array.
   */
  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.items = data.map(item => {
        return {
          title: item.name,
          description: item.description
        };
      });
    });
  }
}
