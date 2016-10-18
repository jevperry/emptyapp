import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';


import {NavigationService} from './navigation.service';
import {SideNavService} from './side-nav.service';  

import {AppComponent} from './app.component';
import {MdComponent} from './md.component';
import {Md2Component} from './md2.component';
import {SideNavMenuComponent} from './sidenav-menu.component';
import { RabbitComponent } from './rabbit/rabbit.component';
import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    routing,
  ],
  declarations: [
    AppComponent, 
    MdComponent, 
    Md2Component, 
    SideNavMenuComponent, 
    RabbitComponent
  ],
  providers: [
    NavigationService, 
    SideNavService,
  ],
  bootstrap: [AppComponent], 
})
export class AppModule { }
