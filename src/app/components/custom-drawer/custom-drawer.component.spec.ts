import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDrawerComponent, DrawerOptions } from './custom-drawer.component';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';
import { CustomButtonComponent } from '../custom-button/custom-button.component';

describe('CustomDrawerComponent', () => {
  let component: CustomDrawerComponent;
  let fixture: ComponentFixture<CustomDrawerComponent>;
  let title: string = 'My Default Title';
  let icon: string = 'home';
  let options: DrawerOptions[] = [
    {
      text: 'Home',
      icon: 'add',
      url: '/home',
    },
    {
      text: 'About',
      icon: 'add',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomDrawerComponent, CustomButtonComponent],
      imports: [MaterialModule, RouterModule.forRoot([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDrawerComponent);
    component = fixture.componentInstance;

    // set required properties
    component.title = title;
    component.icon = icon;
    component.options = options;

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
    expect(compiled.querySelector('mat-toolbar button~span')?.textContent?.trim()).toBe(title);
  });

  it('should have a default icon', () => {
    expect(component.icon).toBe(icon);
  });

  it('should display the icon', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-icon')?.textContent).toBe(icon);
  });

  it('should have options', () => {
    expect(component.options.length).toBe(2);
  });

  it('should display options', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-custom-button').length).toBe(2);
  });
});
