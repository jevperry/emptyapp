/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TreeService } from './tree.service';

describe('Service: Tree', () => {

  let mockNav = [{
    id: 'dashboard',
    title: 'Dashboard',
    subitemtype: 'tab',
    children: [{
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TreeService]
    });
  });

  it('should ...', inject([TreeService], 
    (service: TreeService) => {
    
    let index = service.buildIndex(mockNav);

    expect(service.lookup(index, 'dash_1')).toBeTruthy();
  }));
});
