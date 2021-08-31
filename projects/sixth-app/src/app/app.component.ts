import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public frameWorks: Array<string> = ['ANGULAR', 'SVELTE', 'REACT', 'VUE'];
}
