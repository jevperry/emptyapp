import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { AppService } from '.';  
import { BannerService } from './banner';  
import { NavigationService } from './navigation.service';

import { AppComponent } from '.';
import { BannerComponent } from './banner/banner.component';
import { SideNavMenuComponent } from './side-nav-menu';

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
  ],
  providers: [
    AppService,
    BannerService,
    NavigationService,
  ],
  bootstrap: [AppComponent], 
})
export class AppModule { }

