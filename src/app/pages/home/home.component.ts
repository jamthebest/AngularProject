import { Component } from '@angular/core';
import { CardItem } from '../../components/card-item/card-item.component';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public items: CardItem[] = []

  constructor(private dataService: DataService) {}

  ngOnInit() {
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
