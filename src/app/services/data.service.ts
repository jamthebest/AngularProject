import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface DataItem {
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private mockData = [
    { id: 1, name: 'Card 1', description: 'This is the fist card' },
    { id: 2, name: 'Card 2', description: 'This is the second card' },
    { id: 3, name: 'Card 3', description: 'This is the third card' },
  ];

  constructor() { }

  getData(): Observable<DataItem[]> {
    return of(this.mockData);
  }
}
