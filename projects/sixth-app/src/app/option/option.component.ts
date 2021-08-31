import { Component } from '@angular/core';

@Component({
  selector: 'app-option',
  template: `
    <li>
      <ng-content></ng-content>
    </li>
  `,
  styleUrls: ['./option.component.scss'],
})
export class OptionComponent {}

  


