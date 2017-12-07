import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  date = new Date();
  lastTimeZoneSelected = null;

  onButton(timezone) {
  this.date = new Date();
  if (timezone === 'CST') {
    this.date;
  } else if (timezone === 'CST') {
    this.date.setHours(this.date.getHours() + 2);
  } else if (timezone === 'MST') {
    this.date.setHours(this.date.getHours() - 1);
  }
    else if (timezone === 'PST') {
    this.date.setHours(this.date.getHours() - 2);
  }
    else if (timezone === 'EST') {
    this.date.setHours(this.date.getHours() + 1);
  }
  this.lastTimeZoneSelected = timezone;
  }
}
