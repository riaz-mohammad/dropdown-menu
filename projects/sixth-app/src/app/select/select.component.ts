import { Component } from '@angular/core';

@Component({
  selector: 'app-select',
  template: `
    <ul>
      <ng-content></ng-content>
    </ul>
  `,
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {}
  

