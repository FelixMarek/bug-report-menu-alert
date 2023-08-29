import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isAlertOpen: boolean = true;
  constructor() {}

  public toggleAlert() {
    this.isAlertOpen = !this.isAlertOpen;
  }
}
