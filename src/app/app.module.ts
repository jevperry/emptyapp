import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
import {AppComponent} from './app.component';
import {SideNavMenuComponent} from './sidenav-menu.component';
import { RabbitComponent } from './rabbit/rabbit.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
  ],
  declarations: [AppComponent, SideNavMenuComponent, RabbitComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
