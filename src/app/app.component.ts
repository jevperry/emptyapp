import {Component, OnInit} from '@angular/core';

import {toast} from "angular2-materialize";

import { AppService } from './app.service';
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
  public nav;

  constructor(
    private appService: AppService,
  ) {

    appService.routeStream.subscribe(route => {
      console.log('ROUTE:', route);
    })

    this.nav = [
    {
        id: 'profile',
        name: 'Profile',
        url: '/profile',
        has: [],
    },
    {
        id: 'dashboard',
        name: 'Dashboard',
        icon: '',
        flavour: 'tabbed-panel',
        tabs: [{
            id: 'dash_1',
            name: 'Dash 1',
            url: '/d/md1',
            has: [],
        },{
            id: 'dash_2',
            name: 'Dash 2',
            url: '/d/md2',
            has: [],
        },{
            id: 'dash_3',
            name: 'Dash 3',
            url: '/d/md3',
            has: [],
        }],
    }, {
        id: 'section_1',
        name: 'Section 1',
        icon: '',
        children: [{
            id: 'item1_1',
            name: 'Item 1 1',
            url: '/s1/md1',
            has: [],
        },{
            id: 'item1_2',
            name: 'Item 1 2',
            url: '/s1/md2',
            has: [],
        },{
            id: 'item1_3',
            name: 'Item 1 3',
            url: '/s1/md3',
            has: [],
        }],
    },{
        id: 'section_2',
        name: 'Section 2',
        icon: '',
        children: [{
            id: 'item2_1',
            name: 'Item 2 1',
            url: '/s2/md1',
            has: [],
        },{
            id: 'item2_2',
            name: 'Item 2 2',
            url: '/s2/md2',
            has: [],
        },{
            id: 'item2_3',
            name: 'Item 2 3',
            url: '/s2/md3',
            has: [],
        }],
    },{
        id: 'section_3',
        name: 'Section 3',
        icon: '',
        children: [{
            id: 'item3_1',
            name: 'Item 3 1',
            url: '/s3/md1',
            has: [],
        },{
            id: 'item3_2',
            name: 'Item 3 2',
            url: '/s3/md2',
            has: [],
        },{
            id: 'item3_3',
            name: 'Item 3 3',
            url: '/s3/md3',
            has: [],
        }],
    }];

  }

  ngOnInit(): void {
//     toast("...and Materialize works as well!")
  }

  clickLink() {
     $('#side-nav-panel').sideNav('hide');
  }

  toggleBanner() {
//     this.bannerService.toggle();
  }

  logout() {
  }
}
