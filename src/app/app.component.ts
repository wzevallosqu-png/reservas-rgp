import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'login', url: 'login', icon: 'paper-plane' },
    { title: 'newUser', url: 'new-user', icon: 'heart' },
  ];
  constructor() {}
}
