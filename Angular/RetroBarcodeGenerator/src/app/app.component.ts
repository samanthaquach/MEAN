import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Retro Barcode Generator';
  thesecolors = ['pink','blue']
  color1 = getRandomColor()
  color2 = getRandomColor()
  color3 = getRandomColor()
  color4 = getRandomColor()
  color5 = getRandomColor()
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}