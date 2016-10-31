import { Injectable } from '@angular/core';
import {

  isString, isArray, isObject, map, intersection, every, 

} from 'lodash';  

import { filter as _filter } from 'lodash';

@Injectable()
export class TagService {

  private ops;

  constructor() { 

    this.ops = {
      
      any: (target, arg) => 
        !!intersection(target, arg).length, 
      
      all: (target, arg) => 
        intersection(target, arg).length === arg.length, 
      
      none: (target, arg) => 
        !intersection(target, arg).length, 
      
    };

  }

  public filter(list, tagexpr, tagsprop) { 
    return _filter(list, (item) => {
      return this.matches(item, tagexpr, tagsprop);
    });
  }

  public matches(object, tagexpr, tagsprop='tags') {
    if (!tagexpr) {
      return true;
    }
    if (isString(tagexpr) || isArray(tagexpr)) {
      tagexpr = {all: tagexpr};
    }
    else if (!isObject(tagexpr)) {
      return false;
    }

    let target = object[tagsprop];
    if (!target) {
      return false;
    }  
    if (isString(target)) {
      target = [target]; 
    }

    return every(map(tagexpr, (value, opkey) => {
      let f = this.ops[opkey];
      if (!f) {
        return false;
      }
      if (!isArray(value)) {
        value = [value];
      }
      return f(target, value);    
    }));
  
  }

}
