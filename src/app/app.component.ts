import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-first-angular-app';

  changeTitle() {
    this.title = 'The title has been changed';
  }

  changeTitleBack() {
    this.title = 'my-first-angular-app';
  }
}
