import { Component} from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'md.component.html',
  styleUrls: ['md.component.css'],
})
export class MdComponent {
  isDarkTheme: boolean = false;

  foods: any[] = [
    {name: 'Pizza', rating: 'Excellent'},
    {name: 'Burritos', rating: 'Great'},
    {name: 'French fries', rating: 'Pretty good'},
  ];

  progress: number = 0;

  constructor(private route: ActivatedRoute) {
    // Update the value for the progress-bar on an interval.
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
    this.route.params.subscribe((params: Params) => {
      console.log(params);
    });

    
  }
}
