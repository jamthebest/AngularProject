import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemComponent } from './card-item.component';
import { MaterialModule } from '../../material/material.module';

describe('CardItemComponent', () => {
  let component: CardItemComponent;
  let fixture: ComponentFixture<CardItemComponent>;
  let title: string = 'My Default Title';
  let description: string = 'My Default Description';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardItemComponent],
      imports: [MaterialModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardItemComponent);
    component = fixture.componentInstance;

    // set required properties
    component.title = title;
    component.description = description;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default title', () => {
    expect(component.title).toBe(title);
  });

  it('should display the title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-card-title')?.textContent).toBe(title);
  });

  it('should have a default description', () => {
    expect(component.description).toBe(description);
  });

  it('should display the description', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-card-content')?.textContent?.trim()).toBe(description);
  });

  it('should display the title and description', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-card-title')?.textContent?.trim()).toBe(title);
    expect(compiled.querySelector('mat-card-content')?.textContent?.trim()).toBe(description);
  });
});
