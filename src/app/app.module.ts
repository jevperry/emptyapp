import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterializeModule } from "angular2-materialize";

import 'rxjs/Rx';

import { AppService } from '.';  
import { BannerService } from './banner';  
import { TreeService } from './tree';

import { AppComponent } from '.';
import { AppRoutingModule } from './app-routing.module';
import { ProfileModule } from './profile';

import { BannerComponent } from './banner/banner.component';
import { SideNavMenuComponent } from './side-nav-menu';

import { MdComponent } from './md.component';
import { Md2Component } from './md2.component';
import { MatComponent } from './mat.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    ProfileModule,
  ],
  declarations: [
    AppComponent, 
    BannerComponent, 
    SideNavMenuComponent, 
    MdComponent, 
    Md2Component, 
    MatComponent, 
  ],
  providers: [
    AppService,
    BannerService,
    TreeService,  
    { provide: 'Window', useValue: window },
    { provide: 'Console', useValue: window.console },
  ],
  bootstrap: [MatComponent], 
})
export class AppModule { }

