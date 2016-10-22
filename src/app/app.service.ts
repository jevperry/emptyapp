import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  private open:boolean = false;

  constructor() { }

  public isNavOpen() {
    return this.open;
  }

  public openNav() {
    this.open = true;
  }  

  public closeNav() {
    this.open = false;
  }  
}