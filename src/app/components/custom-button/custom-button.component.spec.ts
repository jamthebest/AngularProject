import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomButtonComponent } from './custom-button.component';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';

describe('CustomButtonComponent', () => {
  let component: CustomButtonComponent;
  let fixture: ComponentFixture<CustomButtonComponent>;
  let text: string = 'My Default Text';
  let icon: string = 'home';
  let url: string = '/home';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomButtonComponent],
      imports: [MaterialModule, RouterModule.forRoot([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomButtonComponent);
    component = fixture.componentInstance;

    // set required properties
    component.text = text;
    component.icon = icon;
    component.url = url;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default text', () => {
    expect(component.text).toBe(text);
  });

  it('should display the text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('span.mdc-button__label')?.textContent?.trim()).toBe(text);
  });

  it('should have a default icon', () => {
    expect(component.icon).toBe(icon);
  });

  it('should display the icon', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-icon')?.textContent).toBe(icon);
  });

  it('should have a default url', () => {
    expect(component.url).toBe(url);
  });

  it('should have a link', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.getAttribute('ng-reflect-router-link')).toBe(url);
  });
});
