import {Component, Input} from '@angular/core';

import { NavigationService } from '../navigation.service';

@Component({
  selector: 'sidenav-menu',
  templateUrl: './side-nav-menu.component.html',
  styleUrls: ['./side-nav-menu.component.css'],
})
export class SideNavMenuComponent {

  @Input() parent;

  clickLink() {
    this.parent.close();
  }
}
