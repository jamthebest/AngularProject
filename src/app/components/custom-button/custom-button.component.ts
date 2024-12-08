import { Component, Input } from '@angular/core';

/**
 * CustomButtonComponent
 * This component represents a customizable button with an optional icon and link. 
 * It can be used to navigate to a specified URL or perform an action based on user interaction.
 */
@Component({
  selector: 'app-custom-button',
  standalone: false,
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss',
})
export class CustomButtonComponent {
  /**
   * `text` (required): The text displayed on the button.
   * Example: 'Click Me'.
   */
  @Input() text!: string;

  /**
   * `icon` (required): The name of the icon to display alongside the button text.
   * This icon can be rendered using a library like Angular Material or Font Awesome.
   * Example: 'home' or 'favorite'.
   */
  @Input() icon!: string;

  /**
   * `url` (optional): The URL to which the button navigates when clicked. 
   * If not provided, the button will act as a normal clickable element without redirection.
   * Example: '/home'.
   */
  @Input() url: string | undefined;
}
