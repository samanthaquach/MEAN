import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mail = [
    {
      email: 'sam@sam.com',
      importance: true,
      subject: 'New Windows',
      content: 'Window XI will launch in year 2010',
    },
    {
      email: 'sam@sam.com',
      importance: true,
      subject: 'Programming',
      content: 'Enchantress of numbers',
    },
    {
      email: 'sam@sam.com',
      importance: false,
      subject: 'Updated Algo',
      content: 'New Algorithm for shadow volumes',
    },
    {
      email: 'joe@joe.com',
      importance: false,
      subject: 'HL3!',
      content: 'Just Kidding',
    }
  ];

  email = {
    oneemail: 'sam@sam.com',
    twoemail: 'joe@joe.com',
  }
  importance = {
    true: 'high',
    false: 'low',
  }
  subject = {
    New_Windows: 'New Windows',
    Programming: 'Programming',
    UpdatedAlgo: 'Updated Algo',
    HL3: 'HL3!'
  }
  content = {
    New_Windows: 'Window XI will launch in year 2010',
    Programming: 'Enchantress of numbers',
    UpdatedAlgo: 'New Algorithm for shadow volumes',
    HL3: 'Just Kidding'
  }
}
