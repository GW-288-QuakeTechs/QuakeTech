import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'home' },
    { title: 'Investment', url: '/investment', icon: 'cash' },
    { title: 'Shop', url: '/shop', icon: 'cart' },
    { title: 'Win-Prizes', url: '/win-prizes', icon: 'stop' },
    { title: 'stop-ads', url: '/stop-ads', icon: 'archive' },
    { title: 'Videos', url: '/videos', icon: 'film-outline' },
    { title: 'loader', url: '/loader', icon: 'film-outline' },
    { title: 'signup', url: '/signup', icon: 'film-outline' },
  ];
  constructor() {}
}
