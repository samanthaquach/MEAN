import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  response = 0;
  color = '';
  message = ''
  name = '';

  constructor(private _dataService: DataService) { }

  onSubmit() {
    this._dataService.getUserName(this.name)
      .then(data => this.response = this.calculateScore(data))
      .catch(err => console.log(err));
    this.checkMessage()
  }

  calculateScore(val) {
    let score = val.public_repos + val.followers + val.following;
    return score;
  }
  checkMessage() {
    if (this.response < 20) {
      this.message = 'Needs Work!'
      this.color = 'red'
    } else if (this.response < 50 && this.response >= 20) {
      this.message = 'Decent'
      this.color = 'orange'
    } else if (this.response < 100 && this.response >= 50) {
      this.message = 'Doing good'
      this.color = 'black'
    } else if (this.response < 200 && this.response >= 100) {
      this.message = 'Great'
      this.color = 'green'
    } else if (this.response >= 200) {
      this.message = 'Elite'
      this.color = 'blue'
    }
  }
}