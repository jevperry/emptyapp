import { Inject, Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd  } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RoutingEventsService {

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    @Inject('Console') console,
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

  }

}