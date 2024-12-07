import { Component } from '@angular/core';
import { DrawerOptions } from './components/custom-drawer/custom-drawer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Dashboard';
  icon = 'menu';
  drawerOptions: DrawerOptions[] = [
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
}
