import { Component } from '@angular/core';
import { AppService } from '.';
import { BannerService } from './banner';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
 })
export class AppComponent {
  
  title = 'Empty App';
  showBanner = true;

  constructor (private bannerService: BannerService){}

  toggleBanner() {
    this.bannerService.toggle();
  }

}
