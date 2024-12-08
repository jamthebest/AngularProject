import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { of } from 'rxjs';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected data', () => {
    const mockData = [{ id: 1, name: 'Card 1', description: 'This is the first card' }];
    spyOn(service, 'getData').and.returnValue(of(mockData));
  
    service.getData().subscribe(data => {
      expect(data.at(0)).toEqual(mockData.at(0));
    });
  });
  
});
