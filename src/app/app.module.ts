import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { AppService } from '.';  
import { BannerService } from './banner';  
import { NavigationService } from './navigation.service';
import { NotificationService } from './shared';  

import { AppComponent } from '.';
import { BannerComponent } from './banner/banner.component';
import { SideNavMenuComponent } from './side-nav-menu';
import { NotificationComponent } from './notification';
import { NotificationPanelComponent } from './notification-panel';

import { routing } from './app.routing';
import { MdComponent } from './md.component';
import { Md2Component } from './md2.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    routing,
  ],
  declarations: [
    AppComponent, 
    BannerComponent, 
    MdComponent, 
    Md2Component, 
    SideNavMenuComponent, 
    NotificationComponent,
    NotificationPanelComponent,
  ],
  providers: [
    AppService,
    BannerService,
    NavigationService,
    NotificationService, 
  ],
  bootstrap: [AppComponent], 
})
export class AppModule { }
