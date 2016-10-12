import { Injectable }    from '@angular/core';

@Injectable()
export class NavigationService {
  
  private nav = [{
        id: 'dashboard',
        title: 'Dashboard',
        icon: '',
        icontype: '', 
        iconcolor: '',
        iconcolortype: '',      
    },{
        id: 'section_1',
        title: 'Section 1',
        icon: '',
        icontype: '', 
        iconcolor: '',
        iconcolortype: '',
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
        icontype: '', 
        iconcolor: '',
        iconcolortype: '',
        children: [{
            id: 'item1_1',
            title: 'Item 2 1',
            uri: '/',
            has: [],
        },{
            id: 'item1_2',
            title: 'Item 2 2',
            uri: '/',
            has: [],
        },{
            id: 'item1_3',
            title: 'Item 2 3',
            uri: '/',
            has: [],
        }],
    },{
        id: 'section_3',
        title: 'Section 3',
        icon: '',
        icontype: '', 
        iconcolor: '',
        iconcolortype: '',
        children: [{
            id: 'item1_1',
            title: 'Item 3 1',
            uri: '/',
            has: [],
        },{
            id: 'item1_2',
            title: 'Item 3 2',
            uri: '/',
            has: [],
        },{
            id: 'item1_3',
            title: 'Item 3 3',
            uri: '/',
            has: [],
        }],
    }];

  constructor() { }

  getNav() {
    return this.nav;  
  }

}