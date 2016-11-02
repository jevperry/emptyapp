import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd  } from '@angular/router';

import { AppService } from '.';
import { BannerService } from './banner';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
 })
export class AppComponent {
  
  title = 'Empty App';
  private bannerService;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    bannerService: BannerService,
  ) {
    this.router.events
    .filter(event => event instanceof NavigationEnd)
    .subscribe(event => {
      let currentRoute = route.root;
      while (currentRoute.children[0] !== undefined) {
        currentRoute = currentRoute.children[0];
      }
      console.log(currentRoute.snapshot);
    })

    this.bannerService = bannerService;
  }

  toggleBanner() {
    this.bannerService.toggle();
  }

}
