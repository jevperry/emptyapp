import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'md2.component.html', 
  styleUrls: [
    './shared/page-content.css', 
    'md2.component.css'
  ],
})
export class Md2Component {
  isDarkTheme: boolean = false;

  foods: any[] = [
    {name: 'Pizza', rating: 'Excellent'},
    {name: 'Burritos', rating: 'Great'},
    {name: 'French fries', rating: 'Pretty good'},
  ];

  progress: number = 0;

  constructor() {
    // Update the value for the progress-bar on an interval.
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
  }
}
