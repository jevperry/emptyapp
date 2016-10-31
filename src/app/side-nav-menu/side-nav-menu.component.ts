import {Component, Input} from '@angular/core';

import { NavigationService } from '../navigation';

@Component({
  selector: 'sidenav-menu',
  templateUrl: './side-nav-menu.component.html',
  styleUrls: ['./side-nav-menu.component.css'],
})
export class SideNavMenuComponent {

  @Input() parent;
  public nav;
  
  constructor(navService : NavigationService){
    this.nav = navService.getNav();
  }

  clickLink() {
    this.parent.close();
  }

}
