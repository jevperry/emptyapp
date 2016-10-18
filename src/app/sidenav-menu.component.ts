import {Component, Input} from '@angular/core';

import { NavigationService } from './navigation.service';

@Component({
  selector: 'sidenav-menu',
  templateUrl: 'sidenav-menu.component.html',
  styleUrls: ['sidenav-menu.component.css'],
})
export class SideNavMenuComponent {

  @Input() parent;

  clickLink() {
    this.parent.close();
  }
}
