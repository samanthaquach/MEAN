import { Component } from '@angular/core';
import { DataService } from './data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github';
  username: string = null;
  score: number = 0;
  userExists: boolean = null;


  constructor(private _dataService: DataService) {}
  myForm(form: NgForm) {
    this.username = form.value.username;

    this._dataService.retrieveTask(this.username)
      .subscribe(
      user => {
        this.userExists = true;
        this.score = user.public_repos + user.followers;
        form.reset();
      },
      (response: Response) => this.userExists = false
      );
  }

}
