import { Component, Input } from '@angular/core';

export interface DrawerOptions {
  text: string;
  icon: string;
  url?: string;
}

@Component({
  selector: 'app-custom-drawer',
  standalone: false,
  templateUrl: './custom-drawer.component.html',
  styleUrl: './custom-drawer.component.scss',
})
export class CustomDrawerComponent {
  @Input() title!: string;
  @Input() icon!: string;
  @Input() options: DrawerOptions[] = [];

  public get isMobile(): boolean {
    return screen.width < 768;
  }
}
