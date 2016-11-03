// Uses injected console from app.module.ts
// To mock for unit tests:
//
// beforeEach(() => {
//   let consoleMock = { };
//   TestBed.configureTestingModule({
//     providers: [
//       { provide: 'Console', useFactory: (() => { return consoleMock; }) }
//     ]
//   });
// }

import {Component, Input, Inject} from '@angular/core';
import { TreeService } from '../tree';

@Component({
  selector: 'sidenav-menu',
  templateUrl: './side-nav-menu.component.html',
  styleUrls: ['./side-nav-menu.component.css'],
})
export class SideNavMenuComponent {

  @Input() parent;
  public navService; 
  public nav;
  public index;

  constructor(treeService : TreeService, 
    @Inject('Console') console
  ){

    this.nav = [{
        id: 'dashboard',
        title: 'Dashboard',
        icon: '',
        flavour: 'tabbed-panel',
        tabs: [{
            id: 'dash_1',
            title: 'Dash 1',
            uri: '/',
            has: [],
        },{
            id: 'dash_2',
            title: 'Dash 2',
            uri: '/',
            has: [],
        },{
            id: 'dash_3',
            title: 'Dash 3',
            uri: '/',
            has: [],
        }],
    }, {
        id: 'section_1',
        title: 'Section 1',
        icon: '',
        children: [{
            id: 'item1_1',
            title: 'Item 1 1',
            uri: '/',
            has: [],
        },{
            id: 'item1_2',
            title: 'Item 1 2',
            uri: '/',
            has: [],
        },{
            id: 'item1_3',
            title: 'Item 1 3',
            uri: '/',
            has: [],
        }],
    },{
        id: 'section_2',
        title: 'Section 2',
        icon: '',
        children: [{
            id: 'item2_1',
            title: 'Item 2 1',
            uri: '/',
            has: [],
        },{
            id: 'item2_2',
            title: 'Item 2 2',
            uri: '/',
            has: [],
        },{
            id: 'item2_3',
            title: 'Item 2 3',
            uri: '/',
            has: [],
        }],
    },{
        id: 'section_3',
        title: 'Section 3',
        icon: '',
        children: [{
            id: 'item3_1',
            title: 'Item 3 1',
            uri: '/',
            has: [],
        },{
            id: 'item3_2',
            title: 'Item 3 2',
            uri: '/',
            has: [],
        },{
            id: 'item3_3',
            title: 'Item 3 3',
            uri: '/',
            has: [],
        }],
    }];
    console.log('Nav', this.nav);
    this.index = treeService.buildIndex(this.nav);

    let dash1 = treeService.lookup(this.index, 'dash_1');
    console.log('dash_1', dash1);
  }

  clickLink() {
    this.parent.close();
  }

}
