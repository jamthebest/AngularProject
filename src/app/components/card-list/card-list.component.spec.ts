import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListComponent } from './card-list.component';
import { MaterialModule } from '../../material/material.module';
import { CardItemComponent } from '../card-item/card-item.component';

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardListComponent, CardItemComponent],
      imports: [MaterialModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;

    // set required properties
    component.items = [
      { title: 'Card 1', description: 'This is card 1' },
      { title: 'Card 2', description: 'This is card 2' },
    ];

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
    expect(compiled.querySelectorAll('app-card-item')[0].textContent?.trim()).toContain('Card 1');
  });

  it('should display the second item', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-card-item')[1].textContent?.trim()).toContain('Card 2');
  });
});
