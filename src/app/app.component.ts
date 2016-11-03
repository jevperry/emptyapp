import { Component } from '@angular/core';

import { AppService } from './app.service';
import { BannerService } from './banner';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
 })
export class AppComponent {
  
  title = 'Empty App';

  constructor(
    private appService: AppService, 
    private bannerService: BannerService,
  ) {
    
    appService.routeStream.subscribe(route => {
      console.log('ROUTE:', route);
    })
  }

  toggleBanner() {
    this.bannerService.toggle();
  }

}
