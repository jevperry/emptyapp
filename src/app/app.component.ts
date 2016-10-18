import { Component } from '@angular/core';
import {SideNavService} from './side-nav.service';

console.log(SideNavService);

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
 })
export class AppComponent {
  
  title = 'Empty App';

  constructor (private sideNavService: SideNavService){}
  
  isNavOpen() {
   return this.sideNavService.isNavOpen();
  }
}
