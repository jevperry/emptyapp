import {Component, OnInit} from '@angular/core';

import {toast} from "angular2-materialize";

import { AppService } from './app.service';
import { BannerService } from './banner';
import {

  isString

} from 'lodash';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Empty App';

  constructor(
    private appService: AppService,
    private bannerService: BannerService,
  ) {

    appService.routeStream.subscribe(route => {
      console.log('ROUTE:', route);
    })
  }

  ngOnInit(): void {
//     toast("...and Materialize works as well!")
  }

  clickLink() {
     $('#side-nav-panel').sideNav('hide');
  }

  toggleBanner() {
    this.bannerService.toggle();
  }

  logout() {
  }
}
