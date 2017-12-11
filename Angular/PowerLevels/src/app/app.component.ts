import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  powerlevel: number;
  title = 'PowerComponent';
  number = Array(100);
  // image = '/Users/sammiae/Documents/MEAN/Angular/PowerLevels/src/Goku.jpg';

  ngOnInit() {
    console.log("it works");

  }

}
