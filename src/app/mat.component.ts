import {Component, OnInit} from '@angular/core';
import {toast} from "angular2-materialize";

import { AppService } from './app.service';
import { BannerService } from './banner';

@Component({
  selector: 'app-root',
  templateUrl: './mat.component.html',
  styleUrls: ['./mat.component.css']
})
export class MatComponent implements OnInit {

  title = 'Empty App';

  constructor(
    private appService: AppService, 
    private bannerService: BannerService,
  ) {
    
    appService.routeStream.subscribe(route => {
      console.log('ROUTE:', route);
    })
  }

  ngOnInit(): void {
    toast("...and Materialize works as well!")
  }

  clickLink() {
//     this.parent.close();
  }
  
  toggleBanner() {
    this.bannerService.toggle();
  }

}
