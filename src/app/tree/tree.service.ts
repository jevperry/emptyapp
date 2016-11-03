import { Injectable } from '@angular/core';

@Injectable()
export class TreeService {

  constructor() {}
  
  buildIndex(nav, subkey='children') {
    
    let index = {};    
    helper(nav, null);
    return index;

    function helper(items, parent) {
      if (!items) {
        return;
      }  
      items.forEach((item) => {
        index[item.id] = {item, parent};
        if (subkey in item) {
            helper(item[subkey], item);
        }
      }); 
    }
  }

  lookup(index, id) {
    let entry = index[id];
    return entry ? entry.item : null; 
  }

  lookupParent(index, id) {
    let entry = index[id];
    return entry ? entry.parent : null; 
  } 
}
