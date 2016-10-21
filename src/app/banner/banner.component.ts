import { 
  Component,     
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

import { BannerService } from './banner.service';

@Component({
    selector: 'banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.css'],

    animations: [

        trigger('heightTrigger', [
            state('expanded', style({ height: '50px' })),
            state('collapsed', style({ height: '0px' })),
            transition('collapsed => expanded', animate('200ms ease-in')),
            transition('expanded => collapsed', animate('200ms 200ms ease-out'))
        ]),
  ],

})
export class BannerComponent {

  title = '123';

  constructor (private bannerService: BannerService){}

  isOpen() {
    return this.bannerService.isOpen();
  }

  getState() {
    return this.bannerService.isOpen() ? 'expanded' : 'collapsed';
  }
}
 