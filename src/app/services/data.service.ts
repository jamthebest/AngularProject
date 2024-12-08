import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

/**
 * Interface representing the structure of a data item.
 */
export interface DataItem {
  /**
   * The unique identifier for the data item.
   */
  id: number;

  /**
   * The name of the data item.
   */
  name: string;

  /**
   * A brief description of the data item.
   */
  description: string;
}

/**
 * Injectable Angular service for managing and retrieving mock data.
 */
@Injectable({
  providedIn: 'root',
})
export class DataService {
  /**
   * Mock data representing a list of data items.
   * Each item has an id, name, and description.
   */
  private mockData: DataItem[] = [
    { id: 1, name: 'Card 1', description: 'This is the first card' },
    { id: 2, name: 'Card 2', description: 'This is the second card' },
    { id: 3, name: 'Card 3', description: 'This is the third card' },
  ];

  constructor() {}

  /**
   * Retrieves the mock data as an observable.
   *
   * @returns An observable emitting an array of `DataItem` objects.
   */
  getData(): Observable<DataItem[]> {
    return of(this.mockData);
  }
}
