import { Component, Input } from '@angular/core';

/**
 * Interface for defining the structure of drawer options.
 * Each option represents a navigation item in the custom drawer.
 */
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

  /**
   * Determines whether the screen is mobile-sized.
   * A screen is considered mobile if its width is less than 768 pixels.
   * @returns `true` if the screen width is less than 768 pixels; otherwise, `false`.
   */
  public get isMobile(): boolean {
    return screen.width < 768;
  }
}
