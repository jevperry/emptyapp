import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterializeModule } from "angular2-materialize";

import 'rxjs/Rx';

import { AppService } from '.';
import { TreeService } from './tree';

import { AppComponent } from '.';
import { AppRoutingModule } from './app-routing.module';

import { ProfileModule } from './profile';
import { MdComponent } from './md.component';
import { Md2Component } from './md2.component';
import { Md3Component } from './md3.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    ProfileModule,
  ],
  declarations: [
    AppComponent,
    MdComponent,
    Md2Component,
    Md3Component,
  ],
  providers: [
    AppService,
    TreeService,
    { provide: 'Window', useValue: window },
    { provide: 'Console', useValue: window.console },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
