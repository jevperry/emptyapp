import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd  } from '@angular/router';

@Injectable()
export class AppService { 

  public routeStream;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
  ) {
    this.routeStream = this.router.events
    .filter(event => event instanceof NavigationEnd)
    .map(event => {
      let currentRoute = route.root;
      while (currentRoute.children[0] !== undefined) {
        currentRoute = currentRoute.children[0];
      }
      return currentRoute.snapshot;
    })
  }
}
