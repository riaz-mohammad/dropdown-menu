
import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { dropDownAnimation } from '../animations';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
  animations: [dropDownAnimation],
})
export class DropdownMenuComponent {
  public selected$: BehaviorSubject<string> = new BehaviorSubject('SELECT FRAMEWORK');
  @Input() frameworks!: Array<string>;
  public showFrameworks!: boolean;

  public onSelect(selected: string): void {
    this.selected$.next(selected);
    this.expandSelection();
  }

  public expandSelection(): void {
    this.showFrameworks = !this.showFrameworks;
  }
}
