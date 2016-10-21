import { Injectable } from '@angular/core';

@Injectable()
export class BannerService {

  private openState:boolean = false;

  constructor() { }

  public isOpen() {
    return this.openState;
  }

  public open() {
    this.openState = true;
  }  

  public close() {
    this.openState = false;
  }  

  public toggle() {
    this.openState = !this.openState;
  }  
}
