import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan3',
  templateUrl: './super-saiyan3.component.html',
  styleUrls: ['./super-saiyan3.component.css']
})
export class SuperSaiyan3Component implements OnInit {
  @Input() supersaiyan3;
  // powerlevel = 100;

  constructor() { }

  ngOnInit() {
  }

}
