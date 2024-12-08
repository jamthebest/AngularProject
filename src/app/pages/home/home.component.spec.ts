import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { MaterialModule } from '../../material/material.module';
import {
  CardItem,
  CardItemComponent,
} from '../../components/card-item/card-item.component';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';
import { DataService } from '../../services/data.service';
import { of } from 'rxjs';

class MockDataService {
  getData() {
    return of([
      { id: 1, name: 'Card 1', description: 'This is a mock item' },
      { id: 2, name: 'Card 2', description: 'This is another mock item' },
    ]);
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        CardListComponent,
        CardItemComponent,
        CustomButtonComponent,
      ],
      imports: [MaterialModule],
      providers: [{ provide: DataService, useClass: MockDataService }],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have items', () => {
    expect(component.items.length).toBe(2);
  });

  it('should display items', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-card-item').length).toBe(2);
  });

  it('should display the first item', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelectorAll('mat-card-title')[0].textContent?.trim()
    ).toContain('Card 1');
    expect(
      compiled.querySelectorAll('mat-card-content')[0].textContent?.trim()
    ).toContain('This is a mock item');
  });

  it('should display the second item', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelectorAll('mat-card-title')[1].textContent?.trim()
    ).toContain('Card 2');
    expect(
      compiled.querySelectorAll('mat-card-content')[1].textContent?.trim()
    ).toContain('This is another mock item');
  });
});
