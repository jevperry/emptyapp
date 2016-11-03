import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { AppService } from '.';  
import { BannerService } from './banner';  
import { TreeService } from './tree';

import { AppComponent } from '.';
import { AppRoutingModule } from './app-routing.module';
import { BannerComponent } from './banner/banner.component';
import { SideNavMenuComponent } from './side-nav-menu';

import { MdComponent } from './md.component';
import { Md2Component } from './md2.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(), 
    AppRoutingModule,
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
    TreeService,  
    { provide: 'Window', useValue: window },
    { provide: 'Console', useValue: window.console },
  ],
  bootstrap: [AppComponent], 
})
export class AppModule { }

