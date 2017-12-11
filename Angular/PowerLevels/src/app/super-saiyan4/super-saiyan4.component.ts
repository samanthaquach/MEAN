import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan4',
  templateUrl: './super-saiyan4.component.html',
  styleUrls: ['./super-saiyan4.component.css']
})
export class SuperSaiyan4Component implements OnInit {
  @Input() supersaiyan4;
  // powerlevel = 100;

  constructor() { }

  ngOnInit() {
  }

}
